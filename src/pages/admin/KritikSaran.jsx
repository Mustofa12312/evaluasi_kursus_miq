import { useState, useEffect } from 'react';
import { getResponsesByRole, getAllQuestions } from '../../services/db';
import { MessageSquare, Quote } from 'lucide-react';

export default function KritikSaran() {
  const [responses, setResponses] = useState([]);
  const [textQuestions, setTextQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      getResponsesByRole('peserta'),
      getResponsesByRole('pendamping'),
      getResponsesByRole('muallim'),
      getResponsesByRole('panitia'),
      getAllQuestions()
    ]).then(([peserta, pendamping, muallim, panitia, questions]) => {
      // Find all text type questions
      const texts = questions.filter(q => q.type === 'text');
      setTextQuestions(texts);
      
      setResponses([...peserta, ...pendamping, ...muallim, ...panitia]);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="py-12 text-center text-slate-500 animate-pulse">Memuat data kritik dan saran dinamis...</div>;

  // Filter responses that actually have answers for the text questions
  const feedbackItems = [];
  
  responses.forEach(res => {
    if (!res.answers) return;
    
    textQuestions.forEach(q => {
      // If the question role matches the response role, and there's an answer
      if ((q.role === 'all' || q.role === res.role) && res.answers[q._docId]) {
        // Exclude empty strings
        if (String(res.answers[q._docId]).trim() !== '') {
          feedbackItems.push({
            id: `${res.id}-${q._docId}`,
            role: res.role,
            date: res.submittedAt,
            questionText: q.text,
            answer: res.answers[q._docId]
          });
        }
      }
    });
  });

  return (
    <div className="animate-fade-in pb-12">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-sky-500/20 rounded-2xl border border-sky-500/30">
          <MessageSquare size={32} className="text-sky-400" />
        </div>
        <div>
          <h1 className="text-3xl font-display font-bold text-white mb-1">Kritik & Saran</h1>
          <p className="text-slate-400">Masukan kualitatif dinamis dari seluruh responden.</p>
        </div>
      </div>

      {feedbackItems.length === 0 ? (
        <div className="glass-panel p-12 text-center text-slate-500 border border-slate-700/50">
          Belum ada saran kualitatif yang masuk dari form mana pun.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbackItems.map(item => (
            <div key={item.id} className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-3xl shadow-lg relative group hover:bg-slate-800/60 hover:border-sky-500/30 transition-all flex flex-col h-full">
              <Quote size={80} className="absolute -top-4 -right-4 text-slate-800/50 -rotate-12 pointer-events-none group-hover:text-sky-900/20 transition-colors" />
              
              <div className="flex justify-between items-center border-b border-slate-700/50 pb-3 mb-4 relative z-10">
                <span className="text-xs uppercase tracking-wider font-bold text-sky-400 bg-sky-400/10 px-2 py-1 rounded">
                  {item.role}
                </span>
                <span className="text-xs text-slate-500">{new Date(item.date).toLocaleDateString('id-ID')}</span>
              </div>
              
              <div className="flex-1 relative z-10 flex flex-col">
                <h4 className="text-sm font-semibold text-slate-300 mb-2 leading-snug">
                  "{item.questionText}"
                </h4>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 flex-1">
                  <p className="text-slate-200 text-sm leading-relaxed italic">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
