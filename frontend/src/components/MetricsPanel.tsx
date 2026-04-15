import React from 'react';

export const MetricsPanel: React.FC = () => {
  return (
    <div className="p-8 h-full flex flex-col justify-between space-y-6">
      <div className="elevated-panel p-10 flex-1 flex flex-col justify-center space-y-6 bg-seismic-surface-1/40 border-white/5 shadow-2xl">
        <div className="flex justify-between items-start">
          <p className="seismic-label text-slate-400">PREDICTED MAGNITUDE</p>
          <div className="bg-seismic-danger/10 text-seismic-danger border border-seismic-danger/20 px-4 py-1.5 text-[10px] font-sans font-black tracking-widest uppercase rounded-full">
            CRITICAL
          </div>
        </div>
        
        <div className="flex items-baseline gap-4">
          <span className="font-data text-8xl font-black tracking-tighter leading-none text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            7.2
          </span>
          <span className="font-data text-4xl font-light text-seismic-danger leading-none">
            M_w
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="elevated-panel p-6 space-y-2 bg-seismic-surface-1/30">
          <p className="seismic-label text-slate-500">EST. DEPTH</p>
          <div className="flex items-baseline gap-2">
            <span className="font-data text-3xl font-bold text-white">12.4</span>
            <span className="seismic-label text-seismic-cyan/60 font-black">KM</span>
          </div>
        </div>

        <div className="elevated-panel p-6 space-y-2 bg-seismic-surface-1/30">
          <p className="seismic-label text-slate-500">RADIUS</p>
          <div className="flex items-baseline gap-2">
            <span className="font-data text-3xl font-bold text-white">4.8</span>
            <span className="seismic-label text-seismic-cyan/60 font-black">KM</span>
          </div>
        </div>
      </div>
    </div>
  );
};
