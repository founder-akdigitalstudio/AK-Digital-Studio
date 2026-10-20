# AK Digital Studio Landing Page & Design System Replicant

A pixel-perfect, responsive recreation of the AK Digital Studio landing page and design system atlas, featuring complete typography and color token integration, interactive booking intake modal, niche showcase carousel with deep preview modal, smooth FAQ accordions, and comprehensive SEO/AEO structured data.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following user preferences were confirmed during clarification and will be strictly executed:

- **Confirmed Decision 1 (Primary CTAs)**: Primary actions ("Book an intro call", "Start Free Trail", "Get in Touch") trigger a polished interactive booking and project inquiry modal with multi-step intake and validation rather than a dead link or simple scroll.
- **Confirmed Decision 2 (Niche Showcase Cards)**: The "For your niche" showcase cards feature interactive click-to-preview functionality opening a modal with detailed screen walk-throughs, design rationale, and key metrics alongside smooth horizontal carousel drag/navigation.
- **Confirmed Decision 3 (Testimonials)**: Client testimonials are enriched with diverse, domain-relevant reviews spanning FinTech, HealthTech, CleanTech, and AI Ops rather than repeating single placeholder text.

---

### 1. Overview & Core Concept

- **What It Does**: AK Digital Studio is a premier UX/UI design studio for growing SaaS teams, startups, and enterprises. The landing page establishes brand credibility, demonstrates deep domain vertical experience, clearly outlines the collaboration process, and converts high-intent visitors through trial and intro-call booking flows.
- **Target Audience / Persona**: Engineering leaders, SaaS founders, enterprise product managers, and scaleup executives seeking UX redesigns, design audits, and design-to-development execution.
- **Key Value**: Clutter-free design communication, transparent engagement models ("Try before you commit - 3 days free"), and domain expertise in complex enterprise software.

---

### 2. User Experience & Visual Design

#### Architectural Flow
1. **Sticky Header / Navbar**: 
   - Left: Authentic AK Digital Studio mark (`/assets/aistudio/AK_Digita_Studio_Logo_73d88755.png`) with clean wordmark.
   - Center: Navigation links (`Work`, `Services`, `About`).
   - Right: Primary CTA (`Book an intro call`) with `backdrop-filter: blur(12px)` and subtle hairline border.
   - Mobile: Responsive slide-out drawer preserving 48px touch targets.
2. **Hero Section**:
   - Eyebrow: `CLEAR DESIGN FOR GROWING TEAMS` with +8% tracking.
   - Display H1: `User-Focused Development-Ready` with strict optical leading and `text-wrap: balance`.
   - Lead Intro: "We help startups and enterprises fix confusing websites and apps so customers feel at ease and remember you."
   - Dual CTAs: Primary dark navy button `Book an intro call` + secondary outline `Explore Work`.
   - Partner Social Proof: High-fidelity wordmarks (TCS, Avery Dennison, Aurum Data Solutions, Verizon, Google Cloud, ST) with trust subtitle.
3. **Showcase Carousel ("For your niche")**:
   - Section header with pill eyebrow `EXPERTISE`.
   - Horizontal snap carousel of 5 vibrant, color-coded SaaS products:
     - *CleanTech (Green #65A30D / #84CC16)*: Recycling optimization & industrial sustainability dashboard.
     - *FinTech (Gold/Amber #EAB308)*: User flow bottleneck analytics & financial productivity platform.
     - *HealthTech (Orange #F97316)*: Curated patient identity & health tracking application.
     - *AI Ops (Purple #8B5CF6 / #7C3AED)*: Complex AI cluster monitoring & network troubleshooting console.
     - *Enterprise SaaS (Navy/Blue #2563EB / #0B2545)*: Trustworthy multi-tenant AI solution management.
   - Navigation controls (prev/next indicators and active pill bar).
   - Card click opens high-res interactive case study modal with project metrics.
4. **"How We Help" Section**:
   - 3-column card grid with distinctive teal badge icons (`Help more visitors buy`, `Update your look`, `Simplify customer tasks`).
   - Interactive hover lift with arrow translation.
5. **Dark Feature Callout ("Try before you commit")**:
   - Deep navy background (`#071A32`), centered typography, and CTA `Start Free Trail`.
   - Infinite marquee ticker strip with smooth CSS animation: `No Commitment • No Cost • No Commitment • No Cost...`.
6. **Process Sequence ("What happens next")**:
   - 4-step progressive timeline (`01 Intro Call`, `02 Proposal`, `03 Design starts`, `04 Ship`) with vertical divider indicators.
7. **Core Value Section ("Create. Strategize. Scale")**:
   - Dark theme section with 3 expandable service columns: `UI/UX Design`, `UX research`, `UX Consultancy`.
   - Direct interactive toggles detailing deliverables, timelines, and outcomes, plus CTA `Explore our Services`.
8. **Testimonials Grid ("Impact from past customers")**:
   - 2x2 grid layout with quote icons, authentic client outcomes, author avatars, and credentials.
9. **Teal Conversion Banner ("Not sure where to start?")**:
   - High-contrast Teal block (`#00A896` / `#00534B`) with eyebrow `NOW AVAILABLE FOR HIRE`.
   - Dual action CTAs: `Get In Touch` and `Explore our offer`.
10. **FAQ Accordion Section ("Questions before you start")**:
    - 6 realistic client questions with smooth accordion collapse/expand and 48px hit areas.
11. **Footer**:
    - 4-column layout: Brand & mission summary, Explore links, Socials, Legal & Information, plus copyright line.

#### Visual Identity Tokens (from Design System Atlas)
- **Primary Navy**: Default `#0B2545`, Dark `#071A32`, Light `#A1C3EB`.
- **Secondary Teal**: Default `#00A896`, Dark `#00534B`, Light `#8BD8D0`.
- **Accent Slate**: Default `#028090`, Dark `#013D46`, Light `#92D4DD`.
- **Editorial Base**: Off-White `#F8FAFC`, Off-Black `#111111`.
- **Typography**: Inter / Plus Jakarta Sans geometric scales with strict line-heights and tracking tokens.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Interactive Client Intake Modal vs Static Mailto Link**
  - *Approach*: Built-in multi-step booking modal with interest selection (UX Redesign, Design Sprint, Free 3-Day Trial), contact info, and confirmation feedback.
  - *Why*: Delivers an immediate, functional app experience rather than a dead button or generic prompt.
- **Decision 2: Rich Vector Graphics for Niche Showcases**
  - *Approach*: Bespoke, scalable SVG vector interfaces depicting real dashboards (CleanTech, FinTech, HealthTech, AI Ops, Enterprise SaaS) with colored window headers, charts, and metrics matching the reference screenshot.
  - *Why*: Ensures pixel-crisp fidelity at 4K, instant rendering without external dependencies or broken image URLs, and 100% responsive resizing.
- **Decision 3: Complete SEO & AEO Structured Data**
  - *Approach*: Inject JSON-LD schemas (`Organization`, `WebPage`, `FAQPage`) and GA4 data-attributes into semantic HTML.
  - *Why*: Meets the strict production-grade SEO/AEO criteria for modern AI search engines and search indexing.

---

### 4. Technical Architecture & Component Hierarchy

```
┌────────────────────────────────────────────────────────┐
│                        App.tsx                         │
│  (State: activeModal, selectedNiche, bookingStep)      │
└──────────────────────────┬─────────────────────────────┘
                           │
 ┌─────────────────────────┴─────────────────────────────┐
 │                       Sections                        │
 ├─────────────────┬─────────────────┬───────────────────┤
 │ Navbar          │ HeroSection     │ ShowcaseCarousel  │
 │ (Sticky, Drawer)│ (Title, Logos)  │ (Cards, Drag)     │
 ├─────────────────┼─────────────────┼───────────────────┤
 │ HowWeHelpGrid   │ DarkCommitBanner│ ProcessSteps      │
 │ (3 Cards, Hover)│ (Ticker strip)  │ (01 - 04 Stages)  │
 ├─────────────────┼─────────────────┼───────────────────┤
 │ ServicesSection │ TestimonialsGrid│ TealCtaBanner     │
 │ (Dark, Expand)  │ (4 Reviews)     │ (High Contrast)   │
 ├─────────────────┼─────────────────┼───────────────────┤
 │ FaqAccordion    │ Footer          │ BookingModal      │
 │ (Animated Items)│ (4 Columns)     │ & NicheDetailModal│
 └─────────────────┴─────────────────┴───────────────────┘
```

#### Deliverables Summary
1. `src/App.tsx`: Unified page structure with modular section components and state management.
2. `src/components/*`: Isolated, high-cohesion components for Carousel, Modals, FAQ, and Marquee.
3. `src/data/*`: Verified tokens, case studies, FAQ data, and testimonials.
4. `index.html`: OpenGraph, Twitter tags, Google Analytics 4 placeholders, and JSON-LD structured data.
5. `CONTEXT_LOG.md`: Architectural decisions, token mapping, and asset prompts.
6. `TEST_RESULTS.md`: Comprehensive QA checklist, viewport verification, and SEO/AEO test log.
