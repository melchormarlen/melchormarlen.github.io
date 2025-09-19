import { Link, useParams} from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  ClipboardList,
  Eye,
  FileText,
  Lightbulb,
  UserCog,
  CheckCircle,
  TrendingUp,
  Rocket,
  X,
  ArrowLeft
} from "lucide-react";

const caseStudies = {
  "itop-app": {
    title: "IT on Point",
    tagline: "An internal full-stack tool that streamlined IT support workflows.",
    role: "Software Engineering Intern (Full-Stack Developer)",
    timeline: "12 Weeks (Summer 2025)",
    tech: ["React", "Django", "PostgreSQL", "Docker", "Kubernetes", "Deployment", "Github Actions"],
    heroImg: "/lilly logo.jpg",

    overview:
      "The IT on Point (ITOP) User History Web Application was developed to modernize the way Eli Lilly’s IT Technicians manage user support workflows. I designed and implemented end-to-end features that allow technicians to quickly access user histories, track patterns across tickets, and troubleshoot recurring issues. By building both frontend and backend components, I helped deliver a scalable internal tool that reduces inefficiencies, enhances visibility, and empowers IT staff to provide faster, higher-quality support.",
    problem:
      "Before ITOP, technicians relied on fragmented systems — a mix of emails, spreadsheets, and legacy tools — to manage user support. This scattered workflow created bottlenecks, slowed down ticket resolution, and made it difficult to track recurring issues or monitor trends. Managers also lacked real-time visibility into technician workloads, making it harder to allocate resources efficiently or measure team performance.",
    challenge:
      "The primary challenge was creating a centralized, user-friendly solution that would work within Lilly’s enterprise IT ecosystem.",
    challengeBullets: [
      "Consolidate user history into a single platform.",
      "Enable quick searching and filtering for past tickets.",
      "Provide managers with visibility without disrupting technician workflows.",
      "Be deployable/scalable within Lilly’s internal infrastructure (CATS, Docker).",
    ],
    objective:
      "The goal of ITOP was to deliver a full-stack web application that simplifies technician workflows and increases visibility across teams.",
    objectiveBullets: [
      "Streamline technician workflows by centralizing ticket history.",
      "Reduce average resolution time by surfacing past interactions.",
      "Give managers metrics to distribute workloads and spot recurring issues.",
      "Lay the foundation for analytics dashboards and AI-assisted routing.",
    ],

    research: [
      { icon: Users, method: "Personas", desc: "Created personas for technicians and IT managers to keep the design user-centered." },
      { icon: ClipboardList, method: "Surveys", desc: "Captured technician frustrations and desired features." },
      { icon: Eye, method: "Shadowing", desc: "Observed IT staff to uncover hidden pain points in ticket handling." },
      { icon: FileText, method: "Interviews", desc: "Interviewed managers to understand oversight challenges." },
    ],

    personas: [
      {
        name: "Lilly Internal Worker",
        role: "IT Technician",
        icon: UserCog,
        goals: [
          "Resolve tickets quickly and efficiently.",
          "Access ticket history without switching tools.",
          "Stay updated on assignments in real time.",
        ],
        frustrations: [
          "Too many logins across old systems.",
          "Difficulty tracking recurring issues.",
          "Time wasted searching for past tickets.",
        ],
        quote: "I know Lilly’s resources, but I need a tool that brings them together in one place to avoid wasting time.",
      },
      {
        name: "Manager",
        role: "IT Manager",
        icon: Users,
        goals: [
          "Monitor technician workload across teams.",
          "Track department performance metrics.",
          "Ensure compliance with IT support standards.",
        ],
        frustrations: [
          "No visibility into technician workloads.",
          "Hard to identify bottlenecks in workflows.",
          "Reports are scattered across multiple tools.",
        ],
        quote: "I need a dashboard that gives me a clear view of my team’s performance.",
      },
    ],

    insights: [
      "Technicians spent too much time finding ticket histories.",
      "Managers struggled with workload visibility.",
      "Outdated systems required multiple logins and slowed workflows.",
    ],

    process: [
      { step: "1", title: "Research & Discovery", text: "Surveys, shadowing sessions, and interviews to uncover workflow bottlenecks and define user needs." },
      { step: "2", title: "Design & Ideation", text: "Personas and journey maps to streamline flows. Emphasis on ticket history search and visibility." },
      { step: "3", title: "Development", text: "React + Django + PostgreSQL. CRUD features, real-time search, Dockerized deployment." },
      { step: "4", title: "Deployment & Iteration", text: "Launched internally via CATS. Gathered feedback and planned iterative improvements." },
    ],

    outcomes: [
      { text: "Resolution time reduced by 35%.", icon: TrendingUp },
      { text: "Technician satisfaction increased in internal surveys.", icon: CheckCircle },
      { text: "Tool expanded to additional departments.", icon: Rocket },
    ],

    impacts: [
      "Faster ticket resolution freed IT staff for higher-value work.",
      "Improved morale and retention within IT teams.",
      "Scalability supports adoption across additional departments.",
    ],

    businessImpact: {
      summary:
        "To understand the real-world impact, we surveyed IT On Point technicians. Their responses highlighted inefficiencies in locating guest information and validated the need for a centralized tool.",
    },
  },

  "tinder-db": {
    title: "Tinder Database & Web App",
    tagline: "A full-stack simulation of swipe-based matching built on a normalized relational schema.",
    role: "Full-Stack Developer & Data Modeler",
    timeline: "2 months (team of 4)",
    tech: ["React", "FastAPI (Python)", "MySQL", "REST API", "Figma", "CSS"],
    heroImg: "/tinder.png",

    overview:
      "Built a Tinder-like system from the ground up: designed the ER model, derived the relational schema, implemented SQL to create the DB, exposed CRUD APIs with FastAPI, and developed a React front end. Seeded the database with 40+ user profiles and realistic interactions to validate relationships and queries.",
    problem:
      "Represent swipe/match behavior and messaging in a relational database while avoiding duplication and ensuring integrity. Enable fast retrieval of profiles, preferences, swipes, matches, and conversations for a smooth end-user flow.",
    challenge:
      "Design a schema that normalizes data, enforces integrity, and supports efficient queries within a tight academic timeline.",
    challengeBullets: [
      "Normalize users, profiles, photos, swipes, matches, and messages to avoid duplication.",
      "Enforce integrity (e.g., only one match per user pair) and clear state transitions.",
      "Support efficient queries for discovery feeds, matches, and threaded messaging.",
      "Deliver within a 2-month timeline with a clean API/UI separation.",
    ],
    objective:
      "Deliver a production-like learning project that demonstrates end-to-end data modeling and app integration.",
    objectiveBullets: [
      "Design ER model → derive relational schema → implement SQL DDL (MySQL).",
      "Expose CRUD via FastAPI with realistic seed data (40+ users).",
      "Build a React UI for onboarding, swipe, match confirmation, and chat.",
      "Validate flows through hallway tests; refine empty/error states and queries.",
    ],

    research: [
      { icon: Users, method: "Personas", desc: "Defined new vs. power user needs to guide data structures and flows." },
      { icon: ClipboardList, method: "Competitive", desc: "Reviewed Tinder’s core flows to model entities (swipes, matches, messages)." },
      { icon: Eye, method: "Journey Map", desc: "Mapped onboarding → browse → swipe → match → message to validate schema." },
      { icon: FileText, method: "Heuristic Eval", desc: "Evaluated early UI wireframes against usability heuristics." },
    ],

    personas: [
      {
        name: "Avery",
        role: "New User",
        icon: UserCog,
        goals: [
          "Create a profile quickly with minimal friction.",
          "See high-quality matches aligned with preferences.",
          "Understand when/why a match happens.",
        ],
        frustrations: [
          "Confusing profile fields or required steps.",
          "Unclear feedback after swiping or matching.",
          "Slow load times when browsing profiles.",
        ],
        quote: "I just want to sign up, swipe, and get clear feedback when there’s a match.",
      },
      {
        name: "Jordan",
        role: "Power User",
        icon: Users,
        goals: [
          "Browse efficiently and filter matches.",
          "Resume conversations across sessions.",
          "See consistent, fast updates to match state.",
        ],
        frustrations: [
          "Duplicate matches or inconsistent states.",
          "Unreliable messaging history.",
          "Unclear error handling when actions fail.",
        ],
        quote: "If I swipe a lot, I need the system to keep up and never create duplicates.",
      },
    ],

    insights: [
      "Swipes are immutable events; matches are derived (mutual right swipes).",
      "Messages tie to matches, not directly to users — prevents orphaned threads.",
      "Separate profile/preferences tables reduce nulls and keep the user table lean.",
    ],

    process: [
      { step: "1", title: "Research & Modeling", text: "Competitive review, personas & journeys. Designed ER model for Users, Profiles, Preferences, Photos, Swipes, Matches, Messages." },
      { step: "2", title: "Schema & SQL", text: "Normalized relational schema. MySQL DDL with PK/FK/unique constraints, indexes, cascading rules." },
      { step: "3", title: "API & App", text: "FastAPI endpoints for CRUD. Seeded 40+ users and interactions. React UI connected to REST endpoints." },
      { step: "4", title: "Prototype, Test, Iterate", text: "Figma wireframes; hallway tests; refined navigation & empty/error states; tuned queries." },
    ],

    outcomes: [
      { text: "Delivered end-to-end system meeting all project requirements (earned an A).", icon: CheckCircle },
      { text: "Seeded 40+ users with hundreds of swipes → stable match/message flows.", icon: TrendingUp },
      { text: "Clean separation of concerns (DB ↔ API ↔ UI) simplified debugging and iteration.", icon: Rocket },
    ],

    impacts: [
      "Stable match/message flows from a clean separation of concerns.",
      "Validated relational design with realistic seed data.",
      "Delivered on time by a team of 4 with strong division of roles.",
    ],

    competitiveAnalysis:
      "Benchmarked Tinder’s core flows (onboarding, swipe, match, message) to inform entities and constraints: immutable swipe log, derived matches on mutual right swipes, and messages scoped to a match to prevent duplicates.",

    // ---- NEW: Video demo + wireframes (only for Tinder) ----
    demoVideo: {
      src: "/videos/tinder-demo.mov",
      type: "video/mov",
      poster: "/wireframes/tinder/cover.png", // optional
      captions: "/captions/tinder-demo.vtt",  // optional
    },
    wireframes: [
      { src: "/wireframes/tinder/01-onboarding.png",   caption: "Onboarding & profile setup (low-fi)" },
      { src: "/wireframes/tinder/02-browse-swipe.png",  caption: "Browse & swipe flow" },
      { src: "/wireframes/tinder/03-match-modal.png",   caption: "Match confirmation modal" },
      { src: "/wireframes/tinder/04-messages-list.png", caption: "Messages list & unread states" },
      { src: "/wireframes/tinder/05-chat.png",          caption: "Chat thread layout" },
      { src: "/wireframes/tinder/06-filters.png",       caption: "Discovery filters & preferences" },
    ],
  },
};

export default function CaseStudy() {
  const { category, id } = useParams();
  const study = caseStudies[id];
  const [impactOpen, setImpactOpen] = useState(false);

  // wireframe lightbox
  const [wfOpen, setWfOpen] = useState(false);
  const [wfIndex, setWfIndex] = useState(0);

  if (!study) {
    return (
      <section className="section-container py-32">
        <h2 className="text-3xl font-bold">Case Study Not Found</h2>
      </section>
    );
  }

  return (
    <>
      <section key={id} className="section-container py-20 space-y-24">
        <div className="mb-4">
          <Link
            to={`/projects/${category}`}
            className="inline-flex items-center gap-2 text-gray-300 hover:text-[#DC9DD0] transition"
            aria-label={`Back to ${category?.replace("-", " ")} projects`}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to {category?.replace("-", " ")} projects
          </Link>
        </div>
        
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <span className="px-4 py-1 border border-gray-300/50 text-sm text-gray-200 rounded-full backdrop-blur-sm bg-black/20">
            Web Application
          </span>

          <h1 className="text-4xl font-bold text-[#DC9DD0]">{study.title}</h1>
          <p className="text-xl text-gray-300">{study.tagline}</p>

          <div className="w-full flex justify-center">
            <img
              src={study.heroImg}
              alt={study.title}
              className="rounded-2xl shadow-lg max-h-[400px] object-contain mt-4"
            />
          </div>
        </motion.div>

        {/* Overview + Snapshot */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold text-[#DC9DD0]">Project Overview</h2>
            <p className="text-gray-300">{study.overview}</p>

            <h3 className="text-[#DC9DD0] font-semibold mt-6">Problem</h3>
            <p className="text-gray-300">{study.problem}</p>

            <h3 className="text-[#DC9DD0] font-semibold mt-6">Challenge</h3>
            <p className="text-gray-300">{study.challenge}</p>
            {study.challengeBullets?.length > 0 && (
              <ul className="list-disc list-inside text-gray-200 mt-4 space-y-2">
                {study.challengeBullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}

            <h3 className="text-[#DC9DD0] font-semibold mt-6">Objective</h3>
            <p className="text-gray-300">{study.objective}</p>
            {study.objectiveBullets?.length > 0 && (
              <ul className="list-disc list-inside text-gray-200 mt-4 space-y-2">
                {study.objectiveBullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="bg-[#5C3A57] p-6 rounded-xl shadow space-y-6">
            <div>
              <p className="text-[#DC9DD0] font-medium">Role</p>
              <p className="text-white">{study.role}</p>
            </div>
            <div>
              <p className="text-[#DC9DD0] font-medium">Timeline</p>
              <p className="text-white">{study.timeline}</p>
            </div>
            <div>
              <p className="text-[#DC9DD0] font-medium">Tech Stack</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {study.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-[#693365] text-sm rounded-full text-white">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Research Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-[#DC9DD0] mb-6">Research Methods</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {study.research.map((r, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="flex items-start bg-gradient-to-tr from-[#5C3A57] to-[#693365] p-6 rounded-xl shadow"
              >
                <r.icon className="h-8 w-8 text-[#DC9DD0] mr-4" />
                <div>
                  <p className="font-semibold text-white">{r.method}</p>
                  <p className="text-gray-400 text-sm">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Competitive Analysis (only if provided) */}
        {study.competitiveAnalysis && (
          <>
            <h3 className="text-[#DC9DD0] font-semibold mt-6">Competitive Analysis</h3>
            <p className="text-gray-300">{study.competitiveAnalysis}</p>
          </>
        )}

        {/* Personas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-[#DC9DD0] mb-6">Personas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {study.personas.map((persona, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-[#5C3A57] p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <persona.icon className="h-8 w-8 text-[#DC9DD0]" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{persona.name}</h3>
                    <p className="text-gray-300 text-sm italic">{persona.role}</p>
                  </div>
                </div>
                <p className="text-[#DC9DD0] font-semibold">Goals</p>
                <ul className="list-disc list-inside text-gray-200 mb-4">
                  {persona.goals.map((goal, idx) => (
                    <li key={idx}>{goal}</li>
                  ))}
                </ul>
                <p className="text-[#DC9DD0] font-semibold">Frustrations</p>
                <ul className="list-disc list-inside text-gray-200 mb-4">
                  {persona.frustrations.map((fr, idx) => (
                    <li key={idx}>{fr}</li>
                  ))}
                </ul>
                <blockquote className="italic text-gray-300 border-l-4 border-[#DC9DD0] pl-4">
                  “{persona.quote}”
                </blockquote>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-[#DC9DD0] mb-6">Key Insights</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {study.insights.map((insight, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-[#693365] p-6 rounded-xl shadow text-center">
                <Lightbulb className="h-8 w-8 text-[#DC9DD0] mx-auto mb-2" />
                <p className="text-gray-200 text-sm">{insight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-[#DC9DD0] mb-10">Process</h2>
          <div className="space-y-12">
            {study.process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative flex gap-6 items-start"
              >
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#DC9DD0] text-white font-bold shadow-lg">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mt-2">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design — Wireframes & Demo (Video) */}
        {(study.demoVideo || (study.wireframes && study.wireframes.length > 0)) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <h2 className="text-2xl font-semibold text-[#DC9DD0] mb-4">Design — Wireframes & Demo</h2>

            {/* Video Demo */}
            {study.demoVideo && (
              <div className="w-full rounded-xl overflow-hidden shadow mb-8 border border-white/10">
                <video
                  src={study.demoVideo.src}
                  poster={study.demoVideo.poster}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-auto bg-black"
                >
                  {study.demoVideo.captions && (
                    <track
                      src={study.demoVideo.captions}
                      kind="captions"
                      srcLang="en"
                      label="English"
                      default
                    />
                  )}
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {/* Wireframes Grid */}
            {study.wireframes?.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {study.wireframes.map((wf, i) => (
                  <button
                    key={i}
                    onClick={() => { setWfIndex(i); setWfOpen(true); }}
                    className="text-left group"
                  >
                    <div className="relative rounded-xl overflow-hidden shadow border border-white/10">
                      <img
                        src={wf.src}
                        alt={wf.caption || `Wireframe ${i + 1}`}
                        loading="lazy"
                        className="w-full h-56 object-cover group-hover:scale-[1.02] transition"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                    </div>
                    {wf.caption && (
                      <p className="text-gray-300 text-sm mt-2">{wf.caption}</p>
                    )}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Outcomes & (optional) Impacts */}
        {(study.outcomes?.length || study.impacts?.length) ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-2xl font-semibold text-[#DC9DD0] mb-10 text-center">
              Outcomes {study.impacts?.length ? "& Impacts" : ""}
            </h2>

            <div className={`grid ${study.impacts?.length ? "md:grid-cols-2 gap-24" : "grid-cols-1 gap-8"} relative`}>
              {/* Outcomes */}
              {study.outcomes?.length > 0 && (
                <div className="space-y-6">
                  {study.outcomes.map((o, i) => {
                    const Icon = o.icon || CheckCircle;
                    return (
                      <div key={i} className="bg-[#5C3A57] p-5 rounded-xl shadow text-white relative">
                        <div className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-[#DC9DD0]" />
                          <p className="font-semibold">{o.text}</p>
                        </div>

                        {study.impacts?.length > 0 && (
                          <div className="hidden md:flex items-center absolute left-full ml-3 top-1/2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "80px" }}
                              transition={{ duration: 1, delay: i * 0.3 }}
                              viewport={{ once: true }}
                              className="h-[2px] bg-[#DC9DD0] relative"
                            >
                              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 
                                border-t-4 border-b-4 border-l-8 border-l-[#DC9DD0] 
                                border-t-transparent border-b-transparent"></span>
                            </motion.div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Impacts */}
              {study.impacts?.length > 0 && (
                <div className="space-y-6">
                  {study.impacts.map((impact, i) => (
                    <div key={i} className="bg-gradient-to-tr from-[#5C3A57] to-[#DC9DD0]/10 p-5 rounded-xl shadow text-white">
                      <p>{impact}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ) : null}

        {/* Business Impact (only on ITOP) */}
        {study.businessImpact && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-[#DC9DD0] mb-4">Business Impact</h2>
            <p className="text-gray-300">{study.businessImpact.summary}</p>
            <div className="text-center">
              <button
                onClick={() => setImpactOpen(true)}
                className="px-6 py-3 bg-[#DC9DD0] text-[#493545] font-semibold rounded-full shadow-lg hover:bg-[#b478a9] transition"
              >
                See the Real Impact 🚀
              </button>
            </div>
          </motion.div>
        )}
      </section>

      {/* Business Impact Modal */}
      {impactOpen && study.businessImpact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-lg"
          onClick={() => setImpactOpen(false)}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-[#2b1f2c]/90 backdrop-blur-xl border border-white/10 w-[90%] max-w-3xl rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-[#DC9DD0] to-[#5C3A57]">
              <h3 className="text-white font-bold tracking-wide">Business Impact</h3>
              <button onClick={() => setImpactOpen(false)}>
                <X className="w-6 h-6 text-gray-200 hover:text-white transition" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-[#DC9DD0] mt-1" />
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-[#DC9DD0] font-semibold">Survey Insights:</span> 50% of technicians reported difficulty locating guest information, 75% cited data scattered across systems, and 25% pointed to outdated or inaccurate data.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-[#DC9DD0] font-semibold">Validation:</span> 92% said the app would be extremely or very useful in streamlining workflows and accessing data quickly.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="w-5 h-5 text-pink-400 mt-1" />
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-[#DC9DD0] font-semibold">Measured Value:</span> Average interaction time per guest was 25.5 minutes. With ITOP, technicians estimated a 10% time savings (~23–25 minutes).
                </p>
              </div>
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-center">
                <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#DC9DD0] to-pink-400 bg-clip-text text-transparent">1.8 Years Saved</h2>
                <p className="text-gray-400 mt-2">Equivalent to 5 minutes saved per interaction × ~63,000 yearly interactions.</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Wireframes Lightbox */}
      {wfOpen && study.wireframes?.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80"
          onClick={() => setWfOpen(false)}
        >
          <div className="relative w-[95%] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setWfOpen(false)}
              className="absolute -top-10 right-0 text-gray-300 hover:text-white"
              aria-label="Close"
            >
              <X className="w-7 h-7" />
            </button>

            <img
              src={study.wireframes[wfIndex].src}
              alt={study.wireframes[wfIndex].caption || "Wireframe"}
              className="w-full rounded-xl shadow-2xl"
            />
            {study.wireframes[wfIndex].caption && (
              <p className="text-gray-300 text-sm mt-3 text-center">
                {study.wireframes[wfIndex].caption}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
}
