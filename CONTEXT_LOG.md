# AK Digital Studio - Context & Architecture Log

## 1. AI Reasoning & Architecture Choices

### Core Objectives
1. **Pixel-Perfect Recreation**: Replicate the AK Digital Studio landing page and design system atlas with mathematical precision, matching typographic scales, color tokens, button states, and section flow.
2. **Interactive Functionality**: Transform static mockups into living, purposeful workflows:
   - **Booking & Intake Modal**: A 3-step structured lead capture form with model selection (Free 3-Day Trial, UX Audit, 0-to-1 Product Design), team discovery fields, and scheduling confirmation.
   - **Niche Case Study Deep-Dive**: Clicking any niche card (CleanTech, FinTech, HealthTech, AI Ops, Enterprise SaaS) displays an interactive modal with full screen mockups, UX problem diagnosis, design solution, and quantitative business metrics.
   - **Showcase Carousel ("For your niche")**: Pixel-perfect presentation utilizing the 5 high-fidelity 360x480 reference images. On hover, the image increases in elevation (`shadow-2xl -translate-y-2.5`) and the text below transitions color to `#00A896`.
   - **Client Logo Auto-Scroll Carousel**: Continuous horizontal marquee featuring 10 authentic client brand images (Tata Consultancy Services, Avery Dennison, Aurum Data Solutions, Verizon, AD Circular, Stellantis, Brillio, Commonwealth Bank of Australia, Dropout, Flexcellence). Automatically pauses on hover, colorises the hovered logo from grayscale to vibrant brand colors, and renders a floating tooltip with company name and category.
   - **How We Help Flip Cards**: 3D interactive flip cards with inverting hover badge colors (teal background with pure white icon), exact reference icons (`UserCheck`, `Wand2`, `ClipboardCheck`), and detailed methodology pointers on the reverse face.
   - **Create, Strategize, Scale Flip Cards**: Clean click-to-flip service cards with mobile-friendly rotate affordances detailing deliverables, sprint timelines, and scope.
   - **Accessible Accordions**: FAQ section with ARIA attributes and smooth expand/collapse.
3. **Resilience & Zero Broken Assets**:
   - Primary brand asset: Leveraged `/assets/aistudio/AK_Digita_Studio_Logo_73d88755.png` in header, favicon, JSON-LD, and footer.
   - Niche UI mockups: Handcrafted responsive vector/SVG components (`CleanTechMockup`, `FinTechMockup`, `HealthTechMockup`, `AiOpsMockup`, `EnterpriseMockup`) to ensure crisp rendering at 4K resolution with zero external image host dependencies or network failures.

---

## 2. Component Design Token Mapping

### Color System (from Design System Atlas `01.1`)
| Token Name | Hex Code | System Usage |
| :--- | :--- | :--- |
| `Primary/Dark` | `#071A32` | Pressed buttons, deep commitment callout, footer background |
| `Primary/Default`| `#0B2545` | Main CTAs, major display headings, primary brand anchor |
| `Primary/Light` | `#A1C3EB` | Subtle borders, light disabled surfaces, header tints |
| `Secondary/Dark`| `#00534B` | Readable hover teal, gradient dark stop, accent badges |
| `Secondary/Default` | `#00A896` | Primary interactive accent, badge backgrounds, focus rings |
| `Secondary/Light`| `#8BD8D0` | Hover tint, badge borders, overline kicker highlights |
| `Accent/Dark` | `#013D46` | Reserved emphasis |
| `Accent/Default` | `#028090` | Reserved emphasis & interactive secondary elements |
| `Accent/Light` | `#92D4DD` | Tinted background overlays |
| `Off-White` | `#F8FAFC` | Main background canvas & inverse labels |
| `Off-Black` | `#111111` | Primary body typography & long-form prose |

### Typography Scale (Inter & Plus Jakarta Sans)
| Role / Style | Desktop Size / Line-Height | Mobile Size / Line-Height | Weight | Tracking |
| :--- | :--- | :--- | :--- | :--- |
| `Hero Display (XL)` | 64px / 70.4px | 40px / 44px | 700 / 800 | -0.025em (-2%) |
| `Section Heading (H1)` | 40px / 48px | 30px / 36px | 700 | -0.015em (-1.5%) |
| `Subsection (H2)` | 32px / 40px | 24px / 30px | 600 | -0.01em (-1%) |
| `Card Topic (H3)` | 24px / 31.2px | 20px / 26px | 600 | 0 |
| `Feature Title (H4)` | 20px / 27px | 18px / 24.3px | 500 / 600 | 0 |
| `Lead Intro Body` | 20px / 32px | 18px / 28.8px | 400 | 0 |
| `Body Standard` | 16px / 24px | 15px / 22.5px | 400 | 0 |
| `Kicker Overline` | 14px / 19.6px | 13px / 18.2px | 700 | +0.08em (+8%) |
| `Footer Meta` | 14px / 21px | 13px / 19.5px | 400 | 0 |

### Spacing & Radius Foundation (`01.4`)
- Spacing: 4px (icon details), 8px (label gaps), 12px (compact padding), 16px (body rhythm), 24px (card padding), 48px (section gaps), 80px (major hero padding), 96px (major section separation).
- Radii: 4px (checkboxes/tags), 8px (standard controls/inputs), 16px (content cards), 9999px (pill buttons & badges).
- Hit targets: Minimum 48px touch target for all buttons, links, and accordion headers.

---

## 3. List of Assets & Prompts for External Asset Replacement

If custom photography or marketing render assets are desired to replace the vector dashboards, the following prompts follow production photography guidelines:

1. **CleanTech Dashboard Asset**:
   - `<!-- ASSET PROMPT: Modern CleanTech circular economy SaaS web application dashboard displaying interactive supply route map, carbon credit metrics, and recycling progress telemetry, high-end UI design, soft ambient studio lighting (1200x800px PNG) -->`
2. **FinTech Treasury Dashboard Asset**:
   - `<!-- ASSET PROMPT: Clean high-density financial treasury dashboard on MacBook Pro screen with cash flow curve charts, instant settlement ledger table, and automated compliance badges, minimalist typography (1200x800px PNG) -->`
3. **HealthTech Patient Mobile App Asset**:
   - `<!-- ASSET PROMPT: iPhone 16 mockup displaying warm, empathetic preventive health monitoring app interface, daily vitals biometric scorecard, and telehealth cardiologist appointment drawer (1200x800px PNG) -->`
4. **AI Ops Observability Asset**:
   - `<!-- ASSET PROMPT: Dark-mode AI cluster observability console with real-time GPU cluster telemetry heatmaps, token latency waterfall graph, and automated drift diagnostics (1200x800px PNG) -->`
5. **Enterprise SaaS Governance Asset**:
   - `<!-- ASSET PROMPT: Enterprise multi-tenant governance platform UI featuring automated PII data redaction stream, SOC2 compliance checklist, and RBAC permission matrix (1200x800px PNG) -->`
