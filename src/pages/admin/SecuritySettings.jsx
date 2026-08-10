import { useState, useEffect } from 'react';
import { getSecuritySettings, updateSecuritySettings } from '../../services/db';
import { Lock, Unlock, Save, ShieldCheck, Eye, EyeOff } from 'lucide-react';

export default function SecuritySettings() {
  const [settings, setSettings] = useState({
    peserta: { enabled: false, pin: '' },
    pendamping: { enabled: false, pin: '' },
    muallim: { enabled: false, pin: '' },
    panitia: { enabled: false, pin: '' },
  });
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showPins, setShowPins] = useState({});

  useEffect(() => {
    getSecuritySettings().then(data => {
      if (data) {
        setSettings({
          peserta: { enabled: false, pin: '', ...data.peserta },
          pendamping: { enabled: false, pin: '', ...data.pendamping },
          muallim: { enabled: false, pin: '', ...data.muallim },
          panitia: { enabled: false, pin: '', ...data.panitia },
        });
      }
      setLoading(false);
    });
  }, []);

  const handleToggle = (role) => {
    setSettings(prev => ({
      ...prev,
      [role]: { ...prev[role], enabled: !prev[role].enabled }
    }));
  };

  const handlePinChange = (role, value) => {
    setSettings(prev => ({
      ...prev,
      [role]: { ...prev[role], pin: value }
    }));
  };

  const toggleShowPin = (role) => {
    setShowPins(prev => ({ ...prev, [role]: !prev[role] }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateSecuritySettings(settings);
      alert("Pengaturan keamanan berhasil disimpan!");
    } catch (error) {
      alert("Gagal menyimpan pengaturan.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-20 animate-pulse">
      <ShieldCheck size={48} className="text-slate-600 mb-4" />
      <div className="text-lg text-slate-500 font-medium">Memuat pengaturan keamanan...</div>
    </div>
  );

  const roles = [
    { id: 'peserta', name: 'Peserta', desc: 'Akses ke formulir evaluasi peserta', icon: '🧑‍🎓' },
    { id: 'pendamping', name: 'Pendamping', desc: 'Akses ke formulir evaluasi pendamping', icon: '🧑‍🏫' },
    { id: 'muallim', name: 'Muallim', desc: 'Akses ke formulir evaluasi pengajar', icon: '📖' },
    { id: 'panitia', name: 'Panitia', desc: 'Akses ke formulir internal panitia', icon: '⚙️' }
  ];

  return (
    <div className="animate-fade-in max-w-5xl mx-auto pb-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 bg-slate-800/40 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-md shadow-xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/20 blur-[60px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-500/20 blur-[60px] rounded-full pointer-events-none"></div>

        <div className="flex items-center gap-5 relative z-10">
          <div className="p-4 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-2xl border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.15)] flex-shrink-0">
            <ShieldCheck size={36} className="text-emerald-400" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-white tracking-tight mb-2">Pengaturan Keamanan</h1>
            <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
              Kunci akses formulir evaluasi menggunakan PIN khusus. Hanya responden yang memiliki PIN yang dapat mengisi kuesioner.
            </p>
          </div>
        </div>

        <button 
          onClick={handleSave}
          disabled={saving}
          className="relative z-10 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto transform active:scale-95"
        >
          <Save size={20} />
          {saving ? 'Menyimpan...' : 'Simpan Perubahan'}
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roles.map((role) => {
          const isEnabled = settings[role.id]?.enabled || false;
          const pinValue = settings[role.id]?.pin || '';

          return (
            <div 
              key={role.id} 
              className={`relative overflow-hidden transition-all duration-500 rounded-3xl p-6 border backdrop-blur-sm
                ${isEnabled 
                  ? 'bg-slate-800/60 border-emerald-500/30 shadow-[0_8px_30px_rgba(16,185,129,0.1)]' 
                  : 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/40'
                }`}
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className={`text-3xl p-3 rounded-2xl transition-colors duration-300 ${isEnabled ? 'bg-emerald-500/10' : 'bg-slate-700/30'}`}>
                    {role.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{role.name}</h3>
                    <p className="text-sm text-slate-400 mt-1">{role.desc}</p>
                  </div>
                </div>

                {/* iOS Style Toggle Switch */}
                <button
                  onClick={() => handleToggle(role.id)}
                  className={`relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none ${
                    isEnabled ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-slate-600'
                  }`}
                  role="switch"
                  aria-checked={isEnabled}
                >
                  <span className="sr-only">Toggle PIN {role.name}</span>
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-300 ease-in-out ${
                      isEnabled ? 'translate-x-7' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  isEnabled ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700/50 text-slate-400'
                }`}>
                  {isEnabled ? <Lock size={12} /> : <Unlock size={12} />}
                  {isEnabled ? 'Terkunci' : 'Tidak Dikunci'}
                </div>
              </div>

              {/* PIN Input Area (Animated Height) */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isEnabled ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
              }`}>
                <div className="pt-2 border-t border-slate-700/50">
                  <label className="block text-sm font-medium text-slate-300 mb-2">PIN Keamanan (Kata Sandi)</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock size={18} className={`${pinValue ? 'text-emerald-400' : 'text-slate-500'} transition-colors`} />
                    </div>
                    <input 
                      type={showPins[role.id] ? "text" : "password"}
                      value={pinValue}
                      onChange={(e) => handlePinChange(role.id, e.target.value)}
                      placeholder="Contoh: 123456"
                      className="w-full bg-slate-900/80 border border-slate-600 focus:border-emerald-500 rounded-xl pl-12 pr-12 py-3 text-white font-mono tracking-widest text-lg placeholder:tracking-normal placeholder:text-base placeholder:text-slate-500 transition-all focus:shadow-[0_0_15px_rgba(16,185,129,0.2)] focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => toggleShowPin(role.id)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white transition-colors focus:outline-none"
                    >
                      {showPins[role.id] ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                    <ShieldCheck size={12} /> PIN ini akan diminta saat {role.name.toLowerCase()} mengakses form.
                  </p>
                </div>
              </div>

              {/* Disabled state overlay effect */}
              {!isEnabled && (
                <div className="absolute inset-0 bg-slate-900/10 pointer-events-none rounded-3xl mix-blend-overlay"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
