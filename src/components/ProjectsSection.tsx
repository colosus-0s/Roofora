import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

interface ProjectItem {
  id: string;
  number: string;
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  tag: string;
  href: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 'west-lake-hills',
    number: '01',
    title: 'Roof Replacement',
    location: 'West Lake Hills, TX',
    beforeImage: '/projects/westlake_before.jpg',
    afterImage: '/projects/westlake_after.jpg',
    tag: 'Full Shingle Replacement',
    href: '/projects#west-lake-hills',
  },
  {
    id: 'round-rock',
    number: '02',
    title: 'Storm Restoration',
    location: 'Round Rock, TX',
    beforeImage: '/projects/roundrock_before.jpg',
    afterImage: '/projects/roundrock_after.jpg',
    tag: 'Hail Damage Repair',
    href: '/projects#round-rock',
  },
  {
    id: 'cedar-park',
    number: '03',
    title: 'Full Exterior Upgrade',
    location: 'Cedar Park, TX',
    beforeImage: '/projects/cedarpark_before.jpg',
    afterImage: '/projects/cedarpark_after.jpg',
    tag: 'Metal Roof Conversion',
    href: '/projects#cedar-park',
  },
];

export const ProjectsSection: React.FC = () => {
  // Active image view state per project card (defaults to 'after')
  const [activeViews, setActiveViews] = useState<{ [key: string]: 'before' | 'after' }>({
    'west-lake-hills': 'after',
    'round-rock': 'after',
    'cedar-park': 'after',
  });

  const toggleView = (id: string, view: 'before' | 'after', e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveViews((prev) => ({ ...prev, [id]: view }));
  };

  return (
    <section className="w-full bg-[#0B1220] py-12 sm:py-16 lg:py-24 text-white relative border-t border-slate-800/80">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Side: Editorial Intro */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-6 lg:sticky lg:top-28">
            <div className="space-y-3 sm:space-y-4">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[#1D61E7] font-bold text-[11px] sm:text-xs tracking-wide uppercase">
                <span>RECENT PROJECTS</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Real Projects. <br />
                <span className="text-[#1D61E7]">Real Results.</span>
              </h2>

              {/* Supporting Copy */}
              <p className="text-slate-300 font-medium text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
                Explore some of our recent roofing projects across Austin and surrounding areas.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="/projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1D61E7] hover:bg-[#1552C6] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Side: Project Showcase Cards */}
          {/* Mobile: Horizontal scroll snap carousel (`flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4`) */}
          {/* Desktop: 3-column grid (`md:grid md:grid-cols-3 md:overflow-visible`) */}
          <div className="lg:col-span-8">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-3 md:overflow-visible no-scrollbar">
              {projectsData.map((project) => {
                const currentView = activeViews[project.id] || 'after';
                const isAfter = currentView === 'after';

                return (
                  <a
                    key={project.id}
                    href={project.href}
                    className="w-[85vw] max-w-[320px] sm:max-w-none flex-shrink-0 snap-center md:w-auto group bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-slate-700 shadow-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    {/* Top Image Container with Before / After Toggle */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                      {/* Active Project Image */}
                      <img
                        src={isAfter ? project.afterImage : project.beforeImage}
                        alt={`${project.title} - ${currentView}`}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Dark Gradient Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/40 pointer-events-none"></div>

                      {/* Number Badge (Top Left) */}
                      <div className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-md text-white font-mono text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-slate-800">
                        {project.number}
                      </div>

                      {/* BEFORE / AFTER Interactive Toggle Control (Top Right) */}
                      <div className="absolute top-2.5 right-2.5 z-10 flex items-center bg-slate-950/90 backdrop-blur-md p-0.5 sm:p-1 rounded-xl border border-slate-800 shadow-md">
                        <button
                          onClick={(e) => toggleView(project.id, 'before', e)}
                          className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[9px] sm:text-[10px] font-extrabold uppercase transition-all ${
                            !isAfter
                              ? 'bg-amber-500 text-slate-950 shadow-xs'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          BEFORE
                        </button>
                        <button
                          onClick={(e) => toggleView(project.id, 'after', e)}
                          className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[9px] sm:text-[10px] font-extrabold uppercase transition-all ${
                            isAfter
                              ? 'bg-[#1D61E7] text-white shadow-xs'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          AFTER
                        </button>
                      </div>

                      {/* Transformation State Indicator Badge (Bottom Left of Image) */}
                      <div className="absolute bottom-2.5 left-2.5 z-10 inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-900/90 backdrop-blur-md text-[10px] sm:text-[11px] font-bold border border-slate-800">
                        <span className={isAfter ? 'text-emerald-400' : 'text-amber-400'}>
                          {isAfter ? '✓ AFTER: COMPLETED' : '• BEFORE RESTORATION'}
                        </span>
                      </div>
                    </div>

                    {/* Card Content & Details */}
                    <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow space-y-2.5">
                      <div>
                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-1">
                          <MapPin className="w-3.5 h-3.5 text-[#1D61E7]" />
                          <span>{project.location}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#1D61E7] transition-colors leading-snug">
                          {project.title}
                        </h3>

                        {/* Tag */}
                        <p className="text-xs text-slate-400 font-medium mt-0.5">
                          {project.tag}
                        </p>
                      </div>

                      {/* Footer Link Arrow */}
                      <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#1D61E7] group-hover:gap-2.5 transition-all">
                        <span>View Project</span>
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
