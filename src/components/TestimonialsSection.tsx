import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  quote: string;
  service: string;
  avatar: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Michael & Sarah Jenkins',
    location: 'Austin, TX (West Lake Hills)',
    rating: 5,
    quote: 'Roofora transformed our entire roof after severe hail damage. Their crew was punctual, kept the job site spotless, and completed the full replacement in two days. Outstanding Texas craftsmanship!',
    service: 'Full Roof Replacement',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'David Reynolds',
    location: 'Round Rock, TX',
    rating: 5,
    quote: 'The itemized quote was completely transparent with zero surprise fees. They explained every detail and helped us navigate financing smoothly. I highly recommend Roofora!',
    service: 'Roof Repair & Restoration',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Elena Martinez',
    location: 'Cedar Park, TX',
    rating: 5,
    quote: 'Extremely professional team! The 17-point diagnostic report gave us total confidence in what needed to be fixed. The new standing seam metal roof looks incredible.',
    service: 'Metal Roof Upgrade',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const activeItem = testimonialsData[currentIndex];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24 border-t border-slate-100">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Side: Rating Proof Block */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[11px] sm:text-xs font-bold text-[#1D61E7] tracking-wide uppercase">
              <span>WHAT OUR CLIENTS SAY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1220] tracking-tight leading-[1.15]">
              Trusted by Homeowners <br />
              <span className="text-[#1D61E7]">Across Austin.</span>
            </h2>

            {/* Google Rating Block matching reference */}
            <div className="bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-3 max-w-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-2xs flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-base sm:text-lg font-black text-[#0B1220]">
                    <span>4.9</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 font-semibold">(240+ Verified Google Reviews)</p>
                </div>
              </div>

              <p className="text-[11px] sm:text-xs text-slate-500 font-medium pt-1 border-t border-slate-200/60">
                Demonstration customer feedback ratings from Central Texas homeowners.
              </p>
            </div>
          </div>

          {/* Right Side: Large Visually Prominent Testimonial Card */}
          <div className="lg:col-span-8">
            <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-xl relative overflow-hidden flex flex-col justify-between space-y-4 sm:space-y-6">
              
              <div className="flex items-start justify-between">
                <Quote className="w-9 h-9 sm:w-12 sm:h-12 text-[#1D61E7]/20 flex-shrink-0" />
                
                {/* 5-Star Rating */}
                <div className="flex text-amber-400 gap-1">
                  {[...Array(activeItem.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="text-base sm:text-xl lg:text-2xl font-bold text-[#0B1220] leading-relaxed italic">
                "{activeItem.quote}"
              </blockquote>

              {/* Customer Info & Controls */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={activeItem.avatar}
                    alt={activeItem.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
                  />
                  <div>
                    <div className="text-sm sm:text-base font-extrabold text-[#0B1220]">{activeItem.name}</div>
                    <div className="text-[11px] sm:text-xs text-slate-500 font-semibold">{activeItem.location} • <span className="text-[#1D61E7]">{activeItem.service}</span></div>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 text-[#0B1220] hover:text-[#1D61E7] hover:bg-slate-50 shadow-2xs transition-all cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  <button
                    onClick={nextTestimonial}
                    className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 text-[#0B1220] hover:text-[#1D61E7] hover:bg-slate-50 shadow-2xs transition-all cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
