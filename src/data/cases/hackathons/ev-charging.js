const evCharging = {
  id: "ev-charging",
  category: "hackathons",
  title: "HERE × GM — EV Charging Web App",
  company: "Hackathon Project",
  projectType: "Prototype",
  roles: ["Full-Stack", "Maps", "UI/UX"],
  heroMedia: { fallbackImg: "/images/ev/hero.jpg" },

  overview:
    "Built a real-time EV charger finder with availability, route cost, and wait-time signals in under 24 hours.",

  highlights: ["Live map", "Routing", "Charger availability"],

  objectives: [
    { title: "Find Chargers Fast", desc: "Filter by connector, speed, and availability." },
    { title: "Plan Cost & Time", desc: "Estimate price, wait, and route impact." },
    { title: "Simple UI", desc: "One-handed mobile flow for drivers." },
  ],

  approach: [
    { title: "API Wrangling", desc: "Map SDK + charging providers; caching." },
    { title: "Focused UI", desc: "Top tasks only; clear empty states." },
    { title: "Demo Polish", desc: "Scenario scripts and guardrails." },
  ],

  impact: [
    { title: "Judges’ short-list", desc: "Praised for clarity under time pressure." },
    { title: "Reusable map shell", desc: "Forkable template for future hacks." },
  ],

  kpis: [
    { kpi: "24h", label: "Build time" },
    { kpi: "1", label: "Tap to navigate" },
  ],

  reflection:
    "Constraints spark focus—ruthlessly cut features to protect the main job: find a charger and go.",

  designFlows: [
    { title: "Search → Route → Navigate", img: "/images/ev/flow.png", bullets: ["Fast filters", "Availability badges", "One-tap nav"] },
  ],
};

export default evCharging;
