import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPrograms, getClassesByProgram, getQuestionsByRole, submitEvaluation, getSecuritySettings } from '../../services/db';
import SelectCard from '../../components/form/SelectCard';
import DynamicForm from '../../components/form/DynamicForm';
import IdentityForm from '../../components/form/IdentityForm';
import PinGate from '../../components/form/PinGate';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { usePeriod } from '../../context/PeriodContext';

export default function MuallimForm() {
  const navigate = useNavigate();
  const { selectedPeriod } = usePeriod();
  
  // States for flow
  const [step, setStep] = useState(0); // 0: PinGate, 1: Identity, 2: Program, 3: Class, 4: Eval
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [pinSettings, setPinSettings] = useState({ enabled: false, pin: '' });
  
  // Data States
  const [programs, setPrograms] = useState([]);
  const [classes, setClasses] = useState([]);
  const [questions, setQuestions] = useState([]);
  
  // Loading States
  const [loadingObj, setLoadingObj] = useState({ prog: true, cls: false, qst: false });
  
  // Selection Context
  const [context, setContext] = useState({
    identity: null,
    programId: null,
    classId: null
  });

  const [isInitializing, setIsInitializing] = useState(true);

  // Fetch initial data (Programs)
  useEffect(() => {
    Promise.all([
      getPrograms(),
      getSecuritySettings()
    ]).then(([programsData, settingsData]) => {
      setPrograms(programsData);
      setLoadingObj(prev => ({ ...prev, prog: false }));
      
      if (settingsData && settingsData.muallim?.enabled) {
        setPinSettings(settingsData.muallim);
        setStep(0);
      } else {
        setStep(1);
      }
      setIsInitializing(false);
    });
  }, []);

  const handleSelectIdentity = (identity) => {
    setContext(prev => ({ ...prev, identity }));
    setStep(2);
  };

  const handleSelectProgram = (id) => {
    setContext(prev => ({ ...prev, programId: id, classId: null }));
    setLoadingObj(prev => ({ ...prev, cls: true }));
    setStep(3);
    getClassesByProgram(id).then(data => {
      setClasses(data);
      setLoadingObj(prev => ({ ...prev, cls: false }));
    });
  };

  const handleSelectClass = (id) => {
    setContext(prev => ({ ...prev, classId: id }));
    setLoadingObj(prev => ({ ...prev, qst: true }));
    setStep(4);
    getQuestionsByRole('muallim').then(data => {
      setQuestions(data);
      setLoadingObj(prev => ({ ...prev, qst: false }));
    });
  };

  const handleFormSubmit = async (formData) => {
    setIsSubmitting(true);
    const evaluationData = {
      role: 'muallim',
      context: { ...context, periodId: selectedPeriod },
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
        <h1 className="text-5xl text-slate-100 font-display font-bold mb-6">Terima Kasih, Ustadz/Ustadzah!</h1>
        <p className="text-xl text-slate-400 mb-12 leading-relaxed">
          Evaluasi dan masukan Anda sangat penting untuk meningkatkan kualitas pembelajaran di masa mendatang.
        </p>
        <button onClick={() => navigate('/')} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl border border-slate-600 transition-colors font-medium">
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  if (isInitializing) {
    return (
      <div className="py-32 flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      {/* Premium Progress Indicator */}
      <div className="mb-16">
        <h1 className="text-4xl text-center font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-12">
          Evaluasi Muallim
        </h1>
        
        <div className="relative max-w-2xl mx-auto px-2 sm:px-6">
          {/* Track Lines */}
          <div className="absolute top-5 left-10 right-10 sm:left-14 sm:right-14 h-1 bg-slate-800 rounded-full -translate-y-1/2 -z-10"></div>
          <div 
            className="absolute top-5 left-10 sm:left-14 h-1 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full -translate-y-1/2 -z-10 transition-all duration-700 shadow-[0_0_10px_rgba(168,85,247,0.5)]" 
            style={{ width: `calc(${(step - 1) * 33.33}%)` }}
          ></div>
          
          <div className="flex justify-between items-start">
            {['Identitas', 'Program', 'Kelas Ajaran', 'Evaluasi'].map((label, idx) => {
              const currentStep = idx + 1;
              const isActive = step >= currentStep;
              const isCurrent = step === currentStep;
              
              return (
                <div key={label} className="flex flex-col items-center relative z-10 w-20">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-3 transition-all duration-500 shadow-lg
                    ${isActive 
                      ? 'bg-purple-500 text-slate-900 border-2 border-purple-400 scale-110 shadow-purple-500/50' 
                      : 'bg-slate-800 text-slate-500 border-2 border-slate-700'
                    }
                    ${isCurrent ? 'ring-4 ring-purple-500/20 ring-offset-2 ring-offset-slate-900' : ''}
                  `}>
                    {isActive && !isCurrent ? (
                      <CheckCircle size={20} />
                    ) : (
                      <span>{currentStep}</span>
                    )}
                  </div>
                  <span className={`text-sm font-medium transition-colors duration-300 ${isActive ? 'text-purple-400' : 'text-slate-500'} text-center`}>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-[500px] relative">
        {step === 0 && (
          <PinGate 
            roleName="Muallim" 
            requiredPin={pinSettings.pin} 
            onSuccess={() => setStep(1)} 
          />
        )}

        {step === 1 && (
          <IdentityForm onSubmit={handleSelectIdentity} hideLembaga={true} />
        )}

        {step === 2 && (
          <div className="animate-slide-up opacity-0 fill-mode-forwards">
            <button onClick={() => setStep(1)} className="text-purple-400 font-medium text-sm mb-6 inline-flex items-center hover:text-purple-300 transition-colors bg-purple-400/10 px-4 py-2 rounded-lg">
              <ArrowLeft size={16} className="mr-2" /> Kembali ke Identitas
            </button>
            <SelectCard 
              title="Pilih Program yang Anda Ajar"
              options={programs}
              selectedId={context.programId}
              onSelect={handleSelectProgram}
              loading={loadingObj.prog}
            />
          </div>
        )}
        
        {step === 3 && (
          <div className="animate-slide-up opacity-0 fill-mode-forwards">
            <button onClick={() => setStep(2)} className="text-purple-400 font-medium text-sm mb-6 inline-flex items-center hover:text-purple-300 transition-colors bg-purple-400/10 px-4 py-2 rounded-lg">
              <ArrowLeft size={16} className="mr-2" /> Kembali ke Program
            </button>
            <SelectCard 
              title="Pilih Kelas yang Anda Ajar"
              options={classes}
              selectedId={context.classId}
              onSelect={handleSelectClass}
              loading={loadingObj.cls}
            />
          </div>
        )}
        
        {step === 4 && (
          <div>
            <DynamicForm 
              questions={questions}
              onSubmit={handleFormSubmit}
              onBack={() => setStep(3)}
              loading={loadingObj.qst || isSubmitting}
            />
          </div>
        )}
      </div>
    </div>
  );
}
