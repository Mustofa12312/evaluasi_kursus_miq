import { useState, useEffect } from 'react';
import { getMasterData, addMasterData, updateMasterData, deleteMasterData } from '../../services/db';
import { Settings, Plus, Edit2, Trash2, Tag, Book, UserCircle, Calendar } from 'lucide-react';

export default function MasterData() {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('periods'); // periods, programs, classes, muallims
  
  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const tabs = [
    { id: 'periods', label: 'Tahun Ajaran', icon: Calendar },
    { id: 'programs', label: 'Program Kursus', icon: Book },
    { id: 'classes', label: 'Daftar Kelas', icon: Tag },
    { id: 'muallims', label: 'Muallim/Pengajar', icon: UserCircle }
  ];

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getMasterData(activeTab);
      setDataList(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenAdd = () => {
    setFormData(getInitialFormData(activeTab));
    setEditingId(null);
    setShowModal(true);
  };

  const handleOpenEdit = (item) => {
    const { _docId, ...rest } = item;
    setFormData(rest);
    setEditingId(_docId);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus data ini? (Pastikan tidak sedang dipakai)")) {
      try {
        await deleteMasterData(activeTab, id);
        setDataList(dataList.filter(d => d._docId !== id));
      } catch (err) {
        console.error(err);
        alert("Gagal menghapus data.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Special logic: If saving a period and it's active, we might want to deactivate others. 
      // For simplicity, we just allow multiple actives or handle it manually for now, or just warn.
      if (editingId) {
        await updateMasterData(activeTab, editingId, formData);
        setDataList(dataList.map(d => d._docId === editingId ? { ...formData, _docId: editingId } : d));
      } else {
        const added = await addMasterData(activeTab, formData);
        setDataList([...dataList, added]);
      }
      setShowModal(false);
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan data.");
    } finally {
      setSubmitting(false);
    }
  };

  const getInitialFormData = (tab) => {
    switch (tab) {
      case 'periods': return { name: '', isActive: false };
      case 'programs': return { id: '', name: '' }; // ID string based like 'tahsin'
      case 'classes': return { id: '', name: '' };
      case 'muallims': return { id: '', name: '' };
      default: return {};
    }
  };

  return (
    <div className="animate-slide-up opacity-0 fill-mode-forwards pb-12">
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Master <span className="text-emerald-400">Data</span></h1>
          <p className="text-slate-400 text-lg">Kelola referensi entitas dasar sistem evaluasi.</p>
        </div>
        <button 
          onClick={handleOpenAdd}
          className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all"
        >
          <Plus size={18} /> Tambah {tabs.find(t=>t.id===activeTab)?.label}
        </button>
      </div>

      <div className="bg-slate-800/40 backdrop-blur-md rounded-3xl border border-slate-700/50 shadow-xl overflow-hidden">
        
        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-slate-700/50">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-semibold capitalize whitespace-nowrap transition-colors ${
                  activeTab === tab.id 
                    ? 'text-emerald-400 border-b-2 border-emerald-400 bg-emerald-400/5' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
                }`}
              >
                <Icon size={18} /> {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content List */}
        <div className="p-6">
          {loading ? (
            <div className="text-center py-12 text-slate-500">Memuat data...</div>
          ) : dataList.length === 0 ? (
            <div className="text-center py-12 text-slate-500 flex flex-col items-center">
              <Settings size={48} className="text-slate-700 mb-4" />
              <p>Belum ada data untuk kategori ini.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dataList.map((item) => (
                <div key={item._docId} className="p-5 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-emerald-500/30 transition-all flex flex-col relative group">
                  
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-slate-200 font-bold text-lg leading-snug">{item.name}</h3>
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => handleOpenEdit(item)} className="p-1.5 text-sky-400 hover:bg-sky-400/10 rounded-lg"><Edit2 size={16} /></button>
                      <button onClick={() => handleDelete(item._docId)} className="p-1.5 text-rose-400 hover:bg-rose-400/10 rounded-lg"><Trash2 size={16} /></button>
                    </div>
                  </div>
                  
                  <div className="text-sm text-slate-500">
                    {activeTab === 'periods' ? (
                      <span className={`px-2 py-0.5 rounded font-medium ${item.isActive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'}`}>
                        {item.isActive ? 'Periode Aktif' : 'Tidak Aktif'}
                      </span>
                    ) : (
                      <span className="font-mono text-xs px-2 py-1 bg-slate-800 rounded">ID: {item.id}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-slide-up">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-800/30">
              <h2 className="text-2xl font-bold text-white">{editingId ? 'Edit Data' : 'Tambah Data'}</h2>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              
              {activeTab !== 'periods' && (
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">ID (Unik, huruf kecil, tanpa spasi)</label>
                  <input 
                    required
                    type="text" 
                    value={formData.id || ''} 
                    onChange={e => setFormData({...formData, id: e.target.value.toLowerCase().replace(/\s+/g, '_')})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                    placeholder="misal: tahsin_dewasa"
                    disabled={!!editingId} // ID shouldn't change ideally
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Nama Tampilan</label>
                <input 
                  required
                  type="text" 
                  value={formData.name || ''} 
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                  placeholder="misal: Tahsin Dewasa"
                />
              </div>

              {activeTab === 'periods' && (
                <div className="flex items-center gap-3 bg-slate-950 p-4 rounded-xl border border-slate-700">
                  <input 
                    type="checkbox"
                    id="isActive"
                    checked={formData.isActive || false}
                    onChange={e => setFormData({...formData, isActive: e.target.checked})}
                    className="w-5 h-5 accent-emerald-500"
                  />
                  <label htmlFor="isActive" className="text-slate-200 cursor-pointer">
                    Jadikan Periode Aktif untuk Formulir Publik
                  </label>
                </div>
              )}

              <div className="pt-4 flex justify-end gap-3 border-t border-slate-800">
                <button type="button" onClick={() => setShowModal(false)} className="px-6 py-3 rounded-xl font-medium text-slate-300 hover:bg-slate-800 transition-colors">
                  Batal
                </button>
                <button disabled={submitting} type="submit" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-colors disabled:opacity-50 shadow-lg">
                  {submitting ? 'Menyimpan...' : 'Simpan Data'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
