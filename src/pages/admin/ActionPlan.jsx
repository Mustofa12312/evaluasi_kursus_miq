import { useState } from 'react';
import { Target, CheckCircle2, Clock, AlertCircle, PlayCircle } from 'lucide-react';

export default function ActionPlan() {
  // Data statis untuk contoh implementasi UI fase 13
  const [plans, setPlans] = useState([
    {
      id: 1,
      masalah: 'Durasi waktu praktik tahsin terlalu singkat.',
      solusi: 'Menambah alokasi waktu 30 menit khusus untuk sesi praktik membaca.',
      prioritas: 'Tinggi',
      status: 'Direncanakan'
    },
    {
      id: 2,
      masalah: 'Fasilitas pendingin ruangan di beberapa kelas kurang optimal.',
      solusi: 'Memasang AC tambahan dan melakukan servis berkala sebelum acara.',
      prioritas: 'Tinggi',
      status: 'Diproses'
    },
    {
      id: 3,
      masalah: 'Koordinasi antar panitia di lapangan kadang miskomunikasi.',
      solusi: 'Membuat SOP komunikasi satu pintu via HT dan briefing pagi wajib.',
      prioritas: 'Sedang',
      status: 'Belum'
    },
    {
      id: 4,
      masalah: 'Materi tajwid lanjutan belum tersedia bukunya.',
      solusi: 'Tim Muallim menyusun dan mencetak diktat tajwid lanjutan.',
      prioritas: 'Sedang',
      status: 'Selesai'
    }
  ]);

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
      default: return null;
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
          <button className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all">
            + Tambah Rencana Baru
          </button>
        </div>

        {/* List Content */}
        <div className="divide-y divide-slate-700/50">
          {plans.map((plan) => (
            <div key={plan.id} className="p-6 hover:bg-slate-800/60 transition-colors flex flex-col md:flex-row gap-6 items-start md:items-center">
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-200 mb-2">{plan.masalah}</h3>
                <div className="flex items-start gap-2 text-slate-400">
                  <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500"></div>
                  <p className="text-sm leading-relaxed">Solusi: {plan.solusi}</p>
                </div>
              </div>

              <div className="flex flex-row md:flex-col gap-3 min-w-[140px] items-start md:items-end w-full md:w-auto">
                {/* Badge Prioritas */}
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getPriorityColor(plan.prioritas)}`}>
                  Prioritas {plan.prioritas}
                </span>

                {/* Status Dropdown / Indicator */}
                <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-700 px-3 py-1.5 rounded-lg cursor-pointer hover:border-emerald-500/50 transition-colors w-full md:w-auto justify-between">
                  {getStatusIcon(plan.status)}
                  <span className="text-sm font-medium text-slate-300">{plan.status}</span>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
