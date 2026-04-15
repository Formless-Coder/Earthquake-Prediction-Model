import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

export const WarningFAB: React.FC = () => {
  return (
    <div className="fixed bottom-10 right-10 z-50">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 bg-seismic-danger flex items-center justify-center group shadow-2xl shadow-seismic-danger/40 rounded-full border border-white/10"
      >
        <AlertTriangle 
          size={24} 
          className="text-white group-hover:rotate-6 transition-transform duration-300" 
        />
        
        {/* Subtle Glow effect */}
        <div className="absolute inset-0 rounded-full bg-seismic-danger/20 blur-xl group-hover:bg-seismic-danger/40 transition-all pointer-events-none" />
      </motion.button>
    </div>
  );
};
