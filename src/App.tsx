/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ShowcaseCarousel } from './components/ShowcaseCarousel.tsx';
import { HowWeHelpSection } from './components/HowWeHelpSection.tsx';
import { CommitmentBanner } from './components/CommitmentBanner.tsx';
import { ProcessSection } from './components/ProcessSection.tsx';
import { CoreValueSection } from './components/CoreValueSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { TealConversionBanner } from './components/TealConversionBanner.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { BookingModal } from './components/BookingModal.tsx';
import { NicheDetailModal } from './components/NicheDetailModal.tsx';
import { NicheProject } from './data/landingData.ts';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState('Free 3-Day Trial');
  const [selectedProject, setSelectedProject] = useState<NicheProject | null>(null);

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setBookingService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const handleExploreWork = () => {
    const el = document.getElementById('showcase');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreOffer = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111111] flex flex-col font-sans selection:bg-[#00A896] selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking('Intro Call')} />

      <main className="flex-1">
        {/* 2. Hero Section & Social Proof */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking('Intro Call')}
          onExploreWork={handleExploreWork}
        />

        {/* 3. Showcase Carousel Section ("For your niche") */}
        <ShowcaseCarousel
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenBooking={() => handleOpenBooking('Portfolio Exploration')}
        />

        {/* 4. "How We Help" Section */}
        <HowWeHelpSection />

        {/* 5. Dark Feature Callout ("Try before you commit") */}
        <CommitmentBanner
          onStartTrial={() => handleOpenBooking('Free 3-Day Trial')}
        />

        {/* 6. Process Steps ("What happens next") */}
        <ProcessSection />

        {/* 7. Core Value Section ("Create. Strategize. Scale") */}
        <CoreValueSection
          onOpenBooking={(serviceName) => handleOpenBooking(serviceName || 'Services Consultation')}
        />

        {/* 8. Testimonials Grid ("Impact from past customers") */}
        <TestimonialsSection />

        {/* 9. Teal Conversion Banner ("Not sure where to start?") */}
        <TealConversionBanner
          onGetInTouch={() => handleOpenBooking('General Inquiry')}
          onExploreOffer={handleExploreOffer}
        />

        {/* 10. FAQ Accordion Section ("Questions before you start") */}
        <FaqSection />
      </main>

      {/* 11. Footer */}
      <Footer onOpenBooking={() => handleOpenBooking('Contact Inquiry')} />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={bookingService}
      />

      <NicheDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenBooking={(svc) => handleOpenBooking(svc)}
      />
    </div>
  );
}
