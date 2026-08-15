import React, { useState } from 'react';
import { MapPin, Phone, ArrowRight, CheckCircle2, ShieldCheck, Navigation } from 'lucide-react';
import { locationsData } from '../data/locations';
import type { LocationData } from '../data/locations';
import { siteConfig } from '../config/site';

interface ServiceAreasProps {
  onOpenQuoteModal?: () => void;
}

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ onOpenQuoteModal }) => {
  const [selectedLocation, setSelectedLocation] = useState<LocationData>(locationsData[0]);

  return (
    <section id="locations" className="w-full bg-[#0B1220] py-12 sm:py-16 lg:py-24 text-white border-t border-slate-800">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[#1D61E7] font-bold text-[11px] sm:text-xs tracking-wide uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>CENTRAL TEXAS COVERAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Serving Austin & Surrounding Communities
          </h2>

          <p className="text-slate-300 font-medium text-sm sm:text-base lg:text-lg leading-relaxed">
            Fast diagnostic response and dedicated roofing field crews across Central Texas.
          </p>
        </div>

        {/* 2-Column Grid: City Selector & Interactive Dispatch Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (5 cols): City Dispatch Selector Grid */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-5 sm:p-7 border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Select Your Location</h3>
              <p className="text-xs text-slate-400 font-medium mb-4">
                Click a Central Texas city to view response times and local service details:
              </p>

              {/* 2-Column Mobile City Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {locationsData.map((loc) => {
                  const isSelected = selectedLocation.slug === loc.slug;
                  return (
                    <button
                      key={loc.slug}
                      onClick={() => setSelectedLocation(loc)}
                      className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#1D61E7] border-[#1D61E7] text-white shadow-md'
                          : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="text-xs sm:text-sm font-extrabold">{loc.name}, {loc.state}</div>
                        <div className={`text-[10px] font-medium ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                          {loc.response}
                        </div>
                      </div>
                      <Navigation className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Dispatch Action */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Same-day emergency response across all listed areas</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenQuoteModal}
                  className="flex-1 bg-[#1D61E7] hover:bg-[#1552C6] text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Inspection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${siteConfig.contact.phoneTel}`}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm p-3 rounded-xl border border-slate-700 flex items-center justify-center cursor-pointer"
                  aria-label="Call Dispatch"
                >
                  <Phone className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Selected Location Dispatch Details Card */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between relative overflow-hidden space-y-6">
            <div className="space-y-4 relative z-10">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1D61E7] text-white flex items-center justify-center shadow-md">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">{selectedLocation.name}, {selectedLocation.state} Coverage</h3>
                    <p className="text-xs text-[#1D61E7] font-bold">{selectedLocation.status} • {selectedLocation.distance}</p>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="text-xs text-slate-400 font-semibold block">Avg Dispatch Response</span>
                  <span className="text-sm font-extrabold text-emerald-400">{selectedLocation.response}</span>
                </div>
              </div>

              {/* Location Description */}
              <p className="text-slate-300 font-medium text-sm sm:text-base leading-relaxed">
                {selectedLocation.description}
              </p>

              {/* Included Services for this location */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#1D61E7]" />
                  <span className="text-xs font-bold text-slate-200">Residential Roof Repair</span>
                </div>
                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#1D61E7]" />
                  <span className="text-xs font-bold text-slate-200">Full Roof Replacement</span>
                </div>
                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#1D61E7]" />
                  <span className="text-xs font-bold text-slate-200">Storm & Hail Restoration</span>
                </div>
                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#1D61E7]" />
                  <span className="text-xs font-bold text-slate-200">Gutters & Drainage</span>
                </div>
              </div>

            </div>

            {/* Location Image Header Preview */}
            <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <img
                src={selectedLocation.image}
                alt={`Roofora Roofing in ${selectedLocation.name}, ${selectedLocation.state}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-xs font-bold text-white flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#1D61E7]" />
                <span>{selectedLocation.name} Roofing Operations</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
