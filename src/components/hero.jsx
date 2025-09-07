import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-20 lg:px-32 py-20">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
      <h1 className="text-5xl font-semibold mb-4 leading-snug">
      Hi, I am <br />
      <span className="text-[#DC9DD0]">Marlen Melchor</span>
      </h1>


      <p className="max-w-lg text-lg leading-relaxed font-normal text-gray-200 mb-6">
      I am an aspiring <span className="text-[#DC9DD0]">UI/UX Designer</span>,
      <span className="text-[#DC9DD0]"> Product Designer</span>, and
      <span className="text-[#DC9DD0]"> Full-Stack Developer</span> located in
      Chicago, IL. I am currently attending Illinois Institute of Technology
      working on receiving my Bachelors of Science in Computer Science.
      </p>

      <a
        href="#contact"
        className="bg-[#DC9DD0] px-6 py-2 rounded-full hover:bg-[#b478a9] transition"
      >
        Contact Me
      </a>

      </motion.div>

      {/* Right Side - Profile Image */}
      <motion.img
        src="/me2.png"
        alt="Marlen Melchor"
        className="w-[600px] h-auto object-contain mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
    </section>
  );
}
