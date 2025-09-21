const tinderDb = {
  id: "tinder-db",
  category: "fullstack",
  title: "Tinder-like Web App & Database",
  company: "Course Project",
  projectType: "Academic / Personal",
  roles: ["Full-Stack Developer", "Data Modeler", "UI/UX"],
  heroMedia: { 
    videoSrc: "/demoTinder.mp4",
    fallbackImg: "/tinder.png",
    poster: "/tinder.png"
  },

  overview:
    "End-to-end swipe/match system: relational schema, FastAPI CRUD, React UI, and realistic seed data validating flows and queries. Beyond coding, I helped guide the team by analyzing real-world user journeys and mapping out pain points to ensure our database and app design touched everything a user would need in a Tinder-like product. This included leading the ER modeling process, deriving a robust relational schema, and implementing SQL scripts for PostgreSQL that supported matching, messaging, browsing, and profile editing. Throughout iterative deliverables, I benchmarked our design against existing platforms, ensuring our features aligned with user expectations while still being grounded in our custom schema. By combining technical execution with product-focused thinking, I helped the team deliver a seamless end-to-end dating app experience powered by our own backend database.",

  highlights: ["User Journey Mapping", "Pain Point Analysis", "Swipe/Match System", "Relational Schema (PostgreSQL)", "React UI", "Seamless Experience Design"],
  
  stakeholders: [
    { title: "End Users", desc: "Students seeking a simplified Tinder-like experience with matching, messaging, and browsing." },
    { title: "Project Team", desc: "Collaborators responsible for database design, API integration, and frontend build." },
    { title: "Instructor", desc: "Defined grading criteria and project requirements, ensuring technical rigor and schema quality." },
  ],

  objectives: [
    { title: "Model Core Entities", desc: "Users, profiles, photos, swipes, matches, messages." },
    { title: "Integrity & Performance", desc: "Uniqueness, indexes, and efficient queries for feeds & chat." },
    { title: "Usable Front-End", desc: "Clear onboarding, swipe feedback, match confirmation, and chat." },
    { title: "User-Centered Iteration", desc: "Mapped real user journeys, studied Tinder’s flows, and refined features through iterative deliverables." },
  ],

  approach: [
    { title: "Research & Modeling", desc: "Competitive breakdown; personas; journey maps." },
    { title: "Schema & API", desc: "MySQL DDL; constraints; FastAPI endpoints; test harness." },
    { title: "Prototype & Iterate", desc: "Wireframes → React; hallway tests; empty/error states." },
    { title: "Validation & Testing", desc: "Simulated real user data; validated flows for matching, messaging, and onboarding; ensured system integrity." },
    { title: "Feedback & Refinement", desc: "Benchmarked against Tinder; incorporated peer feedback; refined design for seamless experience." },
  ],

  impact: [
    { title: "Stable match/message flows", desc: "Derived matches remove duplicates; messages scoped to match id." },
    { title: "Clean separation of concerns", desc: "DB ↔ API ↔ UI simplified debugging and iteration." },
    { title: "Improved user experience", desc: "Clear onboarding, instant swipe feedback, and intuitive chat enhanced usability and engagement." },
    { title: "Scalable & realistic design", desc: "Seed data and indexing supported realistic usage scenarios and efficient queries at scale." },
  ],

  kpis: [
    { kpi: "40+", label: "Seeded users" },
    { kpi: "6", label: "Core features implemented" },
    { kpi: "3", label: "Major design & build iterations" },
    { kpi: "100%", label: "Query validation success rate" },
    { kpi: "A", label: "Project grade" },
  ],

  reflection: 
  "Designing constraints first kept the product honest—most UI bugs traced back to missing invariants in the model. A key challenge was connecting the API with the database, since backend integration was outside my comfort zone compared to frontend work. Through this, I learned to navigate FastAPI with PostgreSQL, debug queries, and better appreciate the importance of full-stack thinking when building end-to-end systems.",

  designFlows: [
    {
      title: "Set Up Profile",
      img: "/2.png",
      desc: "Guided linear stepper with inline hints reduces drop-off, while photo preview builds confidence before submit.",
      tags: ["Guided Stepper", "Inline Hints", "Photo Preview"]
    },
    {
      title: "Finalize Account & Matching",
      img: "/3.png",
      desc: "Clarifies mutual intent at match moment and pushes clear next steps with prominent CTAs.",
      tags: ["Mutual Intent", "Primary CTAs", "Micro-Animation"]
    },
    {
      title: "Likes, Chats & Edit Profile",
      img: "/4.png",
      desc: "Tabs aid wayfinding, unread chips + recency improve prioritization, and edits are non-blocking.",
      tags: ["Tabbed Nav", "Unread Chips", "Non-Blocking Edits"]
    },
  ],
  takeaways: [
    "Mapping end-to-end user journeys exposed friction points we hadn’t seen initially.",
    "Designing for first-time users reinforced the importance of clarity and simplicity in flows.",
    "Thinking like an outsider helped us build an app that required no extra explanation to use.",
  ],

};

export default tinderDb;
