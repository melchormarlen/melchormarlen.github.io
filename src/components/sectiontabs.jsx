// components/sectiontabs.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SectionTabs({
  sections,
  topOffset = 88, // match your Navbar total height (py-4 pt-8 ≈ 64–88px). Tweak if needed.
  className = "",
}) {
  const [active, setActive] = useState(sections?.[0]?.id);

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        rootMargin: `-${topOffset + 16}px 0px -60% 0px`,
        threshold: [0.2, 0.4, 0.6],
      }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections, topOffset]);

  const jump = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - (topOffset + 16);
    window.scrollTo({ top: y, behavior: "smooth" });
    setActive(id);
  };

  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-[#493545]/80 backdrop-blur-md">
      <div className="section-container">
        <div className="flex items-center justify-start gap-2 md:gap-4 overflow-x-auto no-scrollbar py-3">
          {/* 🔥 Use the SAME container as Navbar to align left edges */}
          {sections.map(({ id, label }) => {
            const isActive = id === active;
            return (
              <button
                key={id}
                onClick={() => jump(id)}
                className={`relative rounded-full px-4 py-2 text-sm md:text-base transition
                  ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tabs-pill"
                    className="absolute inset-0 rounded-full bg-white/5 border border-white/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
