import React from 'react';
import { Home, Wrench, Zap, Search, Droplets, Building2, ArrowRight, ShieldCheck } from 'lucide-react';

interface ServicesGridProps {
  onOpenEstimateModal?: () => void;
}

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  gradient: string;
  accentColor: string;
}

const services: ServiceItem[] = [
  {
    id: 'replacement',
    title: 'Full Roof Replacement',
    category: 'Residential',
    description: 'Complete tear-off and installation of high-durability architectural shingles, metal, or tile roofs built for 50+ year longevity.',
    icon: Home,
    features: ['GAF Timberline HDZ Shingles', 'Lifetime Labor Warranty', 'Class 4 Hail Resistance'],
    gradient: 'from-blue-600 to-slate-900',
    accentColor: 'text-[#2563EB]',
  },
  {
    id: 'repair',
    title: 'Emergency Roof Repair',
    category: '24/7 Response',
    description: 'Rapid response leak repairs, shingle restoration, and flashing fixes to prevent moisture intrusion and structural damage.',
    icon: Wrench,
    features: ['Same-Day Leak Tarping', 'Precision Leak Tracing', 'Structural Flashing Repair'],
    gradient: 'from-amber-600 to-slate-900',
    accentColor: 'text-[#D97706]',
  },
  {
    id: 'storm',
    title: 'Storm & Hail Restoration',
    category: 'Insurance Claim Support',
    description: 'Comprehensive Texas hail & wind restoration. We handle complete adjuster documentation and zero-out-of-pocket claims support.',
    icon: Zap,
    features: ['HAAG Certified Inspection', 'Direct Adjuster Advocacy', '$0 Upfront Out-of-Pocket'],
    gradient: 'from-orange-600 to-slate-900',
    accentColor: 'text-[#EA580C]',
  },
  {
    id: 'inspection',
    title: 'Roof Inspection & Diagnostics',
    category: 'Diagnostic Audit',
    description: '17-point structural inspection utilizing thermal imaging and high-resolution drone audits to uncover hidden roof wear.',
    icon: Search,
    features: ['Thermal Moisture Scan', 'Comprehensive Photo Report', '17-Point Structural Checklist'],
    gradient: 'from-slate-700 to-slate-900',
    accentColor: 'text-[#2563EB]',
  },
  {
    id: 'gutters',
    title: 'Gutter Installation & Guards',
    category: 'Exterior Drainage',
    description: 'Seamless 6-inch aluminum gutter systems and stainless steel leaf guards engineered to redirect torrential Texas rains.',
    icon: Droplets,
    features: ['Seamless Aluminum Fabrication', 'Micro-Mesh Leaf Protection', 'Custom Color Matching'],
    gradient: 'from-[#2563EB] to-slate-900',
    accentColor: 'text-[#2563EB]',
  },
  {
    id: 'commercial',
    title: 'Commercial Roofing Solutions',
    category: 'Commercial',
    description: 'Flat roof coatings, TPO membranes, EPDM systems, and metal roofing tailored for Austin office parks and commercial properties.',
    icon: Building2,
    features: ['TPO & EPDM Single-Ply', 'Silicone Roof Coatings', 'Minimal Business Disruption'],
    gradient: 'from-[#0F172A] to-slate-900',
    accentColor: 'text-emerald-500',
  },
];

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenEstimateModal }) => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-[#F8FAFC] text-[#0F172A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> Full-Service Exterior Care
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Complete Roofing Solutions for Texas Homes
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From emergency hail repairs to full architectural roof replacements, our certified master craftsmen deliver unyielding durability for Austin properties.
          </p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                {/* Card Header & Icon Accent */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center group-hover:bg-[#0F172A] group-hover:text-white transition-colors duration-300 shadow-inner">
                      <Icon className={`w-6 h-6 ${service.accentColor} group-hover:text-white transition-colors`} />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded-md">
                      {service.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Key Features Bullet List */}
                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Trigger Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={onOpenEstimateModal}
                    className="w-full py-3 px-4 rounded-xl border border-slate-200 hover:border-[#2563EB] bg-slate-50 hover:bg-[#2563EB] text-slate-800 hover:text-white font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <span>Request Service Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Callout Strip */}
        <div className="bg-gradient-to-r from-[#0F172A] via-slate-900 to-[#0F172A] text-white p-8 rounded-2xl shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">Need Emergency Roof Tarping or Repair?</h4>
            <p className="text-slate-300 text-xs sm:text-sm">Our Austin emergency crew responds within 2 hours to prevent storm water intrusion.</p>
          </div>
          <button
            onClick={onOpenEstimateModal}
            className="bg-[#EA580C] hover:bg-[#c84906] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-orange-600/30 flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <span>Request Emergency Crew</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
