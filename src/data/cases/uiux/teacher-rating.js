const teacherRating = {
  id: "teacher-rating",
  category: "uiux",
  title: "Teacher Rating — Concept Site",
  company: "Personal Project",
  projectType: "UI/UX Concept",
  roles: ["Product Designer", "Researcher"],
  heroMedia: { fallbackImg: "/images/teacher/hero.jpg" },

  overview:
    "Explored a student-friendly review tool emphasizing constructive feedback, privacy, and search clarity.",

  highlights: ["Ethical heuristics", "Anonymity controls", "Signal over noise"],

  objectives: [
    { title: "Trustworthy Signals", desc: "Weighted reviews and verified enrollment signals." },
    { title: "Constructive Inputs", desc: "Prompted fields nudge specific, helpful feedback." },
    { title: "Safe Sharing", desc: "Anonymity defaults with opt-in profile linking." },
  ],

  approach: [
    { title: "Competitive Sweep", desc: "Gaps in moderation and information scent." },
    { title: "Proto-personas", desc: "Freshman vs. power users; faculty POV." },
    { title: "Wireframes → Test", desc: "Task flows and moderated hallway tests." },
  ],

  impact: [
    { title: "Less review noise", desc: "Structured prompts; flagged vague responses." },
    { title: "Faster discovery", desc: "Facet search + synonyms for subjects/courses." },
  ],

  kpis: [
    { kpi: "-28%", label: "Low-value reviews (pilot)" },
    { kpi: "↑", label: "Task completion in search" },
  ],

  reflection:
    "Designing ‘how to say it’ matters as much as ‘where to click’—good prompts create better communities.",

  designFlows: [
    { title: "Search → Course → Reviews", img: "/images/teacher/flow-search.png", bullets: ["Synonym map", "Facets", "Trust badges"] },
  ],
};

export default teacherRating;
