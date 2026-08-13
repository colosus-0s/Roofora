import React from 'react';
import { ShieldCheck, Phone, ArrowRight, Star, CheckCircle, Clock } from 'lucide-react';

interface HeroSectionProps {
  onOpenEstimateModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEstimateModal }) => {
  return (
    <section className="relative bg-[#0F172A] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-800">
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#EA580C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-200 text-xs sm:text-sm font-medium backdrop-blur-sm shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
              <span>Licensed & Insured • Manufacturer Certified</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Built to Protect What Matters. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-white bg-clip-text text-transparent">
                Austin’s Trusted Roofing & Exterior Experts.
              </span>
            </h1>

            {/* Crisp 2-Line Pitch Subtext */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Engineered for extreme Texas hail, storm winds, and scorching heat. We deliver master-grade craftsmanship, lifetime warranty protection, and zero-stress insurance claim support.
            </p>

            {/* Primary & Secondary Call To Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenEstimateModal}
                className="bg-[#EA580C] hover:bg-[#c84906] text-white font-bold text-base px-7 py-4 rounded-xl shadow-lg shadow-orange-600/30 hover:shadow-orange-600/40 transition-all duration-200 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="tel:5125550198"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold text-base transition-all duration-200 shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#2563EB]" />
                <span>Call (512) 555-0198</span>
              </a>
            </div>

            {/* Instant Guarantee Bullets */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Same-Day Inspection Available
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                $0 Upfront Inspection Cost
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-400" />
                15-Min Response Guarantee
              </span>
            </div>

          </div>

          {/* Right Column: Visual Showcase Container with Google Rating Badge Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group">
              
              {/* High Resolution Exterior Showcase Image */}
              <img
                src="/hero_roofing.jpg"
                alt="Roofcraft Austin Premium Residential Roofing Project"
                className="w-full h-[380px] sm:h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Dark Gradient Overlay for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none"></div>

              {/* Verified Google Rating Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/80 shadow-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white p-1.5 flex items-center justify-center shadow-md flex-shrink-0">
                    <svg className="w-full h-full" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-white text-base">4.9 / 5.0</span>
                      <div className="flex text-[#D97706]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">Based on 340+ Verified Google Reviews</p>
                  </div>
                </div>

                <div className="hidden sm:block text-right border-l border-slate-800 pl-4">
                  <span className="text-[11px] text-emerald-400 font-semibold uppercase tracking-wider block">Top Rated</span>
                  <span className="text-xs text-slate-300">Austin, TX</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
