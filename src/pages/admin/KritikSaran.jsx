import { useState, useEffect } from 'react';
import { getResponsesByRole } from '../../services/db';
import { MessageSquare, ThumbsUp, AlertTriangle } from 'lucide-react';

export default function KritikSaran() {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Gabung semua respon untuk mendapatkan kritik saran
    Promise.all([
      getResponsesByRole('peserta'),
      getResponsesByRole('pendamping')
    ]).then(([peserta, pendamping]) => {
      setResponses([...peserta, ...pendamping]);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="py-12 text-center text-muted">Memuat data kritik dan saran...</div>;

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-display mb-2">Kritik & Saran</h1>
      <p className="text-muted mb-8">Masukan kualitatif dari responden (Peserta & Pendamping).</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {responses.map(res => (
          <div key={res.id} className="glass-panel p-6 flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-border pb-2">
              <span className="text-xs uppercase tracking-wider text-muted font-bold">Role: <span className="text-primary">{res.role}</span></span>
              <span className="text-xs text-muted">{new Date(res.submittedAt).toLocaleDateString('id-ID')}</span>
            </div>
            
            <div>
              <h4 className="flex items-center gap-2 text-success font-semibold mb-1 text-sm"><ThumbsUp size={16} /> Hal Baik (Dipertahankan)</h4>
              <p className="text-sm bg-[rgba(255,255,255,0.02)] p-3 rounded-md">{res.answers.q_p_6 || <span className="italic text-muted">Tidak ada masukan</span>}</p>
            </div>

            <div>
              <h4 className="flex items-center gap-2 text-warning font-semibold mb-1 text-sm"><AlertTriangle size={16} /> Perlu Diperbaiki</h4>
              <p className="text-sm bg-[rgba(255,255,255,0.02)] p-3 rounded-md">{res.answers.q_p_7 || <span className="italic text-muted">Tidak ada masukan</span>}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
