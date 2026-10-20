import React, { useState } from 'react';
import { getAssetPath } from '../utils/assetPath.ts';

export interface ClientLogo {
  id: string;
  name: string;
  displayName: string;
  category: string;
  image: string;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    id: 'tcs',
    name: 'Tata Consultancy Services',
    displayName: 'Tata Consultancy Services (TCS)',
    category: 'Global Enterprise IT',
    image: '/assets/aistudio/Logo_TCS_6137462d.png'
  },
  {
    id: 'avery',
    name: 'Avery Dennison',
    displayName: 'Avery Dennison',
    category: 'Materials Science & Manufacturing',
    image: '/assets/aistudio/Logo_Avery_4e019dc0.png'
  },
  {
    id: 'aurum',
    name: 'Aurum Data Solutions',
    displayName: 'Aurum Data Solutions',
    category: 'Data & Analytics Solutions',
    image: '/assets/aistudio/Logo_Aurum_3a2274f2.png'
  },
  {
    id: 'verizon',
    name: 'Verizon',
    displayName: 'Verizon',
    category: 'Telecommunications & Cloud',
    image: '/assets/aistudio/Logo_Verizon_8f979679.png'
  },
  {
    id: 'adcircular',
    name: 'AD Circular',
    displayName: 'AD Circular',
    category: 'Circular Economy & CleanTech',
    image: '/assets/aistudio/Logo_ADCircular_8443e2cb.png'
  },
  {
    id: 'stellantis',
    name: 'Stellantis',
    displayName: 'Stellantis',
    category: 'Automotive & Mobility Group',
    image: '/assets/aistudio/Logo_Stellantis_144ab805.png'
  },
  {
    id: 'brillio',
    name: 'Brillio',
    displayName: 'Brillio',
    category: 'Digital Transformation & AI',
    image: '/assets/aistudio/Logo_Brillio_09192b84.png'
  },
  {
    id: 'cba',
    name: 'Commonwealth Bank of Australia',
    displayName: 'Commonwealth Bank (CBA)',
    category: 'Banking & Financial Services',
    image: '/assets/aistudio/Logo_CBA_fad2c570.png'
  },
  {
    id: 'dropout',
    name: 'Dropout',
    displayName: 'Dropout',
    category: 'Digital Media & Streaming',
    image: '/assets/aistudio/Logo_Dropout_6c72ae83.png'
  },
  {
    id: 'flexcellence',
    name: 'Flexcellence',
    displayName: 'Flexcellence',
    category: 'Health & Performance Tech',
    image: '/assets/aistudio/Logo_Flexcellence_e91e1045.png'
  }
];

export const ClientLogoCarousel: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Duplicating the list twice provides a mathematically seamless 0% to -50% infinite loop
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div className="w-full pt-6 pb-2 relative overflow-hidden select-none group/marquee">
      {/* Subtle left & right gradient fade masks for smooth entrance/exit */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20" />

      {/* Auto-scrolling horizontal marquee track */}
      <div className="flex overflow-hidden py-10">
        <div className="animate-marquee-logos flex items-center gap-4 sm:gap-6">
          {duplicatedLogos.map((client, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={`${client.id}-${idx}`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-ga-category="social_proof"
                data-ga-action="hover_client_logo"
                data-ga-label={client.id}
                className="relative shrink-0 cursor-pointer group/card"
              >
                {/* Floating Interactive Tooltip above hovered card */}
                {isHovered && (
                  <div
                    role="tooltip"
                    className="absolute -top-11 left-1/2 -translate-x-1/2 z-40 pointer-events-none animate-in fade-in zoom-in-95 duration-150"
                  >
                    <div className="bg-[#0B2545] text-white px-3 py-1.5 rounded-lg shadow-xl text-center whitespace-nowrap flex flex-col items-center border border-slate-700/40">
                      <span className="text-xs font-bold leading-tight tracking-wide text-white">
                        {client.displayName}
                      </span>
                      <span className="text-[10px] font-medium text-[#8BD8D0] leading-tight">
                        {client.category}
                      </span>
                      {/* Triangle Pointer Arrow */}
                      <div className="w-2 h-2 bg-[#0B2545] border-r border-b border-slate-700/40 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
                    </div>
                  </div>
                )}

                {/* Logo Tile Container */}
                <div
                  className={`h-16 w-36 sm:w-44 px-4 py-2.5 rounded-xl border flex items-center justify-center transition-all duration-200 ${
                    isHovered
                      ? 'bg-white border-[#00A896] shadow-lg scale-105 z-30 ring-2 ring-[#00A896]/20'
                      : 'bg-white/80 border-slate-200/80 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <img
                    src={getAssetPath(client.image)}
                    alt={`${client.name} logo`}
                    className={`max-h-10 max-w-[124px] object-contain transition-all duration-200 ${
                      client.id === 'tcs' || client.id === 'dropout' ? 'rounded-xs' : ''
                    } ${
                      isHovered
                        ? 'filter-none grayscale-0 opacity-100'
                        : 'grayscale opacity-55 group-hover/card:grayscale-0 group-hover/card:opacity-100'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-center text-xs text-slate-400 mt-1 font-normal">
        Trusted by engineering leaders, SaaS founders, and enterprise product teams across the globe
      </p>
    </div>
  );
};
