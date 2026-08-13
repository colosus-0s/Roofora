import React, { useState } from 'react';
import { ShieldCheck, PhoneCall, Menu, X, ArrowRight, Home, Clock } from 'lucide-react';
import type { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Roof Calculator', href: '#calculator' },
  { label: 'Our Projects', href: '#projects' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

interface HeaderProps {
  onOpenEstimateModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEstimateModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 shadow-lg">
      {/* Top Bar - High Trust & Emergency Contact */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-emerald-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Licensed, Bonded & Insured #RC-88401
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              24/7 Emergency Storm Response
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href="tel:5125550198"
              className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>(512) 555-0198</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Nav */}
      <nav className="bg-[#0F172A] text-white px-4 py-3.5 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2563EB] to-blue-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Home className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                ROOFCRAFT <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
              </span>
              <span className="block text-[10px] text-slate-400 font-medium tracking-widest uppercase">
                Premium Roofing & Exteriors
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2563EB] hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Action Orange CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEstimateModal}
              className="bg-[#EA580C] hover:bg-[#c84906] text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md shadow-orange-600/20 transition-all duration-200 flex items-center gap-2 transform active:scale-95 cursor-pointer"
            >
              <span>Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-800 flex flex-col gap-3 px-2 pb-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white py-2 px-3 rounded-md hover:bg-slate-800 text-base font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEstimateModal) onOpenEstimateModal();
              }}
              className="w-full mt-2 bg-[#EA580C] hover:bg-[#c84906] text-white font-semibold text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
