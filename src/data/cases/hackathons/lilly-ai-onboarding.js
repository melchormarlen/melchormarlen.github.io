const lillyAI = {
  id: "lilly-ai-onboarding",
  category: "hackathons",
  title: "AI Onboarding Assistant",
  company: "Eli Lilly (Hackathon)",
  projectType: "Prototype",
  roles: ["Full-Stack", "Prompt Engineer", "UI/UX"],
  heroMedia: { fallbackImg: "/images/lilly-ai/hero.jpg" },

  overview:
    "Prototype assistant that answers ‘day-1’ questions and routes new hires to the right internal resources.",

  highlights: ["RAG prototype", "Guardrails", "Internal resources index"],

  objectives: [
    { title: "Reduce Onboarding Friction", desc: "Fewer tickets; faster answers." },
    { title: "Trusted Responses", desc: "Cite sources and scope to approved content." },
    { title: "Quick Wins", desc: "MVP in a weekend, demo-ready." },
  ],

  approach: [
    { title: "Content Ingest", desc: "Docs index; access boundaries." },
    { title: "Prompt + UI", desc: "Answer cards with citations and follow-ups." },
    { title: "Evaluate", desc: "Red-teaming prompts and failure modes." },
  ],

  impact: [
    { title: "Clear ROI narrative", desc: "Tickets deflection + time saved storyline." },
    { title: "Next steps ready", desc: "Path to pilot with minimal changes." },
  ],

  kpis: [
    { kpi: "≤3", label: "Clicks to answer" },
    { kpi: "Demo", label: "Weekend build" },
  ],

  reflection:
    "Grounding and access are the product—without them, ‘AI’ is just vibes. We prioritized trust over magic.",

  designFlows: [
    { title: "Ask → Sources → Next Steps", img: "/images/lilly-ai/flow.png", bullets: ["Citations", "Follow-ups", "Escalate to human"] },
  ],
};

export default lillyAI;
