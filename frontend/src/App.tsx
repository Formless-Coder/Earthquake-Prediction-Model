import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { InputPanel } from './components/InputPanel';
import { MapDisplay } from './components/MapDisplay';
import { MetricsPanel } from './components/MetricsPanel';
import { RiskAnalysis } from './components/RiskAnalysis';
import { HistoricalLogs } from './components/HistoricalLogs';
import { WarningFAB } from './components/WarningFAB';

export interface PredictionResult {
  magnitude: number;
  depth: number;
  radius: number;
  confidence: number;
  location: string;
  timestamp: string;
}

function App() {
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredictionUpdate = (result: PredictionResult) => {
    setPrediction(result);
  };

  const handleLoadingUpdate = (isLoading: boolean) => {
    setLoading(isLoading);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-seismic-bg font-sans text-slate-200 selection:bg-seismic-cyan selection:text-seismic-bg flex">
      {/* Softened Background Dots Grid */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Sidebar - Left Panel */}
      <aside className="w-[360px] h-full flex-shrink-0 border-r border-white/5 bg-seismic-surface-1/40 backdrop-blur-3xl flex flex-col z-20 shadow-2xl">
        <Sidebar />
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-transparent">
          <InputPanel onPredict={handlePredictionUpdate} onLoading={handleLoadingUpdate} />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-full flex flex-col relative z-10 overflow-hidden bg-gradient-to-br from-seismic-bg to-seismic-surface-1/10">
        {/* Top Section - Interactive Map */}
        <div className="flex-[0.6] min-h-[400px] border-b border-white/5 relative">
          <MapDisplay prediction={prediction} loading={loading} />
        </div>

        {/* Bottom Section - Data Panels */}
        <div className="flex-[0.4] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 h-full">
            <div className="border-r border-white/5 h-full bg-seismic-bg/20">
              <MetricsPanel prediction={prediction} />
            </div>
            <div className="border-r border-white/5 h-full bg-seismic-bg/20">
              <RiskAnalysis prediction={prediction} />
            </div>
            <div className="h-full bg-seismic-bg/20">
              <HistoricalLogs />
            </div>
          </div>
        </div>
      </main>

      <WarningFAB />
    </div>
  );
}

export default App;
