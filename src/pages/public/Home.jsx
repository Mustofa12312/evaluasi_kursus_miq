import { Link } from 'react-router-dom';
import { Users, UserCheck, BookOpen, Settings } from 'lucide-react';

export default function Home() {
  const roles = [
    {
      id: 'peserta',
      title: 'Peserta',
      description: 'Evaluasi berdasarkan pengalaman langsung mengikuti kursus.',
      icon: <Users size={32} />,
      path: '/evaluasi/peserta',
      delay: 'delay-100'
    },
    {
      id: 'pendamping',
      title: 'Pendamping',
      description: 'Evaluasi berdasarkan pengalaman mendampingi rombongan.',
      icon: <UserCheck size={32} />,
      path: '/evaluasi/pendamping',
      delay: 'delay-200'
    },
    {
      id: 'muallim',
      title: 'Muallim',
      description: 'Evaluasi dari perspektif pengajar dan pembimbing.',
      icon: <BookOpen size={32} />,
      path: '/evaluasi/muallim',
      delay: 'delay-300'
    },
    {
      id: 'panitia',
      title: 'Panitia',
      description: 'Evaluasi internal penyelenggaraan kursus.',
      icon: <Settings size={32} />,
      path: '/evaluasi/panitia',
      delay: 'delay-300'
    }
  ];

  return (
    <div className="container">
      <section className="hero animate-fade-in">
        <h1 className="hero-title">Sistem Evaluasi Terpadu</h1>
        <p className="hero-subtitle">
          Kursus Tartil Al-Qur'an se-Madura. Pilih peran Anda untuk memulai evaluasi. Pengisian cepat, aman, dan tanpa login.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        {roles.map((role) => (
          <Link 
            key={role.id} 
            to={role.path} 
            className={`glass-card flex flex-col items-center text-center animate-fade-in ${role.delay}`}
          >
            <div className="icon-wrapper">
              {role.icon}
            </div>
            <h2 className="text-xl mb-2">{role.title}</h2>
            <p className="text-muted text-sm">{role.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
