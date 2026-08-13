import React from 'react';
import { ShieldCheck, MapPin, CheckCircle, Award, Users, HeartHandshake } from 'lucide-react';

export const WhoWeAre: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white text-[#0F172A] border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
              {/* Craftsmanship Team Photo */}
              <img
                src="/craftsmanship_team.jpg"
                alt="Roofcraft Local Austin Master Roofing Team at Work"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none"></div>

              {/* Floating Badge 1: Local Austin Roots */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-200 shadow-xl flex items-center gap-2 text-xs font-bold text-slate-900">
                <MapPin className="w-4 h-4 text-[#2563EB]" />
                <span>Austin Owned & Operated Since 2009</span>
              </div>

              {/* Floating Badge 2: Callout Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0F172A]/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/80 text-white shadow-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EA580C] text-white flex items-center justify-center shadow-md flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">100% Local Accountability</h4>
                    <p className="text-xs text-slate-300">We stand by our roofs long after storm chasers leave town.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Copy Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
              <Users className="w-4 h-4" /> Who We Are
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Quality Roofs. <br />
              <span className="text-[#2563EB]">Built on Trust.</span>
            </h2>

            {/* Story Paragraphs */}
            <p className="text-slate-600 text-base leading-relaxed">
              When severe weather hits Central Texas, out-of-state "storm-chasers" flood Austin neighborhoods offering quick fixes, only to vanish when warranty issues arise. 
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              At <strong className="text-slate-900 font-semibold">Roofcraft</strong>, we do things differently. For over 15 years, our family-owned team has lived, worked, and built right here in Austin. We combine master-grade materials, transparent upfront pricing, and dedicated insurance advocacy to ensure your home gets the unyielding protection it deserves.
            </p>

            {/* Core Differentiators Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Zero Storm-Chaser Risk</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Permanent physical presence and local Austin headquarters.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <HeartHandshake className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Insurance Advocacy</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Full support filing and maximizing your hail damage claims.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <ShieldCheck className="w-5 h-5 text-[#EA580C] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Lifetime Warranty</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Comprehensive material and labor warranty protection.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <Award className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">GAF & Owens Corning</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Factory-certified master installer credentials.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
