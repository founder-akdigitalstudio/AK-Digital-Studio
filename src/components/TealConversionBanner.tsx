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
    <section className="bg-gradient-to-br from-[#00A896] to-[#00534B] text-white py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#8BD8D0] block mb-3 font-mono">
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
            className="w-full sm:w-auto bg-[#071A32] hover:bg-[#0B2545] text-white px-8 py-3 rounded-full text-xs font-semibold tracking-wide transition-all shadow-md cursor-pointer"
          >
            Get In Touch
          </button>
          <button
            type="button"
            onClick={onExploreOffer}
            data-ga-category="conversion"
            data-ga-action="click"
            data-ga-label="teal_explore_offer"
            className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-full text-xs font-semibold tracking-wide border border-white/80 transition-colors cursor-pointer"
          >
            Explore our offer
          </button>
        </div>
      </div>
    </section>
  );
};
