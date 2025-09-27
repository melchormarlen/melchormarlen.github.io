const teacherRating = {
  id: "teacher-rating",
  category: "uiux",
  title: "Rapid Reviews - G2 Chicago P33 Project",
  company: "Personal Project, Class Project, G2",
  projectType: "UI/UX Concept",
  roles: ["Product Designer", "Researcher"],
  heroMedia: { 
      videoSrc: "/ratingDemo.mp4",
      fallbackImg: "/8.png",
      poster: "/8.png"
    },

 overview:
  "Partnered with G2 Chicago to create a product that would benefit our own Illinois Tech community. With a team of four, we designed and prototyped an internal web app where students could review not only professors but also advisors, counselors, and other campus faculty. The tool emphasized constructive feedback, privacy, and clear search features to make information accessible and actionable. My role focused on shaping the user experience—mapping student needs, wireframing flows, and ensuring the design supported both transparency and usability while aligning with project goals.",

  highlights: [
  "User Research",
  "Figma",
  "Search & Filtering Design",
  "Community-Centered Product Design",
  "G2 Chicago",
],

stakeholders: [
  { title: "Illinois Tech Students", desc: "Primary users who needed a safe, reliable platform to share feedback on professors, advisors, and faculty." },
  { title: "Faculty & Staff", desc: "Indirect stakeholders who could learn from constructive reviews to improve student experiences." },
  { title: "Project Team", desc: "Four student collaborators responsible for research, design, and prototyping the web app." },
  { title: "G2 Executives", desc: "End-of-semester presentation audience; assessed the product’s effectiveness, usability, and impact potential." },
],
stakeholderChallenges: [
  {
    icon: "users",
    challenge: "Balancing student anonymity with the need for credible reviews.",
    stakeholders: "Illinois Tech Students, Faculty",
    resolution:
      "Defaulted to anonymous reviews with optional profile linking. Added structured prompts to encourage constructive, verifiable feedback while maintaining privacy."
  },
  {
    icon: "search",
    challenge: "Making it easy for students to quickly find the right faculty member to review.",
    stakeholders: "Students, Project Team",
    resolution:
      "Implemented categorized search (Professors, Advisors, Counselors, Staff) with filters, ensuring clarity and reducing friction for first-time users."
  },
  {
    icon: "presentation",
    challenge: "Demonstrating the product’s community value to G2 Chicago executives.",
    stakeholders: "G2 Executives, G2 Chicago Mentors",
    resolution:
      "Framed the app around measurable student impact, showcased wireframes tied to real use cases, and highlighted opportunities for scalability beyond IIT."
  },
  {
    icon: "clock",
    challenge: "Delivering a functional prototype within a single semester.",
    stakeholders: "Project Team, Instructor",
    resolution:
      "Scoped tightly to core flows (rate, search, view) while prioritizing usability. Used iterative sprints and Figma prototypes to validate ideas before build."
  },
],


  objectives: [
    { title: "Community Value", desc: "Design a tool that genuinely benefits Illinois Tech students through transparent and useful reviews." },
    { title: "Ease of Use", desc: "Ensure intuitive navigation, clear flows, and minimal friction for first-time users." },
    { title: "Reliability", desc: "Provide consistent, trustworthy feedback mechanisms with privacy safeguards." },
    { title: "Constructive Feedback", desc: "Encourage reviews that go beyond ratings to offer meaningful insights for peers." },
  ],


  approach: [
    { title: "Benchmarking", desc: "Compared RateMyProfessor and similar tools to identify gaps in privacy, search, and constructive feedback." },
    { title: "Community Tailoring", desc: "Adapted features to Illinois Tech’s unique context—covering professors, advisors, and staff, not just classes." },
    { title: "Wireframing & Testing", desc: "Created Figma wireframes and ran quick hallway tests with students to validate clarity and usability." },
  ],


  impact: [
    { title: "Less Review Noise", desc: "Structured prompts reduced vague or unhelpful responses, leading to more constructive feedback." },
    { title: "Faster Discovery", desc: "Faceted search and keyword matching made it easier for students to find the right faculty or staff member." },
    { title: "Safe Feedback Environment", desc: "Anonymity defaults and privacy safeguards created a trusted space for students to share honest insights without fear." },
    { title: "Actionable Insights for Faculty", desc: "Constructive reviews offered staff a clearer picture of student needs, creating opportunities for improved support and teaching quality." },
  ],

  kpis: [
    { kpi: "30+", label: "Projected active student users in first semester" },
    { kpi: "70%", label: "Estimated participation rate among early adopters" },
    { kpi: "4/5", label: "Average usefulness rating from pilot feedback" },
  ],

  reflection:
  "Designing ‘how to say it’ matters as much as ‘where to click’—good prompts create better communities. Through this project, I learned the importance of balancing anonymity with credibility and how much thoughtful design can shape the tone of feedback. Working closely with developers pushed me to translate abstract UX ideas into practical flows that could actually be implemented, which strengthened my communication and collaboration skills. Presenting our work to G2 Chicago executives challenged me to frame design decisions in terms of community impact and business value, giving me experience in communicating design outcomes to non-technical stakeholders. The outcome was a safe, simple, and structured space that increased engagement and produced feedback faculty and students could act on. This experience reinforced the value of tailoring solutions to real community needs while keeping scalability in mind and showed me how effective cross-team collaboration is in turning an idea into a working product.",

  designFlows: [
  {
    title: "Login",
    img: "/8.png",
    desc: "Clean entry screen with a clear path to sign up if you don’t have an account.",
    tags: ["Low-Friction", "Sign-Up Link", "Clear Errors"]
  },
  {
    title: "Sign Up",
    img: "/9.png",
    desc: "Quick onboarding with minimal fields so students can create an account fast and start reviewing.",
    tags: ["Fast Onboarding", "Minimal Fields", "Account Creation"]
  },
  {
    title: "Browsing & Searching",
    img: "/10.png",
    desc: "Filter and search by instructor with scannable results and quick actions to view reviews.",
    tags: ["Faceted Filters", "Typeahead Search", "Clickable Results"]
  },
  {
    title: "Profile Viewing",
    img: "/11.png",
    desc: "Instructor profile with all reviews in one place—at-a-glance signals plus detailed feedback.",
    tags: ["All Reviews", "Aggregated Signals", "Readable Layout"]
  },
  {
    title: "Review Submission",
    img: "/12.png",
    desc: "Structured form with toggles and ratings: difficulty to contact, overall rating, course, and your role.",
    tags: ["Guided Form", "Toggle Inputs", "Course & Role"]
  },
],
  takeaways: [
    "Balancing anonymity with credibility is crucial in feedback platforms—design choices can shape the tone of reviews.",
    "Iterative testing with real users helps catch usability issues early and ensures the design meets actual needs.",
    "Clear communication with developers is key to translating UX concepts into practical, implementable solutions.",
    "Presenting to non-technical stakeholders requires framing design decisions in terms of community impact and business value.",
  ],
};

export default teacherRating;
