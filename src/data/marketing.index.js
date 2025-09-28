// src/data/marketing.index.js
export const MARKETING = {
  title: "Marketing & Branding",
  org: "SHPE-IIT",
  heroMedia: {
    // put these assets in /public/marketing/
    videoSrc: "/shpeiit.mp4",      // or a short montage
  },
  overview:
  "As Marketing Director for SHPE-IIT, I drove brand guidelines, social campaigns, and content systems that expanded our reach and engagement while keeping a consistent visual identity across platforms. Beyond campaigns, I founded and led our Public Relations Committee, where I learned how to grow as a leader by mentoring peers, coordinating sub-teams, and fostering collaboration across the chapter. This experience not only sharpened my skills in branding and strategy, but also taught me how to empower others and build sustainable systems for long-term impact.",
  highlights: [
    "Brand Guidelines", "Content System", "Campaign Strategy",
    "Figma", "Instagram", "Mailchimp"
  ],
  kpis: [
  { kpi: "212,800", label: "Views (last 90 days)" },
  { kpi: "4,946",  label: "Accounts reached (90 days)" },
  { kpi: "71.3% / 28.7%", label: "Followers vs. Non-followers" },
  { kpi: "78% / 20% / 1.9%", label: "Posts / Stories / Reels mix" },
],


  guidelines: {
    title: "SHPE-IIT Brand Guidelines",
    desc: "Built a lightweight design system (tokens, type scale, components, post templates) to keep content on-brand, accessible, and fast to ship across multiple contributors.",
    pills: ["Figma Tokens", "Accessibility", "Templates", "Handoff"],
    pdfUrl: "/brand-guidelines.pdf",
  },
  campaigns: {
    title: "Campaign Highlights",
    desc: "Planned and executed recruiting and partnership campaigns with a standardized cadence (teaser → announce → recap) supported by a shared content calendar. Together with my committee, we prioritized which stories and events should go live first, refining drafts until they were polished and platform-ready. We also analyzed when our audience was most active to maximize engagement across channels. While we publish on Instagram, Facebook, and Mailchimp, our main priority has been Instagram for reach and Mailchimp for direct connection with members.",
    pills: ["Content Calendar", "Priority Planning", "Engagement Timing", "Cross-Platform Strategy", "Instagram + Mailchimp Focus"],
    grid: [
    { type: "img", src: "/palooza.png",   alt: "SHPEpalooza 2025" },
    { type: "img", src: "/fiesta.png",    alt: "SHPE Fiesta 2025" },
    { type: "img", src: "/September.png", alt: "September Series 2025" },
    { type: "video", src: "/interns.mp4", alt: "SHPE Interns 2025", poster: "/interns-poster.jpg" },
  ],
  },
  gallery: {
    title: "Recent Posts",
    items: [
      { type: "img", src: "/volleyball.png", alt: "SHPE Palooza Event #2" },
      { type: "img", src: "/fiesta2.png", alt: "SHPE Fiesta 2025" },
      { type: "video", src: "/board.mp4" , alt: "Board 2025-2026" },
    ]
  },
};
