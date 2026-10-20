import React, { useState } from 'react';
import { RotateCw, Check } from 'lucide-react';
import { SERVICE_OFFERINGS } from '../data/landingData.ts';

interface CoreValueSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const CoreValueSection: React.FC<CoreValueSectionProps> = ({ onOpenBooking }) => {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="services" className="bg-[#0B2545] text-white py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold tracking-[0.08em] text-[#8BD8D0] uppercase block mb-2 font-mono">
            SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">
            Create. Strategize. Scale
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal">
            Explore our in-depth services · Click or tap any card to view deliverables
          </p>
        </div>

        {/* 3 Click-to-Flip Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SERVICE_OFFERINGS.map((svc) => {
            const isFlipped = !!flippedCards[svc.id];

            return (
              <div
                key={svc.id}
                onClick={() => toggleFlip(svc.id)}
                className="perspective-1000 h-[360px] w-full cursor-pointer select-none group"
                role="button"
                tabIndex={0}
                aria-label={`${svc.title} - click to flip for details`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFlip(svc.id);
                  }
                }}
              >
                {/* Flipping Container */}
                <div
                  className={`relative w-full h-full duration-500 transform-style-3d transition-transform ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* FRONT FACE */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-[#071A32]/95 rounded-2xl p-7 border border-slate-700/60 shadow-lg hover:border-[#00A896]/60 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-[#8BD8D0] font-mono">
                          Service Vertical
                        </span>
                        <div className="w-2 h-2 rounded-full bg-[#00A896]" />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3">
                        {svc.title}
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        {svc.subtitle}
                      </p>

                      <p className="text-xs text-slate-400 leading-relaxed">
                        {svc.summary}
                      </p>
                    </div>

                    {/* Mobile-Friendly Flip Indicator Affordance */}
                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-[#8BD8D0] group-hover:text-white transition-colors">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <RotateCw className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 duration-500" />
                        <span>Tap to view deliverables</span>
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">Flip</span>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-[#071A32] rounded-2xl p-6 border border-[#00A896]/50 shadow-2xl flex flex-col justify-between overflow-y-auto">
                    <div>
                      <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-700/80">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#8BD8D0] font-mono">
                          Deliverables & Scope
                        </span>
                        <RotateCw className="w-3.5 h-3.5 text-slate-400" />
                      </div>

                      <h4 className="text-base font-bold text-white mb-3 leading-snug">
                        {svc.title}
                      </h4>

                      <ul className="space-y-2.5 mb-4">
                        {svc.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-200 leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-[#00A896] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="text-[11px] text-[#A1C3EB] font-mono bg-[#0B2545] p-2 rounded-lg border border-slate-700/60">
                        Cadence: {svc.timeline}
                      </div>
                    </div>

                    {/* Mobile-Friendly Flip Back Affordance */}
                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-[#8BD8D0] group-hover:text-white transition-colors mt-2">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <RotateCw className="w-3.5 h-3.5" />
                        <span>Tap to flip back</span>
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">Return</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Button */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => onOpenBooking('All Services Overview')}
            data-ga-category="services"
            data-ga-action="click"
            data-ga-label="explore_services_cta"
            className="bg-white hover:bg-slate-100 text-[#0B2545] font-semibold text-xs px-7 py-3 rounded-full tracking-wide transition-all shadow-md cursor-pointer inline-flex items-center justify-center"
          >
            Explore our Services
          </button>
        </div>
      </div>
    </section>
  );
};
