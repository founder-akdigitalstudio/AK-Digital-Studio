import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ClientLogoCarousel } from './ClientLogoCarousel.tsx';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onExploreWork
}) => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="max-w-3xl">
        {/* Kicker Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.08em] text-[#00A896] uppercase font-sans">
            CLEAR DESIGN FOR GROWING TEAMS
          </span>
        </div>

        {/* Main Display Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-[#0B2545] leading-[1.08] tracking-[-0.025em] mb-6 text-balance">
          User-Focused<br />
          Development-Ready
        </h1>

        {/* Lead Intro Prose */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
          We help startups and enterprises fix confusing websites and apps so
          customers feel at ease and remember you.
        </p>

        {/* Dual Action CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-16 sm:mb-20">
          <button
            type="button"
            onClick={onOpenBooking}
            data-ga-category="hero"
            data-ga-action="click"
            data-ga-label="hero_book_intro_call"
            className="bg-[#0B2545] hover:bg-[#071A32] active:bg-[#051329] text-white px-7 py-3 rounded-full text-sm font-semibold tracking-wide transition-all shadow-xs hover:shadow-md text-center cursor-pointer"
          >
            Book an intro call
          </button>
          <button
            type="button"
            onClick={onExploreWork}
            data-ga-category="hero"
            data-ga-action="click"
            data-ga-label="hero_explore_work"
            className="bg-transparent hover:bg-slate-100 text-[#0B2545] px-7 py-3 rounded-full text-sm font-medium border border-slate-300 transition-colors text-center cursor-pointer"
          >
            Explore Work
          </button>
        </div>
      </div>

      {/* Client Logo Auto-scrolling Carousel */}
      <div className="pt-6 border-t border-slate-200/80">
        <ClientLogoCarousel />
      </div>
    </section>
  );
};
