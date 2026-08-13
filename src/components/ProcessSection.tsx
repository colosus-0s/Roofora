import React from 'react';
import { Send, SearchCheck, FileText, Hammer, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  highlight: string;
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Request Free Quote',
    description: 'Submit your property details online in 60 seconds or call our Austin team directly.',
    icon: Send,
    highlight: '60-Sec Request',
  },
  {
    number: '02',
    title: 'Free Roof Diagnostic',
    description: 'Our certified inspector conducts a comprehensive 17-point structural & leak audit.',
    icon: SearchCheck,
    highlight: '100% Free Inspection',
  },
  {
    number: '03',
    title: 'Itemized Estimate',
    description: 'Receive a transparent, line-by-line quote with zero surprise fees & flexible payment plans.',
    icon: FileText,
    highlight: 'No Pressure Quote',
  },
  {
    number: '04',
    title: 'Master Installation',
    description: 'Our experienced crew completes your roof in 1-2 days backed by lifetime warranties.',
    icon: Hammer,
    highlight: 'Lifetime Guarantee',
  },
];

interface ProcessSectionProps {
  onOpenEstimateModal?: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenEstimateModal }) => {
  return (
    <section id="process" className="py-16 lg:py-24 bg-[#0F172A] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#2563EB]" /> Simple & Hassle-Free
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Transparent 4-Step Process
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From initial roof diagnostic to final cleanup, we make roof replacement straightforward, stress-free, and fully transparent.
          </p>
        </div>

        {/* 4-Step Horizontal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-xl flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group hover:-translate-y-1 relative"
              >
                {/* Step Number Accent & Icon Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-[#2563EB]/40 group-hover:text-[#2563EB] transition-colors font-mono">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white group-hover:bg-[#2563EB] transition-colors duration-300 shadow-md">
                      <Icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-[#EA580C] uppercase tracking-wider block mb-1">
                      {step.highlight}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Footer Step Arrow Indicator */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Button Strip */}
        <div className="pt-4 text-center">
          <button
            onClick={onOpenEstimateModal}
            className="inline-flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#c84906] text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-orange-600/30 transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>Start Step 01: Free Estimate</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
