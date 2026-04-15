import React from 'react';
import { Home, Compass, BarChart3, Settings } from 'lucide-react';

export const BottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-seismic-bg/90 backdrop-blur-xl border-t border-white/5 flex items-center justify-around h-20 px-4 z-50">
      <button className="p-3 text-seismic-cyan bg-seismic-cyan/5 border-b-2 border-seismic-cyan">
        <Home size={24} />
      </button>
      <button className="p-3 text-white/40 hover:text-white transition-colors">
        <Compass size={24} />
      </button>
      <button className="p-3 text-white/40 hover:text-white transition-colors">
        <BarChart3 size={24} />
      </button>
      <button className="p-3 text-white/40 hover:text-white transition-colors">
        <Settings size={24} />
      </button>
    </nav>
  );
};
