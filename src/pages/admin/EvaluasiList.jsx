import { useState, useEffect } from 'react';
import { getResponsesByRole } from '../../services/db';
import ExportButton from '../../components/admin/ExportButton';
import { usePeriod } from '../../context/PeriodContext';

export default function EvaluasiList({ role, title }) {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { selectedPeriod, periods } = usePeriod();

  useEffect(() => {
    setLoading(true);
    getResponsesByRole(role, selectedPeriod).then(data => {
      setResponses(data);
      setLoading(false);
    });
  }, [role, selectedPeriod]);

  if (loading) return <div className="py-12 text-center text-muted">Memuat data {title}...</div>;

  const currentPeriodName = periods.find(p => p._docId === selectedPeriod)?.name || 'Semua_Periode';
  const fileName = `Laporan_${title}_${currentPeriodName}`;

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-display mb-2">Data Evaluasi {title}</h1>
          <p className="text-muted">Data tabular dari respons {title.toLowerCase()} (Identitas anonim).</p>
        </div>
        <div className="flex gap-2">
          <ExportButton data={responses} type="pdf" filename={fileName} />
          <ExportButton data={responses} type="excel" filename={fileName} />
        </div>
      </div>

      <div className="glass-panel overflow-x-auto p-0">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[rgba(255,255,255,0.05)] text-muted">
              <th className="p-4 border-b border-border">ID Evaluasi</th>
              <th className="p-4 border-b border-border">Tanggal Submit</th>
              <th className="p-4 border-b border-border text-center">Skor Akhir (Contoh)</th>
              <th className="p-4 border-b border-border">Kritik / Saran Singkat</th>
            </tr>
          </thead>
          <tbody>
            {responses.map(res => (
              <tr key={res._docId || res.id} className="hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                <td className="p-4 border-b border-border text-primary font-mono text-sm truncate max-w-[100px]">{res._docId || res.id}</td>
                <td className="p-4 border-b border-border">{new Date(res.submittedAt || res.serverTimestamp).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' })}</td>
                {/* Find the first rating-like answer or default to - */}
                <td className="p-4 border-b border-border text-center font-bold text-lg">
                  {res.answers ? Object.values(res.answers).find(v => typeof v === 'number' || !isNaN(parseInt(v))) || '-' : '-'}
                </td>
                {/* Find the first long text answer or default to - */}
                <td className="p-4 border-b border-border text-sm max-w-xs truncate">
                  {res.answers ? Object.values(res.answers).find(v => typeof v === 'string' && v.length > 10) || '-' : '-'}
                </td>
              </tr>
            ))}
            {responses.length === 0 && (
              <tr>
                <td colSpan="4" className="p-8 text-center text-muted">Belum ada data evaluasi {title.toLowerCase()} pada periode ini.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
