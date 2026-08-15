import React, { useState } from 'react';
import { ShieldCheck, Phone, ArrowRight, Star, Shield, Award, Home, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    details: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="relative w-full bg-slate-900 pt-24 sm:pt-28 lg:pt-36 pb-12 lg:pb-16 overflow-hidden flex flex-col justify-between">
      {/* Full-width house background image reaching edge to edge (100vw) */}
      <img
        src="/hero_roofora_bg.jpg"
        alt="Roofora Premium Dusk Residential Roofing"
        className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
      />

      {/* Subtle Natural Tint for Left Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 lg:via-white/55 to-transparent w-full lg:w-[58%] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>

      {/* Wide Responsive Inner Content Wrapper (1440px wide canvas) */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-end">
          
          {/* Left Column (8 cols): Headline, Copy, CTAs, and Floating Trust Strip */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6 lg:space-y-8">
            
            <div className="space-y-4 sm:space-y-5">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs text-[11px] sm:text-xs font-extrabold text-[#0B1220]">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1D61E7]" />
                <span className="tracking-wide uppercase">AUSTIN'S TRUSTED ROOFING EXPERTS</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-[66px] xl:text-[72px] font-black text-[#0B1220] tracking-tight leading-[1.08] sm:leading-[1.06]">
                Built to Protect <br />
                What <span className="text-[#1D61E7]">Matters.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-slate-800 font-semibold text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl">
                Residential roofing, repairs and replacements across Austin & surrounding areas.
              </p>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full sm:w-auto bg-[#1D61E7] hover:bg-[#1552C6] text-white font-extrabold text-sm sm:text-base lg:text-lg px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer transform active:scale-98"
                >
                  <span>Get Free Estimate</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <a
                  href="tel:5125550198"
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#0B1220] font-extrabold text-sm sm:text-base lg:text-lg px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl shadow-2xs border border-slate-200 hover:border-slate-300 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer text-center"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#0B1220]" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Mobile & Desktop Trust Bar */}
            {/* Mobile: Clean 2-column grid with full-width Google rating row */}
            {/* Desktop: 5-column horizontal bar */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100/90 p-4 sm:p-6 lg:px-8 lg:py-7 mt-4 sm:mt-6 lg:mt-8">
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 items-center justify-between text-[#0B1220] lg:divide-x divide-slate-100">
                
                {/* Item 1: Google Rating (Spans 2 cols on mobile, 1 col on desktop) */}
                <div className="col-span-2 lg:col-span-1 flex items-center gap-3 pb-3 lg:pb-0 border-b lg:border-b-0 border-slate-100 lg:pr-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-100/90 flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-base sm:text-lg font-black text-[#0B1220]">
                      <span>4.9</span>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-semibold leading-none mt-0.5">(240+ Google Reviews)</p>
                  </div>
                </div>

                {/* Item 2: Licensed & Insured */}
                <div className="flex items-center gap-2.5 sm:gap-3.5 lg:pl-4 lg:pr-2">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-[#1D61E7] flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-sm sm:text-base lg:text-lg font-black text-[#0B1220] block leading-tight">Licensed</span>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-semibold">& Insured</span>
                  </div>
                </div>

                {/* Item 3: 15+ Years Experience */}
                <div className="flex items-center gap-2.5 sm:gap-3.5 lg:pl-4 lg:pr-2">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-[#1D61E7] flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-sm sm:text-base lg:text-lg font-black text-[#0B1220] block leading-tight">15+ Years</span>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-semibold">Experience</span>
                  </div>
                </div>

                {/* Item 4: 1,200+ Roofs Completed */}
                <div className="flex items-center gap-2.5 sm:gap-3.5 lg:pl-4 lg:pr-2">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-[#1D61E7] flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <Home className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-sm sm:text-base lg:text-lg font-black text-[#0B1220] block leading-tight">1,200+</span>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-semibold">Roofs Completed</span>
                  </div>
                </div>

                {/* Item 5: Workmanship Warranty */}
                <div className="flex items-center gap-2.5 sm:gap-3.5 lg:pl-4">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-[#1D61E7] flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-sm sm:text-base lg:text-lg font-black text-[#0B1220] block leading-tight">Workmanship</span>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-semibold">Warranty</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column (4 cols): Estimate Form Card */}
          {/* On Mobile (<1024px): Stacked naturally below the trust bar (`w-full max-w-[420px] mx-auto mt-6`) */}
          {/* On Desktop (≥1024px): Right column alignment */}
          <div className="w-full lg:col-span-4 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="bg-white rounded-2xl p-5 sm:p-7 shadow-xl lg:shadow-2xl border border-slate-100/90 w-full max-w-[420px] lg:max-w-[390px] relative z-10">
              
              {/* Form Header */}
              <div className="flex items-start justify-between border-b border-slate-100 pb-3.5 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-[#0B1220]">Get Your Free Estimate</h3>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">Fast. Free. No obligation.</p>
                </div>
                <div className="w-8.5 h-8.5 rounded-full bg-blue-50 flex items-center justify-center text-[#1D61E7] flex-shrink-0">
                  <Shield className="w-4.5 h-4.5" />
                </div>
              </div>

              {/* Form Content */}
              {formSubmitted ? (
                <div className="py-8 sm:py-12 text-center space-y-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="text-base sm:text-lg font-extrabold text-[#0B1220]">Estimate Request Sent!</h4>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                    Thank you, <span className="font-semibold text-slate-800">{formData.fullName || 'Valued Homeowner'}</span>. An Austin roofing specialist will review your request and call you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-[#1D61E7] font-semibold hover:underline mt-2 inline-block cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-3.5">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#0B1220] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1D61E7] transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#0B1220] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1D61E7] transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#0B1220] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1D61E7] transition-all"
                    />
                  </div>

                  <div>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#0B1220] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1D61E7] transition-all"
                    >
                      <option value="">What service do you need?</option>
                      <option value="Roof Replacement">Roof Replacement</option>
                      <option value="Roof Repair">Roof Repair</option>
                      <option value="Storm Damage">Storm Damage Repair</option>
                      <option value="Roof Inspection">Roof Inspection</option>
                      <option value="Gutters">Gutters & Drainage</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your project"
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-xs sm:text-sm text-[#0B1220] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1D61E7] transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1D61E7] hover:bg-[#1552C6] text-white font-extrabold text-xs sm:text-sm py-3.5 sm:py-4 px-5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Get My Estimate</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center font-medium pt-0.5">
                    We respect your privacy. No spam ever.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
