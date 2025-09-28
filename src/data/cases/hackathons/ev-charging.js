const evCharging = {
  id: "ev-charging",
  category: "hackathons",
  title: "EV Charging Web App",
  company: "Hackathon Project",
  projectType: "Prototype",
  roles: ["Full-Stack", "UI/UX"],
  heroMedia: { 
    videoSrc: "/demoev.mp4",
    poster: "/evcharger.png",
    fallbackImg: "/evcharger.png"
  },

  overview:
  "I participated in the Vamos LatinX Hackathon hosted by General Motors and HERE Technologies. In a team of three, we were tasked with building a solution that would help GM EV vehicle owners while integrating HERE’s mapping APIs. With only 24 hours, we prototyped and presented a functional web app featuring real-time EV charger availability, route costs, and wait-time signals. We also integrated an internal review system that allowed users to share feedback and rate charging stations, adding a community-driven layer of trust and reliability.",

  highlights: [
    "Frontend development",
    "UI/UX design",
    "HERE API integration",
    "Rapid prototyping",
    "Team collaboration",
  ],
  stakeholders: [
    { title: "EV Drivers", desc: "Need reliable, real-time info on charger availability and wait times to plan trips effectively." },
    { title: "Hackathon Judges", desc: "Looking for innovative, well-executed solutions that leverage HERE technologies." },
    { title: "Team Members", desc: "Collaborators focused on backend integration and overall project cohesion." },
  ],
  stakeholderChallenges: [
  {
    icon: "users",
    challenge: "Designing a user-friendly interface that quickly conveys critical information under time constraints.",
    stakeholders: "EV Drivers",
    resolution:
      "Prioritized top tasks, used clear visual cues (badges, color coding), and created intuitive navigation flows to minimize cognitive load."
  },
  {
    icon: "code",
    challenge: "Integrating multiple HERE APIs (maps, routing, places) seamlessly within a tight timeframe.",
    stakeholders: "Team Members",
    resolution:
      "Divided API responsibilities among team members, established clear data contracts, and used mock data to parallelize frontend and backend work."
  },
  {
    icon: "award",
    challenge: "Standing out in a competitive hackathon environment with many innovative projects.",
    stakeholders: "Hackathon Judges",
    resolution:
      "Focused on a clear problem statement, demonstrated real-time functionality, and highlighted user-centric design choices during the presentation."
  },
],
  objectives: [
  { title: "Find Reliable Chargers", desc: "Surface the nearest stations with live availability, connector/speed filters, and community ratings for quality." },
  { title: "Plan Smarter Trips", desc: "Estimate price, wait time, and detour length to minimize total cost and travel disruption." },
  { title: "Showcase Illinois EV Impact", desc: "Display fuel saved, energy saved, electric miles, and nearby drivers like you based on app usage." },
],

  approach: [
  { title: "API Integration", desc: "Explored and implemented HERE Technologies APIs for navigation and live EV charger data." },
  { title: "User-Centered Planning", desc: "Identified core needs of EV drivers, then sketched flows and rapid Figma prototypes to scope a feasible solution." },
  { title: "Rapid Build & Test", desc: "Developed the frontend, connected APIs, and iterated quickly through testing within the 24-hour hackathon window." },
],

  impact: [
  { title: "Usable Prototype in 24 Hours", desc: "Delivered a functional EV charger finder with navigation, cost estimates, and reviews under a one-day hackathon deadline." },
  { title: "2nd Place Recognition", desc: "Awarded 2nd place out of 9 teams for strong delivery, technical execution, and a solution tailored to GM EV drivers." },
  { title: "User Experience Focus", desc: "Integrated a review system so drivers could rate chargers, improving reliability and fostering community trust." },
  { title: "Collaboration Under Pressure", desc: "Worked seamlessly in a 3-person team, balancing design, frontend, and API integration to maximize output in limited time." },
],


  reflection:
  "This was my first-ever hackathon, and earning 2nd place was a milestone. What stood out to the judges—and to us as a team—was our focus on the user. By integrating a review system, we designed not just a functional charger finder but a tool EV drivers would actually trust and use. The 24-hour constraint taught me to ruthlessly prioritize, cutting nice-to-have features to protect the main job-to-be-done: find a charger and go. It was also my first exposure to APIs, and I quickly learned how critical reading and understanding documentation is when connecting external services into a working tech stack. Overall, it sharpened my ability to balance design, development, and feasibility under intense pressure.",
  
  takeaways: [
  "User-first design set our solution apart.",
  "Tight deadlines sharpened prioritization skills.",
  "APIs taught me the value of good docs.",
  "Collaboration thrived with clear roles and fast decisions.",
]


};

export default evCharging;
