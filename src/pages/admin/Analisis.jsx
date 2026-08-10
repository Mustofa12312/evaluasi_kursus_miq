import { useState, useEffect } from 'react';
import { getResponsesByRole, getAllQuestions, addActionPlan } from '../../services/db';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { AlertCircle, TrendingUp, Download, Zap } from 'lucide-react';
import { usePeriod } from '../../context/PeriodContext';
import * as XLSX from 'xlsx';

export default function Analisis() {
  const [responses, setResponses] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { selectedPeriod, periods } = usePeriod();

  useEffect(() => {
    setLoading(true);
    Promise.all([
      getResponsesByRole('peserta', selectedPeriod),
      getResponsesByRole('pendamping', selectedPeriod),
      getResponsesByRole('muallim', selectedPeriod),
      getAllQuestions()
    ]).then(([peserta, pendamping, muallim, qData]) => {
      setResponses([...peserta, ...pendamping, ...muallim]);
      setQuestions(qData);
      setLoading(false);
    });
  }, [selectedPeriod]);

  const handleExportExcel = () => {
    if (responses.length === 0) {
      alert("Tidak ada data untuk di-export pada periode ini.");
      return;
    }

    const currentPeriodName = periods.find(p => p._docId === selectedPeriod)?.name || 'Semua_Periode';

    // Format data for Excel
    const excelData = responses.map((r, index) => {
      const row = { No: index + 1, Role: r.role, Waktu: new Date(r.submittedAt || r.serverTimestamp).toLocaleString() };
      
      // Match with real questions if possible
      if (r.answers) {
        Object.keys(r.answers).forEach(qId => {
          const matchedQ = questions.find(q => q._docId === qId);
          const header = matchedQ ? matchedQ.text : qId;
          row[header] = r.answers[qId];
        });
      }
      return row;
    });

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "RawData");
    XLSX.writeFile(workbook, `Evaluasi_${currentPeriodName}.xlsx`);
  };

  const handleMakeActionPlan = async (masalah) => {
    try {
      await addActionPlan({
        masalah: masalah,
        solusi: 'Perlu dirumuskan...',
        prioritas: 'Tinggi',
        status: 'Belum'
      });
      alert(`Berhasil ditambahkan ke Action Plan!\n\nMasalah: ${masalah}`);
    } catch (err) {
      console.error(err);
      alert("Gagal menambahkan ke Action Plan");
    }
  };

  if (loading) return <div className="py-12 text-center text-muted animate-pulse">Memuat analisis mendalam dinamis...</div>;

  // --- DYNAMIC AI LOGIC ---
  const ratingQuestions = questions.filter(q => q.type === 'rating');
  let totalPositif = 0;
  let totalNetral = 0;
  let totalNegatif = 0;

  // For finding worst performing aspects
  const questionScores = {};
  ratingQuestions.forEach(q => {
    questionScores[q._docId] = { text: q.text, total: 0, count: 0 };
  });

  responses.forEach(r => {
    if (r.answers) {
      Object.entries(r.answers).forEach(([qId, val]) => {
        const score = Number(val);
        if (questionScores[qId] && !isNaN(score)) {
          // Sentiment count
          if (score >= 4) totalPositif += 1;
          else if (score === 3) totalNetral += 1;
          else totalNegatif += 1;

          // Average calculation
          questionScores[qId].total += score;
          questionScores[qId].count += 1;
        }
      });
    }
  });

  const pieData = [
    { name: 'Positif (Skor 4-5)', value: totalPositif },
    { name: 'Netral (Skor 3)', value: totalNetral },
    { name: 'Negatif (Skor 1-2)', value: totalNegatif }
  ];
  const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

  // Calculate worst aspects
  const rankedAspects = Object.values(questionScores)
    .filter(q => q.count > 0)
    .map(q => ({
      text: q.text,
      average: (q.total / q.count).toFixed(2),
      count: q.count
    }))
    .sort((a, b) => a.average - b.average)
    .slice(0, 3); // Top 3 worst

  return (
    <div className="animate-fade-in pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-display mb-2">Analisis Mendalam</h1>
          <p className="text-muted">Interpretasi data kualitatif dan kuantitatif dari seluruh responden (Dinamis).</p>
        </div>
        <button 
          onClick={handleExportExcel}
          className="flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all shrink-0"
        >
          <Download size={18} /> Unduh Raw Data (Excel)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Sentimen Keseluruhan */}
        <div className="glass-panel p-6 border border-slate-700/50 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[40px] rounded-full"></div>
          
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-slate-200">
            <TrendingUp size={20} className="text-emerald-400" />
            Distribusi Sentimen Global
          </h3>
          
          {(totalPositif + totalNetral + totalNegatif) === 0 ? (
            <div className="h-64 flex items-center justify-center text-slate-500">Belum ada data rating masuk.</div>
          ) : (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '8px' }}
                  />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Prioritas Perbaikan */}
        <div className="glass-panel p-6 border-l-4 border-l-rose-500 bg-gradient-to-br from-slate-900 to-slate-800">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-rose-400">
            <AlertCircle size={20} />
            Top Prioritas Perbaikan
          </h3>
          <p className="text-sm text-slate-400 mb-6">Secara dinamis dihitung berdasarkan nilai rata-rata (rating) terendah dari seluruh kuesioner.</p>
          
          {rankedAspects.length === 0 ? (
            <div className="text-slate-500 italic text-sm">Data rating tidak mencukupi untuk dianalisis.</div>
          ) : (
            <div className="space-y-4">
              {rankedAspects.map((aspect, index) => (
                <div key={index} className="bg-slate-900 p-4 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-rose-400">{index + 1}. Rating: {aspect.average} / 5</span>
                        <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">{aspect.count} Suara</span>
                      </div>
                      <p className="text-sm text-slate-300 leading-snug">"{aspect.text}"</p>
                    </div>
                    
                    <button 
                      onClick={() => handleMakeActionPlan(aspect.text)}
                      className="flex items-center gap-1.5 px-3 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 text-xs font-bold rounded-lg border border-amber-500/30 transition-colors shrink-0"
                    >
                      <Zap size={14} /> Jadikan Action Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
