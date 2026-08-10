import { createContext, useContext, useState, useEffect } from 'react';
import { getMasterData } from '../services/db';

const PeriodContext = createContext();

export function PeriodProvider({ children }) {
  const [periods, setPeriods] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPeriods = async () => {
      try {
        const data = await getMasterData('periods');
        setPeriods(data);
        
        // Find the active period by default
        const active = data.find(p => p.isActive);
        if (active) {
          setSelectedPeriod(active._docId);
        } else if (data.length > 0) {
          setSelectedPeriod(data[0]._docId);
        }
      } catch (err) {
        console.error("Failed to fetch periods", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPeriods();
  }, []);

  return (
    <PeriodContext.Provider value={{ periods, selectedPeriod, setSelectedPeriod, loading }}>
      {children}
    </PeriodContext.Provider>
  );
}

export function usePeriod() {
  return useContext(PeriodContext);
}
