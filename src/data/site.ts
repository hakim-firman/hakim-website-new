export const site = {
  name: 'Hakim Firman',
  shortName: 'Hakim',
  url: 'https://hakimfirman.my.id',
  jobTitle: 'Full-Stack Web Developer',
  email: 'hi@hakimfirman.my.id',
  upwork: 'https://www.upwork.com/freelancers/hakimf3',
  github: 'https://github.com/hakim-firman',
  linkedin: 'https://www.linkedin.com/in/hakimfirman/',
  instagram: 'https://www.instagram.com/hakimfirman',
  location: {
    city: 'Sleman',
    region: 'Yogyakarta',
    country: 'ID',
    timezone: 'GMT+7',
  },
  title: 'Hakim Firman — Laravel & Full-Stack Web Developer in Sleman',
  description:
    'Full-stack developer with 5+ years building Laravel, Filament and React products end to end — schema, queues, admin panels, front end and deploy. Top Rated Plus on Upwork, 100% job success.',
  keywords: [
    'Laravel developer',
    'Filament developer',
    'full-stack developer Indonesia',
    'freelance web developer Sleman',
    'Livewire developer',
    'React developer',
    'n8n automation',
    'API integration',
  ],
} as const;

export const nav = [
  { href: '/#work', label: 'Work' },
  { href: '/#services', label: 'Services' },
  { href: '/#stack', label: 'Stack' },
] as const;

export const heroStats = [
  { value: '5+', label: 'Years of experience' },
  { value: '05', label: 'Services offered' },
  { value: 'A++', label: 'Upwork feedback' },
] as const;

export const trustStats = [
  { value: '5.0', label: 'Avg rating' },
  { value: 'Top Rated Plus', label: 'Top 3% on Upwork' },
  { value: '100%', label: 'Job success' },
] as const;

export const principles = [
  { title: 'Fewer handoffs', body: 'One person owns schema, screens and deploy.' },
  { title: 'No silent months', body: 'Weekly builds you can click and argue with.' },
  { title: 'Readable on day 400', body: 'Docs and a codebase the next dev can pick up.' },
] as const;

export const capabilityChecks = [
  'Laravel, Filament and Nova — admin panels in days, not weeks',
  'Database design, queues, jobs, and REST APIs that stay boring',
  'React, Next and Livewire on the front, whichever fits the job',
  'Handover docs and a deploy that someone else can run',
] as const;

export const stackTabs = [
  {
    id: 'laravel',
    label: 'Laravel',
    blurb: 'Schema, queues, jobs and REST APIs that stay boring on purpose.',
  },
  { id: 'filament', label: 'Filament', blurb: 'Admin panels in days — resources, policies, widgets.' },
  { id: 'nova', label: 'Nova', blurb: 'When the client already bought Nova, it ships on Nova.' },
  { id: 'livewire', label: 'Livewire', blurb: 'Reactive screens without leaving the Laravel app.' },
  { id: 'react', label: 'React', blurb: 'Component front ends where interaction earns its weight.' },
  { id: 'next', label: 'Next', blurb: 'Routing, SSR and API routes when the front end grows up.' },
  { id: 'tallstack', label: 'TALLStack', blurb: 'Tailwind, Alpine, Laravel, Livewire — one tight loop.' },
  { id: 'python', label: 'Python', blurb: 'Scripts, scrapers and glue around the automation work.' },
  { id: 'nestjs', label: 'NestJS', blurb: 'Typed Node services when the client stack calls for it.' },
  { id: 'hono', label: 'Hono', blurb: 'Lightweight edge APIs — fast, minimal, deploys anywhere.' },
] as const;

export const stackLayers = [
  { title: 'Frontend', items: 'React · Next · Livewire · Tailwind' },
  { title: 'Application', items: 'Laravel · Filament · Nova · NestJS · Hono · queues' },
  { title: 'Data', items: 'MySQL · migrations · seeders · jobs' },
  { title: 'Infrastructure', items: 'Docker · Cloudflare · Vercel · CI · handover docs' },
] as const;

export const processSteps = [
  { num: '01', title: 'Discuss', body: 'We map what the thing actually needs to do, and what it does not.' },
  { num: '02', title: 'Shape', body: 'Schema, routes and screens agreed before a line of feature code.' },
  { num: '03', title: 'Build', body: 'Weekly builds you can click. No month-long silences.' },
  {
    num: '04',
    title: 'Hand over',
    body: 'Docs, a deploy you can run, and a codebase the next dev can read.',
  },
] as const;

export const processFacts = [
  { k: 'Based in', v: 'Sleman, Yogyakarta' },
  { k: 'Engagement', v: 'Fixed scope or retainer' },
  { k: 'Timezone', v: 'GMT+7, remote-friendly' },
  { k: 'Reply time', v: 'Usually within a day' },
] as const;

export const services = [
  {
    num: '01',
    title: 'Laravel Development',
    body: 'More than two years with Laravel and Vue.js — responsive, well-structured applications from schema to deploy.',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'REST API'],
    lead: 'More than two years with Laravel and Vue.js — responsive, well-structured applications from schema to deploy. One person owns the migrations, the queues, the admin panel and the deploy.',
    deliverables: [
      'Schema, migrations and seeders you can re-run',
      'Filament or Nova admin panel your team can operate',
      'REST APIs, queues and jobs with retries handled',
      'Handover docs plus a deploy someone else can run',
    ],
    meta: [
      { k: 'Typical scope', v: '4 – 8 weeks' },
      { k: 'Engagement', v: 'Fixed scope or retainer' },
      { k: 'Stack', v: 'Laravel · Vue.js · MySQL' },
    ],
  },
  {
    num: '02',
    title: 'WordPress Development',
    body: 'Elementor builds, custom templates, and clean HTML-to-WordPress conversions clients can manage themselves.',
    tags: ['Elementor', 'PHP', 'Templates'],
    lead: 'Elementor builds, custom templates, and clean HTML-to-WordPress conversions clients can manage themselves — without calling a developer for every copy change.',
    deliverables: [
      'Pixel-accurate HTML-to-WordPress conversion',
      'Custom theme or child theme, no bloat plugins',
      'Editable blocks and templates your team controls',
      'Speed pass: caching, images and Core Web Vitals',
    ],
    meta: [
      { k: 'Typical scope', v: '2 – 5 weeks' },
      { k: 'Engagement', v: 'Fixed scope' },
      { k: 'Stack', v: 'WordPress · Elementor · PHP' },
    ],
  },
  {
    num: '03',
    title: 'Frontend Development',
    body: 'Interactive, detail-polished interfaces in plain HTML, CSS and JS — or with a framework when it earns its place.',
    tags: ['React', 'Next', 'Livewire', 'Tailwind'],
    lead: 'Interactive, detail-polished interfaces in plain HTML, CSS and JS — or with React, Next or Livewire when a framework earns its place.',
    deliverables: [
      'Responsive build from your design file, down to 360px',
      'Accessible components: focus, keyboard, reduced motion',
      'Design tokens and a component set the next dev can reuse',
      'Lighthouse pass on performance and Core Web Vitals',
    ],
    meta: [
      { k: 'Typical scope', v: '1 – 4 weeks' },
      { k: 'Engagement', v: 'Fixed scope or retainer' },
      { k: 'Stack', v: 'React · Next · Livewire · Tailwind' },
    ],
  },
  {
    num: '04',
    title: 'n8n & Workflow Automation',
    body: 'API integration, AI agents and RAG — n8n wired into the app that actually owns the data.',
    tags: ['n8n', 'API Integration', 'AI Agents', 'RAG'],
    lead: 'n8n & Workflow Automation Expert | API Integration, AI Agents, RAG — automation that reaches into your real systems instead of living in a silo, with the Laravel app still owning the data.',
    deliverables: [
      'n8n workflows wired to your app, CRM and messaging APIs',
      'AI agents and RAG pipelines over your own documents',
      'Webhooks with retries, logging and failure alerts',
      'Runbook plus credentials handover your team can operate',
    ],
    meta: [
      { k: 'Typical scope', v: '1 – 4 weeks' },
      { k: 'Engagement', v: 'Fixed scope or retainer' },
      { k: 'Stack', v: 'n8n · Laravel · OpenAI · vector DB' },
    ],
  },
  {
    num: '05',
    title: 'PHP Development',
    body: 'Over five years of PHP. Modern, responsive, integrated web systems built to last past the handover.',
    tags: ['PHP 8', 'Composer', 'Queues'],
    lead: 'Over five years of PHP. Modern, integrated web systems — including the unglamorous parts: legacy rescues, third-party integrations and automation glue.',
    deliverables: [
      'Integrations with payment, CRM and messaging APIs',
      'Background jobs and queues with retries and logging',
      'Legacy code brought onto PHP 8 and Composer',
      'Tests around the parts that would hurt to break',
    ],
    meta: [
      { k: 'Typical scope', v: '2 – 6 weeks' },
      { k: 'Engagement', v: 'Fixed scope or retainer' },
      { k: 'Stack', v: 'PHP 8 · Composer · Queues' },
    ],
  },
] as const;

export const upworkChecks = [
  '1,800+ hours billed across 7 contracts',
  'Every rated contract closed at 5.0',
  "Top Rated Plus — Upwork's top 3% of talent",
] as const;

export const project = {
  title: 'A WhatsApp bot that talks to Airtable',
  sub: 'A real Upwork engagement — a Laravel backend wired to WhatsApp for intake, syncing every conversation straight into Airtable in real time.',
  checks: [
    'WhatsApp webhook handled by a Laravel backend',
    'Every message synced to Airtable in real time',
    'Shipped and closed inside 6 weeks',
  ],
  note: 'Built solo · Jan–Feb 2025',
  flow: [
    { title: 'WhatsApp message', caption: 'Customer texts in', icon: 'message' },
    { title: 'Laravel webhook', caption: 'Parses & validates', icon: 'code' },
    { title: 'Airtable sync', caption: 'Row created instantly', icon: 'table' },
    { title: 'Marked synced', caption: 'Conversation logged', icon: 'check' },
  ],
  meta: [
    { k: 'Client', v: 'Upwork client (private)' },
    { k: 'Role', v: 'Full-stack, solo' },
    { k: 'Stack', v: 'Laravel · WhatsApp API · Airtable' },
    { k: 'Scope', v: 'Design → build → deploy' },
  ],
} as const;

export const testimonials = [
  {
    quote:
      'Very professional and well organized. He created a step by step plan in Trello and completed the steps quickly. He has good management and makes quick progress.',
    name: 'Michael Kravc',
    role: 'Founder, Road to Virtuosity',
    initial: 'M',
    featured: true,
  },
  {
    quote:
      'Professional work has been done very well, with great patience so that customer satisfaction is guaranteed. The money spent is very much paid off with very satisfying results.',
    name: 'Turai',
    role: 'Agrommunity',
    initial: 'T',
    featured: false,
  },
  {
    quote:
      'Talented and excellent developer in building applications with the latest technology. His communication with clients is very good. I highly recommend him with A++.',
    name: 'Samah',
    role: 'Jobsicle',
    initial: 'S',
    featured: false,
  },
] as const;

export const faqs = [
  {
    q: "What's your timezone?",
    a: 'GMT+7 (Sleman, Indonesia), remote-friendly. Usually reply within a day.',
  },
  {
    q: 'Fixed price or hourly?',
    a: 'Either — fixed scope for well-defined work, retainer for ongoing engagements.',
  },
  { q: 'Do you work solo or with a team?', a: 'Solo. One person owns the whole slice, start to finish.' },
  {
    q: "What's your stack?",
    a: 'Laravel, Filament, Livewire/TALLStack, n8n for automation, WordPress when it fits.',
  },
  {
    q: 'How fast can you start?',
    a: "Depends on current load — ask and I'll give you a real date.",
  },
] as const;

export const footerCols = [
  {
    title: 'Work',
    links: [
      { label: 'Case studies', href: '/case-study/whatsapp-airtable' },
      { label: 'Portfolio deck', href: '/deck' },
      { label: 'Testimonials', href: '/#feedback' },
      { label: 'Availability', href: '/#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Laravel development', href: '/#services' },
      { label: 'API integrations', href: '/#services' },
      { label: 'Workflow automation', href: '/#services' },
      { label: 'Admin dashboards', href: '/#services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Notes', href: '/notes' },
      { label: 'Uses', href: '/uses' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Rate card', href: '/rate-card' },
    ],
  },
  {
    title: 'Elsewhere',
    links: [
      { label: 'Upwork', href: site.upwork },
      { label: 'GitHub', href: site.github },
      { label: 'LinkedIn', href: site.linkedin },
    ],
  },
] as const;

/* ---------------- sub pages ---------------- */

export const routes = {
  home: '/',
  caseStudy: '/case-study/whatsapp-airtable',
  notes: '/notes',
  uses: '/uses',
  faq: '/faq',
  rateCard: '/rate-card',
} as const;

export const caseStudy = {
  slug: routes.caseStudy,
  kicker: '— Case study',
  title: 'A WhatsApp bot that talks to Airtable',
  sub: 'A real Upwork engagement — a Laravel backend wired to WhatsApp for intake, syncing every conversation straight into Airtable in real time.',
  meta: [
    { k: 'Client', v: 'Upwork client (private)' },
    { k: 'Role', v: 'Full-stack, solo' },
    { k: 'Stack', v: 'Laravel · WhatsApp API · Airtable' },
    { k: 'Timeline', v: 'Jan – Feb 2025' },
  ],
  flowHeading: 'How a message becomes a row',
  codeHeading: 'The webhook, roughly',
  codeFile: 'app/Http/Controllers/WhatsAppWebhookController.php',
  code: `Route::post('webhooks/whatsapp', [WhatsAppController::class, 'handle']);

$message = WhatsAppMessage::fromPayload($request->all());

Airtable::table('Conversations')->create([
    'phone' => $message->from,
]);

// every inbound message lands in Airtable within seconds
Conversation::find($message->id)->markSynced();`,
} as const;

export const notes = [
  {
    num: '01',
    slug: 'queues-without-a-headache',
    title: 'Queues without a queue-worker headache',
    body: "Why I default to database queues over Redis for solo client apps, and what breaks when you don't.",
    date: '14 Mar 2024',
    datetime: '2024-03-14',
  },
  {
    num: '02',
    slug: 'why-filament',
    title: 'Why Filament became my default admin panel',
    body: "Handing a client a CRUD screen shouldn't take a sprint. How I scaffold admin work in an afternoon.",
    date: '02 Nov 2023',
    datetime: '2023-11-02',
  },
  {
    num: '03',
    slug: 'wiring-n8n-into-laravel',
    title: 'Wiring n8n into a Laravel app',
    body: 'Webhooks, retries, and where automation tools should stop and your codebase should start.',
    date: '19 Jul 2023',
    datetime: '2023-07-19',
  },
  {
    num: '04',
    slug: 'tallstack-vs-js-framework',
    title: 'TALL Stack vs a JS framework, for solo work',
    body: 'One less build step, one less context switch — why I reach for Livewire before React on freelance projects.',
    date: '05 Feb 2023',
    datetime: '2023-02-05',
  },
] as const;

export const uses = [
  { group: 'Editor & Terminal', items: ['Zed', 'Ghostty', 'Zsh', 'Claude Code'] },
  {
    group: 'Local & Deploy',
    items: ['Laravel Herd', 'Laravel Forge', 'DigitalOcean', 'OrbStack', 'Docker', 'Cloudflare', 'Vercel'],
  },
  {
    group: 'Stack',
    items: ['Laravel', 'Filament', 'Livewire', 'n8n', 'NestJS', 'Hono', 'Postman', 'Swagger/OpenAPI'],
  },
  { group: 'Hardware', items: ['MacBook Air M2', 'TWS Baseus Bowie MC1'] },
] as const;

export const rateTiers = [
  { name: 'Hourly', price: 'Ask for a quote', body: 'Good for small fixes, audits, or short engagements.' },
  {
    name: 'Fixed scope',
    price: 'Ask for a quote',
    body: 'One price, one deliverable. Scoped together before we start.',
  },
  {
    name: 'Retainer',
    price: 'Ask for a quote',
    body: 'Ongoing work, a set number of hours a month, priority turnaround.',
  },
] as const;

export const rateNote =
  "Not sure which fits? Book a $25 / 30-min consultation and we'll figure out the scope together.";

export const deckSlides = [
  { n: 1, title: 'Portfolio', note: 'Laravel, real-time features and integrations — backend, tracking, payments, live dashboards' },
  { n: 2, title: 'Fullstack developer. Systems that keep running.', note: 'I build the parts of a product that cannot fall over' },
  { n: 3, title: 'Six things I get asked for', note: 'Backend and API, tracking systems, payments, dashboards, automation, integrations' },
  { n: 4, title: 'The stack behind the work', note: 'PHP, Laravel and friends — chosen for what ships and stays maintainable' },
  { n: 5, title: 'Seven systems I have built', note: 'Tappifyd, FBA Boss, Haramain, Joodpay, Spark AI, SCADA, Sanii' },
  { n: 6, title: 'One scan. Validated entry.', note: 'Tappifyd — barcode tracking and ticketing for events and playgrounds' },
  { n: 7, title: 'Shipments tracked. Chat in real time.', note: 'FBA Boss — shipment management with package tracking and live chat' },
  { n: 8, title: 'From the gate to the right hands.', note: 'Haramain — luggage tracking for Hajj and Umrah operations' },
  { n: 9, title: 'Scan to pay. Split by item or person.', note: 'Joodpay — QR restaurant payments across multiple gateways' },
  { n: 10, title: 'Interviews in. A post ready to publish.', note: 'Spark AI — turns interviews into publish-ready LinkedIn content' },
  { n: 11, title: 'Live data. One dashboard.', note: 'SCADA — real-time monitoring for industrial and IoT use cases' },
  { n: 12, title: 'Care monitored. Teams notified.', note: 'Sanii — caregiver automation, monitoring and appointment availability' },
  { n: 13, title: "The developer who stays until it's actually done.", note: 'Open to contract and long-term fullstack work' },
] as const;
