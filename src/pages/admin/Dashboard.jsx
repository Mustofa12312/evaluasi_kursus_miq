import { useState, useEffect } from 'react';
import { getDashboardStats, seedMasterData } from '../../services/db';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Users, UserCheck, BookOpen, Settings, Target, Database } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);

  useEffect(() => {
    getDashboardStats().then(data => {
      setStats(data);
      setLoading(false);
    });
  }, []);

  const handleSeed = async () => {
    if(window.confirm("Apakah Anda yakin ingin menyuntikkan Master Data ke Firebase? (Hanya lakukan jika database kosong)")){
      setSeeding(true);
      await seedMasterData();
      setSeeding(false);
      window.location.reload();
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full animate-pulse">
        <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="ml-3 text-slate-400 font-medium">Memuat data dashboard...</span>
      </div>
    );
  }

  const colors = ['#10b981', '#38bdf8', '#c084fc', '#f59e0b'];

  return (
    <div className="animate-slide-up opacity-0 fill-mode-forwards pb-12">
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Overview <span className="text-emerald-400">Dasbor</span></h1>
          <p className="text-slate-400 text-lg">Pantauan langsung (real-time) evaluasi kursus dari seluruh peran.</p>
        </div>
        <button 
          onClick={handleSeed}
          disabled={seeding}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 rounded-lg text-sm transition-colors"
        >
          <Database size={16} className="text-emerald-400" />
          {seeding ? 'Memproses...' : 'Inject Data Awal'}
        </button>
      </div>
      
      {/* Premium Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6 mb-10">
        <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-colors shadow-lg shadow-black/20 group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform"><Target size={24} /></div>
          </div>
          <h3 className="text-4xl text-white font-bold tracking-tight mb-1">{stats.totalResponden}</h3>
          <p className="text-sm text-slate-400 font-medium">Total Responden</p>
        </div>
        
        <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-colors shadow-lg shadow-black/20 group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform"><Users size={24} /></div>
          </div>
          <h3 className="text-3xl text-white font-bold tracking-tight mb-1">{stats.pesertaCount}</h3>
          <p className="text-sm text-slate-400 font-medium">Peserta</p>
        </div>
        
        <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-sky-500/50 transition-colors shadow-lg shadow-black/20 group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400 group-hover:scale-110 transition-transform"><UserCheck size={24} /></div>
          </div>
          <h3 className="text-3xl text-white font-bold tracking-tight mb-1">{stats.pendampingCount}</h3>
          <p className="text-sm text-slate-400 font-medium">Pendamping</p>
        </div>
        
        <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-colors shadow-lg shadow-black/20 group">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 group-hover:scale-110 transition-transform"><BookOpen size={24} /></div>
          </div>
          <h3 className="text-3xl text-white font-bold tracking-tight mb-1">{stats.muallimCount}</h3>
          <p className="text-sm text-slate-400 font-medium">Muallim</p>
        </div>
        
        <div className="bg-slate-800/60 backdrop-blur-md p-6 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-colors shadow-lg shadow-black/20 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full -z-10"></div>
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-amber-500/20 rounded-lg text-amber-400 group-hover:scale-110 transition-transform"><Settings size={24} /></div>
          </div>
          <h3 className="text-4xl text-amber-400 font-bold tracking-tight mb-1">{stats.rataKepuasan}</h3>
          <p className="text-sm text-slate-400 font-medium">Rata-rata Kepuasan</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
        <div className="lg:col-span-2 bg-slate-800/60 backdrop-blur-md p-8 rounded-3xl border border-slate-700 shadow-lg shadow-black/20">
          <h3 className="text-xl font-bold text-white mb-8">Kepuasan per Program <span className="text-sm font-normal text-slate-400 ml-2">(Skala 5)</span></h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={13} axisLine={false} tickLine={false} dy={10} />
                <YAxis domain={[0, 5]} stroke="#94a3b8" fontSize={13} axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)', color: '#fff' }} 
                />
                <Bar dataKey="kepuasan" radius={[6, 6, 0, 0]} maxBarSize={60}>
                  {stats.chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-800/60 backdrop-blur-md p-8 rounded-3xl border border-slate-700 shadow-lg shadow-black/20 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-8">Informasi Sistem</h3>
          <div className="space-y-6 flex-1">
            <div className="flex flex-col border-b border-slate-700/50 pb-4">
              <span className="text-sm text-slate-400 mb-1">Status Pengumpulan</span>
              <span className="text-emerald-400 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Aktif & Menerima Data
              </span>
            </div>
            <div className="flex flex-col border-b border-slate-700/50 pb-4">
              <span className="text-sm text-slate-400 mb-1">Batas Minimum Anonimitas</span>
              <span className="text-white font-bold text-lg">5 Responden</span>
            </div>
            <div className="flex flex-col pb-4">
              <span className="text-sm text-slate-400 mb-1">Versi Form API</span>
              <span className="text-white font-mono bg-slate-900 px-3 py-1 rounded w-fit mt-1">2026.1.0-stable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
