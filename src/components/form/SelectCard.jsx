export default function SelectCard({ options, selectedId, onSelect, title, loading, multiSelect = false, onContinue }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12 animate-pulse">
        <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="ml-3 text-slate-400">Memuat data...</span>
      </div>
    );
  }

  if (!options || options.length === 0) {
    return (
      <div className="text-center py-12 text-slate-500 bg-slate-800/30 rounded-2xl border border-slate-700/50 border-dashed">
        <p>Tidak ada data tersedia.</p>
      </div>
    );
  }

  return (
    <div className="animate-slide-up opacity-0 fill-mode-forwards">
      {title && <h3 className="text-2xl mb-6 font-display font-semibold text-slate-100">{title}</h3>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((opt) => {
          const isSelected = multiSelect 
            ? Array.isArray(selectedId) && selectedId.includes(opt.id)
            : selectedId === opt.id;
            
          return (
            <div
              key={opt.id}
              onClick={() => onSelect(opt.id, opt)}
              className={`relative flex flex-col p-6 rounded-xl border-2 cursor-pointer overflow-hidden transition-all duration-300 ${
                isSelected 
                  ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.15)] scale-[1.02] z-10' 
                  : 'border-slate-700/50 bg-slate-800/50 hover:border-emerald-500/30 hover:bg-slate-800/80 hover:shadow-lg'
              } backdrop-blur-sm`}
            >
              {isSelected && (
                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/20 blur-xl rounded-full -mr-8 -mt-8"></div>
              )}
              <h4 className={`text-lg font-bold ${isSelected ? 'text-emerald-400' : 'text-slate-200'}`}>
                {opt.name}
              </h4>
              {opt.desc && <p className={`text-sm mt-2 ${isSelected ? 'text-emerald-200/70' : 'text-slate-400'}`}>{opt.desc}</p>}
            </div>
          );
        })}
      </div>
      
      {multiSelect && Array.isArray(selectedId) && selectedId.length > 0 && (
        <div className="mt-8 text-center animate-fade-in">
          <button 
            onClick={onContinue}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-3 px-8 rounded-xl shadow-lg transition-all hover:scale-105"
          >
            Lanjutkan
          </button>
        </div>
      )}
    </div>
  );
}
