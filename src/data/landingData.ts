export interface NicheProject {
  id: string;
  tag: string;
  tagBg: string;
  tagText: string;
  title: string;
  headline: string;
  summary: string;
  problem: string;
  solution: string;
  metrics: { label: string; value: string }[];
  screens: { label: string; desc: string }[];
  accentColor: string;
  image: string;
}

export const NICHE_PROJECTS: NicheProject[] = [
  {
    id: 'cleantech',
    tag: 'CleanTech',
    tagBg: 'bg-[#65A30D]',
    tagText: 'text-white',
    title: 'Website Design',
    headline: 'Helping industries make recycling seamless',
    summary: 'A high-impact sustainability platform connecting industrial supply chains with circular recycling hubs and verified ESG compliance reporting.',
    problem: 'Industrial manufacturers struggled with opaque recycling workflows and fragmented compliance tracking, leading to high drop-off during partner onboarding.',
    solution: 'Designed an intuitive map-based material exchange portal with automated logistics dispatch, carbon offset calculations, and real-time ledger audits.',
    metrics: [
      { label: 'Supplier Onboarding', value: '+180%' },
      { label: 'Logistics Time Saved', value: '42%' },
      { label: 'ESG Reporting Speed', value: '3.5x' }
    ],
    screens: [
      { label: 'Material Journey & Map', desc: 'Interactive geographic tracker for industrial recyclable batches.' },
      { label: 'Environmental Savings KPI', desc: 'Direct visual telemetry of CO2 averted and tons diverted.' },
      { label: 'Partner Onboarding Flow', desc: 'Frictionless 3-step verification for industrial plant managers.' }
    ],
    accentColor: '#65A30D',
    image: '/assets/aistudio/360x480_8a1b7d54.png'
  },
  {
    id: 'fintech',
    tag: 'FinTech',
    tagBg: 'bg-[#EAB308]',
    tagText: 'text-slate-900',
    title: 'UX Audit & Re-design',
    headline: 'Increasing productivity by finding bottlenecks in user flows',
    summary: 'A high-velocity treasury management and automated ledger dashboard designed for CFOs and distributed financial teams.',
    problem: 'Excessive cognitive load from cluttered tables and a 7-step KYC process was causing 38% drop-off in corporate account activation.',
    solution: 'Streamlined account verification to 2 steps, implemented tabular financial data with keyboard shortcuts, and added intelligent cash flow forecast charts.',
    metrics: [
      { label: 'Drop-off Reduction', value: '-38%' },
      { label: 'Daily Ops Velocity', value: '2.4x' },
      { label: 'KYC Completion Time', value: '3 min' }
    ],
    screens: [
      { label: 'Automated Ledger Grid', desc: 'High-density tabular grid with instant categorization filters.' },
      { label: 'Cashflow Forecast Engine', desc: 'Predictive 90-day balance curves with risk threshold flags.' },
      { label: 'Quick Approval Drawer', desc: 'One-click wire release with dual-factor security clearance.' }
    ],
    accentColor: '#EAB308',
    image: '/assets/aistudio/360x480-1_bbc8109a.png'
  },
  {
    id: 'healthtech',
    tag: 'HealthTech',
    tagBg: 'bg-[#F97316]',
    tagText: 'text-white',
    title: 'Scalable Product Design',
    headline: 'Identity curation for Health tracking startup from scratch',
    summary: 'A personalized preventative health monitoring suite connecting patient wearables with clinical cardiology specialists.',
    problem: 'Patients found health charts intimidating and overwhelming, leading to low continuous daily engagement after week two.',
    solution: 'Created an empathetic, warm visual hierarchy featuring accessible color-coded biometric scorecards, daily habit checklists, and in-app telehealth scheduling.',
    metrics: [
      { label: '30-Day App Retention', value: '94%' },
      { label: 'Daily Log Frequency', value: '4.2x' },
      { label: 'App Store Rating', value: '4.9/5' }
    ],
    screens: [
      { label: 'Daily Vitals Dashboard', desc: 'Calm biometric cards highlighting sleep quality, heart rate & steps.' },
      { label: 'Doctor Telehealth Portal', desc: 'Seamless encrypted video consultation and note-sharing interface.' },
      { label: 'Preventative Milestones', desc: 'Gamified micro-streaks motivating sustained wellness routines.' }
    ],
    accentColor: '#F97316',
    image: '/assets/aistudio/360x480-2_43847f1d.png'
  },
  {
    id: 'aiops',
    tag: 'AI Ops',
    tagBg: 'bg-[#8B5CF6]',
    tagText: 'text-white',
    title: 'UX Research & Consultancy',
    headline: 'Simplifying Complex AI monitoring dashboards',
    summary: 'Next-generation observability console for deep learning model clusters, GPU telemetry, and token inference anomaly detection.',
    problem: 'ML engineers were drowning in noisy alerts across disjointed terminals, missing critical model drift and GPU throttling events.',
    solution: 'Consolidated distributed clusters into a unified health matrix with automated root-cause clustering and interactive latency heatmaps.',
    metrics: [
      { label: 'Alert Fatigue Drop', value: '62%' },
      { label: 'Mean Time to Detect', value: '-55%' },
      { label: 'Engineer Usability CSAT', value: '4.8/5' }
    ],
    screens: [
      { label: 'Cluster Heatmap View', desc: 'Real-time GPU memory, power, and temperature grid visualizer.' },
      { label: 'Model Drift Diagnostics', desc: 'Statistical distribution divergence graphs with auto-rollback triggers.' },
      { label: 'Token Throughput Monitor', desc: 'Per-second inference rate and queue depth streaming charts.' }
    ],
    accentColor: '#8B5CF6',
    image: '/assets/aistudio/360x480-3_d53ec086.png'
  },
  {
    id: 'enterprisesaas',
    tag: 'Enterprise SaaS',
    tagBg: 'bg-[#2563EB]',
    tagText: 'text-white',
    title: 'End-to-End Product Design',
    headline: 'Building trustworthy AI solutions of a company',
    summary: 'Multi-tenant enterprise governance and automated policy enforcement platform for Fortune 500 digital transformations.',
    problem: 'Compliance officers lacked visibility into employee AI usage, exposing enterprise databases to unvetted LLM data ingestion.',
    solution: 'Crafted a bank-grade audit cockpit with role-based redaction policies, compliance checklists, and instant threat quarantine.',
    metrics: [
      { label: 'Enterprise Pipeline', value: '$14M+' },
      { label: 'Fortune 500 Adoption', value: '12 Firms' },
      { label: 'Audit Prep Time', value: '-80%' }
    ],
    screens: [
      { label: 'Governance & RBAC Matrix', desc: 'Granular permissions editor for AI model access and data boundaries.' },
      { label: 'Data Redaction Stream', desc: 'Live visual sanitizer displaying automated PII masking in action.' },
      { label: 'Executive Compliance Export', desc: 'One-click SOC2 / ISO 27001 audit-ready PDF summary generator.' }
    ],
    accentColor: '#2563EB',
    image: '/assets/aistudio/360x480-4_a2163b1f.png'
  }
];

export interface HowWeHelpItem {
  id: string;
  icon: 'user-check' | 'wand' | 'clipboard-check';
  title: string;
  description: string;
  pointers: string[];
}

export const HOW_WE_HELP_ITEMS: HowWeHelpItem[] = [
  {
    id: 'visitors',
    icon: 'user-check',
    title: 'Help more visitors buy',
    description: 'Fix confusing pages that make people leave before they buy.',
    pointers: [
      'Design creative websites that stand apart from the AI sloppy sites every competitor is using.',
      'Do user research to find the exact customer needs and problems that drive high-intent clicks.',
      'Incorporate sales tactics into your landing page that act as your 24/7 top-performing salesperson.',
      'Streamline checkout & demo booking funnels to eliminate hesitation drop-offs.'
    ]
  },
  {
    id: 'look',
    icon: 'wand',
    title: 'Update your look',
    description: 'Make your product feel modern and trustworthy.',
    pointers: [
      'Modernize visual aesthetics to command immediate enterprise credibility and client trust.',
      'Establish unified design system tokens across typography, color palettes, and component states.',
      'Craft distinctive visual hierarchy tailored to your vertical without generic template clichés.',
      'Ensure responsive polish engineered for ultra-wide 4K workstations down to mobile screens.'
    ]
  },
  {
    id: 'tasks',
    icon: 'clipboard-check',
    title: 'Simplify customer tasks',
    description: 'Design a product that works for your customers and your team.',
    pointers: [
      'Ergonomic user flows reducing complex multi-step procedures into guided, intuitive pathways.',
      'Information architecture overhaul eliminating cognitive overload, noise, and clutter.',
      'Contextual inline validation and proactive hints preventing user errors before they happen.',
      'Intuitive data visualization and dashboards that make dense metrics instantly actionable.'
    ]
  }
];

export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Intro Call',
    description: 'A call to understand what you want to launch or improve and what’s getting in the way.'
  },
  {
    num: '02',
    title: 'Proposal',
    description: 'Agree on the work, cost, timing and what you’ll receive before we start.'
  },
  {
    num: '03',
    title: 'Design starts',
    description: 'Review the designs with us and share your feedback as the work develops.'
  },
  {
    num: '04',
    title: 'Ship',
    description: 'We refine the designs together and review how they help your customers.'
  }
];

export interface ServiceOffering {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  timeline: string;
  summary: string;
}

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: 'uiux',
    title: 'UI/UX Design',
    subtitle: 'When you need a big boost and innovative solutions',
    summary: 'Full-stack interface design from concept to production-ready Figma systems.',
    features: [
      'End-to-end design systems in Figma with auto-layout variables & tokens',
      'Pixel-perfect responsive web & mobile application interfaces',
      'High-fidelity interactive prototypes for stakeholder testing & sign-off',
      'Clean developer handoff documentation with component state matrices'
    ],
    timeline: '2 to 4 week design sprints'
  },
  {
    id: 'research',
    title: 'UX research',
    subtitle: 'Something’s not working. You don’t know what and why',
    summary: 'Data-backed diagnostic discovery to uncover customer drop-off causes.',
    features: [
      'Target persona qualitative user interviews & feedback synthesis',
      'Friction & funnel drop-off behavioral heatmap analytics',
      'Nielsen-Norman standard heuristic evaluation & priority scoring',
      'Actionable prioritized UX audit roadmap with immediate high-impact quick wins'
    ],
    timeline: '1 to 2 weeks'
  },
  {
    id: 'consultancy',
    title: 'UX Consultancy',
    subtitle: 'You have great ideas, but you’re unsure about feasibility',
    summary: 'Strategic advisory for scaleups tackling complex architecture and roadmaps.',
    features: [
      'Strategic product roadmapping & MVP feature scoping',
      'Complex information architecture & data hierarchy modeling',
      'Design team mentoring & design system governance setup',
      'Cross-functional engineering feasibility & design QA reviews'
    ],
    timeline: 'Ongoing advisory or monthly retainer'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'The page finally had a clear rhythm. Every section made the next step easier to understand, and our enterprise pilot conversions jumped by 44% in the very first month.',
    name: 'Sarah Jenkins',
    role: 'VP of Product',
    company: 'TraceClean Technologies',
    category: 'CleanTech',
    avatarInitials: 'SJ'
  },
  {
    quote: 'AK Digital Studio identified the friction points in our onboarding within 48 hours. The redesigned transaction workflows cut our customer drop-off by 38%. Outstanding craft.',
    name: 'Marcus Thorne',
    role: 'Co-Founder & CTO',
    company: 'Kestra Ledger',
    category: 'FinTech',
    avatarInitials: 'MT'
  },
  {
    quote: 'Our healthcare app required deep empathy and zero visual clutter. AK curated an interface that patients aged 18 to 75 navigate effortlessly. True design partners.',
    name: 'Dr. Elena Rostova',
    role: 'Head of Clinical UX',
    company: 'Pulselog Health',
    category: 'HealthTech',
    avatarInitials: 'ER'
  },
  {
    quote: 'They transformed dense distributed cluster data and GPU metrics into a stunning, intuitive AI Ops console. Even our most demanding ML engineers were impressed.',
    name: 'Arvind Raman',
    role: 'Director of Engineering',
    company: 'HyperScale AI',
    category: 'AI Ops',
    avatarInitials: 'AR'
  }
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'What do I get in the free 3-day trial?',
    answer: 'During the 3-day trial, we tackle one specific high-impact UX challenge in your app or website. You will receive 2 to 3 fully designed, production-ready Figma screens complete with responsive variants, component tokens, and our design rationale. Zero commitment, zero cost.'
  },
  {
    id: 'faq-2',
    question: 'How much will it cost?',
    answer: 'The cost depends on what you need. We work on either focused sprint packages (fixed-scope 2–4 week sprints) or dedicated monthly retainers. We discuss your exact goals and budget on our first call, then agree on clear deliverables and pricing before you commit.'
  },
  {
    id: 'faq-3',
    question: 'Can we keep our existing logo and brand?',
    answer: 'Yes, absolutely. We frequently work with startups and scaleups who have an established identity but need their product UX modernized. We can either preserve your brand guidelines or elevate them with a refreshed design system.'
  },
  {
    id: 'faq-4',
    question: 'Can you help us design a new website or app?',
    answer: 'Yes. Whether you are building a greenfield 0-to-1 MVP or redesigning a mature multi-tenant SaaS platform, we manage everything from discovery and user research to interface design and developer handoff.'
  },
  {
    id: 'faq-5',
    question: 'What happens on the first call?',
    answer: 'A relaxed, 30-minute discovery conversation. We learn about your product, your business goals, what’s confusing your current users, and whether our studio is the right fit. There is no hard sales pitch.'
  },
  {
    id: 'faq-6',
    question: 'I don’t know what needs fixing. Can you help?',
    answer: 'That’s very common. We run a diagnostic UX Audit where we evaluate your current application or site against proven usability standards, inspect your analytics funnel, and hand you a prioritized report of exact bottlenecks and recommended improvements.'
  }
];
