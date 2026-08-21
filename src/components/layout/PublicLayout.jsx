import { Outlet, Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

export default function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-200 font-sans relative">
      {/* Ambient background blur */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <nav className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <img src={Logo} alt="Evaluasi Kursus Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-display font-bold text-white tracking-tight">
                Evaluasi<span className="text-emerald-400 font-light ml-1">Kursus</span>
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/admin" className="px-5 py-2 text-sm font-medium text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-full transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                Admin Area
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <footer className="mt-auto border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">&copy; {new Date().getFullYear()} Sistem Evaluasi Kursus Tartil Al-Qur'an se-Madura. All rights reserved.</p>
          <p className="mt-2 text-sm text-emerald-500/70 font-medium tracking-widest uppercase">Public Evaluation, Private Analysis</p>
        </div>
      </footer>
    </div>
  );
}
