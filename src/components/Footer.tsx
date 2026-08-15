import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Star } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '../config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0B1220] text-slate-300 pt-12 sm:pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 space-y-10 sm:space-y-12">
        
        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Brand Info Column */}
          <div className="col-span-2 lg:col-span-4 space-y-4 sm:space-y-5">
            <a href="/" className="inline-block focus:outline-none">
              <Logo light />
            </a>

            <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-1">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-[#1D61E7] flex items-center justify-center transition-colors">
                <span className="font-bold text-xs">fb</span>
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-[#1D61E7] flex items-center justify-center transition-colors">
                <span className="font-bold text-xs">ig</span>
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-[#1D61E7] flex items-center justify-center transition-colors">
                <span className="font-bold text-xs">in</span>
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-[#1D61E7] flex items-center justify-center transition-colors">
                <span className="font-bold text-xs">yt</span>
              </a>
            </div>
          </div>

          {/* Column 1: SERVICES */}
          <div className="col-span-1 lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li><a href="#services" className="hover:text-[#1D61E7] transition-colors">Roof Installation</a></li>
              <li><a href="#services" className="hover:text-[#1D61E7] transition-colors">Roof Repair</a></li>
              <li><a href="#services" className="hover:text-[#1D61E7] transition-colors">Roof Replacement</a></li>
              <li><a href="#services" className="hover:text-[#1D61E7] transition-colors">Storm Damage</a></li>
              <li><a href="#services" className="hover:text-[#1D61E7] transition-colors">Gutters & Drainage</a></li>
              <li><a href="#services" className="hover:text-[#1D61E7] transition-colors">Roof Inspection</a></li>
            </ul>
          </div>

          {/* Column 2: COMPANY */}
          <div className="col-span-1 lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li><a href="#about" className="hover:text-[#1D61E7] transition-colors">About Us</a></li>
              <li><a href="#process" className="hover:text-[#1D61E7] transition-colors">Our Process</a></li>
              <li><a href="#financing" className="hover:text-[#1D61E7] transition-colors">Financing</a></li>
              <li><a href="#reviews" className="hover:text-[#1D61E7] transition-colors">Reviews</a></li>
              <li><a href="#locations" className="hover:text-[#1D61E7] transition-colors">Service Areas</a></li>
            </ul>
          </div>

          {/* Column 3: RESOURCES */}
          <div className="col-span-1 lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">Resources</h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li><a href="#resources" className="hover:text-[#1D61E7] transition-colors">Blog & Guides</a></li>
              <li><a href="#tips" className="hover:text-[#1D61E7] transition-colors">Roofing Tips</a></li>
              <li><a href="#warranty" className="hover:text-[#1D61E7] transition-colors">Warranty</a></li>
              <li><a href="#faq" className="hover:text-[#1D61E7] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Column 4: CONTACT US */}
          <div className="col-span-1 lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">Contact Us</h4>
            <div className="space-y-2 text-xs font-semibold text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#1D61E7] flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phoneTel}`} className="hover:text-white transition-colors truncate">{siteConfig.contact.phone}</a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#1D61E7] flex-shrink-0" />
                <span className="truncate">{siteConfig.contact.email}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#1D61E7] flex-shrink-0" />
                <span>{siteConfig.contact.address.fullAddress}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#1D61E7] flex-shrink-0" />
                <span>{siteConfig.contact.hours}</span>
              </div>
            </div>

            {/* License & Rating Badge */}
            <div className="pt-1">
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1D61E7]" />
                  <span>{siteConfig.license.status}</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-slate-400">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{siteConfig.stats.googleRating} ({siteConfig.stats.reviewCount}+ Google Reviews)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-semibold text-slate-500 text-center sm:text-left">
          <div>
            © 2026 {siteConfig.legalName}. All rights reserved. Demonstration Website.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
