import { useParams } from "react-router-dom";
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
  Rocket,X
} from "lucide-react";
const caseStudies = {
  "itop-app": {
    title: "IT on Point",
    tagline: "An internal full-stack tool that streamlined IT support workflows.",
    role: "Software Engineering Intern (Full-Stack Developer)",
    timeline: "12 Weeks (Summer 2025)",
    tech: ["React", "Django", "PostgreSQL", "Docker","Kubernetes", "Deployment", "Github Actions"],
    overview:
      "The IT on Point (ITOP) User History Web Application was developed to modernize the way Eli Lilly’s IT Technicians manage user support workflows. I designed and implemented end-to-end features that allow technicians to quickly access user histories, track patterns across tickets, and troubleshoot recurring issues. By building both frontend and backend components, I helped deliver a scalable internal tool that reduces inefficiencies, enhances visibility, and empowers IT staff to provide faster, higher-quality support.",
    problem:
      "Before ITOP, technicians relied on fragmented systems — a mix of emails, spreadsheets, and legacy tools — to manage user support. This scattered workflow created bottlenecks, slowed down ticket resolution, and made it difficult to track recurring issues or monitor trends. Managers also lacked real-time visibility into technician workloads, making it harder to allocate resources efficiently or measure team performance.",
    challenge:
      "The primary challenge was creating a centralized, user-friendly solution that would work within Lilly’s enterprise IT ecosystem. The app needed to:",
    objective:
      "The goal of ITOP User History was to deliver a full-stack web application that:",
    research: [
      {
        icon: Users,
        method: "Personas",
        desc: "Created personas for technicians and IT managers to keep the design user-centered.",
      },
      {
        icon: ClipboardList,
        method: "Surveys",
        desc: "Distributed surveys to capture technician frustrations and desired features.",
      },
      {
        icon: Eye,
        method: "Shadowing",
        desc: "Observed IT staff to uncover hidden pain points in day-to-day ticket handling.",
      },
      {
        icon: FileText,
        method: "Interviews",
        desc: "Conducted interviews with managers to understand oversight challenges.",
      },
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
        quote:
          "I know Lilly’s resources, but I need a tool that brings them together in one place to avoid wasting time.",
      },
      {
        name: "Maria",
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
        quote:
          "I need a dashboard that gives me a clear view of my team’s performance.",
      },
    ],
    insights: [
      "Technicians spent too much time finding ticket histories.",
      "Managers struggled with workload visibility.",
      "Outdated systems required multiple logins and slowed workflows.",
    ],
    process: [
      {
        step: "1",
        title: "Research & Discovery",
        text: "Conducted surveys, shadowing sessions, and interviews with IT staff to uncover workflow bottlenecks and define user needs.",
      },
      {
        step: "2",
        title: "Design & Ideation",
        text: "Created personas and mapped user journeys to propose streamlined flows. Focused on simplifying ticket history search and workload visibility.",
      },
      {
        step: "3",
        title: "Development",
        text: "Built frontend in React and backend with Django + PostgreSQL. Added CRUD operations, real-time search, and Dockerized deployment.",
      },
      {
        step: "4",
        title: "Deployment & Iteration",
        text: "Launched internally via Lilly’s CATS platform. Collected feedback from technicians and managers to refine features and plan future improvements.",
      },
    ],
    outcomes: [
      { text: "Resolution time reduced by 35%.", icon: TrendingUp },
      { text: "Technician satisfaction increased in internal surveys.", icon: CheckCircle },
      { text: "Tool is being expanded to additional departments.", icon: Rocket },
    ],
    improvements: [
      "Add AI ticket routing for faster assignments.",
      "Introduce dashboards with performance analytics.",
      "Improve mobile responsiveness for on-the-go technicians.",
    ],
  },
};

export default function CaseStudy() {
  const { id } = useParams();
  const study = caseStudies[id];
  const [impactOpen, setImpactOpen] = useState(false);

  if (!study) {
    return (
      <section className="section-container py-32">
        <h2 className="text-3xl font-bold">Case Study Not Found</h2>
      </section>
    );
  }

  return (
    <>
    <section className="section-container py-20 space-y-24">
    {/* Hero Section */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-6"
    >
      {/* End-to-End Label */}
      <span
        className="px-4 py-1 border border-gray-300/50 
                  text-sm text-gray-200 rounded-full 
                  backdrop-blur-sm bg-black/20"
      >
        Web Application
      </span>

      {/* Title + Tagline */}
      <h1 className="text-4xl font-bold text-[#DC9DD0]">{study.title}</h1>
      <p className="text-xl text-gray-300">{study.tagline}</p>

      {/* Image */}
      <div className="w-full flex justify-center">
        <img
          src="/lilly logo.jpg" // 👈 replace with mockup
          alt={study.title}
          className="rounded-2xl shadow-lg max-h-[400px] object-contain mt-4"
        />
      </div>
    </motion.div>



      {/* Project Overview */}
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold text-[#DC9DD0]">Project Overview</h2>
          <p className="text-gray-300">{study.overview}</p>

          <h3 className="text-[#DC9DD0] font-semibold mt-6">Problem</h3>
          <p className="text-gray-300">{study.problem}</p>

          <h3 className="text-[#DC9DD0] font-semibold mt-6">Challenge</h3>
          <p className="text-gray-300">{study.challenge}</p>
          <ul className="list-disc list-inside text-gray-200 mt-4 space-y-2">
            <li>Consolidate user history into a single platform.</li>
            <li>Enable quick searching and filtering for past tickets.</li>
            <li>Provide managers with oversight capabilities without disrupting technician workflows.</li>
            <li>Be deployable and scalable through Lilly’s internal infrastructure (CATS platform, Dockerized deployment).</li>
          </ul>
          <p className="text-gray-300">Balancing technical constraints (security, internal tooling standards) with usability for IT staff was a key focus throughout development.</p>

          <h3 className="text-[#DC9DD0] font-semibold mt-6">Objective</h3>
          <p className="text-gray-300">{study.objective}</p>
           <ul className="list-disc list-inside text-gray-200 mt-4 space-y-2">
            <li>Streamlined IT technician workflows by consolidating ticket history into one accessible platform.</li>
            <li>Improved efficiency and reduced average resolution time by surfacing past user interactions.</li>
            <li>Equipped managers with visibility and metrics to better distribute workloads and identify recurring issues.</li>
            <li>Established a scalable foundation for future features, including analytics dashboards and AI-assisted ticket routing.</li>
          </ul>

        </div>

        {/* Snapshot */}
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
                <span
                  key={i}
                  className="px-3 py-1 bg-[#693365] text-sm rounded-full text-white"
                >
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
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-[#5C3A57] p-6 rounded-xl shadow-lg"
            >
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
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-[#693365] p-6 rounded-xl shadow text-center"
            >
              <Lightbulb className="h-8 w-8 text-[#DC9DD0] mx-auto mb-2" />
              <p className="text-gray-200 text-sm">{insight}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Process Timeline */}
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
      {/* Outcomes → Impacts */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="relative"
>
  <h2 className="text-2xl font-semibold text-[#DC9DD0] mb-10 text-center">
    Outcomes & Impacts
  </h2>

  <div className="grid md:grid-cols-2 gap-24 relative"> {/* 👈 increased gap */}
    {/* Outcomes */}
    <div className="space-y-6">
      {[
        "Resolution time reduced by 35%.",
        "Technician satisfaction increased in surveys.",
        "Tool expanded to more departments.",
      ].map((outcome, i) => (
        <div
          key={i}
          className="bg-[#5C3A57] p-5 rounded-xl shadow text-white relative"
        >
          <p className="font-semibold">{outcome}</p>

          {/* Connector line + arrow */}
          <div className="hidden md:flex items-center absolute left-full ml-3 top-1/2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }} // 👈 fixed width, stops before impact
              transition={{ duration: 1, delay: i * 0.3 }}
              viewport={{ once: true }}
              className="h-[2px] bg-[#DC9DD0] relative"
            >
              {/* Arrowhead at end of line */}
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 
                               border-t-4 border-b-4 border-l-8 border-l-[#DC9DD0] 
                               border-t-transparent border-b-transparent"></span>
            </motion.div>
          </div>
        </div>
      ))}
    </div>

    {/* Impacts */}
    <div className="space-y-6">
      {[
        "Faster ticket resolution freed IT staff for higher-value work.",
        "Improved morale and retention within IT teams.",
        "Scalability ensures adoption across Lilly long-term.",
      ].map((impact, i) => (
        <div
          key={i}
          className="bg-gradient-to-tr from-[#5C3A57] to-[#DC9DD0]/10 p-5 rounded-xl shadow text-white"
        >
          <p>{impact}</p>
        </div>
      ))}
    </div>
  </div>
</motion.div>

      {/* Future Improvements */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h2 className="text-2xl font-semibold text-[#DC9DD0] mb-6">
          Future Improvements
        </h2>
        <ul className="grid sm:grid-cols-3 gap-6">
          {study.improvements.map((imp, i) => (
            <li
              key={i}
              className="bg-gradient-to-tr from-[#5C3A57] to-[#DC9DD0]/10 p-5 rounded-xl shadow text-white hover:scale-105 transition"
            >
              {imp}
            </li>
          ))}
        </ul>
      </motion.div>
    {/* Business Impact */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#DC9DD0] mb-4">Business Impact</h2>
              <p className="text-gray-300">To understand the real-world impact of this solution, we surveyed IT On Point technicians. Their responses highlighted inefficiencies in locating guest information and validated the need for a centralized tool.</p>
              <div className="text-center">
                <button onClick={() => setImpactOpen(true)} className="px-6 py-3 bg-[#DC9DD0] text-[#493545] font-semibold rounded-full shadow-lg hover:bg-[#b478a9] transition">
                  See the Real Impact 🚀
                </button>
              </div>
            </motion.div>
          </section>

          {/* 👇 Modal OUTSIDE section */}
          {impactOpen && (
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
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-[#DC9DD0] to-[#5C3A57]">
                  <h3 className="text-white font-bold tracking-wide">Business Impact</h3>
                  <button onClick={() => setImpactOpen(false)}>
                    <X className="w-6 h-6 text-gray-200 hover:text-white transition" />
                  </button>
                </div>

                {/* Body */}
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
      </>
      );
    }