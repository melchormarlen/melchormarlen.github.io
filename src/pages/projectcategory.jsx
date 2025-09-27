import { Link, useParams} from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const projects = {
  fullstack: [
    { id: "itop-app", title: "IT Technician Web App – Eli Lilly", desc: "An internal web tool that streamlined IT support workflows, reducing ticket resolution time by 35%.", bg: "/lilly logo.jpg" },
    { id: "tinder-db", title: "Tinder Web-App Database", desc: "A mock dating platform showcasing CRUD operations with a MySQL-Python backend and a Figma-designed user interface.", bg: "/tinder.png" },
  ],
  uiux: [
    { id: "codify", title: "Codify Student Org Website", desc: "Led UI/UX design from Figma wireframes to advising frontend implementation.", bg: "/codifyLogo.png" },
    { id: "teacher-rating", title: "Rapid Reviews - G2 Chicago P33 Project", desc: "Collaborated on a student review app prototype, focusing on usability.", bg: "/bg-g2p33.jpg" },
  ],
  hackathons: [
    { id: "here-gm", title: "HERE x GM LatinX Hackathon", desc: "Real-time EV charging web app built in 24 hours.", bg: "/bg-here.jpg" },
    { id: "lilly-ai", title: "Eli Lilly AI Onboarding Assistant", desc: "AI-powered onboarding tool with React + Express.", bg: "/bg-lillyai.jpg" },
  ],
};

const CATEGORY_LABELS = {
  uiux: "UI/UX",
  fullstack: "Full-Stack",
  hackathons: "Hackathons",
};

const getCategoryLabel = (slug = "") =>
  CATEGORY_LABELS[slug] || slug.replace("-", " ").replace(/\b\w/g, c => c.toUpperCase());

const funFacts = [
  "☕ Built during countless late-night Yerbamate sessions.",
  "🎵 Most of the code was written while vibing to Bad Bunny and Cris MJ.",
  "🚀 Hackathon projects = pure adrenaline and teamwork.",
  "💡 Inspired by convos with my SHPE friends and peers.",
  "🎨 Designed with love for clean UI and playful UX.",
];

export default function ProjectCategory() {
  const { category } = useParams();

  const list = projects[category] || [];

  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [factIndex, setFactIndex] = useState(0);

  // ✅ robust itemsPerPage calculation based on container width
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Recalc sizes and total pages
  const recalcLayout = () => {
    const containerWidth =
      (scrollRef.current && scrollRef.current.clientWidth) ||
      (typeof window !== "undefined" ? window.innerWidth : 400) ||
      400;

    const perPage = Math.max(1, Math.floor(containerWidth / 400)); // 400px per card target
    setItemsPerPage(perPage);

    const pages = Math.max(1, Math.ceil(list.length / perPage || 1));
    setTotalPages(pages);

    // Update arrow and dots state
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
      // active index guarded
      const width = Math.max(1, clientWidth);
      setActiveIndex(Math.round(scrollLeft / width));
    }
  };

  // Scroll listener (with guards)
  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const width = Math.max(1, clientWidth);

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);

    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  // Scroll controls
  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const width = Math.max(1, scrollRef.current.clientWidth);
    scrollRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  // On mount + resize
  useEffect(() => {
    recalcLayout();
    const onResize = () => recalcLayout();

    window.addEventListener("resize", onResize);
    const scroller = scrollRef.current;
    if (scroller) scroller.addEventListener("scroll", updateScrollState);

    return () => {
      window.removeEventListener("resize", onResize);
      if (scroller) scroller.removeEventListener("scroll", updateScrollState);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When category changes: reset scroll, state, and recalc
  useEffect(() => {
    // force top + left
    window.scrollTo({ top: 0, behavior: "instant" });
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "instant" });
    }
    setActiveIndex(0);
    recalcLayout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, list.length]);

  // Fun facts rotation
  useEffect(() => {
    const timer = setInterval(
      () => setFactIndex((p) => (p + 1) % funFacts.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    // 👇 key ensures full remount on category change
    <section key={category} className="section-container py-20 relative">
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-gray-300 hover:text-[#DC9DD0] mb-6 transition"
        aria-label="Back to all project categories"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </Link>

      <h2 className="text-3xl font-bold mb-12">
        {getCategoryLabel(category)} Projects
      </h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 
          bg-[#693365] hover:bg-[#592c55] text-white p-3 rounded-full shadow-lg z-10 
          transition-opacity duration-300
          ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-label="Previous"
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
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Horizontal scroller */}
      <div ref={scrollRef} className="overflow-x-auto scrollbar-hide scroll-smooth">
        <div className="flex gap-8 snap-x snap-mandatory">
          {list.map((proj, i) => (
            <motion.div
              key={proj.id}
              className={`relative ${
                list.length === 1
                  ? "min-w-[90%]"
                  : list.length === 2
                  ? "min-w-[45%]"
                  : "min-w-[350px] max-w-[400px]"
              } rounded-2xl overflow-hidden shadow-lg h-[400px] flex items-center snap-center group`}
              // ✅ mount animation (no whileInView for above-the-fold cards)
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Background */}
              <img
                src={proj.bg}
                alt={proj.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#493545]/70" />

              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-[#DC9DD0]/40 via-[#693365]/40 to-[#493545]/40" />

              {/* Content */}
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#DC9DD0]">{proj.title}</h3>
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

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              i === activeIndex ? "bg-[#DC9DD0]" : "bg-gray-500/50"
            }`}
          />
        ))}
      </div>

      {/* Fun Facts */}
      <div className="mt-10 text-center">
        <motion.p
          key={factIndex}
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
