import React, { useState } from 'react';
import { MapPin, Calendar, CheckCircle2, Sliders, ShieldCheck, ArrowRight } from 'lucide-react';

interface PortfolioProject {
  id: string;
  title: string;
  location: string;
  completionDate: string;
  category: string;
  shingleType: string;
  afterImage: string;
  beforeImage: string;
  beforeDescription: string;
  afterDescription: string;
  warranty: string;
}

const projects: PortfolioProject[] = [
  {
    id: 'austin-shingle',
    title: 'Full Architectural Shingle Replacement',
    location: 'Austin, TX',
    completionDate: 'June 2026',
    category: 'Residential Shingle',
    shingleType: 'GAF Timberline HDZ Charcoal',
    afterImage: '/hero_roofing.jpg',
    beforeImage: '/hero_roofing.jpg',
    beforeDescription: 'Worn out 22-year-old shingles with missing ridge caps and wood rot after storm.',
    afterDescription: 'Installed GAF Class 4 Impact-Resistant shingles with synthetic underlayment & ridge vent.',
    warranty: 'Lifetime Manufacturer & 10-Yr Workmanship',
  },
  {
    id: 'round-rock-metal',
    title: 'Standing Seam Metal Roof Conversion',
    location: 'Round Rock, TX',
    completionDate: 'May 2026',
    category: 'Metal Roofing',
    shingleType: '24-Gauge Bronze Standing Seam',
    afterImage: '/project_metal_roof.jpg',
    beforeImage: '/project_metal_roof.jpg',
    beforeDescription: 'Leaking asphalt shingles prone to heat retention and hail punctures.',
    afterDescription: 'Custom engineered standing seam metal roof reflecting 85% of solar radiant heat.',
    warranty: '50-Year Non-Prorated Warranty',
  },
  {
    id: 'cedar-park-storm',
    title: 'Storm & Hail Damage Restoration',
    location: 'Cedar Park, TX',
    completionDate: 'April 2026',
    category: 'Insurance Restoration',
    shingleType: 'Owens Corning Duration Storm',
    afterImage: '/craftsmanship_team.jpg',
    beforeImage: '/craftsmanship_team.jpg',
    beforeDescription: 'Severe golf-ball hail strikes causing widespread shingle bruising and gutter collapse.',
    afterDescription: '100% insurance claim restoration with zero out-of-pocket homeowner deductible cost.',
    warranty: 'Lifetime System Protection',
  },
];

interface PortfolioShowcaseProps {
  onOpenEstimateModal?: () => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onOpenEstimateModal }) => {
  // Store active view mode ("after" | "before") for each project ID
  const [viewState, setViewState] = useState<Record<string, 'after' | 'before'>>({});

  const toggleView = (projectId: string, mode: 'after' | 'before') => {
    setViewState((prev) => ({ ...prev, [projectId]: mode }));
  };

  return (
    <section id="projects" className="py-16 lg:py-24 bg-white text-[#0F172A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Verified Proof of Craftsmanship
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Recent Roofing Projects in Austin & Central TX
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Browse our completed residential and commercial roof installations. Toggle the <span className="font-semibold text-slate-900">Before & After</span> switch to inspect the transformation!
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onOpenEstimateModal}
              className="bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Project Inspection</span>
              <ArrowRight className="w-4 h-4 text-[#EA580C]" />
            </button>
          </div>
        </div>

        {/* 3-Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const currentMode = viewState[project.id] || 'after';
            const isBefore = currentMode === 'before';

            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                {/* Image Container with Before/After Toggle Controls */}
                <div className="relative h-64 overflow-hidden bg-slate-950">
                  <img
                    src={project.afterImage}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isBefore ? 'filter grayscale brightness-75 contrast-125 scale-105' : 'group-hover:scale-105'
                    }`}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none"></div>

                  {/* Top Bar Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="bg-slate-950/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-slate-700/80 flex items-center gap-1 shadow-md">
                      <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                      {project.location}
                    </span>

                    <span className="bg-[#EA580C] text-white text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Interactive Before & After Toggle Pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-slate-900/90 backdrop-blur-md p-1.5 rounded-xl border border-slate-700/80 shadow-lg">
                    <span className="text-[11px] font-semibold text-slate-300 pl-2 flex items-center gap-1">
                      <Sliders className="w-3 h-3 text-blue-400" /> Mode:
                    </span>

                    <div className="flex items-center bg-slate-950 rounded-lg p-0.5 border border-slate-800">
                      <button
                        onClick={() => toggleView(project.id, 'before')}
                        className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                          isBefore
                            ? 'bg-rose-600 text-white shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Before
                      </button>
                      <button
                        onClick={() => toggleView(project.id, 'after')}
                        className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                          !isBefore
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        After (Roofcraft)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#0F172A] leading-snug">
                      {project.title}
                    </h3>

                    {/* Dynamic Before / After State Description Box */}
                    <div
                      className={`p-3 rounded-xl border text-xs leading-relaxed transition-colors ${
                        isBefore
                          ? 'bg-rose-50 border-rose-200 text-rose-900 font-medium'
                          : 'bg-emerald-50 border-emerald-200 text-emerald-950 font-medium'
                      }`}
                    >
                      <span className="font-bold block mb-0.5">
                        {isBefore ? '⚠️ Pre-Existing Condition:' : '✅ Roofcraft Solution:'}
                      </span>
                      {isBefore ? project.beforeDescription : project.afterDescription}
                    </div>
                  </div>

                  {/* Metadata Specs */}
                  <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Material Spec:</span>
                      <span className="font-semibold text-slate-900">{project.shingleType}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Warranty Provided:</span>
                      <span className="font-semibold text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {project.warranty}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> Completed: {project.completionDate}
                      </span>
                      <span>Verified Austin Job #TX-{project.id}</span>
                    </div>
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
