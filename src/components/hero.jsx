import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const roles = [
  "Full-Stack Developer",
  "Software Engineer",
  "Data Analyst",
  "IT Specialist",
  "Marketing Strategist",
];

function useTypewriter(words, typingSpeed = 80, pauseTime = 1500, deletingSpeed = 40) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, pauseTime, deletingSpeed]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(roles);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-32 py-20 gap-10">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <h1 className="text-5xl font-semibold mb-4 leading-snug">
          Hi, I am <br />
          <span className="text-[#DC9DD0]">Marlen Melchor</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium mb-6 h-10">
          <span className="text-[#DC9DD0]">{role}</span>
          <span className="inline-block w-[2px] h-6 bg-[#DC9DD0] ml-1 animate-pulse align-middle" />
        </h2>

        <p className="max-w-lg text-lg leading-relaxed font-normal text-[var(--text-secondary)] mb-6">
          I'm a recent Computer Science graduate from Illinois Institute of
          Technology with hands-on experience across{" "}
          <span className="text-[#DC9DD0]">full-stack development</span>,{" "}
          <span className="text-[#DC9DD0]">UI/UX design</span>, and{" "}
          <span className="text-[#DC9DD0]">marketing strategy</span>. I love
          turning ideas into clean, working products — and I'm currently based in
          Indianapolis,IN.
        </p>

        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-[#DC9DD0] px-6 py-2 rounded-full hover:bg-[#b478a9] transition"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-6 py-2 rounded-full border border-[#DC9DD0] text-[#DC9DD0] hover:bg-[#693365] hover:text-white transition"
          >
            View Projects
          </a>
        </div>
      </motion.div>

      {/* Right Side - Profile Image */}
      <motion.img
        src="/me2.png"
        alt="Marlen Melchor"
        className="w-[320px] md:w-[380px] h-auto object-contain"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
    </section>
  );
}