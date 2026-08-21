import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, LayoutDashboard, Users, UserCheck, MessageSquare, TrendingUp, LogOut, Database, ClipboardList, Target, GraduationCap, Flag, Shield } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { usePeriod } from '../../context/PeriodContext';
import Logo from '../../assets/Logo.png';

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { periods, selectedPeriod, setSelectedPeriod } = usePeriod();
  
  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
      isActive 
        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
        : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-transparent hover:border-slate-700'
    }`;
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/admin/login');
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-900 text-slate-200 font-sans">
      {/* Premium Sidebar */}
      <aside className="w-72 bg-slate-900/80 backdrop-blur-xl border-r border-slate-800 p-6 flex flex-col relative z-20">
        <div className="flex items-center gap-3 mb-12 text-2xl font-display font-bold tracking-tight text-white">
          <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
          <span>Admin<span className="text-emerald-400 font-light ml-1">Area</span></span>
        </div>
        
        <nav className="flex flex-col gap-2 flex-1">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 ml-4">Menu Utama</div>
          <Link to="/admin" className={getLinkClass('/admin')}><LayoutDashboard size={20} /> Dashboard Overview</Link>
          <Link to="/admin/analisis" className={getLinkClass('/admin/analisis')}><TrendingUp size={20} /> Analisis Lanjutan</Link>
          
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-6 mb-2 ml-4">Data Evaluasi</div>
          <Link to="/admin/evaluasi/peserta" className={getLinkClass('/admin/evaluasi/peserta')}><Users size={20} /> Responden Peserta</Link>
          <Link to="/admin/evaluasi/pendamping" className={getLinkClass('/admin/evaluasi/pendamping')}><UserCheck size={20} /> Responden Pendamping</Link>
          <Link to="/admin/evaluasi/muallim" className={getLinkClass('/admin/evaluasi/muallim')}><GraduationCap size={20} /> Responden Muallim</Link>
          <Link to="/admin/evaluasi/panitia" className={getLinkClass('/admin/evaluasi/panitia')}><Flag size={20} /> Responden Panitia</Link>
          <Link to="/admin/kritik-saran" className={getLinkClass('/admin/kritik-saran')}><MessageSquare size={20} /> Kritik & Saran</Link>
          
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-6 mb-2 ml-4">Pengaturan (Master)</div>
          <Link to="/admin/master-data" className={getLinkClass('/admin/master-data')}>
            <Database size={20} />
            Data Dasar & Periode
          </Link>
          <Link to="/admin/master-pertanyaan" className={getLinkClass('/admin/master-pertanyaan')}>
            <ClipboardList size={20} />
            Kuesioner Builder
          </Link>
          <Link to="/admin/keamanan" className={getLinkClass('/admin/keamanan')}>
            <Shield size={20} />
            Pengaturan Keamanan
          </Link>

          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-6 mb-2 ml-4">Perbaikan</div>
          <Link to="/admin/action-plan" className={getLinkClass('/admin/action-plan')}>
            <Target size={20} />
            Action Plan
          </Link>
        </nav>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col gap-3">
          <button 
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors border border-rose-500/30 font-medium"
          >
            <LogOut size={18} /> Keluar (Logout)
          </button>
          <Link to="/" className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700">
            <Home size={18} /> Kembali ke Publik
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto relative flex flex-col">
        {/* Top Header / Period Selector */}
        <header className="px-8 py-4 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 flex justify-end items-center sticky top-0 z-30">
          <div className="flex items-center gap-3 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700 shadow-sm">
            <span className="text-sm font-medium text-slate-400">Periode Aktif:</span>
            <select 
              value={selectedPeriod || ''}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="bg-transparent text-emerald-400 font-bold focus:outline-none appearance-none cursor-pointer pr-4"
            >
              {periods.map(p => (
                <option key={p._docId} value={p._docId} className="bg-slate-800 text-white">{p.name}</option>
              ))}
            </select>
          </div>
        </header>

        {/* Content */}
        <div className="p-8 lg:p-12 flex-1 relative">
          {/* Background ambient light */}
          <div className="absolute top-0 right-0 w-1/2 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
