import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Lock, Mail, ShieldAlert } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Email dan password wajib diisi.');
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      navigate('/admin');
    } catch (err) {
      console.error(err);
      setError('Gagal masuk. Periksa kembali kredensial Anda.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-sky-500/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl p-8 sm:p-10">
          
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Lock size={32} className="text-emerald-400" />
            </div>
            <h1 className="text-3xl font-display font-bold text-white mb-2">Admin Area</h1>
            <p className="text-slate-400">Autentikasi diperlukan untuk melanjutkan.</p>
          </div>

          {error && (
            <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-4 mb-6 flex items-start gap-3">
              <ShieldAlert className="text-rose-400 shrink-0 mt-0.5" size={20} />
              <p className="text-rose-400 text-sm font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-slate-500" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder-slate-600"
                  placeholder="admin@evaluasi.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-slate-500" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder-slate-600"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 font-bold rounded-xl py-3.5 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                'Masuk ke Sistem'
              )}
            </button>
          </form>

        </div>
        
        <p className="text-center text-slate-500 text-sm mt-8">
          Sistem Evaluasi Kursus Tartil Al-Qur'an
        </p>
      </div>
    </div>
  );
}
