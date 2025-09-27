const codify = {
  id: "codify",
  category: "uiux",
  title: "Codify — Student Org Website",
  company: "University Org",
  projectType: "UI/UX + Front-end support",
  roles: ["Product Designer", "UI/UX", "Front-end Advisor"],
  heroMedia: { 
    videoSrc: "/codifyDemo.mp4",
    fallbackImg: "/codifyLogo.png",
    poster: "/codifyLogo.png",
  },

  overview: "I led the end-to-end UI/UX for Codify’s public site—from discovery to handoff. I ran a quick content audit with officers, defined the information architecture (home, executives, services, contact), and mapped key user journeys for prospective members and sponsors. In Figma, I built wireframes and a lightweight component library (tokens for type/color/spacing) to keep the design consistent and fast to iterate. I prioritized accessibility (semantic structure, color contrast, focus states) and performance (lean layouts, image guidance), then partnered with the dev team to translate the system into reusable React components and a simple content model so officers could update events and copy without redesigns. I documented page templates, empty/error states, and responsive behavior to streamline implementation and future updates. The result: a clear, scannable site that improves event discoverability and recruiting while staying easy for the student org to maintain.", 

  highlights: [
  "UI/UX Design",
  "Frontend Advising",
  "Figma",
  "Design Tokens",
  "Accessibility",
  "Branding & Visual Identity",
  ],
  stakeholders: [
    { title: "Prospective Members", desc: "Students looking to join a tech-focused org with clear value and easy sign-up." },
    { title: "Current Members", desc: "Officers needing a simple way to update events and info without design help." },
    { title: "University Admins", desc: "Ensuring compliance with campus web standards and accessibility." },
    { title: "Business Partners", desc: "Businesses seeking collaboration or sponsorship opportunities." }
  ],
  stakeholderChallenges: [
  {
    icon: "user-plus",
    challenge: "Making sign-up and discovery effortless for prospective members.",
    stakeholders: "Prospective Members",
    resolution:
      "Streamlined the homepage with a clear value proposition, bold 'Join Us' CTAs, and a simplified onboarding form."
  },
  {
    icon: "calendar",
    challenge: "Allowing officers to update events without breaking the design system.",
    stakeholders: "Current Members",
    resolution:
      "Designed modular, reusable content blocks and provided handoff documentation so non-designers could easily add events or announcements."
  },
  {
    icon: "shield-check",
    challenge: "Meeting university standards for accessibility and compliance.",
    stakeholders: "University Admins",
    resolution:
      "Adhered to WCAG guidelines, ensured strong color contrast, and tested keyboard/tab navigation to pass accessibility checks."
  },
  {
    icon: "handshake",
    challenge: "Communicating value clearly to attract external collaborators and sponsors.",
    stakeholders: "Business Partners",
    resolution:
      "Created a dedicated Services & Partnerships section with professional branding, case examples, and easy contact pathways."
  },
],


  objectives: [
  { title: "Increase Visibility", desc: "Showcase Codify’s mission, projects, and opportunities." },
  { title: "Engage Students", desc: "Highlight events and consulting with clear calls to action." },
  { title: "Enable Easy Updates", desc: "Lightweight structure officers can maintain without redesigns." },
  ],


  approach: [
  { title: "Brand Research", desc: "Explored tone, color, and identity to represent Codify’s mission and culture." },
  { title: "Feasibility Planning", desc: "Balanced ambition with timelines, scoping features coders could implement quickly." },
  { title: "Rapid Prototyping", desc: "Built Figma flows, tokens, and components for clarity and speed." },
  { title: "Collaborative Handoff", desc: "Partnered with developers to ensure smooth implementation and QA." },
  ],

impact: [
  { title: "Increased Recruiting", desc: "Site visibility led to higher student sign-ups and interest in joining Codify." },
  { title: "Collaboration Interest", desc: "Other campus organizations reached out after discovering Codify online." },
  { title: "Smoother Updates", desc: "Reusable sections reduced design–dev cycles and kept content fresh." },
  { title: "Stronger Brand Identity", desc: "Unified visuals and messaging built credibility for Codify as a student-led tech org." },
],

  kpis: [
  { kpi: "30+", label: "Students interested in joining" },
  { kpi: "4+", label: "Projects planned in first month" },
  { kpi: "A11y", label: "Passed color contrast & keyboard checks" },
],


  reflection:
  "Working under tight outlines showed me firsthand how fast-paced the design process can be. Personally, it pushed me to trust my instincts more and not get stuck over-perfecting early drafts. Professionally, I learned how to prioritize the essentials—branding, clarity, and usability—so the team could move forward without delays. Balancing speed with quality became a skill I’ll carry into future projects where velocity matters just as much as polish.",

  designFlows: [
  {
    title: "Home",
    img: "/5.png",
    desc: "Landing page introduces Codify’s mission and opportunities at a glance, with clear calls to action driving students to learn more or join.",
    tags: ["Mission-first", "Hero CTA", "Event Highlights"]
  },
  {
    title: "Executives",
    img: "/6.png",
    desc: "Profiles of Codify leaders establish transparency and trust, helping visitors connect with the team behind the organization.",
    tags: ["Leadership Profiles", "Trust-building", "Visual Consistency"]
  },
  {
    title: "Services & Contact",
    img: "/7.png",
    desc: "Showcases consulting and support services with simple contact options, making it easy for students and partners to reach out.",
    tags: ["Services Overview", "Contact Form", "Engagement Pathways"]
  },
],

};

export default codify;
