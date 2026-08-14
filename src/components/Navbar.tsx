import React, { useState, useEffect } from 'react';
import { Phone, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-md py-3'
          : 'absolute top-0 left-0 right-0 bg-transparent py-5 lg:py-6'
      }`}
    >
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Left: Brand Logo */}
          <a href="#" className="focus:outline-none focus:ring-2 focus:ring-[#1D61E7] rounded-lg">
            <Logo />
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#0B1220]">
            <a
              href="#"
              className="text-[#1D61E7] font-bold transition-colors hover:text-[#1552C6]"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-[#1D61E7] transition-colors py-1"
            >
              About
            </a>

            {/* Services Dropdown */}
            <div
              className="relative group py-1"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 hover:text-[#1D61E7] transition-colors cursor-pointer focus:outline-none"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 text-slate-600 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#1D61E7]' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-xl border border-slate-100 py-2.5 px-1.5 z-50 animate-fade-in">
                  <a href="#services" className="block px-3 py-2 text-sm text-[#0B1220] hover:text-[#1D61E7] hover:bg-slate-50 rounded-lg font-medium transition-colors">Roof Installation</a>
                  <a href="#services" className="block px-3 py-2 text-sm text-[#0B1220] hover:text-[#1D61E7] hover:bg-slate-50 rounded-lg font-medium transition-colors">Roof Repair</a>
                  <a href="#services" className="block px-3 py-2 text-sm text-[#0B1220] hover:text-[#1D61E7] hover:bg-slate-50 rounded-lg font-medium transition-colors">Roof Replacement</a>
                  <a href="#services" className="block px-3 py-2 text-sm text-[#0B1220] hover:text-[#1D61E7] hover:bg-slate-50 rounded-lg font-medium transition-colors">Storm Damage</a>
                  <a href="#services" className="block px-3 py-2 text-sm text-[#0B1220] hover:text-[#1D61E7] hover:bg-slate-50 rounded-lg font-medium transition-colors">Gutters & Drainage</a>
                  <a href="#services" className="block px-3 py-2 text-sm text-[#0B1220] hover:text-[#1D61E7] hover:bg-slate-50 rounded-lg font-medium transition-colors">Roof Inspection</a>
                </div>
              )}
            </div>

            <a href="#projects" className="hover:text-[#1D61E7] transition-colors py-1">Projects</a>
            <a href="#financing" className="hover:text-[#1D61E7] transition-colors py-1">Financing</a>

            {/* Resources Dropdown */}
            <div
              className="relative group py-1"
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 hover:text-[#1D61E7] transition-colors cursor-pointer focus:outline-none"
                onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 text-slate-600 transition-transform duration-200 ${resourcesDropdownOpen ? 'rotate-180 text-[#1D61E7]' : ''}`} />
              </button>

              {resourcesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2.5 px-1.5 z-50 animate-fade-in">
                  <a href="#resources" className="block px-3 py-2 text-sm text-[#0B1220] hover:text-[#1D61E7] hover:bg-slate-50 rounded-lg font-medium transition-colors">Roofing Tips & Blog</a>
                  <a href="#process" className="block px-3 py-2 text-sm text-[#0B1220] hover:text-[#1D61E7] hover:bg-slate-50 rounded-lg font-medium transition-colors">Our Process</a>
                  <a href="#warranty" className="block px-3 py-2 text-sm text-[#0B1220] hover:text-[#1D61E7] hover:bg-slate-50 rounded-lg font-medium transition-colors">Warranty Coverage</a>
                  <a href="#faq" className="block px-3 py-2 text-sm text-[#0B1220] hover:text-[#1D61E7] hover:bg-slate-50 rounded-lg font-medium transition-colors">FAQ</a>
                </div>
              )}
            </div>

            <a href="#contact" className="hover:text-[#1D61E7] transition-colors py-1">Contact</a>
          </nav>

          {/* Right: Phone Pill & Primary CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Translucent Phone Pill matching reference image */}
            <a
              href="tel:5125550198"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-2xs text-sm font-bold text-[#0B1220] hover:bg-white hover:text-[#1D61E7] transition-all group"
            >
              <Phone className="w-4 h-4 text-[#0B1220] group-hover:text-[#1D61E7] stroke-[2.2]" />
              <span>(512) 555-0198</span>
            </a>

            {/* Primary Get Free Quote CTA */}
            <button
              onClick={onOpenQuoteModal}
              className="bg-[#1D61E7] hover:bg-[#1552C6] text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 transform active:scale-98 cursor-pointer"
            >
              <span>Get Free Quote</span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2.5">
            <a
              href="tel:5125550198"
              className="p-2 text-[#0B1220] hover:text-[#1D61E7] bg-white/90 backdrop-blur-md rounded-lg shadow-2xs border border-slate-200/80 transition-colors"
              aria-label="Call Roofora Roofing"
            >
              <Phone className="w-5 h-5 stroke-[2]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0B1220] hover:text-[#1D61E7] bg-white/90 backdrop-blur-md rounded-lg shadow-2xs border border-slate-200/80 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-100 shadow-xl space-y-3">
            <nav className="flex flex-col space-y-1 text-base font-semibold text-[#0B1220]">
              <a href="#" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2.5 rounded-lg bg-blue-50 text-[#1D61E7]">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#1D61E7]">About</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#1D61E7]">Services</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#1D61E7]">Projects</a>
              <a href="#financing" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#1D61E7]">Financing</a>
              <a href="#resources" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#1D61E7]">Resources</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#1D61E7]">Contact</a>
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenQuoteModal) onOpenQuoteModal();
                }}
                className="w-full bg-[#1D61E7] hover:bg-[#1552C6] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm text-sm"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:5125550198"
                className="w-full border border-slate-200 text-[#0B1220] font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm hover:bg-slate-50"
              >
                <Phone className="w-4 h-4 text-[#1D61E7]" />
                <span>Call (512) 555-0198</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
