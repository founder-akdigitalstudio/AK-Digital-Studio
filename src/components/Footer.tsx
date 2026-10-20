import React from 'react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#071A32] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Description (spans 2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/assets/aistudio/AK_Digita_Studio_Logo_73d88755.png"
                alt="AK Digital Studio Logo"
                className="w-7 h-7 rounded-md object-contain"
              />
              <span className="font-bold text-base tracking-tight text-white">
                AK Digital Studio
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              Clearer websites and apps for growing businesses.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 font-mono">
              Explore
            </p>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Approach
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 font-mono">
              Socials
            </p>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:founder.akdigitalstudio@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 font-mono">
              Information
            </p>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-normal">
          <p>© 2026 AK Digital Studio</p>
          <p>No real company claims.</p>
        </div>
      </div>
    </footer>
  );
};
