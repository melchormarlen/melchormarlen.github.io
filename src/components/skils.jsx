import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATS = [
  {
    id: "dev",
    label: "Development",
    color: "#a78bfa",
    skills: [
      "HTML / CSS", "JavaScript", "React", "Node.js",
      "Frontend Development", "SQL", "PostgreSQL", "MySQL",
      "Docker", "Kubernetes",
    ],
  },
  {
    id: "design",
    label: "Design",
    color: "#f9a8d4",
    skills: ["Figma", "Web Design", "Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    id: "marketing",
    label: "Marketing",
    color: "#6ee7b7",
    skills: ["Social Media Marketing"],
  },
];

const FILTERS = [{ id: "all", label: "All" }, ...CATS];

function getCatColor(skill) {
  return CATS.find((c) => c.skills.includes(skill))?.color || "#DC9DD0";
}

export default function Skills() {
  const [filter, setFilter] = useState("all");

  const skills =
    filter === "all"
      ? CATS.flatMap((c) => c.skills)
      : CATS.find((c) => c.id === filter)?.skills || [];

  return (
    <section id="skills" className="section-container py-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
        <motion.h2
          className="text-3xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-[#DC9DD0]">Skills</span>
        </motion.h2>

        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition border
                  ${active
                    ? "bg-[#DC9DD0] text-[#493545] border-[#DC9DD0]"
                    : "border-[var(--border-soft)] text-[var(--text-secondary)] hover:border-[#DC9DD0] hover:text-[var(--text-primary)]"
                  }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--border-soft)] bg-[#5C3A57] text-sm text-[var(--text-primary)] cursor-default hover:border-[#DC9DD0] transition-colors"
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: getCatColor(skill) }}
              />
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}