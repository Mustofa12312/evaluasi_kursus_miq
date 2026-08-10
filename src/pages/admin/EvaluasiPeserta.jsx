import { useState, useEffect } from 'react';
import { getResponsesByRole } from '../../services/db';
import ExportButton from '../../components/admin/ExportButton';

export default function EvaluasiPeserta() {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getResponsesByRole('peserta').then(data => {
      setResponses(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="py-12 text-center text-muted">Memuat data...</div>;

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-display mb-2">Data Evaluasi Peserta</h1>
          <p className="text-muted">Data tabular dari respons peserta (Identitas anonim).</p>
        </div>
        <div className="flex gap-2">
          <ExportButton data={responses} type="pdf" filename="Laporan_Peserta" />
          <ExportButton data={responses} type="excel" filename="Data_Peserta" />
        </div>
      </div>

      <div className="glass-panel overflow-x-auto p-0">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[rgba(255,255,255,0.05)] text-muted">
              <th className="p-4 border-b border-border">ID Evaluasi</th>
              <th className="p-4 border-b border-border">Tanggal Submit</th>
              <th className="p-4 border-b border-border text-center">Skor Kepuasan</th>
              <th className="p-4 border-b border-border">Kritik / Saran Singkat</th>
            </tr>
          </thead>
          <tbody>
            {responses.map(res => (
              <tr key={res.id} className="hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                <td className="p-4 border-b border-border text-primary font-mono text-sm">{res.id}</td>
                <td className="p-4 border-b border-border">{new Date(res.submittedAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' })}</td>
                <td className="p-4 border-b border-border text-center font-bold text-lg">{res.answers.q_p_5}</td>
                <td className="p-4 border-b border-border text-sm max-w-xs truncate">{res.answers.q_p_7 || '-'}</td>
              </tr>
            ))}
            {responses.length === 0 && (
              <tr>
                <td colSpan="4" className="p-8 text-center text-muted">Belum ada data evaluasi peserta.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
