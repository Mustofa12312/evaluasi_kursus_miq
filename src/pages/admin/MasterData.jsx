import { useState, useEffect, useRef } from 'react';
import { getMasterData, addMasterData, updateMasterData, deleteMasterData } from '../../services/db';
import { Settings, Plus, Edit2, Trash2, Tag, Book, UserCircle, Calendar, Download, Upload, FileDown } from 'lucide-react';
import * as XLSX from 'xlsx';

export default function MasterData() {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('periods'); // periods, programs, classes, muallims
  
  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  // Relational Opetions
  const [programsList, setProgramsList] = useState([]);
  const [classesList, setClassesList] = useState([]);
  
  // Form State
  const [formData, setFormData] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const tabs = [
    { id: 'periods', label: 'Tahun Ajaran', icon: Calendar },
    { id: 'programs', label: 'Program Kursus', icon: Book },
    { id: 'classes', label: 'Daftar Kelas', icon: Tag },
    { id: 'muallims', label: 'Muallim/Pengajar', icon: UserCircle }
  ];

  useEffect(() => {
    fetchData();
    // Load relations for dropdowns
    loadRelations();
  }, [activeTab]);

  const loadRelations = async () => {
    try {
      const p = await getMasterData('programs');
      const c = await getMasterData('classes');
      setProgramsList(p);
      setClassesList(c);
    } catch (err) {
      console.error(err);
    }
  };

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
        if (err.message === "PROGRAM_IN_USE") {
          alert("Peringatan: Tidak dapat menghapus Program karena masih memiliki Kelas yang aktif di dalamnya. Hapus Kelasnya terlebih dahulu.");
        } else if (err.message === "CLASS_IN_USE") {
          alert("Peringatan: Tidak dapat menghapus Kelas karena masih memiliki Muallim yang aktif di dalamnya. Hapus Muallimnya terlebih dahulu.");
        } else {
          alert("Gagal menghapus data.");
        }
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
      loadRelations(); // refresh dropdown options
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
      case 'classes': return { id: '', name: '', programId: '' };
      case 'muallims': return { id: '', name: '', classId: '' };
      default: return {};
    }
  };

  const handleExport = () => {
    if (dataList.length === 0) {
      alert("Tidak ada data untuk di-export.");
      return;
    }
    const excelData = dataList.map(item => {
      const base = {
        ID: item.id,
        Nama: item.name
      };
      if (activeTab === 'classes') base.ProgramID = item.programId || '';
      if (activeTab === 'muallims') base.ClassID = item.classId || '';
      return base;
    });
    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, `Data_${activeTab}.xlsx`);
  };

  const handleDownloadTemplate = () => {
    const templateData = [{ ID: 'contoh_id', Nama: 'Contoh Nama' }];
    if (activeTab === 'classes') templateData[0].ProgramID = 'contoh_program_id';
    if (activeTab === 'muallims') templateData[0].ClassID = 'contoh_class_id';
    const worksheet = XLSX.utils.json_to_sheet(templateData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Template");
    XLSX.writeFile(workbook, `Template_Import_${activeTab}.xlsx`);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (evt) => {
      try {
        setLoading(true);
        const bstr = evt.target.result;
        const workbook = XLSX.read(bstr, { type: 'binary' });
        const wsname = workbook.SheetNames[0];
        const ws = workbook.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);

        let successCount = 0;
        for (const row of data) {
          if (row.ID && row.Nama) {
            // Clean ID string
            const safeId = String(row.ID).toLowerCase().replace(/\s+/g, '_');
            const newData = { id: safeId, name: String(row.Nama) };
            if (activeTab === 'classes') {
              newData.programId = row.ProgramID ? String(row.ProgramID).toLowerCase().replace(/\s+/g, '_') : '';
            }
            if (activeTab === 'muallims') {
              newData.classId = row.ClassID ? String(row.ClassID).toLowerCase().replace(/\s+/g, '_') : '';
            }
            await addMasterData(activeTab, newData);
            successCount++;
          }
        }
        alert(`Berhasil mengimpor ${successCount} data.`);
        fetchData(); // Refresh list
      } catch (err) {
        console.error(err);
        alert("Gagal mengimpor file. Pastikan format sesuai template.");
      } finally {
        setLoading(false);
        // Reset file input
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="animate-slide-up opacity-0 fill-mode-forwards pb-12">
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Master <span className="text-emerald-400">Data</span></h1>
          <p className="text-slate-400 text-lg">Kelola referensi entitas dasar sistem evaluasi.</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-end">
          {activeTab !== 'periods' && (
            <>
              <input type="file" accept=".xlsx, .xls" ref={fileInputRef} onChange={handleFileUpload} className="hidden" />
              <button onClick={handleDownloadTemplate} className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-xl border border-slate-700 transition-colors">
                <FileDown size={18} /> Template
              </button>
              <button onClick={handleExport} className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-xl border border-slate-700 transition-colors">
                <Download size={18} /> Export
              </button>
              <button onClick={handleImportClick} className="flex items-center gap-2 px-4 py-2 bg-sky-500/20 hover:bg-sky-500/30 text-sky-400 font-medium rounded-xl border border-sky-500/30 transition-colors">
                <Upload size={18} /> Import
              </button>
            </>
          )}
          <button 
            onClick={handleOpenAdd}
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all"
          >
            <Plus size={18} /> Tambah {tabs.find(t=>t.id===activeTab)?.label}
          </button>
        </div>
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
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-xs px-2 py-1 bg-slate-800 rounded self-start">ID: {item.id}</span>
                        {activeTab === 'classes' && item.programId && (
                          <span className="text-xs text-slate-400">Prog: {item.programId}</span>
                        )}
                        {activeTab === 'muallims' && item.classId && (
                          <span className="text-xs text-slate-400">Kls: {item.classId}</span>
                        )}
                      </div>
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
                    placeholder={
                      activeTab === 'programs' ? 'misal: tahsinul_khat' :
                      activeTab === 'classes' ? 'misal: kelas_a1' :
                      activeTab === 'muallims' ? 'misal: ustadz_ahmad' : 'misal: id_unik'
                    }
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
                  placeholder={
                    activeTab === 'periods' ? 'misal: 2026/2027' :
                    activeTab === 'programs' ? 'misal: Kursus Tahsinul Khat' :
                    activeTab === 'classes' ? 'misal: Kelas A1' :
                    activeTab === 'muallims' ? 'misal: Ustadz Ahmad' : 'misal: Nama Tampilan'
                  }
                />
              </div>

              {activeTab === 'classes' && (
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Program Induk</label>
                  <select 
                    required
                    value={formData.programId || ''} 
                    onChange={e => setFormData({...formData, programId: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="">-- Pilih Program --</option>
                    {programsList.map(p => <option key={p.id} value={p.id}>{p.name} ({p.id})</option>)}
                  </select>
                </div>
              )}

              {activeTab === 'muallims' && (
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Kelas Induk</label>
                  <select 
                    required
                    value={formData.classId || ''} 
                    onChange={e => setFormData({...formData, classId: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="">-- Pilih Kelas --</option>
                    {classesList.map(c => <option key={c.id} value={c.id}>{c.name} ({c.id})</option>)}
                  </select>
                </div>
              )}

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
