import { useForm } from 'react-hook-form';

export default function DynamicForm({ questions, onSubmit, onBack, loading }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  if (loading) {
    return <div className="text-center py-8 text-muted">Memuat pertanyaan...</div>;
  }

  if (!questions || questions.length === 0) {
    return <div className="text-center py-8 text-muted">Tidak ada pertanyaan untuk sesi ini.</div>;
  }

  const renderInput = (q) => {
    switch (q.type) {
      case 'rating':
        return (
          <div className="flex gap-2 mt-2">
            {[1, 2, 3, 4, 5].map(val => (
              <label key={val} className="flex-1 cursor-pointer">
                <input
                  type="radio"
                  value={val}
                  {...register(q.id, { required: q.required ? "Wajib diisi" : false })}
                  className="peer sr-only"
                />
                <div className="text-center py-3 border border-border rounded-md peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary hover:bg-surface-hover transition-colors">
                  {val}
                </div>
              </label>
            ))}
          </div>
        );
      case 'boolean':
        return (
          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" value="yes" {...register(q.id, { required: q.required ? "Wajib diisi" : false })} className="w-4 h-4 text-primary" />
              <span>Ya</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" value="no" {...register(q.id, { required: q.required ? "Wajib diisi" : false })} className="w-4 h-4 text-primary" />
              <span>Tidak</span>
            </label>
          </div>
        );
      case 'text':
      default:
        return (
          <textarea
            {...register(q.id, { required: q.required ? "Wajib diisi" : false })}
            className="form-control mt-2"
            rows="4"
            placeholder="Tuliskan jawaban Anda..."
          ></textarea>
        );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="animate-fade-in space-y-8 max-w-3xl mx-auto pb-8">
      {questions.map((q, index) => (
        <div key={q.id} className="glass-panel">
          <label className="block text-lg font-medium mb-1">
            <span className="text-primary mr-2">{index + 1}.</span> 
            {q.text}
            {q.required && <span className="text-error ml-1">*</span>}
          </label>
          {renderInput(q)}
          {errors[q.id] && <p className="text-error text-sm mt-2">{errors[q.id].message}</p>}
        </div>
      ))}

      <div className="flex gap-4 pt-4 border-t border-border">
        {onBack && (
          <button type="button" onClick={onBack} className="btn btn-outline">
            Kembali
          </button>
        )}
        <button type="submit" className="btn btn-primary flex-1">
          Kirim Evaluasi
        </button>
      </div>
    </form>
  );
}
