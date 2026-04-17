import React, { useState } from 'react';
import { Target, Activity, Loader2 } from 'lucide-react';
import { PredictionResult } from '../App';

interface InputPanelProps {
  onPredict: (result: PredictionResult) => void;
  onLoading: (isLoading: boolean) => void;
}

export const InputPanel: React.FC<InputPanelProps> = ({ onPredict, onLoading }) => {
  const [latitude, setLatitude] = useState('34.0522');
  const [longitude, setLongitude] = useState('-118.2437');
  const [dateTime, setDateTime] = useState(new Date().toISOString().slice(0, 16));
  const [isLoading, setIsLoading] = useState(false);

  const handlePredict = async () => {
    setIsLoading(true);
    onLoading(true);
    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          date_time: dateTime,
        }),
      });

      if (!response.ok) {
        throw new Error('Prediction failed');
      }

      const data = await response.json();
      onPredict(data);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to get prediction from server. Make sure the backend is running at http://localhost:8000');
    } finally {
      setIsLoading(false);
      onLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-4 bg-seismic-cyan/40 rounded-full" />
            <h3 className="font-sans text-xs font-bold tracking-widest text-slate-300">PARAMETER_INPUT</h3>
          </div>
          <Activity size={18} className={`text-slate-600 ${isLoading ? 'animate-pulse text-seismic-cyan' : ''}`} />
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="seismic-label ml-1">LATITUDE (-90 TO 90)</label>
            <input 
              type="number" 
              step="any"
              value={latitude} 
              onChange={(e) => setLatitude(e.target.value)}
              className="input-field w-full font-data text-sm py-4 px-4"
            />
          </div>

          <div className="space-y-2">
            <label className="seismic-label ml-1">LONGITUDE (-180 TO 180)</label>
            <input 
              type="number" 
              step="any"
              value={longitude} 
              onChange={(e) => setLongitude(e.target.value)}
              className="input-field w-full font-data text-sm py-4 px-4"
            />
          </div>

          <div className="space-y-2 relative">
            <label className="seismic-label ml-1">TARGET DATE & TIME</label>
            <input 
              type="datetime-local" 
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="input-field w-full font-data text-sm py-4 px-4"
            />
          </div>
        </div>

        <button 
          onClick={handlePredict}
          disabled={isLoading}
          className="btn-primary w-full group py-5 rounded-xl shadow-xl shadow-seismic-danger/10 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <Loader2 size={20} className="animate-spin text-white" />
          ) : (
            <Target size={20} className="group-hover:rotate-45 transition-transform" />
          )}
          <span className="font-bold">{isLoading ? 'PROCESSING...' : 'PREDICT_NOW'}</span>
        </button>
      </div>

      <div className="pt-8 mx-6 border-t border-white/5 space-y-4">
        <p className="seismic-label">QUICK_PRESETS</p>
        <div className="grid grid-cols-1 gap-3">
          <button 
            onClick={() => { setLatitude('35.7'); setLongitude('-117.5'); }}
            className="text-left p-4 rounded-xl border border-white/5 hover:bg-white/5 text-[11px] font-medium uppercase tracking-wider transition-all text-slate-400 hover:text-white"
          >
            San Andreas Fault Line
          </button>
          <button 
            onClick={() => { setLatitude('37.0'); setLongitude('-121.7'); }}
            className="text-left p-4 rounded-xl border border-white/5 hover:bg-white/5 text-[11px] font-medium uppercase tracking-wider transition-all text-slate-400 hover:text-white"
          >
            Calaveras Strike-Slip
          </button>
        </div>
      </div>
    </div>
  );
};
