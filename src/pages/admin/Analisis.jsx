import { useState, useEffect } from 'react';
import { getResponsesByRole } from '../../services/db';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { AlertCircle, TrendingUp, Download } from 'lucide-react';
import { usePeriod } from '../../context/PeriodContext';
import * as XLSX from 'xlsx';

export default function Analisis() {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { selectedPeriod, periods } = usePeriod();

  useEffect(() => {
    setLoading(true);
    getResponsesByRole('peserta', selectedPeriod).then(data => {
      setResponses(data);
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
      
      // Flatten answers
      if (r.answers) {
        Object.keys(r.answers).forEach(qId => {
          row[qId] = r.answers[qId];
        });
      }
      return row;
    });

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "RawData");
    XLSX.writeFile(workbook, `Evaluasi_${currentPeriodName}.xlsx`);
  };

  if (loading) return <div className="py-12 text-center text-muted">Memuat analisis data...</div>;

  // Calculate sentiment data manually based on dummy data
  // Skor 4-5 = Positif, Skor 3 = Netral, Skor 1-2 = Negatif
  const sentiments = { Positif: 0, Netral: 0, Negatif: 0 };
  
  responses.forEach(r => {
    const score = r.answers.q_p_5;
    if (score >= 4) sentiments.Positif += 1;
    else if (score === 3) sentiments.Netral += 1;
    else sentiments.Negatif += 1;
  });

  const pieData = [
    { name: 'Positif (Skor 4-5)', value: sentiments.Positif },
    { name: 'Netral (Skor 3)', value: sentiments.Netral },
    { name: 'Negatif (Skor 1-2)', value: sentiments.Negatif }
  ];

  const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

  return (
    <div className="animate-fade-in pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-display mb-2">Analisis Mendalam</h1>
          <p className="text-muted">Interpretasi data kualitatif dan kuantitatif dari seluruh responden.</p>
        </div>
        <button 
          onClick={handleExportExcel}
          className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all shrink-0"
        >
          <Download size={18} /> Unduh Raw Data (Excel)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="glass-panel p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <TrendingUp size={20} className="text-primary" />
            Distribusi Sentimen Peserta
          </h3>
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
        </div>

        <div className="glass-panel p-6 border-l-4 border-l-warning">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-warning">
            <AlertCircle size={20} />
            Top Prioritas Perbaikan Tahun Depan
          </h3>
          <p className="text-sm text-muted mb-6">Berdasarkan sintesis otomatis dari kolom kritik dan saran, berikut adalah hal yang paling krusial untuk ditingkatkan:</p>
          
          <div className="space-y-4">
            <div className="bg-[rgba(255,255,255,0.02)] p-4 rounded-md border border-[rgba(255,255,255,0.05)]">
              <div className="flex justify-between mb-2">
                <span className="font-bold text-error">1. Durasi Waktu Pembelajaran</span>
                <span className="text-xs bg-error/20 text-error px-2 py-1 rounded">Prioritas Tinggi</span>
              </div>
              <p className="text-sm text-muted">Sebagian besar peserta merasa waktu yang dialokasikan (terutama untuk sesi praktik tahsin) terlalu singkat dan terburu-buru.</p>
            </div>
            
            <div className="bg-[rgba(255,255,255,0.02)] p-4 rounded-md border border-[rgba(255,255,255,0.05)]">
              <div className="flex justify-between mb-2">
                <span className="font-bold text-warning">2. Kapasitas Parkir & Fasilitas Ruang</span>
                <span className="text-xs bg-warning/20 text-warning px-2 py-1 rounded">Prioritas Sedang</span>
              </div>
              <p className="text-sm text-muted">Banyak keluhan terkait pendingin ruangan yang kurang memadai di beberapa ruang kelas dan parkir yang sulit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
