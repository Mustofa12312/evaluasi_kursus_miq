import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getQuestionsByRole, submitEvaluation, getSecuritySettings } from '../../services/db';
import DynamicForm from '../../components/form/DynamicForm';
import IdentityForm from '../../components/form/IdentityForm';
import PinGate from '../../components/form/PinGate';
import { CheckCircle } from 'lucide-react';
import { usePeriod } from '../../context/PeriodContext';

export default function PanitiaForm() {
  const navigate = useNavigate();
  const { selectedPeriod } = usePeriod();
  
  const [step, setStep] = useState(0); // 0: PinGate, 1: Identity, 2: Form
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [pinSettings, setPinSettings] = useState({ enabled: false, pin: '' });
  
  const [identity, setIdentity] = useState(null);

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch initial data
  useEffect(() => {
    Promise.all([
      getQuestionsByRole('panitia'),
      getSecuritySettings()
    ]).then(([questionsData, settingsData]) => {
      setQuestions(questionsData);
      
      if (settingsData && settingsData.panitia?.enabled) {
        setPinSettings(settingsData.panitia);
        setStep(0);
      } else {
        setStep(2);
      }
      
      setLoading(false);
    });
  }, []);

  const handleFormSubmit = async (formData) => {
    setIsSubmitting(true);
    const evaluationData = {
      role: 'panitia',
      context: { programId: 'all', classId: 'all', identity, periodId: selectedPeriod }, // Panitia mengevaluasi secara keseluruhan
      answers: formData,
      submittedAt: new Date().toISOString()
    };
    
    try {
      await submitEvaluation(evaluationData);
      setIsSuccess(true);
    } catch (error) {
      console.error("Gagal mengirim:", error);
      alert("Terjadi kesalahan saat mengirim evaluasi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render Success Page
  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto text-center py-24 animate-slide-up px-4">
        <div className="relative w-32 h-32 mx-auto mb-8 flex justify-center items-center">
          <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping"></div>
          <div className="relative bg-emerald-500/20 p-6 rounded-full border-2 border-emerald-500/50 backdrop-blur-md">
            <CheckCircle size={64} className="text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
          </div>
        </div>
        <h1 className="text-5xl text-slate-100 font-display font-bold mb-6">Terima Kasih, Tim Panitia!</h1>
        <p className="text-xl text-slate-400 mb-12 leading-relaxed">
          Evaluasi internal Anda sangat krusial untuk penyelenggaraan yang lebih baik dan profesional di tahun berikutnya.
        </p>
        <button onClick={() => navigate('/')} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl border border-slate-600 transition-colors font-medium">
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="py-32 flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      <div className="mb-12">
        <h1 className="text-4xl text-center font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-4">
          Evaluasi Assatidz Panitia
        </h1>
        <p className="text-center text-slate-400 max-w-xl mx-auto">
          Berikan penilaian objektif terkait pelaksanaan acara tahun ini demi perbaikan berkelanjutan.
        </p>
      </div>

      <div className="min-h-[500px]">
        {step === 0 && (
          <PinGate 
            roleName="Panitia" 
            requiredPin={pinSettings.pin} 
            onSuccess={() => setStep(2)} 
            onCancel={() => navigate('/')}
          />
        )}
        {step === 2 && (
          <DynamicForm 
            questions={questions}
            onSubmit={handleFormSubmit}
            loading={loading || isSubmitting}
            onBack={() => navigate('/')}
          />
        )}
      </div>
    </div>
  );
}
