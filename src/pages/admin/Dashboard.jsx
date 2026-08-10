import { useState, useEffect } from 'react';
import { getDashboardStats } from '../../services/db';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDashboardStats().then(data => {
      setStats(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="text-center py-16 text-muted">Memuat data dashboard...</div>;
  }

  const colors = ['#10b981', '#38bdf8', '#c084fc', '#f59e0b'];

  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-display mb-2">Dashboard Evaluasi</h1>
      <p className="text-muted mb-8">Ringkasan agregat data evaluasi Kursus Tartil Al-Qur'an.</p>
      
      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="glass-panel text-center p-6 border-t-4 border-t-primary">
          <h3 className="text-4xl text-primary font-bold mb-2">{stats.totalResponden}</h3>
          <p className="text-sm text-muted">Total Responden</p>
        </div>
        <div className="glass-panel text-center p-6 border-t-4 border-t-accent">
          <h3 className="text-3xl font-bold mb-2">{stats.pesertaCount}</h3>
          <p className="text-sm text-muted">Peserta</p>
        </div>
        <div className="glass-panel text-center p-6 border-t-4 border-t-blue-400">
          <h3 className="text-3xl font-bold mb-2">{stats.pendampingCount}</h3>
          <p className="text-sm text-muted">Pendamping</p>
        </div>
        <div className="glass-panel text-center p-6 border-t-4 border-t-purple-400">
          <h3 className="text-3xl font-bold mb-2">{stats.muallimCount}</h3>
          <p className="text-sm text-muted">Muallim</p>
        </div>
        <div className="glass-panel text-center p-6 border-t-4 border-t-warning">
          <h3 className="text-4xl text-warning font-bold mb-2">{stats.rataKepuasan}</h3>
          <p className="text-sm text-muted">Rata-rata Kepuasan</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="glass-panel p-6">
          <h3 className="text-xl font-semibold mb-6">Kepuasan per Program (Skala 5)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats.chartData}>
                <XAxis dataKey="name" stroke="var(--color-text-muted)" fontSize={12} />
                <YAxis domain={[0, 5]} stroke="var(--color-text-muted)" fontSize={12} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '8px' }} 
                />
                <Bar dataKey="kepuasan" radius={[4, 4, 0, 0]}>
                  {stats.chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-6">
          <h3 className="text-xl font-semibold mb-6">Informasi Sistem</h3>
          <ul className="space-y-4 text-muted">
            <li className="flex justify-between border-b border-border pb-2">
              <span>Status Pengumpulan</span>
              <span className="text-success font-semibold">Aktif</span>
            </li>
            <li className="flex justify-between border-b border-border pb-2">
              <span>Batas Minimum Responden (Anonimitas)</span>
              <span>5</span>
            </li>
            <li className="flex justify-between border-b border-border pb-2">
              <span>Versi Form</span>
              <span>2026.1</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
