import React from 'react';
import { Hammer, Wrench, RefreshCw, CloudLightning, Droplets, ClipboardCheck, ArrowRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  href: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'roof-installation',
    number: '01',
    title: 'Roof Installation',
    description: 'High-quality roofing systems installed by experienced professionals.',
    image: '/services/installation.jpg',
    icon: Hammer,
    href: '/services#roof-installation',
  },
  {
    id: 'roof-repair',
    number: '02',
    title: 'Roof Repair',
    description: 'Fast, reliable repairs that stop problems before they grow.',
    image: '/services/repair.jpg',
    icon: Wrench,
    href: '/services#roof-repair',
  },
  {
    id: 'roof-replacement',
    number: '03',
    title: 'Roof Replacement',
    description: 'Complete tear-off and new roof systems built for long-term protection.',
    image: '/services/replacement.jpg',
    icon: RefreshCw,
    href: '/services#roof-replacement',
  },
  {
    id: 'storm-damage',
    number: '04',
    title: 'Storm Damage',
    description: 'Professional restoration after hail, wind, and storm damage.',
    image: '/services/storm_damage.jpg',
    icon: CloudLightning,
    href: '/services#storm-damage',
  },
  {
    id: 'gutters-drainage',
    number: '05',
    title: 'Gutters & Drainage',
    description: 'Protect your home with proper water management and drainage.',
    image: '/services/gutters.jpg',
    icon: Droplets,
    href: '/services#gutters-drainage',
  },
  {
    id: 'roof-inspection',
    number: '06',
    title: 'Roof Inspection',
    description: 'Detailed inspections to identify issues and give homeowners confidence.',
    image: '/services/inspection.jpg',
    icon: ClipboardCheck,
    href: '/services#roof-inspection',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-t border-slate-100">
      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Editorial Introduction */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:sticky lg:top-28">
            <div className="space-y-4">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#1D61E7] tracking-wide uppercase">
                <span>OUR SERVICES</span>
              </div>

              {/* Section Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1220] tracking-tight leading-[1.15]">
                Complete Roofing <br />
                <span className="text-[#1D61E7]">Solutions</span>
              </h2>

              {/* Supporting Description */}
              <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed max-w-md pt-1">
                From minor repairs to full roof replacements, we deliver quality workmanship with solutions built to last.
              </p>
            </div>

            {/* View All Services CTA */}
            <div className="pt-2">
              <a
                href="/services"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#0B1220] font-bold text-sm sm:text-base shadow-2xs hover:shadow-xs transition-all duration-200 group"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4 text-[#1D61E7] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: 6 Visual Service Cards arranged in a 3-column / 2-column grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {servicesData.map((service) => {
                const IconComponent = service.icon;
                return (
                  <a
                    key={service.id}
                    href={service.href}
                    className="group bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1 cursor-pointer"
                  >
                    {/* Top Image Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Number Badge (Top-Left Overlay) */}
                      <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white font-mono text-xs font-bold px-2.5 py-1 rounded-lg">
                        {service.number}
                      </div>

                      {/* Blue Icon Badge (Top-Right Overlay) */}
                      <div className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-[#1D61E7] text-white flex items-center justify-center shadow-md">
                        <IconComponent className="w-4.5 h-4.5" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-3">
                      <div>
                        <h3 className="text-lg font-bold text-[#0B1220] group-hover:text-[#1D61E7] transition-colors leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mt-2">
                          {service.description}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#1D61E7] group-hover:gap-2.5 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
