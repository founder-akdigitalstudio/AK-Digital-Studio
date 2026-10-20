import React, { useState } from 'react';
import { UserCheck, Wand2, ClipboardCheck, Check, RotateCw } from 'lucide-react';
import { HOW_WE_HELP_ITEMS, HowWeHelpItem } from '../data/landingData.ts';

export const HowWeHelpSection: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'user-check':
        return <UserCheck className="w-5 h-5 transition-colors duration-200" />;
      case 'wand':
        return <Wand2 className="w-5 h-5 transition-colors duration-200" />;
      case 'clipboard-check':
        return <ClipboardCheck className="w-5 h-5 transition-colors duration-200" />;
      default:
        return <UserCheck className="w-5 h-5 transition-colors duration-200" />;
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2545] tracking-tight">
          How we help
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-2">
          Click or tap any card to reveal our strategic approach
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {HOW_WE_HELP_ITEMS.map((item) => {
          const isFlipped = !!flippedCards[item.id];

          return (
            <div
              key={item.id}
              onClick={() => toggleFlip(item.id)}
              className="perspective-1000 h-[320px] w-full cursor-pointer select-none group"
              role="button"
              tabIndex={0}
              aria-label={`${item.title} - click to flip for details`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleFlip(item.id);
                }
              }}
            >
              {/* Inner Flipping Card Container - Click to flip only */}
              <div
                className={`relative w-full h-full duration-500 transform-style-3d transition-transform ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* FRONT FACE */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl p-7 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-[#00A896]/40 transition-all flex flex-col justify-between">
                  <div>
                    {/* Badge Icon with inverting hover color */}
                    <div className="w-11 h-11 rounded-xl bg-[#E6F7F5] text-[#00A896] group-hover:bg-[#00A896] group-hover:text-white flex items-center justify-center mb-6 transition-all duration-200 shadow-2xs">
                      {getIcon(item.icon)}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#00A896] transition-colors mb-2.5 leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Flip hint at bottom (click / tap only) */}
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-[#00A896] transition-colors pt-4 border-t border-slate-100">
                    <span className="flex items-center gap-1.5">
                      <RotateCw className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 duration-500" />
                      <span>Tap / Click to view approach</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Flip</span>
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#0B2545] text-white rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-col justify-between overflow-y-auto">
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-700/80">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8BD8D0] font-mono">
                        Our Strategic Approach
                      </span>
                      <RotateCw className="w-3.5 h-3.5 text-slate-400" />
                    </div>

                    <h4 className="text-sm font-bold text-white mb-3 leading-snug">
                      {item.title}
                    </h4>

                    {/* Pointers */}
                    <ul className="space-y-2">
                      {item.pointers.map((pointer, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-200 leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-[#00A896] shrink-0 mt-0.5" />
                          <span>{pointer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-700/80 flex items-center justify-between text-[10px] text-slate-400">
                    <span>AK Digital Studio Methodology</span>
                    <span className="text-[#8BD8D0] flex items-center gap-1 font-semibold">
                      <RotateCw className="w-3 h-3" /> Tap / Click to flip back
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
