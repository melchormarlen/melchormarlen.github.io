const codify = {
  id: "codify",
  category: "uiux",
  title: "Codify — Student Org Website",
  company: "University Org",
  projectType: "UI/UX + Front-end support",
  roles: ["Product Designer", "UI/UX", "Front-end Advisor"],
  heroMedia: { fallbackImg: "/images/codify/hero.jpg" },

  overview:
    "Designed a lightweight site for recruiting and event discoverability—prioritizing clarity, accessibility, and quick content updates.",

  highlights: ["Wireframes → Hi-fi", "Design tokens", "A11y checklist", "Handoff to devs"],

  objectives: [
    { title: "Tell the Story Fast", desc: "Who we are, what we do, and how to join in one glance." },
    { title: "Make Events Obvious", desc: "Upcoming events and RSVP entry points." },
    { title: "Keep Content Fresh", desc: "Editable sections and simple CMS handoff." },
  ],

  approach: [
    { title: "Stakeholder Intake", desc: "Leads, mentors, and new-member interviews." },
    { title: "Iterative Prototyping", desc: "Figma flows, tokens, and components." },
    { title: "Dev Handoff", desc: "Specs, redlines, and QA checklist." },
  ],

  impact: [
    { title: "Faster onboarding", desc: "Clear value prop; fewer ‘how to join?’ questions." },
    { title: "Smoother updates", desc: "Reusable sections; reduced design-dev cycles." },
  ],

  kpis: [
    { kpi: "2×", label: "Click-through to Join" },
    { kpi: "A11y", label: "Color contrast & keyboard pass" },
  ],

  reflection:
    "Small orgs thrive on velocity—componentizing content early prevented redesign churn later.",

  designFlows: [
    { title: "Landing → Join", img: "/images/codify/flow-join.png", bullets: ["Hero CTA", "Social proof", "Join form"] },
  ],
};

export default codify;
