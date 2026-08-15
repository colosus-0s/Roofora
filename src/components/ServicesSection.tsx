import React from 'react';
import { ArrowRight, Wrench, Shield, Zap, Sparkles, Droplets, Search } from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  tag: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'roof-installation',
    number: '01',
    title: 'Roof Installation',
    description: 'Complete new roof builds engineered with architectural shingles and standing seam metal.',
    image: '/services/installation.jpg',
    icon: Sparkles,
    tag: 'New Construction & Builds',
  },
  {
    id: 'roof-repair',
    number: '02',
    title: 'Roof Repair',
    description: 'Precision leak repairs, flashing fixes, and shingle restorations preventing costly interior damage.',
    image: '/services/repair.jpg',
    icon: Wrench,
    tag: 'Fast Leak Diagnostics',
  },
  {
    id: 'roof-replacement',
    number: '03',
    title: 'Roof Replacement',
    description: 'Full tear-off and replacement using premium weather-resistant Texas roofing materials.',
    image: '/services/replacement.jpg',
    icon: Shield,
    tag: 'Complete Tear-off & Build',
  },
  {
    id: 'storm-damage',
    number: '04',
    title: 'Storm Damage',
    description: 'Emergency hail and wind damage restoration with complete insurance claim documentation support.',
    image: '/services/storm_damage.jpg',
    icon: Zap,
    tag: 'Emergency Restoration',
  },
  {
    id: 'gutters-drainage',
    number: '05',
    title: 'Gutters & Drainage',
    description: 'Seamless aluminum gutter installations, leaf guards, and custom downspout systems.',
    image: '/services/gutters.jpg',
    icon: Droplets,
    tag: 'Seamless Aluminum Systems',
  },
  {
    id: 'roof-inspection',
    number: '06',
    title: 'Roof Inspection',
    description: 'Comprehensive 17-point structural roof health assessments with detailed photo reporting.',
    image: '/services/inspection.jpg',
    icon: Search,
    tag: '17-Point Health Audit',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-12 sm:py-16 lg:py-24 border-t border-slate-100">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Editorial Introduction */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-6 lg:sticky lg:top-28">
            <div className="space-y-3 sm:space-y-4">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[11px] sm:text-xs font-bold text-[#1D61E7] tracking-wide uppercase">
                <span>OUR SERVICES</span>
              </div>

              {/* Main Section Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1220] tracking-tight leading-[1.15]">
                Complete Roofing <br />
                <span className="text-[#1D61E7]">Solutions</span>
              </h2>

              {/* Supporting Copy */}
              <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
                From minor leak repairs to full architectural replacements, we deliver quality Texas workmanship built to protect what matters most.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1D61E7] hover:bg-[#1552C6] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: 6 Visual Service Cards Grid */}
          {/* Mobile: 2-column grid (`grid-cols-2`), Desktop: 3-column grid (`md:grid-cols-3`) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6">
              {servicesData.map((service) => {
                const IconComponent = service.icon;

                return (
                  <div
                    key={service.id}
                    className="group bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Image Header */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Number Badge */}
                        <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md text-[#0B1220] font-mono text-[10px] sm:text-xs font-extrabold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-slate-200/80 shadow-2xs">
                          {service.number}
                        </div>

                        {/* Icon Badge */}
                        <div className="absolute bottom-2.5 right-2.5 w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-[#1D61E7] text-white flex items-center justify-center shadow-md">
                          <IconComponent className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-3.5 sm:p-5 space-y-1.5 sm:space-y-2">
                        <span className="text-[10px] sm:text-xs font-bold text-[#1D61E7] tracking-wide uppercase block">
                          {service.tag}
                        </span>

                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#0B1220] group-hover:text-[#1D61E7] transition-colors leading-snug">
                          {service.title}
                        </h3>

                        <p className="text-[11px] sm:text-xs lg:text-sm text-slate-500 font-medium leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer Link */}
                    <div className="px-3.5 sm:px-5 pb-3.5 sm:pb-5 pt-1 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs font-bold text-[#1D61E7]">
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
