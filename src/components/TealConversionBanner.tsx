import React from 'react';

interface TealConversionBannerProps {
  onGetInTouch: () => void;
  onExploreOffer: () => void;
}

export const TealConversionBanner: React.FC<TealConversionBannerProps> = ({
  onGetInTouch,
  onExploreOffer
}) => {
  return (
    <section
      style={{ backgroundColor: '#028090', backgroundImage: 'none' }}
      className="bg-[#028090] text-white py-20 sm:py-24 px-4 sm:px-6 relative"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-xs font-bold tracking-[0.14em] uppercase text-white/90 block mb-3 font-sans">
          NOW AVAILABLE FOR HIRE
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-8">
          Not sure where to start?
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={onGetInTouch}
            data-ga-category="conversion"
            data-ga-action="click"
            data-ga-label="teal_get_in_touch"
            className="w-full sm:w-auto bg-[#071A32] hover:bg-[#0B2545] text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md cursor-pointer active:scale-95"
          >
            Get In Touch
          </button>
          <button
            type="button"
            onClick={onExploreOffer}
            data-ga-category="conversion"
            data-ga-action="click"
            data-ga-label="teal_explore_offer"
            className="w-full sm:w-auto bg-white hover:bg-slate-100 text-[#071A32] px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md cursor-pointer active:scale-95"
          >
            Explore our offer
          </button>
        </div>
      </div>
    </section>
  );
};
