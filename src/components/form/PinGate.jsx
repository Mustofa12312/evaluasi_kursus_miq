import { useState } from 'react';
import { Lock, ArrowRight, ShieldAlert } from 'lucide-react';

export default function PinGate({ roleName, requiredPin, onSuccess }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin === requiredPin) {
      setError(false);
      onSuccess();
    } else {
      setError(true);
      setPin('');
    }
  };

  return (
    <div className="max-w-md mx-auto py-12 px-4 animate-slide-up">
      <div className="bg-slate-800/40 backdrop-blur-md rounded-3xl border border-slate-700/50 p-8 shadow-2xl relative overflow-hidden">
        {/* Background ambient */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/20 blur-[50px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-500/20 blur-[50px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-700 shadow-inner mb-6 relative group">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl animate-pulse group-hover:bg-emerald-500/30 transition-colors"></div>
            <Lock size={36} className="text-emerald-400 relative z-10" />
          </div>

          <h2 className="text-2xl font-display font-bold text-white mb-2">Akses Terkunci</h2>
          <p className="text-slate-400 mb-8">
            Formulir evaluasi {roleName} dilindungi oleh PIN keamanan. Silakan masukkan PIN untuk melanjutkan.
          </p>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="relative mb-6">
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Masukkan PIN"
                className={`w-full bg-slate-900 border ${error ? 'border-rose-500 focus:border-rose-500' : 'border-slate-700 focus:border-emerald-500'} rounded-xl px-4 py-4 text-center text-2xl tracking-[0.5em] font-mono text-white focus:outline-none transition-colors placeholder:text-slate-600 placeholder:tracking-normal placeholder:text-base`}
                autoFocus
              />
              {error && (
                <div className="absolute -bottom-6 left-0 right-0 flex items-center justify-center gap-1 text-rose-400 text-sm animate-shake">
                  <ShieldAlert size={14} /> PIN salah, coba lagi.
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={!pin}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-4 px-4 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] disabled:opacity-50 flex items-center justify-center gap-2 group"
            >
              Buka Kunci <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
