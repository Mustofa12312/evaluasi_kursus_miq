import { Outlet, Link, useLocation } from 'react-router-dom';
import { Shield, Home, LayoutDashboard, Users, UserCheck, MessageSquare, TrendingUp } from 'lucide-react';

export default function AdminLayout() {
  const location = useLocation();
  
  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
      isActive 
        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
        : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-transparent hover:border-slate-700'
    }`;
  };

  return (
    <div className="flex min-h-screen bg-slate-900 text-slate-200 font-sans">
      {/* Premium Sidebar */}
      <aside className="w-72 bg-slate-900/80 backdrop-blur-xl border-r border-slate-800 p-6 flex flex-col relative z-20">
        <div className="flex items-center gap-3 mb-12 text-2xl font-display font-bold tracking-tight text-white">
          <div className="p-2 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
            <Shield size={28} className="text-emerald-400" />
          </div>
          Admin<span className="text-emerald-400 font-light">Area</span>
        </div>
        
        <nav className="flex flex-col gap-2 flex-1">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 ml-4">Menu Utama</div>
          <Link to="/admin" className={getLinkClass('/admin')}><LayoutDashboard size={20} /> Dashboard Overview</Link>
          <Link to="/admin/analisis" className={getLinkClass('/admin/analisis')}><TrendingUp size={20} /> Analisis Lanjutan</Link>
          
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-6 mb-2 ml-4">Data Evaluasi</div>
          <Link to="/admin/evaluasi/peserta" className={getLinkClass('/admin/evaluasi/peserta')}><Users size={20} /> Responden Peserta</Link>
          <Link to="/admin/evaluasi/pendamping" className={getLinkClass('/admin/evaluasi/pendamping')}><UserCheck size={20} /> Responden Pendamping</Link>
          <Link to="/admin/kritik-saran" className={getLinkClass('/admin/kritik-saran')}><MessageSquare size={20} /> Kritik & Saran</Link>
        </nav>

        <div className="mt-8 pt-8 border-t border-slate-800">
          <Link to="/" className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700">
            <Home size={18} /> Kembali ke Publik
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 lg:p-12 h-screen overflow-y-auto relative">
        {/* Background ambient light */}
        <div className="absolute top-0 right-0 w-1/2 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
