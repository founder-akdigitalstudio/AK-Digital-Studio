import React from 'react';

interface CommitmentBannerProps {
  onStartTrial: () => void;
}

export const CommitmentBanner: React.FC<CommitmentBannerProps> = ({ onStartTrial }) => {
  const marqueeItems = [
    'No Commitment',
    'No Cost',
    'No Commitment',
    'No Cost',
    'No Commitment',
    'No Cost',
    'No Commitment',
    'No Cost',
    'No Commitment',
    'No Cost'
  ];

  return (
    <section className="bg-[#071A32] text-white pt-20 pb-12 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Try before you commit
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
          Try us free for 3 days and receive 2–3 fully designed screens
        </p>

        <div>
          <button
            type="button"
            onClick={onStartTrial}
            data-ga-category="conversion"
            data-ga-action="click"
            data-ga-label="start_free_trail_cta"
            className="bg-white hover:bg-slate-100 active:bg-slate-200 text-[#071A32] font-semibold text-xs px-7 py-3 rounded-full tracking-wide transition-all shadow-md hover:shadow-lg cursor-pointer inline-flex items-center justify-center"
          >
            Start Free Trail
          </button>
        </div>
      </div>

      {/* Infinite Marquee Ribbon */}
      <div className="border-t border-slate-800/80 pt-6 pb-2 overflow-hidden whitespace-nowrap opacity-60">
        <div className="animate-marquee flex items-center gap-8 text-xs font-mono tracking-widest text-slate-400">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="text-slate-600">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
