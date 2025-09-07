import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  { id: "fullstack", title: "Full Stack Development", desc: "End-to-end web applications built using modern frontend and backend technologies to deliver efficient, scalable solutions." },
  { id: "uiux", title: "UI/UX Design", desc: "User-centered design work focused on wireframing, prototyping, and optimizing digital interfaces for usability and accessibility." },
  { id: "hackathons", title: "Hackathons & Innovation", desc: "Projects created in competitive environments, emphasizing problem-solving, technical execution, and collaboration." }
];

export default function Projects() {
  return (
   <section id="projects" className="section-container pt-40 pb-40 sm:pt-48 sm:pb-48 lg:pt-52 lg:pb-52">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
        <motion.h2
          className="text-3xl font-medium mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          My <span className="text-[#DC9DD0]">Projects</span>
        </motion.h2>

        <motion.p
          className="text-gray-300 max-w-xl text-[1.563rem] leading-snug"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Explore my work across{" "}
          <span className="text-[#DC9DD0]">Full-Stack Development</span>,{" "}
          <span className="text-[#DC9DD0]">UI/UX Design</span>, and{" "}
          <span className="text-[#DC9DD0]">Hackathons & Innovation</span>.  
          Click on any section to see detailed case studies and projects.
        </motion.p>
      </div>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#5C3A57] p-8 rounded-2xl shadow-lg flex flex-col justify-between min-h-[340px]"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3">{cat.title}</h3>
              <p className="text-gray-300 text-base">{cat.desc}</p>
            </div>
            <Link
              to={`/projects/${cat.id}`}
              className="mt-6 text-pink-300 hover:underline self-end text-lg"
            >
              →
            </Link>
          </motion.div>

        ))}
      </div>
    </section>
  );
}
