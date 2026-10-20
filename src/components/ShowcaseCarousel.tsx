import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NICHE_PROJECTS, NicheProject } from '../data/landingData.ts';

interface ShowcaseCarouselProps {
  onSelectProject: (project: NicheProject) => void;
  onOpenBooking: () => void;
}

export const ShowcaseCarousel: React.FC<ShowcaseCarouselProps> = ({
  onSelectProject,
  onOpenBooking
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScrollability = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    const cardWidth = 330;
    const idx = Math.min(
      Math.floor((scrollLeft + cardWidth / 2) / cardWidth),
      NICHE_PROJECTS.length - 1
    );
    setActiveIndex(Math.max(0, idx));
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 350;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="showcase" className="py-20 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 text-center">
        {/* Eyebrow */}
        <span className="text-[11px] font-bold tracking-[0.08em] text-[#00A896] uppercase block mb-2 font-mono">
          EXPERTISE
        </span>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2545] tracking-tight mb-3">
          For your niche
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          Deeper domain knowledge across SaaS verticals, thanks to our past projects.
          In-depth discovery process, and engagement with actual users
        </p>

        {/* Navigation Arrows (Desktop) */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            type="button"
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            aria-label="Previous vertical"
            className="p-2 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            aria-label="Next vertical"
            className="p-2 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track with Exact Reference Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollability}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 px-2"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {NICHE_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              data-ga-category="portfolio"
              data-ga-action="click_project"
              data-ga-label={project.id}
              className="flex-none w-[280px] sm:w-[320px] snap-start group cursor-pointer focus:outline-none select-none"
              tabIndex={0}
              role="button"
              aria-label={`View details for ${project.title}: ${project.headline}`}
            >
              {/* Reference Image with hover elevation */}
              <div className="relative overflow-visible">
                <img
                  src={project.image}
                  alt={`${project.tag} - ${project.headline}`}
                  className="w-full aspect-[360/480] rounded-2xl shadow-sm object-cover transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2.5"
                />
              </div>

              {/* Text bottom with hover color transition */}
              <div className="pt-3.5 space-y-1">
                <p className="text-xs font-normal text-slate-500 tracking-wide">
                  {project.title}
                </p>
                <h3 className="text-[14px] sm:text-[15px] font-bold text-slate-900 group-hover:text-[#00A896] transition-colors duration-200 leading-snug line-clamp-2">
                  {project.headline}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Visual Progress Indicator */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {NICHE_PROJECTS.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-10 bg-[#00A896]' : 'w-2 bg-slate-200'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-8">
          <button
            type="button"
            onClick={onOpenBooking}
            data-ga-category="portfolio"
            data-ga-action="click"
            data-ga-label="view_portfolio_cta"
            className="bg-[#0B2545] hover:bg-[#071A32] text-white px-7 py-3 rounded-full text-xs font-semibold tracking-wide transition-all shadow-xs cursor-pointer"
          >
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};
