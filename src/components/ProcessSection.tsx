import React from 'react';
import { PROCESS_STEPS } from '../data/landingData.ts';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2545] tracking-tight">
          What happens next
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {PROCESS_STEPS.map((step, idx) => (
          <div
            key={step.num}
            className="flex flex-col border-l-2 border-slate-200 pl-6 py-2 relative group hover:border-[#00A896] transition-colors"
          >
            {/* Step Number */}
            <span className="text-4xl sm:text-5xl font-black text-[#0B2545] tabular-nums tracking-tight mb-3 group-hover:text-[#00A896] transition-colors">
              {step.num}
            </span>

            {/* Title */}
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
