import React from 'react';
import { Download, Bell, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const RiskAnalysis: React.FC = () => {
  return (
    <div className="p-8 h-full flex flex-col justify-between space-y-8">
      <div className="space-y-4">
        <div className="flex justify-between items-end px-1">
          <p className="seismic-label text-slate-400">REGIONAL RISK LEVEL</p>
          <p className="seismic-label font-bold text-seismic-danger">EXTREME_THREAT</p>
        </div>
        <div className="h-2.5 flex bg-white/5 rounded-full overflow-hidden shadow-inner">
          <div className="flex-[0.25] bg-seismic-cyan/40 h-full" />
          <div className="flex-[0.25] bg-seismic-warning/40 h-full" />
          <div className="flex-[0.35] bg-seismic-danger/60 h-full shadow-[0_0_15px_rgba(244,63,94,0.3)]" />
          <div className="flex-[0.15] h-full" />
        </div>
      </div>

      <div className="space-y-6 flex-1 flex flex-col justify-center">
        <div className="flex justify-between items-end px-1">
          <p className="seismic-label text-slate-500">MODEL CONFIDENCE</p>
          <p className="font-data text-lg font-bold text-seismic-cyan drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]">92.4%</p>
        </div>
        
        <div className="elevated-panel p-6 flex items-center justify-center gap-1.5 overflow-hidden h-24 bg-seismic-bg/40 border-white/5">
          {[...Array(35)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 4 }}
              animate={{ 
                height: [
                  4 + Math.random() * 40, 
                  10 + Math.random() * 55, 
                  4 + Math.random() * 40
                ],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: 1.5 + Math.random(), 
                repeat: Infinity,
                delay: i * 0.04
              }}
              className={`w-[4px] rounded-full bg-seismic-cyan/50 ${i > 30 ? 'bg-white/5' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-3 p-4 rounded-xl border border-seismic-cyan/20 bg-seismic-cyan/5 hover:bg-seismic-cyan/10 transition-all font-sans text-[11px] font-bold tracking-wider text-seismic-cyan shadow-sm">
          <Download size={16} />
          EXPORT_DATA
        </button>
        <button className="flex items-center justify-center gap-3 p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-all font-sans text-[11px] font-bold tracking-wider text-slate-400 hover:text-white">
          <Share2 size={16} />
          ALERT_HQ
        </button>
      </div>
    </div>
  );
};
