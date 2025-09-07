import { useParams } from "react-router-dom";
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
} from "lucide-react";

const caseStudies = {
  "itop-app": {
    title: "IT Technician Web App – Eli Lilly",
    tagline: "An internal full-stack tool that streamlined IT support workflows.",
    role: "Software Engineering Intern (Full-Stack Developer)",
    timeline: "12 Weeks (Summer 2025)",
    tech: ["React", "Django", "PostgreSQL", "Docker", "CATS Deployment"],
    overview:
      "The IT Technician Web App was created to modernize IT support workflows. I was responsible for building end-to-end features, improving technician efficiency, and contributing to a scalable internal solution.",
    problem:
      "Technicians lacked a unified workflow. Tasks were scattered across email and outdated tools, leading to bottlenecks and slow ticket resolution.",
    challenge:
      "Technicians and managers needed a centralized tool to reduce wasted time, improve visibility, and streamline ticket handling.",
    objective:
      "Develop a full-stack app that consolidates workflows, improves efficiency, and lays the foundation for scalable IT support solutions.",
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

  if (!study) {
    return (
      <section className="section-container py-32">
        <h2 className="text-3xl font-bold">Case Study Not Found</h2>
      </section>
    );
  }

  return (
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

          <h3 className="text-[#DC9DD0] font-semibold mt-6">The Challenge</h3>
          <p className="text-gray-300">{study.challenge}</p>

          <h3 className="text-[#DC9DD0] font-semibold mt-6">Objective</h3>
          <p className="text-gray-300">{study.objective}</p>
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


  </section>
  );
}
