import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck } from 'lucide-react';

interface CityArea {
  name: string;
  county: string;
  zipRange: string;
  highlight?: string;
}

const serviceCities: CityArea[] = [
  { name: 'Austin', county: 'Travis County', zipRange: '78701 - 78759', highlight: 'Main HQ' },
  { name: 'Round Rock', county: 'Williamson County', zipRange: '78664 - 78681', highlight: 'Rapid Crew' },
  { name: 'Cedar Park', county: 'Williamson County', zipRange: '78613 - 78630' },
  { name: 'Pflugerville', county: 'Travis County', zipRange: '78660 - 78691' },
  { name: 'Lakeway', county: 'Travis County', zipRange: '78734 - 78738' },
  { name: 'Leander', county: 'Williamson County', zipRange: '78641 - 78646' },
  { name: 'Georgetown', county: 'Williamson County', zipRange: '78626 - 78633' },
  { name: 'Buda', county: 'Hays County', zipRange: '78610' },
  { name: 'Kyle', county: 'Hays County', zipRange: '78640' },
];

export const ServiceAreas: React.FC = () => {
  return (
    <section id="service-areas" className="py-16 lg:py-24 bg-[#0F172A] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Coverage Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Navigation className="w-4 h-4 text-[#2563EB]" /> Local Coverage
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Serving Austin & Surrounding <br />
              <span className="text-[#2563EB]">Central Texas Communities</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              We operate dedicated mobile inspection and emergency response teams across Travis, Williamson, and Hays counties. Wherever your home is in Greater Austin, our crew arrives promptly.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
                <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-white block">2-Hour Emergency Response</span>
                  <span className="text-slate-400">Available for storm damage leak tarping across all listed cities.</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-[#2563EB] flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-white block">Municipal Code Compliant</span>
                  <span className="text-slate-400">Fully permitted and compliant with local Texas municipal building codes.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 9-City Coverage Grid */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <MapPin className="w-4 h-4 text-[#EA580C]" /> Central Texas Service Radius
                </div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded-md">
                  9 Communities Covered
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {serviceCities.map((city) => (
                  <div
                    key={city.name}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-blue-500/50 transition-colors group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-white group-hover:text-blue-400 transition-colors">
                          {city.name}
                        </span>
                        {city.highlight && (
                          <span className="text-[9px] font-extrabold bg-[#2563EB] text-white px-1.5 py-0.5 rounded">
                            {city.highlight}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400 block mt-0.5">{city.county}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono mt-2 block">
                      ZIP: {city.zipRange}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center text-xs text-slate-400">
                Don't see your specific neighborhood? Call our dispatch office at <a href="tel:5125550198" className="text-blue-400 font-bold hover:underline">(512) 555-0198</a> to verify service coverage.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
