import React, { useState } from 'react';
import { MapPin, ArrowRight, X, ShieldCheck } from 'lucide-react';
import { projectsData } from '../data/projects';
import type { ProjectData } from '../data/projects';
import { siteConfig } from '../config/site';

export const ProjectsSection: React.FC = () => {
  const [activeViews, setActiveViews] = useState<{ [key: string]: 'before' | 'after' }>({
    'west-lake-hills': 'after',
    'round-rock': 'after',
    'cedar-park': 'after',
  });

  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  const toggleView = (id: string, view: 'before' | 'after', e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveViews((prev) => ({ ...prev, [id]: view }));
  };

  return (
    <section id="projects" className="w-full bg-[#0B1220] py-12 sm:py-16 lg:py-24 text-white relative border-t border-slate-800/80">
      <div className="max-w-[1440px] xl:max-w-[1530px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Side: Editorial Intro */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-6 lg:sticky lg:top-28">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-[#1D61E7] font-bold text-[11px] sm:text-xs tracking-wide uppercase">
                <span>RECENT PROJECTS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Real Projects. <br />
                <span className="text-[#1D61E7]">Real Results.</span>
              </h2>

              <p className="text-slate-300 font-medium text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
                Explore some of our recent roofing projects across Austin and surrounding areas.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1D61E7] hover:bg-[#1552C6] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Side: Data-Driven Project Showcase Cards */}
          <div className="lg:col-span-8">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-3 md:overflow-visible no-scrollbar">
              {projectsData.map((project) => {
                const currentView = activeViews[project.id] || 'after';
                const isAfter = currentView === 'after';

                return (
                  <div
                    key={project.id}
                    onClick={() => setActiveModalProject(project)}
                    className="w-[85vw] max-w-[320px] sm:max-w-none flex-shrink-0 snap-center md:w-auto group bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-slate-700 shadow-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    {/* Top Image Container with Before / After Toggle */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                      <img
                        src={isAfter ? project.afterImage : project.beforeImage}
                        alt={`${project.title} in ${project.location} - ${currentView}`}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/40 pointer-events-none"></div>

                      <div className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-md text-white font-mono text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-slate-800">
                        {project.number}
                      </div>

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

                      <div className="absolute bottom-2.5 left-2.5 z-10 inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-900/90 backdrop-blur-md text-[10px] sm:text-[11px] font-bold border border-slate-800">
                        <span className={isAfter ? 'text-emerald-400' : 'text-amber-400'}>
                          {isAfter ? '✓ AFTER: COMPLETED' : '• BEFORE RESTORATION'}
                        </span>
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow space-y-2.5">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-1">
                          <MapPin className="w-3.5 h-3.5 text-[#1D61E7]" />
                          <span>{project.location}</span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#1D61E7] transition-colors leading-snug">
                          {project.title}
                        </h3>

                        <p className="text-xs text-slate-400 font-medium mt-0.5">
                          {project.tag}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#1D61E7] group-hover:gap-2.5 transition-all">
                        <span>View Project</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-slate-900 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-800 relative space-y-5 max-h-[90vh] overflow-y-auto text-white">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center justify-center cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-[#1D61E7] font-extrabold uppercase">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeModalProject.location}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">{activeModalProject.title}</h3>
              <p className="text-xs text-slate-400 font-semibold">{activeModalProject.tag}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">Before Restoration</span>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <img src={activeModalProject.beforeImage} alt="Before" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">After Installation</span>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <img src={activeModalProject.afterImage} alt="After" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              {activeModalProject.description}
            </p>

            <div className="pt-3 border-t border-slate-800 flex items-center gap-3">
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="flex-1 bg-[#1D61E7] hover:bg-[#1552C6] text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl text-center shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Request Similar Project Quote</span>
              </a>
              <button
                onClick={() => setActiveModalProject(null)}
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-xl transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
