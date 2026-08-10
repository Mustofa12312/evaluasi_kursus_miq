import { useState, useEffect } from 'react';
import { Target, CheckCircle2, Clock, AlertCircle, PlayCircle, Plus } from 'lucide-react';
import { getActionPlans, addActionPlan, updateActionPlanStatus } from '../../services/db';

export default function ActionPlan() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // State for Add Modal/Form
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPlan, setNewPlan] = useState({ masalah: '', solusi: '', prioritas: 'Sedang' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const data = await getActionPlans();
      // Sort by status and priority logic if needed. Here just raw for now.
      setPlans(data.sort((a, b) => b.createdAt - a.createdAt));
    } catch (err) {
      console.error("Failed to fetch plans", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddPlan = async (e) => {
    e.preventDefault();
    if (!newPlan.masalah || !newPlan.solusi) return;
    
    setIsSubmitting(true);
    try {
      const added = await addActionPlan({
        ...newPlan,
        status: 'Belum'
      });
      setPlans([added, ...plans]);
      setShowAddForm(false);
      setNewPlan({ masalah: '', solusi: '', prioritas: 'Sedang' });
    } catch (err) {
      console.error("Failed to add plan", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCycleStatus = async (plan) => {
    const statuses = ['Belum', 'Direncanakan', 'Diproses', 'Selesai'];
    const currentIndex = statuses.indexOf(plan.status);
    const nextStatus = statuses[(currentIndex + 1) % statuses.length];
    
    // Update local immediately for responsive UI
    setPlans(plans.map(p => p.id === plan.id ? { ...p, status: nextStatus } : p));
    
    // Update remote
    try {
      await updateActionPlanStatus(plan.id, nextStatus);
    } catch (err) {
      console.error("Failed to update status", err);
      // Revert if failed
      setPlans(plans.map(p => p.id === plan.id ? { ...p, status: plan.status } : p));
    }
  };

  const getPriorityColor = (prioritas) => {
    switch (prioritas) {
      case 'Tinggi': return 'text-rose-400 bg-rose-400/10 border-rose-400/30';
      case 'Sedang': return 'text-amber-400 bg-amber-400/10 border-amber-400/30';
      case 'Rendah': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/30';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Belum': return <AlertCircle size={18} className="text-slate-400" />;
      case 'Direncanakan': return <Clock size={18} className="text-amber-400" />;
      case 'Diproses': return <PlayCircle size={18} className="text-sky-400" />;
      case 'Selesai': return <CheckCircle2 size={18} className="text-emerald-400" />;
      default: return <AlertCircle size={18} className="text-slate-400" />;
    }
  };

  return (
    <div className="animate-slide-up opacity-0 fill-mode-forwards pb-12">
      <div className="mb-10">
        <h1 className="text-4xl font-display font-bold text-white mb-2">Action <span className="text-emerald-400">Plan</span></h1>
        <p className="text-slate-400 text-lg">Konversi temuan evaluasi menjadi rencana perbaikan nyata untuk tahun depan.</p>
      </div>

      <div className="bg-slate-800/40 backdrop-blur-md rounded-3xl border border-slate-700/50 shadow-xl overflow-hidden">
        {/* Header Actions */}
        <div className="p-6 border-b border-slate-700/50 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-800/60">
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Target size={24} className="text-emerald-400" /> Daftar Tindak Lanjut
          </h2>
          <button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all flex items-center gap-2"
          >
            <Plus size={18} /> {showAddForm ? 'Tutup Form' : 'Tambah Rencana'}
          </button>
        </div>

        {/* Add Form */}
        {showAddForm && (
          <form onSubmit={handleAddPlan} className="p-6 border-b border-slate-700/50 bg-slate-800/80">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">Masalah yang Ditemukan</label>
                <input required type="text" value={newPlan.masalah} onChange={(e) => setNewPlan({...newPlan, masalah: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500" placeholder="Contoh: AC kelas kurang dingin" />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">Solusi yang Direncanakan</label>
                <input required type="text" value={newPlan.solusi} onChange={(e) => setNewPlan({...newPlan, solusi: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500" placeholder="Contoh: Menambah kipas angin" />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">Prioritas</label>
                <select value={newPlan.prioritas} onChange={(e) => setNewPlan({...newPlan, prioritas: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500">
                  <option value="Tinggi">Tinggi</option>
                  <option value="Sedang">Sedang</option>
                  <option value="Rendah">Rendah</option>
                </select>
              </div>
            </div>
            <button disabled={isSubmitting} type="submit" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-2 rounded-lg font-bold disabled:opacity-50">
              {isSubmitting ? 'Menyimpan...' : 'Simpan Rencana'}
            </button>
          </form>
        )}

        {/* List Content */}
        <div className="divide-y divide-slate-700/50">
          {loading ? (
            <div className="p-12 text-center text-slate-500">Memuat data dari Firestore...</div>
          ) : plans.length === 0 ? (
            <div className="p-12 text-center text-slate-500">Belum ada rencana tindak lanjut yang dibuat.</div>
          ) : plans.map((plan) => (
            <div key={plan.id} className="p-6 hover:bg-slate-800/60 transition-colors flex flex-col md:flex-row gap-6 items-start md:items-center">
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-200 mb-2">{plan.masalah}</h3>
                <div className="flex items-start gap-2 text-slate-400">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                  <p className="text-sm leading-relaxed">Solusi: {plan.solusi}</p>
                </div>
              </div>

              <div className="flex flex-row md:flex-col gap-3 min-w-[140px] items-start md:items-end w-full md:w-auto">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getPriorityColor(plan.prioritas)}`}>
                  Prioritas {plan.prioritas}
                </span>

                {/* Clickable Status Badge to cycle statuses */}
                <button 
                  onClick={() => handleCycleStatus(plan)}
                  title="Klik untuk mengubah status"
                  className="flex items-center gap-2 bg-slate-900/50 border border-slate-700 px-3 py-1.5 rounded-lg cursor-pointer hover:border-emerald-500/50 hover:bg-slate-800 transition-colors w-full md:w-auto justify-between group"
                >
                  {getStatusIcon(plan.status)}
                  <span className="text-sm font-medium text-slate-300 group-hover:text-emerald-400 transition-colors">{plan.status}</span>
                </button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
