import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPrograms, getClassesByProgram, getMuallimsByClass, getQuestionsByRole, submitEvaluation } from '../../services/db';
import SelectCard from '../../components/form/SelectCard';
import DynamicForm from '../../components/form/DynamicForm';
import { CheckCircle } from 'lucide-react';

export default function PesertaForm() {
  const navigate = useNavigate();
  
  // States for flow
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Data States
  const [programs, setPrograms] = useState([]);
  const [classes, setClasses] = useState([]);
  const [muallims, setMuallims] = useState([]);
  const [questions, setQuestions] = useState([]);
  
  // Loading States
  const [loadingObj, setLoadingObj] = useState({ prog: true, cls: false, mual: false, qst: false });
  
  // Selection Context
  const [context, setContext] = useState({
    programId: null,
    classId: null,
    muallimId: null
  });

  // Fetch initial data (Programs)
  useEffect(() => {
    getPrograms().then(data => {
      setPrograms(data);
      setLoadingObj(prev => ({ ...prev, prog: false }));
    });
  }, []);

  const handleSelectProgram = (id) => {
    setContext(prev => ({ ...prev, programId: id, classId: null, muallimId: null }));
    setLoadingObj(prev => ({ ...prev, cls: true }));
    setStep(2);
    getClassesByProgram(id).then(data => {
      setClasses(data);
      setLoadingObj(prev => ({ ...prev, cls: false }));
    });
  };

  const handleSelectClass = (id) => {
    setContext(prev => ({ ...prev, classId: id, muallimId: null }));
    setLoadingObj(prev => ({ ...prev, mual: true }));
    setStep(3);
    getMuallimsByClass(id).then(data => {
      setMuallims(data);
      setLoadingObj(prev => ({ ...prev, mual: false }));
    });
  };

  const handleSelectMuallim = (id) => {
    setContext(prev => ({ ...prev, muallimId: id }));
    setLoadingObj(prev => ({ ...prev, qst: true }));
    setStep(4);
    getQuestionsByRole('peserta').then(data => {
      setQuestions(data);
      setLoadingObj(prev => ({ ...prev, qst: false }));
    });
  };

  const handleFormSubmit = async (formData) => {
    setIsSubmitting(true);
    const evaluationData = {
      role: 'peserta',
      context,
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

  // Render Success Page directly here or use navigate
  if (isSuccess) {
    return (
      <div className="container max-w-2xl text-center py-16 animate-fade-in">
        <div className="icon-wrapper w-20 h-20 mx-auto mb-6 bg-[rgba(16,185,129,0.2)]">
          <CheckCircle size={48} className="text-primary" />
        </div>
        <h1 className="text-4xl text-primary font-display mb-4">Terima Kasih!</h1>
        <p className="text-xl text-muted mb-8">
          Evaluasi Anda telah berhasil direkam. Masukan Anda sangat berharga untuk perbaikan Kursus Tartil Al-Qur'an di masa mendatang.
        </p>
        <button onClick={() => navigate('/')} className="btn btn-primary">
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl py-8">
      {/* Progress Indicator */}
      <div className="mb-12">
        <h1 className="text-3xl text-center font-display mb-6">Evaluasi Peserta</h1>
        <div className="flex justify-between items-center relative max-w-2xl mx-auto">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-surface -z-10 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 h-1 bg-primary -z-10 -translate-y-1/2 transition-all duration-300" style={{ width: `${(step - 1) * 33.33}%` }}></div>
          
          {['Program', 'Kelas', 'Muallim', 'Evaluasi'].map((label, idx) => {
            const currentStep = idx + 1;
            const isActive = step >= currentStep;
            return (
              <div key={label} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-2 transition-colors ${isActive ? 'bg-primary text-white' : 'bg-surface text-muted border border-border'}`}>
                  {currentStep}
                </div>
                <span className={`text-xs ${isActive ? 'text-primary' : 'text-muted'}`}>{label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="min-h-[400px]">
        {step === 1 && (
          <SelectCard 
            title="Pilih Program yang Anda Ikuti"
            options={programs}
            selectedId={context.programId}
            onSelect={handleSelectProgram}
            loading={loadingObj.prog}
          />
        )}
        
        {step === 2 && (
          <div className="animate-fade-in">
            <button onClick={() => setStep(1)} className="text-primary text-sm mb-4 inline-flex items-center hover:underline">
              &larr; Kembali
            </button>
            <SelectCard 
              title="Pilih Kelas / Kelompok Anda"
              options={classes}
              selectedId={context.classId}
              onSelect={handleSelectClass}
              loading={loadingObj.cls}
            />
          </div>
        )}
        
        {step === 3 && (
          <div className="animate-fade-in">
            <button onClick={() => setStep(2)} className="text-primary text-sm mb-4 inline-flex items-center hover:underline">
              &larr; Kembali
            </button>
            <SelectCard 
              title="Pilih Muallim Anda"
              options={muallims}
              selectedId={context.muallimId}
              onSelect={handleSelectMuallim}
              loading={loadingObj.mual}
            />
          </div>
        )}
        
        {step === 4 && (
          <div className="animate-fade-in">
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
