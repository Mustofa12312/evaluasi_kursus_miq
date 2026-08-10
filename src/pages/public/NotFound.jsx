import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 animate-slide-up">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-rose-500/20 blur-[50px] rounded-full"></div>
        <Compass size={80} className="text-rose-400 relative z-10 animate-spin-slow" />
      </div>
      
      <h1 className="text-6xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400 mb-6 drop-shadow-sm">
        404
      </h1>
      
      <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
        Halaman Tidak Ditemukan
      </h2>
      
      <p className="text-lg text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
        Maaf, alamat yang Anda tuju sepertinya tidak ada di sistem kami atau mungkin sudah dipindahkan.
      </p>
      
      <Link 
        to="/"
        className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 border border-slate-700"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
