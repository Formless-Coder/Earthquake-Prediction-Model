import React from 'react';

const logs = [
  { id: 1, location: 'SAN_ANDREAS_FLT', date: '2023.10.12 // 14:22', magnitude: '6.8M' },
  { id: 2, location: 'HOKKAIDO_TRENCH', date: '2023.10.11 // 09:15', magnitude: '5.2M' },
  { id: 3, location: 'ALASKA_RANGE_S', date: '2023.10.08 // 23:44', magnitude: '4.9M' }
];

export const HistoricalLogs: React.FC = () => {
  return (
    <div className="p-8 h-full flex flex-col space-y-6">
      <p className="seismic-label text-slate-500">HISTORICAL_LOGS</p>
      
      <div className="flex-1 space-y-3 overflow-y-auto custom-scrollbar pr-2">
        {logs.map((log) => (
          <div key={log.id} className="elevated-panel p-5 flex justify-between items-center hover:bg-white/5 transition-all group cursor-pointer border-white/5 bg-seismic-surface-1/30 rounded-xl">
            <div className="space-y-1">
              <h4 className="font-sans font-bold text-sm tracking-tight text-slate-200 group-hover:text-white transition-colors">{log.location}</h4>
              <p className="font-data text-[10px] text-slate-500 uppercase tracking-tighter">{log.date}</p>
            </div>
            <div className="font-data text-xl font-black text-slate-700 group-hover:text-seismic-cyan transition-all">
              {log.magnitude}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
