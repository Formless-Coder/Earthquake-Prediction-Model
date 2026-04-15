import React from 'react';
import { Menu, User, LayoutGrid } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <header className="p-6 border-b border-white/5 bg-seismic-bg/50">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <LayoutGrid size={24} className="text-seismic-cyan" />
          <h1 className="font-sans text-2xl font-black tracking-tight text-white">
            SEISMIC<span className="text-seismic-cyan">_INTEL</span>
          </h1>
        </div>
        <p className="seismic-label text-[10px] leading-relaxed max-w-[200px] text-slate-400">
          AI-POWERED PREDICTION ENGINE
        </p>
      </div>
    </header>
  );
};
