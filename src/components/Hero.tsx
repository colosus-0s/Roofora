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
    <section className="relative w-full bg-[#F8FAFC]">
      {/* Main Hero Visual Banner Container */}
      <div className="relative w-full pt-10 pb-20 lg:pt-14 lg:pb-28 overflow-hidden min-h-[600px] lg:min-h-[660px]">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_roofora_bg.jpg"
            alt="Roofora Premium Modern Residential Home Roofing"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle Gradient Overlays for High Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30 lg:via-white/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Eyebrow, Headline, Subtext, CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow Trust Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs text-xs font-semibold text-[#0B1220]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1D61E7]" />
                <span className="tracking-wide uppercase">AUSTIN'S TRUSTED ROOFING EXPERTS</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1220] tracking-tight leading-[1.1] sm:leading-[1.1]">
                Built to Protect <br className="hidden sm:inline" />
                What <span className="text-[#1D61E7]">Matters.</span>
              </h1>

              {/* Subtext */}
              <p className="text-slate-700 font-medium text-base sm:text-lg leading-relaxed max-w-xl">
                Residential roofing, repairs and replacements across Austin & surrounding areas.
              </p>

              {/* Primary & Secondary Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onOpenQuoteModal}
                  className="bg-[#1D61E7] hover:bg-[#1552C6] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer transform active:scale-98"
                >
                  <span>Get Free Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:5125550198"
                  className="bg-white hover:bg-slate-50 text-[#0B1220] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-xs border border-slate-200/90 hover:border-slate-300 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#0B1220]" />
                  <span>Call Now</span>
                </a>
              </div>

            </div>

            {/* Right Column: Floating Lead Capture Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-100 max-w-md w-full ml-auto relative z-10">
                
                {/* Form Header */}
                <div className="flex items-start justify-between border-b border-slate-100 pb-4 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1220]">Get Your Free Estimate</h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">Fast. Free. No obligation.</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1D61E7] flex-shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                </div>

                {/* Form Content */}
                {formSubmitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-base font-bold text-[#0B1220]">Estimate Request Sent!</h4>
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
                  <form onSubmit={handleFormSubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-[#0B1220] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1D61E7] transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-[#0B1220] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1D61E7] transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-[#0B1220] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1D61E7] transition-all"
                      />
                    </div>

                    <div>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-[#0B1220] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1D61E7] transition-all"
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
                        rows={2}
                        placeholder="Tell us about your project"
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-[#0B1220] placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1D61E7] transition-all resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1D61E7] hover:bg-[#1552C6] text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Get My Estimate</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <p className="text-[11px] text-slate-400 text-center font-medium pt-1">
                      We respect your privacy. No spam ever.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Floating Bottom Trust Bar Overlapping Hero */}
      <div className="max-w-6xl mx-auto -mt-10 sm:-mt-12 relative z-20 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100/90 p-4 sm:py-5 sm:px-6 grid grid-cols-2 md:grid-cols-5 gap-4 items-center justify-between text-[#0B1220]">
          
          {/* Trust 1: Google Rating */}
          <div className="flex items-center gap-3 col-span-2 sm:col-span-1 border-b sm:border-b-0 sm:border-r border-slate-100 pb-3 sm:pb-0 pr-2">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1 text-xs font-bold text-[#0B1220]">
                <span>4.9</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">(240+ Google Reviews)</p>
            </div>
          </div>

          {/* Trust 2: Licensed & Insured */}
          <div className="flex items-center gap-2.5 sm:border-r border-slate-100 pr-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1D61E7] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#0B1220] block leading-tight">Licensed</span>
              <span className="text-[11px] text-slate-500 font-medium">& Insured</span>
            </div>
          </div>

          {/* Trust 3: 15+ Years Experience */}
          <div className="flex items-center gap-2.5 sm:border-r border-slate-100 pr-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1D61E7] flex items-center justify-center flex-shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#0B1220] block leading-tight">15+ Years</span>
              <span className="text-[11px] text-slate-500 font-medium">Years Experience</span>
            </div>
          </div>

          {/* Trust 4: 1,200+ Roofs Completed */}
          <div className="flex items-center gap-2.5 sm:border-r border-slate-100 pr-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1D61E7] flex items-center justify-center flex-shrink-0">
              <Home className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#0B1220] block leading-tight">1,200+</span>
              <span className="text-[11px] text-slate-500 font-medium">Roofs Completed</span>
            </div>
          </div>

          {/* Trust 5: Workmanship Warranty */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1D61E7] flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#0B1220] block leading-tight">Workmanship</span>
              <span className="text-[11px] text-slate-500 font-medium">Warranty</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
