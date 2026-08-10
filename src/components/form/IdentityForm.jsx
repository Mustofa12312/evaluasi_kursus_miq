import { useState } from 'react';

export default function IdentityForm({ 
  onSubmit, 
  hideLembaga = false, 
  lembagaLabel = "Asal Lembaga / Utusan",
  lembagaPlaceholder = "Masukkan asal lembaga/instansi",
  lembagaRequired = false
}) {
  const [nama, setNama] = useState('');
  const [lembaga, setLembaga] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nama, lembaga });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800/40 backdrop-blur-md rounded-3xl border border-slate-700/50 p-6 md:p-8 shadow-xl max-w-xl mx-auto animate-slide-up">
      <h2 className="text-2xl font-display font-bold text-white mb-6">Informasi Identitas</h2>
      <div className="space-y-5 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Nama Lengkap</label>
          <input 
            type="text" 
            required 
            value={nama} 
            onChange={(e) => setNama(e.target.value)} 
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            placeholder="Masukkan nama lengkap Anda"
          />
        </div>
        
        {!hideLembaga && (
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">
              {lembagaLabel} {!lembagaRequired && <span className="text-slate-500 text-xs ml-1">(Opsional)</span>}
            </label>
            <input 
              type="text" 
              required={lembagaRequired}
              value={lembaga} 
              onChange={(e) => setLembaga(e.target.value)} 
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder={lembagaPlaceholder}
            />
          </div>
        )}
      </div>
      <button 
        type="submit" 
        className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-3.5 px-4 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
      >
        Lanjutkan
      </button>
    </form>
  );
}
