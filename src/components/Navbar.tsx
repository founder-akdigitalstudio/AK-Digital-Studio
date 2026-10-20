import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5'
          : 'bg-white/70 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Zone */}
        <a
          href="#"
          data-ga-category="navigation"
          data-ga-action="click"
          data-ga-label="logo_home"
          className="flex items-center gap-2.5 text-slate-900 group"
        >
          <img
            src="/assets/aistudio/AK_Digita_Studio_Logo_73d88755.png"
            alt="AK Digital Studio Logo"
            className="w-8 h-8 rounded-lg object-contain shadow-2xs group-hover:scale-105 transition-transform"
          />
          <span className="font-bold text-lg tracking-tight text-slate-900">
            AK Digital Studio
          </span>
        </a>

        {/* Center Navigation Links (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
        >
          <a
            href="#showcase"
            data-ga-category="navigation"
            data-ga-action="click"
            data-ga-label="nav_work"
            className="hover:text-slate-900 transition-colors py-1"
          >
            Work
          </a>
          <a
            href="#services"
            data-ga-category="navigation"
            data-ga-action="click"
            data-ga-label="nav_services"
            className="hover:text-slate-900 transition-colors py-1"
          >
            Services
          </a>
          <a
            href="#process"
            data-ga-category="navigation"
            data-ga-action="click"
            data-ga-label="nav_about"
            className="hover:text-slate-900 transition-colors py-1"
          >
            About
          </a>
        </nav>

        {/* Primary CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenBooking}
            data-ga-category="conversion"
            data-ga-action="click"
            data-ga-label="header_book_intro_call"
            className="bg-[#0B2545] hover:bg-[#071A32] active:bg-[#051329] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-150 shadow-xs hover:shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <span>Book an intro call</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00A896]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-xl px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-4">
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-[#00A896] py-1 border-b border-slate-100"
            >
              Work
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-[#00A896] py-1 border-b border-slate-100"
            >
              Services
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-[#00A896] py-1 border-b border-slate-100"
            >
              About
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#0B2545] text-white py-3 rounded-full text-sm font-semibold tracking-wide text-center mt-2 shadow-sm"
            >
              Book an intro call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
