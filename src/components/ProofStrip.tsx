import React from 'react';
import { Award, Home, Star, ShieldCheck } from 'lucide-react';

interface MetricItem {
  id: string;
  value: string;
  label: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const metrics: MetricItem[] = [
  {
    id: 'years',
    value: '15+ Years',
    label: 'Industry Experience',
    subtitle: 'Serving Greater Austin Area',
    icon: Award,
    accentColor: 'text-[#2563EB]',
  },
  {
    id: 'projects',
    value: '1,250+',
    label: 'Projects Completed',
    subtitle: 'Residential & Commercial',
    icon: Home,
    accentColor: 'text-[#EA580C]',
  },
  {
    id: 'rating',
    value: '4.9★',
    label: 'Google Rating',
    subtitle: 'From 340+ Homeowner Reviews',
    icon: Star,
    accentColor: 'text-[#D97706]',
  },
  {
    id: 'compliance',
    value: '100%',
    label: 'Licensed & Insured',
    subtitle: 'Comprehensive Coverage',
    icon: ShieldCheck,
    accentColor: 'text-emerald-500',
  },
];

export const ProofStrip: React.FC = () => {
  return (
    <section className="bg-slate-900 border-b border-slate-800 text-white relative z-20 py-8 lg:py-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-center gap-4 ${
                  index !== 0 ? 'pt-6 lg:pt-0 lg:pl-6' : ''
                } group hover:-translate-y-0.5 transition-transform duration-200`}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center flex-shrink-0 shadow-md group-hover:border-slate-600 transition-colors">
                  <Icon className={`w-6 h-6 ${item.accentColor}`} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
                    {item.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 mt-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 font-medium">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
