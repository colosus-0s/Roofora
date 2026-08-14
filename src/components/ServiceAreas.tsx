import React, { useState } from 'react';
import { MapPin, ArrowRight, ShieldCheck, Navigation } from 'lucide-react';

interface CityDetail {
  name: string;
  distance: string;
  response: string;
  status: string;
}

const serviceCities: CityDetail[] = [
  { name: 'Austin', distance: 'HQ Hub', response: '< 30 Min', status: 'Primary Operational Base' },
  { name: 'Round Rock', distance: '15 Miles North', response: '< 45 Min', status: 'Active Field Crews' },
  { name: 'Cedar Park', distance: '18 Miles NW', response: '< 45 Min', status: 'Active Field Crews' },
  { name: 'Pflugerville', distance: '14 Miles NE', response: '< 45 Min', status: 'Active Field Crews' },
  { name: 'Leander', distance: '22 Miles NW', response: '< 60 Min', status: 'Daily Coverage Zone' },
  { name: 'Georgetown', distance: '26 Miles North', response: '< 60 Min', status: 'Daily Coverage Zone' },
  { name: 'Buda', distance: '15 Miles South', response: '< 45 Min', status: 'Daily Coverage Zone' },
  { name: 'Kyle', distance: '21 Miles South', response: '< 60 Min', status: 'Daily Coverage Zone' },
];

export const ServiceAreas: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<CityDetail>(serviceCities[0]);

  return (
    <section className="w-full bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-t border-slate-100">
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Coverage List & Intro */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#1D61E7] tracking-wide uppercase">
              <span>WE SERVE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1220] tracking-tight leading-[1.15]">
              Austin & <br />
              <span className="text-[#1D61E7]">Surrounding Areas</span>
            </h2>

            <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed max-w-md">
              We proudly provide residential roofing, storm restoration, and emergency repairs across Greater Central Texas. Click a location to view dispatch response metrics.
            </p>

            {/* City Grid List with Interactive Selection */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              {serviceCities.map((city) => {
                const isSelected = selectedCity.name === city.name;
                return (
                  <button
                    key={city.name}
                    onClick={() => setSelectedCity(city)}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#1D61E7] border-[#1D61E7] text-white shadow-md'
                        : 'bg-white border-slate-200/90 text-[#0B1220] hover:border-blue-200 shadow-2xs'
                    }`}
                  >
                    <MapPin className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-white' : 'text-[#1D61E7]'}`} />
                    <span className="text-xs sm:text-sm font-bold">{city.name}</span>
                  </button>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="/services"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#0B1220] font-bold text-sm sm:text-base shadow-2xs hover:shadow-xs transition-all duration-200 group"
              >
                <span>View All Service Areas</span>
                <ArrowRight className="w-4 h-4 text-[#1D61E7] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Premium Interactive Regional Service Map Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-6">
              
              {/* Card Header & Selected City Dispatch Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D61E7] flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <Navigation className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Region Dispatch</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0B1220]">{selectedCity.name}, TX</h3>
                  </div>
                </div>

                <div className="bg-[#F8FAFC] border border-slate-200/80 px-4 py-2 rounded-xl flex items-center gap-4">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Distance</span>
                    <span className="text-xs font-black text-[#0B1220]">{selectedCity.distance}</span>
                  </div>
                  <div className="w-px h-6 bg-slate-200"></div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Dispatch Time</span>
                    <span className="text-xs font-black text-emerald-600">{selectedCity.response}</span>
                  </div>
                </div>
              </div>

              {/* Central Map Illustration Graphic */}
              <div className="relative bg-[#0B1220] rounded-xl p-8 border border-slate-800 text-white min-h-[260px] flex flex-col justify-between overflow-hidden">
                {/* Background Radar Grid Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#1D61E7_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>

                {/* Radar Concentric Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-blue-500/20 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border border-blue-500/30 pointer-events-none"></div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-400">GREATER AUSTIN METRO</span>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    {selectedCity.status}
                  </span>
                </div>

                {/* Active Pins Grid */}
                <div className="relative z-10 my-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  {serviceCities.slice(0, 4).map((c) => (
                    <div
                      key={c.name}
                      onClick={() => setSelectedCity(c)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer ${
                        selectedCity.name === c.name
                          ? 'bg-[#1D61E7] border-white text-white shadow-md'
                          : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <MapPin className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
                      <div className="text-xs font-bold">{c.name}</div>
                    </div>
                  ))}
                </div>

                <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#1D61E7]" />
                    <span>Free On-Site 17-Point Inspection</span>
                  </span>
                  <span className="text-[#1D61E7] font-bold">50-Mile Radius</span>
                </div>
              </div>

              {/* Dispatch Guarantee Banner */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-50/80 border border-blue-100 text-xs font-medium text-slate-700">
                <ShieldCheck className="w-5 h-5 text-[#1D61E7] flex-shrink-0" />
                <span>
                  Our local Central Texas crews are equipped for rapid response, roof tarping, and emergency storm damage diagnostic inspections.
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
