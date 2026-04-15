import React from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import { motion, AnimatePresence } from 'framer-motion';
import { Crosshair } from 'lucide-react';

// Custom Marker Icon using DivIcon to allow Tailwind styling
const createSeismicIcon = () => {
  return L.divIcon({
    html: `
      <div class="relative flex items-center justify-center">
        <div class="absolute w-24 h-24 bg-[#ea3c3c33] animate-radar rounded-full"></div>
        <div class="w-8 h-8 bg-[#ea3c3c] shadow-[0_0_20px_rgba(234,60,60,0.6)] flex items-center justify-center border border-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M3 12h1m8-9v1m8 8h1m-9 8v1m-6.4-15.4l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"/></svg>
        </div>
      </div>
    `,
    className: 'seismic-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
};

const MapController = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  React.useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  return null;
};

export const MapDisplay: React.FC = () => {
  const [center] = React.useState<[number, number]>([34.0522, -118.2437]);

  return (
    <div className="w-full h-full relative bg-seismic-bg overflow-hidden cursor-crosshair">
      <MapContainer 
        center={center} 
        zoom={8} 
        scrollWheelZoom={true}
        className="w-full h-full z-10"
        zoomControl={false}
      >
        {/* Dark Matter Tiles for the Seismic Aesthetic */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        
        <MapController center={center} />

        <Marker position={center} icon={createSeismicIcon()} />

        {/* Custom Controls Overlay */}
        <div className="absolute top-8 left-8 z-[1000] flex flex-col gap-2">
          <div className="flex items-center gap-3 bg-seismic-bg/80 backdrop-blur-xl px-5 py-2.5 border border-white/10 rounded-full shadow-2xl">
            <motion.div 
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2.5 h-2.5 bg-seismic-cyan shadow-[0_0_12px_#06b6d4] rounded-full"
            />
            <span className="seismic-label font-bold text-seismic-cyan tracking-wider">LIVE TELEMETRY</span>
          </div>
        </div>

        {/* Coordinate Focus HUD */}
        <div className="absolute bottom-10 right-10 z-[1000] text-right bg-seismic-bg/70 backdrop-blur-2xl p-8 border border-white/10 group shadow-2xl rounded-2xl overflow-hidden min-w-[280px]">
          <div className="absolute inset-0 bg-gradient-to-br from-seismic-cyan/5 to-transparent pointer-events-none" />
          <p className="seismic-label mb-3 text-slate-400">TARGET_COORDINATE</p>
          <div className="space-y-1 relative">
            <h3 className="font-data text-3xl font-bold tracking-tight text-white">
              34.0522° N
            </h3>
            <h3 className="font-data text-3xl font-bold tracking-tight text-white">
              118.2437° W
            </h3>
          </div>
          <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-end gap-3 text-slate-500">
            <Crosshair size={14} />
            <span className="font-data text-[10px] tracking-tight">SCAN_ACCURACY: 99.8%</span>
          </div>
        </div>
      </MapContainer>

      {/* Grid Overlay for extra Brutalist texture */}
      <div 
        className="absolute inset-0 pointer-events-none z-20 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />
    </div>
  );
};
