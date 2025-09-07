import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"; // 👈 added ArrowLeft
import { useRef, useState, useEffect } from "react";

const projects = {
  fullstack: [
    {
      id: "itop-app",
      title: "IT Technician Web App – Eli Lilly",
      desc: "An internal web tool that streamlined IT support workflows, reducing ticket resolution time by 35%.",
      bg: "/lilly logo.jpg",
    },
    {
      id: "tinder-db",
      title: "Tinder Web-App Database",
      desc: "A mock dating platform showcasing CRUD operations with a MySQL-Python backend and a Figma-designed user interface.",
      bg: "/tinder.png",
    },
  ],
  uiux: [
    {
      id: "codify",
      title: "Codify Student Org Website",
      desc: "Led UI/UX design from Figma wireframes to advising frontend implementation.",
      bg: "/bg-codify.jpg",
    },
    {
      id: "g2p33",
      title: "G2 Chicago P33 Project",
      desc: "Collaborated on a student review app prototype, focusing on usability.",
      bg: "/bg-g2p33.jpg",
    },
  ],
  hackathons: [
    {
      id: "here-gm",
      title: "HERE x GM LatinX Hackathon",
      desc: "Real-time EV charging web app built in 24 hours.",
      bg: "/bg-here.jpg",
    },
    {
      id: "lilly-ai",
      title: "Eli Lilly AI Onboarding Assistant",
      desc: "AI-powered onboarding tool with React + Express.",
      bg: "/bg-lillyai.jpg",
    },
  ],
};

// 🎉 Fun facts
const funFacts = [
  "☕ Built during countless late-night Yerbamate sessions.",
  "🎵 Most of the code was written while vibing to Bad Bunny and Cris MJ.",
  "🚀 Hackathon projects = pure adrenaline and teamwork.",
  "💡 Inspired by convos with my SHPE friends and peers.",
  "🎨 Designed with love for clean UI and playful UX.",
];

export default function ProjectCategory() {
  const { category } = useParams();
  const navigate = useNavigate(); // 👈 hook for navigation
  const list = projects[category] || [];
  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [factIndex, setFactIndex] = useState(0);

  // update arrow + dot state
  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);

    // update active index
    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(index);
  };

  // scroll handler
  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateScrollState();
    const scroller = scrollRef.current;
    if (!scroller) return;

    scroller.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      scroller.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  // auto-rotate fun facts every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // number of "pages" of projects
  const totalPages = Math.max(
    1,
    Math.ceil(list.length / Math.floor(window.innerWidth / 400))
  );

  return (
    <section className="section-container py-20 relative">
      {/* 👈 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-300 hover:text-[#DC9DD0] mb-6 transition"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      <h2 className="text-3xl font-bold mb-12 capitalize">
        {category.replace("-", " ")} Projects
      </h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 
          bg-[#693365] hover:bg-[#592c55] text-white p-3 rounded-full shadow-lg z-10 
          transition-opacity duration-300
          ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 
          bg-[#693365] hover:bg-[#592c55] text-white p-3 rounded-full shadow-lg z-10 
          transition-opacity duration-300
          ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide scroll-smooth"
      >
        <div className="flex gap-8 snap-x snap-mandatory">
          {list.map((proj, i) => (
            <motion.div
              key={proj.id}
              // 👇 adaptive width: wider if only 1–2 projects
              className={`relative ${
                list.length === 1
                  ? "min-w-[90%]"
                  : list.length === 2
                  ? "min-w-[45%]"
                  : "min-w-[350px] max-w-[400px]"
              } rounded-2xl overflow-hidden shadow-lg h-[400px] flex items-center snap-center group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Background */}
              <img
                src={proj.bg}
                alt={proj.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#493545]/70"></div>

              {/* 🌈 Gradient Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#DC9DD0]/40 via-[#693365]/40 to-[#493545]/40"></div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#DC9DD0]">
                  {proj.title}
                </h3>
                <p className="text-gray-200 mb-4">{proj.desc}</p>
                <Link
                  to={`/projects/${category}/${proj.id}`}
                  className="bg-[#DC9DD0] px-4 py-2 rounded-full text-[#493545] font-medium hover:bg-[#b478a9] transition"
                >
                  View Case Study →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              i === activeIndex ? "bg-[#DC9DD0]" : "bg-gray-500/50"
            }`}
          ></span>
        ))}
      </div>

      {/* 🎉 Fun Facts Bar */}
      <div className="mt-10 text-center">
        <motion.p
          key={factIndex} // animates every rotation
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-300 text-lg italic"
        >
          {funFacts[factIndex]}
        </motion.p>
      </div>
    </section>
  );
}
