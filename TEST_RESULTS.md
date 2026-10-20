# AK Digital Studio - Quality Assurance & Test Checklist

## 1. Cross-Browser & Responsive Viewport Verification

| Viewport Category | Screen Width | Verification Scope | Status |
| :--- | :--- | :--- | :--- |
| **Mobile Portrait** | `320px` - `390px` | Navigation collapses to full-fidelity hamburger drawer; 48px touch targets; hero typography scales cleanly without clipping; horizontal carousel supports natural touch swipe (`scroll-snap-type: x mandatory`). | **PASSED** |
| **Tablet / Foldable** | `768px` - `1024px` | "How We Help" cards stack neatly into 2 or 3 columns; process timeline preserves vertical reading order; logo cloud displays in 3x2 grid. | **PASSED** |
| **Desktop Baseline** | `1200px` - `1440px` | 1440px baseline with max-w-6xl container (1152px); sticky header with `backdrop-filter: blur(12px)`; 4-step process sequence aligned in 4 columns; 2x2 testimonials grid. | **PASSED** |
| **Ultra-Wide / 4K** | `1920px` - `3840px` | Content remains centered without stretching; vector UI mockups retain mathematical crispness with no raster pixelation. | **PASSED** |

---

## 2. Interactive & State Test Checklist

| Component / Flow | Test Scenario | Expected Outcome | Verification |
| :--- | :--- | :--- | :--- |
| **Header Navbar** | Scroll past 20px | Background shifts to `bg-white/90` with blur filter and subtle hairline border. | Verified |
| **Mobile Drawer** | Click hamburger icon | Drawer slides down with accessible links and full-width CTA; focus trapped properly. | Verified |
| **Hero Dual CTAs** | Click "Book an intro call" | Opens 3-step interactive booking modal. | Verified |
| **Hero Dual CTAs** | Click "Explore Work" | Smooth-scrolls viewport directly to `#showcase`. | Verified |
| **Client Logo Auto-Scroll** | Normal page state | Continuously auto-scrolls horizontally with 10 real client brand images in muted grayscale. | Verified |
| **Client Logo Hover Pause** | Hover over carousel or logo | Horizontal scroll immediately pauses smoothly; resumes on mouse leave. | Verified |
| **Client Logo Colorise** | Hover specific client logo | Hovered logo transitions to full vibrant brand color (`grayscale-0 opacity-100 scale-105`) with teal border accent. | Verified |
| **Client Logo Tooltip** | Hover specific client logo | Floating tooltip appears above logo with company name and industry category. | Verified |
| **Niche Showcase Real Images** | Page render | Renders the 5 authentic 360x480 images (CleanTech, FinTech, HealthTech, AI Ops, Enterprise SaaS) with clean category and title below. | Verified |
| **Niche Card Hover State** | Hover over niche card | Image elevates with smooth `shadow-2xl` and `-translate-y-2.5`; title text below smoothly transitions color to `#00A896`. | Verified |
| **How We Help Inverting Hover** | Hover card | Teal badge background turns solid `#00A896` and inner icon inverts to pure crisp white without triggering a flip. | Verified |
| **How We Help Flip Cards** | Click or tap card | Exclusively flips 180 degrees on click/tap to reveal actionable methodology pointers; does not flip on hover. | Verified |
| **Create, Strategize, Scale Flip** | Click / tap card | Flips on click to show deliverables and sprint cadence; mobile-friendly affordance icon visible at bottom. | Verified |
| **Niche Showcase Carousel** | Left/Right navigation buttons | Smoothly scrolls carousel by 350px; updates active indicator pill. | Verified |
| **Niche Showcase Cards** | Click any card | Opens `NicheDetailModal` with deep-dive problem/solution, metrics, and core screens. | Verified |
| **Case Study Modal** | Click "Schedule [Niche] Intake" | Closes modal and opens BookingModal pre-filled with the niche service. | Verified |
| **"How We Help" Cards** | Hover on cards | Card elevates with subtle shadow; teal badge highlights; arrow translates right. | Verified |
| **Dark Commitment Banner** | Continuous ticker | Marquee loops smoothly across screen; pauses on user hover for readability. | Verified |
| **Core Value Services** | Click "More ⌄" / "Less ⌃" | Smoothly expands deliverables list and sprint timeline; rotates chevron. | Verified |
| **FAQ Accordions** | Click question toggle | Expands answer with smooth animation; toggles `aria-expanded` and plus/minus icon. | Verified |
| **Booking Intake Form** | Submit empty fields | Displays red field-level validation errors ("Please provide a valid work email"). | Verified |
| **Booking Intake Form** | Complete Step 2 | Transitions to Step 3 confirmation screen with scheduled details. | Verified |

---

## 3. SEO, AEO & Analytics Verification

| Standard | Test Target | Implementation Details | Result |
| :--- | :--- | :--- | :--- |
| **OpenGraph & Twitter** | Social Card Rendering | `og:title`, `og:description`, `og:image`, `twitter:card`, `twitter:title` matched to brand. | **VERIFIED** |
| **Canonical Link** | URL Canonicalization | `<link rel="canonical" href="https://akdigitalstudio.com/" />` | **VERIFIED** |
| **Schema.org Organization**| AI Engine Entity Indexing | Embeds name, logo, contact email, and official URL. | **VALID JSON-LD** |
| **Schema.org FAQPage** | Rich Search Snippets | 6 questions and answers mapped to Google Search FAQ guidelines. | **VALID JSON-LD** |
| **Schema.org WebPage** | Knowledge Graph integration | Links web page as child of Organization entity. | **VALID JSON-LD** |
| **GA4 Interaction Tracking**| Data Attributes | All CTAs, navigation links, and accordions include `data-ga-category`, `data-ga-action`, and `data-ga-label`. | **INSTRUMENTED** |

---

## 4. Performance & Quality Targets

- **Lighthouse Performance Target**: 95+ (zero unoptimized remote images; lightweight SVG vector mockups; zero bulky third-party tracking scripts blocking main thread).
- **Lighthouse Accessibility Target**: 98+ (4.5:1 text contrast for body copy; 3:1 for large display headers; all form controls have visible labels; all buttons have accessible names).
- **Lighthouse Best Practices Target**: 100 (HTTPS, modern doctype, no deprecated APIs).
- **Lighthouse SEO Target**: 100 (complete meta tags, semantic headings `<h1>` to `<h4>`, descriptive alt tags).
