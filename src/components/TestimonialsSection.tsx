import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/landingData.ts';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        {/* Decorative Quote Mark */}
        <div className="w-10 h-10 mx-auto mb-3 text-slate-400 flex items-center justify-center">
          <Quote className="w-8 h-8 rotate-180 opacity-60 text-[#00A896]" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2545] tracking-tight">
          Impact from past customers
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((t, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              {/* Card Quote Icon */}
              <div className="w-8 h-8 rounded-lg bg-[#E6F7F5] flex items-center justify-center text-[#00A896] mb-4">
                <Quote className="w-4 h-4 rotate-180" />
              </div>

              {/* Quote text */}
              <p className="text-base text-slate-800 font-medium leading-relaxed mb-6">
                “{t.quote}”
              </p>
            </div>

            {/* Author info */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div className="w-10 h-10 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-bold text-xs shrink-0 tracking-wider">
                {t.avatarInitials}
              </div>
              <div className="leading-tight">
                <p className="font-bold text-sm text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t.role} · {t.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
