import { useForm } from 'react-hook-form';

export default function DynamicForm({ questions, onSubmit, onBack, loading }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12 animate-pulse">
        <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="ml-3 text-slate-400">Menyiapkan pertanyaan...</span>
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return <div className="text-center py-12 text-slate-500">Tidak ada pertanyaan untuk sesi ini.</div>;
  }

  const renderInput = (q) => {
    switch (q.type) {
      case 'rating':
        return (
          <div className="flex gap-2 sm:gap-4 mt-4">
            {[1, 2, 3, 4, 5].map(val => (
              <label key={val} className="flex-1 cursor-pointer group">
                <input
                  type="radio"
                  value={val}
                  {...register(q.id || q._docId, { required: q.required ? "Wajib diisi" : false })}
                  className="peer sr-only"
                />
                <div className="text-center py-3 sm:py-4 rounded-xl border-2 border-slate-700/50 bg-slate-800/40 text-slate-300 font-bold transition-all duration-300 
                              peer-checked:bg-emerald-500 peer-checked:text-white peer-checked:border-emerald-400 peer-checked:shadow-[0_0_15px_rgba(16,185,129,0.3)]
                              group-hover:border-emerald-500/50 group-hover:bg-slate-700/50">
                  {val}
                </div>
              </label>
            ))}
          </div>
        );
      case 'boolean':
        return (
          <div className="flex gap-6 mt-4">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center w-6 h-6">
                <input type="radio" value="yes" {...register(q.id || q._docId, { required: q.required ? "Wajib diisi" : false })} className="peer sr-only" />
                <div className="w-6 h-6 rounded-full border-2 border-slate-600 group-hover:border-emerald-400 peer-checked:border-emerald-500 transition-colors"></div>
                <div className="absolute w-3 h-3 rounded-full bg-emerald-500 scale-0 peer-checked:scale-100 transition-transform"></div>
              </div>
              <span className="text-slate-300 font-medium group-hover:text-emerald-400 transition-colors">Ya, bersedia</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center w-6 h-6">
                <input type="radio" value="no" {...register(q.id || q._docId, { required: q.required ? "Wajib diisi" : false })} className="peer sr-only" />
                <div className="w-6 h-6 rounded-full border-2 border-slate-600 group-hover:border-rose-400 peer-checked:border-rose-500 transition-colors"></div>
                <div className="absolute w-3 h-3 rounded-full bg-rose-500 scale-0 peer-checked:scale-100 transition-transform"></div>
              </div>
              <span className="text-slate-300 font-medium group-hover:text-rose-400 transition-colors">Tidak</span>
            </label>
          </div>
        );
      case 'text':
      default:
        return (
          <textarea
            {...register(q.id || q._docId, { required: q.required ? "Wajib diisi" : false })}
            className="w-full mt-4 bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
            rows="4"
            placeholder="Tuliskan pendapat atau saran Anda di sini..."
          ></textarea>
        );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="animate-slide-up opacity-0 fill-mode-forwards space-y-8 max-w-3xl mx-auto pb-8">
      {questions.map((q, index) => (
        <div key={q.id || q._docId} className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-lg">
          <label className="block text-lg md:text-xl font-medium text-slate-200 leading-snug">
            <span className="inline-block w-8 h-8 text-center bg-emerald-500/20 text-emerald-400 rounded-lg mr-3 text-sm leading-8">{index + 1}</span> 
            {q.text}
            {q.required && <span className="text-rose-500 ml-2 animate-pulse">*</span>}
          </label>
          
          {renderInput(q)}
          
          {errors[q.id || q._docId] && (
            <p className="text-rose-400 text-sm mt-3 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {errors[q.id || q._docId].message}
            </p>
          )}
        </div>
      ))}

      <div className="flex flex-col-reverse sm:flex-row gap-4 pt-6 mt-12 border-t border-slate-700/50">
        {onBack && (
          <button type="button" onClick={onBack} className="btn-outline sm:w-1/3 py-4 rounded-xl font-bold text-slate-300 border-slate-600 hover:bg-slate-800 transition-colors">
            Kembali
          </button>
        )}
        <button type="submit" className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all active:scale-[0.98]">
          Kirim Evaluasi Sekarang
        </button>
      </div>
    </form>
  );
}
