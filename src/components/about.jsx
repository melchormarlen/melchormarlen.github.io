import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative section-container grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-20 pt-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      {/* Left Side - Image */}
      <motion.div className="flex justify-start" variants={fromLeft}>
        <img
          src="/me.png"
          alt="Marlen Melchor"
          className="w-[500px] h-auto object-contain"
          loading="lazy"
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div className="max-w-lg" variants={fromRight}>
        <motion.h2 className="text-3xl font-bold mb-6" variants={fadeUp}>
          Hi! I'm a recent CS grad blending software engineering, design, and marketing
        </motion.h2>

        <motion.p
          className="text-lg leading-[1.563rem] font-normal text-[var(--text-secondary)] mb-4"
          variants={fadeUp}
        >
          Through my internship as a{" "}
          <span className="text-[#DC9DD0]">Tech@Lilly Intern</span>,
          I built internal web applications using Django, PostgreSQL, and React —
          gaining real full-stack experience from database to UI.
        </motion.p>

        <motion.p
          className="text-lg leading-[1.563rem] font-normal text-[var(--text-secondary)] mb-6"
          variants={fadeUp}
        >
          I also bring a background in{" "}
          <span className="text-[#DC9DD0]">graphic design and marketing</span>{" "}
          from my time as a Marketing Director, where I designed event promotions
          and grew engagement through visual storytelling. I love combining
          creativity, data, and code to build things that actually work — and look
          good doing it.
        </motion.p>

        <div className="flex gap-6">
          <motion.a
            href="#projects"
            className="bg-[#DC9DD0] px-6 py-2 rounded-full hover:bg-[#b478a9] transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Projects
          </motion.a>

          <motion.a
            href="/resumeJUNE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (window.gtag) {
                window.gtag("event", "resume_click", {
                  event_category: "engagement",
                  event_label: "Resume Button",
                });
              }
            }}
            className="px-6 py-2 rounded-full border border-[#DC9DD0] text-[#DC9DD0] hover:bg-[#693365] hover:text-[var(--text-primary)] transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Resume
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
}
