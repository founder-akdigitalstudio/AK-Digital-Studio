import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/landingData.ts';

export const FaqSection: React.FC = () => {
  // Second item expanded by default to match the reference image screenshot
  const [openIds, setOpenIds] = useState<string[]>(['faq-2']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2545] tracking-tight">
          Questions before you start
        </h2>
      </div>

      <div className="space-y-3">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openIds.includes(item.id);

          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-[#00A896]/40 bg-white shadow-xs'
                  : 'border-slate-200/90 bg-white hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                data-ga-category="faq"
                data-ga-action="toggle"
                data-ga-label={item.id}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A896]"
              >
                <span className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                  {item.question}
                </span>
                <span className="p-1 rounded-full text-slate-400 shrink-0 transition-transform duration-200">
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-[#00A896]" />
                  ) : (
                    <Plus className="w-4 h-4 text-slate-500" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 animate-in fade-in duration-150">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
