import React from 'react';
import { Target, Activity } from 'lucide-react';

export const InputPanel: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-4 bg-seismic-cyan/40 rounded-full" />
            <h3 className="font-sans text-xs font-bold tracking-widest text-slate-300">PARAMETER_INPUT</h3>
          </div>
          <Activity size={18} className="text-slate-600" />
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="seismic-label ml-1">LATITUDE (-90 TO 90)</label>
            <input 
              type="text" 
              defaultValue="34.0522" 
              className="input-field w-full font-data text-sm py-4 px-4"
            />
          </div>

          <div className="space-y-2">
            <label className="seismic-label ml-1">LONGITUDE (-180 TO 180)</label>
            <input 
              type="text" 
              defaultValue="-118.2437" 
              className="input-field w-full font-data text-sm py-4 px-4"
            />
          </div>

          <div className="space-y-2 relative">
            <label className="seismic-label ml-1">TARGET DATE & TIME</label>
            <input 
              type="datetime-local" 
              className="input-field w-full font-data text-sm py-4 px-4"
            />
          </div>
        </div>

        <button className="btn-primary w-full group py-5 rounded-xl shadow-xl shadow-seismic-danger/10">
          <Target size={20} className="group-hover:rotate-45 transition-transform" />
          <span className="font-bold">PREDICT_NOW</span>
        </button>
      </div>

      <div className="pt-8 mx-6 border-t border-white/5 space-y-4">
        <p className="seismic-label">QUICK_PRESETS</p>
        <div className="grid grid-cols-1 gap-3">
          <button className="text-left p-4 rounded-xl border border-white/5 hover:bg-white/5 text-[11px] font-medium uppercase tracking-wider transition-all text-slate-400 hover:text-white">
            San Andreas Fault Line
          </button>
          <button className="text-left p-4 rounded-xl border border-white/5 hover:bg-white/5 text-[11px] font-medium uppercase tracking-wider transition-all text-slate-400 hover:text-white">
            Calaveras Strike-Slip
          </button>
        </div>
      </div>
    </div>
  );
};
