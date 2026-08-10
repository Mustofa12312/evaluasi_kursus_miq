import { useState, useEffect, useRef } from 'react';
import { getAllQuestions, addQuestion, updateQuestion, deleteQuestion } from '../../services/db';
import { Settings, Plus, Edit2, Trash2, CheckCircle2, AlertCircle, Download, Upload, FileDown } from 'lucide-react';
import * as XLSX from 'xlsx';

export default function MasterPertanyaan() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('peserta');
  
  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({
    role: 'peserta',
    category: '',
    type: 'rating',
    text: '',
    required: true,
    order: 1
  });
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const roles = ['peserta', 'pendamping', 'muallim', 'panitia'];

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const data = await getAllQuestions();
      setQuestions(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenAdd = () => {
    setFormData({ role: activeTab, category: '', type: 'rating', text: '', required: true, order: questions.filter(q => q.role === activeTab).length + 1 });
    setEditingId(null);
    setShowModal(true);
  };

  const handleOpenEdit = (q) => {
    setFormData({
      role: q.role,
      category: q.category,
      type: q.type,
      text: q.text,
      required: q.required,
      order: q.order
    });
    setEditingId(q._docId);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus pertanyaan ini? (Peringatan: Ini bisa merusak data analisis masa lalu)")) {
      try {
        await deleteQuestion(id);
        setQuestions(questions.filter(q => q._docId !== id));
      } catch (err) {
        console.error(err);
        alert("Gagal menghapus pertanyaan.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (editingId) {
        await updateQuestion(editingId, formData);
        setQuestions(questions.map(q => q._docId === editingId ? { ...formData, _docId: editingId } : q));
      } else {
        const added = await addQuestion(formData);
        setQuestions([...questions, added]);
      }
      setShowModal(false);
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan pertanyaan.");
    } finally {
      setSubmitting(false);
    }
  };

  const filteredQuestions = questions.filter(q => q.role === activeTab).sort((a, b) => a.order - b.order);

  const handleExport = () => {
    if (filteredQuestions.length === 0) {
      alert("Tidak ada pertanyaan untuk di-export pada tab ini.");
      return;
    }
    const excelData = filteredQuestions.map(q => ({
      Urutan: q.order,
      TeksPertanyaan: q.text,
      Tipe: q.type,
      Kategori: q.category,
      Wajib: q.required ? 'Ya' : 'Tidak'
    }));
    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Pertanyaan");
    XLSX.writeFile(workbook, `Kuesioner_${activeTab}.xlsx`);
  };

  const handleDownloadTemplate = () => {
    const templateData = [{ 
      Urutan: 1, 
      TeksPertanyaan: 'Bagaimana kepuasan Anda?', 
      Tipe: 'rating', 
      Kategori: 'fasilitas', 
      Wajib: 'Ya' 
    }];
    const worksheet = XLSX.utils.json_to_sheet(templateData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Template");
    XLSX.writeFile(workbook, `Template_Kuesioner_${activeTab}.xlsx`);
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
          if (row.TeksPertanyaan) {
            const newQ = {
              role: activeTab,
              text: String(row.TeksPertanyaan),
              type: String(row.Tipe || 'rating').toLowerCase(),
              category: String(row.Kategori || 'umum').toLowerCase(),
              order: parseInt(row.Urutan) || 1,
              required: row.Wajib === 'Ya' || row.Wajib === 'ya' || row.Wajib === true
            };
            await addQuestion(newQ);
            successCount++;
          }
        }
        alert(`Berhasil mengimpor ${successCount} pertanyaan.`);
        fetchQuestions(); // Refresh list
      } catch (err) {
        console.error(err);
        alert("Gagal mengimpor file. Pastikan format sesuai template.");
      } finally {
        setLoading(false);
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="animate-slide-up opacity-0 fill-mode-forwards pb-12">
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-display font-bold text-white mb-2">Master <span className="text-emerald-400">Pertanyaan</span></h1>
          <p className="text-slate-400 text-lg">Kelola kuesioner dinamis untuk setiap peran yang terlibat.</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-end">
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
          <button 
            onClick={handleOpenAdd}
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all"
          >
            <Plus size={18} /> Tambah Pertanyaan
          </button>
        </div>
      </div>

      <div className="bg-slate-800/40 backdrop-blur-md rounded-3xl border border-slate-700/50 shadow-xl overflow-hidden">
        
        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-slate-700/50">
          {roles.map(role => (
            <button
              key={role}
              onClick={() => setActiveTab(role)}
              className={`px-6 py-4 font-semibold capitalize whitespace-nowrap transition-colors ${
                activeTab === role 
                  ? 'text-emerald-400 border-b-2 border-emerald-400 bg-emerald-400/5' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
              }`}
            >
              Kuesioner {role}
            </button>
          ))}
        </div>

        {/* Content List */}
        <div className="p-6">
          {loading ? (
            <div className="text-center py-12 text-slate-500">Memuat pertanyaan...</div>
          ) : filteredQuestions.length === 0 ? (
            <div className="text-center py-12 text-slate-500 flex flex-col items-center">
              <Settings size={48} className="text-slate-700 mb-4" />
              <p>Belum ada pertanyaan untuk peran ini.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredQuestions.map((q) => (
                <div key={q._docId} className="p-5 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-emerald-500/30 transition-all flex flex-col md:flex-row gap-4 items-start md:items-center">
                  
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-slate-400 shrink-0">
                    {q.order}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-slate-200 font-medium text-lg leading-snug mb-1">{q.text}</h3>
                    <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">{q.type}</span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700">{q.category}</span>
                      {q.required ? (
                        <span className="text-rose-400 flex items-center gap-1"><AlertCircle size={12}/> Wajib</span>
                      ) : (
                        <span className="text-emerald-400 flex items-center gap-1"><CheckCircle2 size={12}/> Opsional</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button 
                      onClick={() => handleOpenEdit(q)}
                      className="p-2 text-sky-400 hover:bg-sky-400/10 rounded-lg transition-colors border border-transparent hover:border-sky-400/20"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(q._docId)}
                      className="p-2 text-rose-400 hover:bg-rose-400/10 rounded-lg transition-colors border border-transparent hover:border-rose-400/20"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal / Form Inline */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-slide-up">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-800/30">
              <h2 className="text-2xl font-bold text-white">{editingId ? 'Edit Pertanyaan' : 'Tambah Pertanyaan'}</h2>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white transition-colors">✕</button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Peran Target</label>
                  <select 
                    value={formData.role} 
                    onChange={e => setFormData({...formData, role: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 capitalize"
                  >
                    {roles.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Tipe Jawaban</label>
                  <select 
                    value={formData.type} 
                    onChange={e => setFormData({...formData, type: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="rating">Rating Bintang (1-5)</option>
                    <option value="text">Teks Panjang / Uraian</option>
                    <option value="boolean">Ya / Tidak (Checkbox)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Teks Pertanyaan</label>
                <textarea 
                  required
                  rows="3"
                  value={formData.text} 
                  onChange={e => setFormData({...formData, text: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 resize-none"
                  placeholder="Ketik pertanyaan di sini..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Kategori Analisis</label>
                  <input 
                    required
                    type="text" 
                    value={formData.category} 
                    onChange={e => setFormData({...formData, category: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                    placeholder="misal: fasilitas"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Urutan Tampil (Order)</label>
                  <input 
                    type="number"
                    min="1"
                    required
                    value={formData.order} 
                    onChange={e => setFormData({...formData, order: parseInt(e.target.value)})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Sifat Isian</label>
                  <select 
                    value={formData.required ? 'true' : 'false'} 
                    onChange={e => setFormData({...formData, required: e.target.value === 'true'})}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="true">Wajib Diisi (*)</option>
                    <option value="false">Opsional</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-slate-800">
                <button type="button" onClick={() => setShowModal(false)} className="px-6 py-3 rounded-xl font-medium text-slate-300 hover:bg-slate-800 transition-colors">
                  Batal
                </button>
                <button disabled={submitting} type="submit" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-colors disabled:opacity-50 shadow-lg">
                  {submitting ? 'Menyimpan...' : 'Simpan Kuesioner'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
