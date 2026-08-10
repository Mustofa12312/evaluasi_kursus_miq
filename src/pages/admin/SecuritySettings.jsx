import { useState, useEffect } from 'react';
import { getSecuritySettings, updateSecuritySettings } from '../../services/db';
import { Lock, Unlock, Save, ShieldCheck } from 'lucide-react';

export default function SecuritySettings() {
  const [settings, setSettings] = useState({
    peserta: { enabled: false, pin: '' },
    pendamping: { enabled: false, pin: '' },
    muallim: { enabled: false, pin: '' },
    panitia: { enabled: false, pin: '' },
  });
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getSecuritySettings().then(data => {
      if (data) {
        setSettings(data);
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

  if (loading) return <div className="py-12 text-center text-muted">Memuat pengaturan...</div>;

  const roles = [
    { id: 'peserta', name: 'Peserta', desc: 'Akses ke formulir evaluasi peserta' },
    { id: 'pendamping', name: 'Pendamping', desc: 'Akses ke formulir evaluasi pendamping' },
    { id: 'muallim', name: 'Muallim', desc: 'Akses ke formulir evaluasi pengajar' },
    { id: 'panitia', name: 'Panitia', desc: 'Akses ke formulir internal panitia' }
  ];

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-emerald-500/20 rounded-2xl border border-emerald-500/30">
          <ShieldCheck size={32} className="text-emerald-400" />
        </div>
        <div>
          <h1 className="text-3xl font-display font-bold">Pengaturan Keamanan Formulir</h1>
          <p className="text-muted mt-1">Atur proteksi PIN (Kata Sandi) sebelum responden bisa mengakses formulir evaluasi.</p>
        </div>
      </div>

      <div className="grid gap-6">
        {roles.map((role) => (
          <div key={role.id} className={`glass-panel border-l-4 transition-all ${settings[role.id].enabled ? 'border-l-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.1)]' : 'border-l-slate-700'}`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-200 capitalize">{role.name}</h3>
                <p className="text-sm text-slate-400 mt-1">{role.desc}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button 
                  onClick={() => handleToggle(role.id)}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-colors font-medium min-w-[140px]
                    ${settings[role.id].enabled 
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50' 
                      : 'bg-slate-800 text-slate-400 border border-slate-700 hover:border-slate-600'
                    }`}
                >
                  {settings[role.id].enabled ? <Lock size={18} /> : <Unlock size={18} />}
                  {settings[role.id].enabled ? 'PIN Aktif' : 'Tidak Dikunci'}
                </button>

                <div className={`transition-all duration-300 overflow-hidden flex items-center ${settings[role.id].enabled ? 'w-full sm:w-48 opacity-100' : 'w-0 opacity-0'}`}>
                  <input 
                    type="text" 
                    value={settings[role.id].pin}
                    onChange={(e) => handlePinChange(role.id, e.target.value)}
                    placeholder="Masukkan PIN"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors placeholder-slate-600 font-mono tracking-widest text-center"
                    disabled={!settings[role.id].enabled}
                  />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <button 
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all disabled:opacity-50"
        >
          <Save size={20} />
          {saving ? 'Menyimpan...' : 'Simpan Pengaturan Keamanan'}
        </button>
      </div>
    </div>
  );
}
