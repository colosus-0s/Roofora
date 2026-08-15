import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '../config/site';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEstimateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      const heroForm = document.querySelector('form');
      if (heroForm) {
        heroForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const firstInput = heroForm.querySelector('input');
        if (firstInput) setTimeout(() => firstInput.focus(), 400);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1440px] xl:max-w-[1530px] w-full mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="inline-block focus:outline-none">
          <Logo />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-slate-700 hover:text-[#1D61E7] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.contact.phoneTel}`}
            className="flex items-center gap-2 text-sm font-extrabold text-[#0B1220] hover:text-[#1D61E7] transition-colors py-2 px-3"
          >
            <Phone className="w-4 h-4 text-[#1D61E7]" />
            <span>{siteConfig.contact.phone}</span>
          </a>

          <button
            onClick={handleEstimateClick}
            className="bg-[#1D61E7] hover:bg-[#1552C6] text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <span>Free Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Header Action Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${siteConfig.contact.phoneTel}`}
            className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D61E7] flex items-center justify-center border border-blue-100 shadow-2xs cursor-pointer"
            aria-label="Call Roofora"
          >
            <Phone className="w-4.5 h-4.5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#0B1220] flex items-center justify-center shadow-2xs cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 shadow-xl px-4 py-6 mt-3 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-[#0B1220] hover:text-[#1D61E7] py-1 border-b border-slate-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 space-y-3">
            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              className="w-full bg-slate-50 text-[#0B1220] font-extrabold text-sm py-3.5 px-4 rounded-xl border border-slate-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#1D61E7]" />
              <span>Call {siteConfig.contact.phone}</span>
            </a>

            <button
              onClick={handleEstimateClick}
              className="w-full bg-[#1D61E7] hover:bg-[#1552C6] text-white font-extrabold text-sm py-3.5 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
