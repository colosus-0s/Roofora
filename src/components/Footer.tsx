import React from 'react';
import { Home, PhoneCall, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenEstimateModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimateModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2563EB] to-blue-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Home className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                  ROOFCRAFT <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
                </span>
                <span className="block text-[10px] text-slate-400 font-medium tracking-widest uppercase">
                  Austin's Premier Roofing & Exteriors
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Providing Central Texas homeowners with master-grade roofing, emergency hail restoration, and lifetime warranty protection since 2009.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs">
              <span className="flex items-center gap-2 text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Licensed, Bonded & Insured • TX License #RC-88401
              </span>
              <span className="flex items-center gap-2 text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                GAF Master Elite Contractor #GAF-99402
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-slate-800 pb-2">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Roof Replacement</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Emergency Roof Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Storm & Hail Restoration</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">17-Point Roof Inspection</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Seamless Gutters & Guards</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial Flat Roofing</a></li>
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-slate-800 pb-2">
              Central TX Coverage
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#service-areas" className="hover:text-white transition-colors">Austin, TX</a></li>
              <li><a href="#service-areas" className="hover:text-white transition-colors">Round Rock, TX</a></li>
              <li><a href="#service-areas" className="hover:text-white transition-colors">Cedar Park, TX</a></li>
              <li><a href="#service-areas" className="hover:text-white transition-colors">Pflugerville, TX</a></li>
              <li><a href="#service-areas" className="hover:text-white transition-colors">Lakeway, TX</a></li>
              <li><a href="#service-areas" className="hover:text-white transition-colors">Leander & Georgetown</a></li>
            </ul>
          </div>

          {/* Column 4: Local Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-slate-800 pb-2">
              Local Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#EA580C] flex-shrink-0 mt-0.5" />
                <span>10200 N Mopac Expy, Suite 400<br />Austin, TX 78759</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:5125550198" className="text-blue-400 font-semibold hover:underline">
                  (512) 555-0198
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>estimates@roofcraft-tx.com</span>
              </li>
              <li className="flex items-start gap-2 pt-1 border-t border-slate-800">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-[11px]">
                  <span className="font-bold text-white block">Mon - Sat: 7:00 AM - 7:00 PM</span>
                  <span className="text-slate-400">24/7 Emergency Storm Tarping</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclosures & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Roofcraft Roofing & Exteriors LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={onOpenEstimateModal} className="hover:text-slate-300 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={onOpenEstimateModal} className="hover:text-slate-300 transition-colors cursor-pointer">
              Terms of Service
            </button>
            <button onClick={onOpenEstimateModal} className="hover:text-slate-300 transition-colors cursor-pointer">
              Licensing Info
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
