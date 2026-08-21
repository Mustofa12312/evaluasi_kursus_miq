import { Link } from 'react-router-dom';
import { Users, UserCheck, BookOpen, Settings, Sparkles } from 'lucide-react';

export default function Home() {
  const roles = [
    {
      id: 'peserta',
      title: 'Peserta',
      description: 'Evaluasi berdasarkan pengalaman langsung mengikuti kursus.',
      icon: <Users size={32} className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" />,
      path: '/evaluasi/peserta',
      delay: 'animate-fade-in [animation-delay:100ms]'
    },
    {
      id: 'pendamping',
      title: 'Pendamping',
      description: 'Evaluasi berdasarkan pengalaman mendampingi rombongan.',
      icon: <UserCheck size={32} className="text-sky-400 group-hover:scale-110 transition-transform duration-300" />,
      path: '/evaluasi/pendamping',
      delay: 'animate-fade-in [animation-delay:200ms]'
    },
    {
      id: 'muallim',
      title: 'Muallim',
      description: 'Evaluasi dari perspektif pengajar dan pembimbing.',
      icon: <BookOpen size={32} className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />,
      path: '/evaluasi/muallim',
      delay: 'animate-fade-in [animation-delay:300ms]'
    },
    {
      id: 'panitia',
      title: 'Panitia',
      description: 'Evaluasi internal penyelenggaraan kursus.',
      icon: <Settings size={32} className="text-amber-400 group-hover:scale-110 transition-transform duration-300" />,
      path: '/evaluasi/panitia',
      delay: 'animate-fade-in [animation-delay:400ms]'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      {/* Premium Hero Section */}
      <section className="text-center mb-20 animate-fade-in relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 backdrop-blur-sm text-emerald-400 text-sm font-medium mb-8 shadow-xl">
          <Sparkles size={16} /> Evaluasi Kursus Se-Madura
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 mb-6 drop-shadow-sm">
          Sistem Evaluasi <br className="hidden sm:block" /> Terpadu
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Kursus Tartil Al-Qur'an se-Madura. Pilih peran Anda di bawah ini untuk memulai. Pengisian cepat, sangat aman, dan <span className="text-slate-200 font-semibold border-b border-emerald-500/50 pb-0.5">tanpa login</span>.
        </p>
      </section>

      {/* Modern Grid Roles */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {roles.map((role) => (
          <Link 
            key={role.id} 
            to={role.path} 
            className={`group relative overflow-hidden bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 hover:border-emerald-500/50 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)] backdrop-blur-md ${role.delay} opacity-0 fill-mode-forwards`}
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-900/80 border border-slate-700 shadow-inner flex items-center justify-center mb-6">
                {role.icon}
              </div>
              <h2 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors">{role.title}</h2>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {role.description}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
