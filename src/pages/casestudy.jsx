// src/pages/CaseStudy.jsx
import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Target, Rocket, Lightbulb, Image as ImageIcon, X , Users, Layers, Repeat, Percent, Award,  Gauge, LayoutDashboard, ShieldCheck} from "lucide-react";
import { CASES_BY_ID } from "@/data/cases.index.js";

// --- tiny UI helpers ---
const Pill = ({ children }) => (
  <span className="px-3 py-1 rounded-full bg-white/5 text-gray-200 border border-white/10 text-xs">
    {children}
  </span>
);
const KPI = ({ kpi, label }) => (
  <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
    <div className="text-3xl font-semibold text-white">{kpi}</div>
    <div className="text-gray-300 text-sm mt-1">{label}</div>
  </div>
);
const KPI_ICONS = {
  users: Users,
  features: Layers,
  iterations: Repeat,
  validation: Percent,
  grade: Award,
};
const kpiIconFor = (kpi) => {
  if (kpi?.icon && KPI_ICONS[kpi.icon]) return KPI_ICONS[kpi.icon];
  // fallback to keyword mapping if no icon provided
  return (label => {
    const l = (label || "").toLowerCase();
    if (l.includes("user")) return Users;
    if (l.includes("feature")) return Layers;
    if (l.includes("iteration") || l.includes("build")) return Repeat;
    if (l.includes("validation") || l.includes("success") || l.includes("rate")) return Percent;
    if (l.includes("grade")) return Award;
    return CheckCircle2;
  })(kpi?.label);
};
const SectionTitle = ({ children, eyebrow }) => (
  <div className="mb-6">
    {eyebrow && <div className="text-xs tracking-widest uppercase text-[#DC9DD0]/80 mb-2">{eyebrow}</div>}
    <h2 className="text-2xl font-semibold text-[#DC9DD0]">{children}</h2>
  </div>
);
const CHALLENGE_ICONS = {
  gauge: Gauge,
  dashboard: LayoutDashboard,
  shield: ShieldCheck,
};
// --- smooth scroll to an id (accounts for sticky bar height) ---
const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const sticky = document.getElementById("cs-sticky");
  const offset = (sticky?.offsetHeight || 0) + 12;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
};
const outputsContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 }
  }
};

const flowCard = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
};

const flowImage = {
  hidden: { opacity: 0, scale: 0.98 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hover:  { scale: 1.01, transition: { duration: 0.18 } }
};

export default function CaseStudy() {
  const { id } = useParams();
  const data = CASES_BY_ID[id];

  // --- lightbox for design flows ---
  const [flowOpen, setFlowOpen] = useState(false);
  const [flowIndex, setFlowIndex] = useState(0);

  // --- sticky tabs / scroll spy ---
  const sections = useMemo(
    () => [
      { id: "my-role", label: "My role" },
      { id: "stakeholders", label: "Stakeholders" },
      { id: "objectives", label: "Objectives" },
      { id: "approach", label: "Approach" },
      { id: "impact", label: "Impact & Outcomes" },
      ...(data?.designFlows?.length ? [{ id: "outputs", label: "Glimpse of Outputs" }] : []),
      { id: "final", label: "Final Output" },
    ],
    [data]
  );
  const [active, setActive] = useState(sections[0]?.id);
  const observers = useRef([]);

  useEffect(() => {
    observers.current.forEach((o) => o.disconnect());
    observers.current = [];
    const opts = { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 };
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(s.id);
        });
      }, opts);
      obs.observe(el);
      observers.current.push(obs);
    });
    return () => observers.current.forEach((o) => o.disconnect());
  }, [sections]);

  if (!data) {
    return (
      <section className="section-container py-32">
        <h2 className="text-3xl font-bold">Case Study Not Found</h2>
      </section>
    );
  }

  return (
    <>
      {/* Sticky section tabs (Klarna-style) */}
      <div id="cs-sticky" className="sticky top-0 z-40 border-b border-white/10 bg-[#493545]/95 backdrop-blur supports-[backdrop-filter]:bg-[#493545]/60 ">
        <div className="section-container">
          <div className="flex gap-6 overflow-x-auto py-3 no-scrollbar">
            {sections.map((s) => {
              const activeTab = active === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollToId(s.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full transition ${
                    activeTab ? "bg-white/10 text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="section-container pt-10 pb-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              {data.title}
            </h1>
            <div className="mt-6 space-y-2 text-gray-300">
              <p>
                <span className="text-white/90">{data.company}</span> • {data.projectType}
              </p>
              <p className="text-sm">
                Roles:&nbsp;
                <span className="text-white/90">{data.roles.join(", ")}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MY ROLE */}
      <section id="my-role" className="section-container py-14 scroll-mt-28">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <SectionTitle eyebrow="Context">My role</SectionTitle>
            <p className="text-gray-200 leading-relaxed">{data.overview}</p>

            {/* Highlights as pills */}
            {data.highlights?.length ? (
              <div className="flex flex-wrap gap-2 mt-6">
                {data.highlights.map((h, i) => (
                  <Pill key={i}>{h}</Pill>
                ))}
              </div>
            ) : null}
          </div>
          {/* MY ROLE right column: portrait phone demo (no bg/border/shadow) */}
          <div className="lg:col-span-5 flex lg:justify-end">
            {data.heroMedia?.videoSrc ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={data.heroMedia?.poster}
                /* size: narrow portrait, capped by viewport height */
                className="block w-full max-w-[420px] md:max-w-[460px] max-h-[80vh] object-contain "
              >
                <source src={data.heroMedia.videoSrc} type="video/mp4" />
              </video>
            ) : (
              <img
                src={data.heroMedia?.fallbackImg || "/images/placeholder-hero.png"}
                alt={data.title}
                className="block w-full h-auto max-w-[420px] md:max-w-[460px]"
              />
            )}
          </div>

        </div>
      </section>
      {/* StakeHolders Section*/}
      {/* OBJECTIVES */}
      <section id="stakeholders" className="section-container py-14 scroll-mt-28">
        <SectionTitle eyebrow="Collaboration">Stakeholders</SectionTitle>
        <div className="space-y-4">
          {data.stakeholders?.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 mt-0.5 text-[#DC9DD0]" />
                <div>
                  <div className="font-semibold text-white">{o.title}</div>
                  {o.desc && <div className="text-gray-300 text-sm mt-1">{o.desc}</div>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Stakeholder Challenges */}
      {data.stakeholderChallenges?.length ? (
        <section id="stakeholder-challenges" className="section-container py-14 scroll-mt-28">
          <SectionTitle eyebrow="Collaboration Hurdles">Stakeholder Challenges</SectionTitle>
          <div className="space-y-4">
            {data.stakeholderChallenges.map((c, i) => {
              const Icon = CHALLENGE_ICONS[c.icon] || Lightbulb;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 mt-0.5 text-[#DC9DD0]" />
                    <div className="space-y-2">
                      <div>
                        <div className="font-semibold text-white">Challenge</div>
                        <p className="text-gray-300 text-sm mt-1">{c.challenge}</p>
                      </div>
                      {c.stakeholders && (
                        <div>
                          <div className="font-semibold text-white">Stakeholders</div>
                          <p className="text-gray-300 text-sm mt-1">{c.stakeholders}</p>
                        </div>
                      )}
                      <div>
                        <div className="font-semibold text-white">Resolution</div>
                        <p className="text-gray-300 text-sm mt-1">{c.resolution}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      ) : null}


      {/* OBJECTIVES */}
      <section id="objectives" className="section-container py-14 scroll-mt-28">
        <SectionTitle eyebrow="Goals">Objectives</SectionTitle>
        <div className="space-y-4">
          {data.objectives?.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 mt-0.5 text-[#DC9DD0]" />
                <div>
                  <div className="font-semibold text-white">{o.title}</div>
                  {o.desc && <div className="text-gray-300 text-sm mt-1">{o.desc}</div>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="section-container py-14 scroll-mt-28">
        <SectionTitle eyebrow="How we worked">Approach</SectionTitle>
        <div className="space-y-4">
          {data.approach?.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 mt-0.5 text-[#DC9DD0]" />
                <div>
                  <div className="font-semibold text-white">{a.title}</div>
                  {a.desc && <div className="text-gray-300 text-sm mt-1">{a.desc}</div>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IMPACT & OUTCOMES */}
      <section id="impact" className="section-container py-14 scroll-mt-28">
        <SectionTitle eyebrow="Results">Impact & Outcomes</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          {data.impact?.map((i, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-[#2b1f2c]/60 p-6"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#DC9DD0]" />
                <div>
                  <div className="text-lg font-semibold text-white">{i.title}</div>
                  {i.desc && <p className="text-gray-300 mt-2">{i.desc}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      {/* KPIs — icons + typographic row (very subtle/no dividers) */}
      {data.kpis?.length ? (
        <div className="mt-10 border-t border-white/10 pt-6">
          {/* To remove dividers completely, delete `lg:divide-x lg:divide-white/5` */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-white/5">
            {data.kpis.map((k, i) => {
              const Icon = kpiIconFor(k.label);
              return (
                <div
                  key={i}
                  className="py-3 px-4 flex items-start gap-3"
                  aria-label={`${k.kpi} — ${k.label}`}
                  title={k.label}
                >
                  <Icon className="mt-1 h-5 w-5 text-[#DC9DD0]" />
                  <div>
                    <div className="text-3xl md:text-4xl font-extrabold text-white leading-none">
                      {k.kpi}
                    </div>
                    <div className="text-xs md:text-sm text-gray-300 mt-1">
                      {k.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      </section>

      {/* GLIMPSE OF OUTPUTS (Design flows – landscape, lightbox) */}
      {data.designFlows?.length ? (
        <section id="outputs" className="section-container py-14 scroll-mt-28">
          <SectionTitle eyebrow="UI Artifacts">Glimpse of Outputs</SectionTitle>

          <motion.div
            variants={outputsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-12"
          >
            {data.designFlows.map((flow, idx) => (
              <motion.div key={idx} variants={flowCard} className="space-y-4">
                {/* Title centered */}
                <div className="flex items-center justify-center">
                  <h4 className="text-lg font-semibold text-white text-center">{flow.title}</h4>
                </div>

                <motion.button
                  onClick={() => { setFlowIndex(idx); setFlowOpen(true); }}
                  className="w-full group"
                  aria-label={`Open lightbox for ${flow.title}`}
                  variants={flowCard}
                >
                  <motion.div
                    className="relative rounded-xl overflow-hidden bg-transparent"
                    variants={flowImage}
                    whileHover="hover"
                  >
                    <div className="w-full aspect-[16/9]">
                      <img
                        src={flow.img}
                        alt={flow.title}
                        loading="lazy"
                        className="w-full h-full object-contain transition bg-transparent"
                      />
                    </div>
                  </motion.div>
                </motion.button>

                {/* Blurb centered with readable width */}
                {flow.desc ? (
                  <p className="text-gray-200 leading-relaxed text-center mx-auto max-w-2xl">
                    {flow.desc}
                  </p>
                ) : null}

                {/* Tags centered */}
                {flow.tags?.length ? (
                  <div className="flex flex-wrap justify-center gap-2">
                    {flow.tags.map((t, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </motion.div>
            ))}
          </motion.div>
        </section>
      ) : null}





      {/* FINAL OUTPUT / REFLECTION */}
      <section id="final" className="section-container py-16 scroll-mt-28">
        <SectionTitle eyebrow="Wrap-up">Final Output</SectionTitle>
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <p className="text-gray-200 leading-relaxed">{data.reflection}</p>
          </div>
              <div className="lg:col-span-1">
                <div className="rounded-2xl border border-white/10 p-6 bg-white/5 h-full">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-[#DC9DD0]" />
                    <div className="font-semibold">
                      {data.takeawaysTitle || "What stuck with me"}
                    </div>
                  </div>

                  {Array.isArray(data.takeaways) && data.takeaways.length > 0 ? (
                    <ul className="mt-4 space-y-2 text-sm text-gray-300 list-disc list-inside">
                      {data.takeaways.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  ) : (
                    // Fallback if a case doesn’t define takeaways yet
                    <ul className="mt-4 space-y-2 text-sm text-gray-300 list-disc list-inside">
                      <li>Prioritize the primary job-to-be-done.</li>
                      <li>Model constraints before pixels.</li>
                      <li>Iterate with fast, honest feedback loops.</li>
                    </ul>
                  )}
                </div>
              </div>
        </div>
      </section>

      {/* Lightbox for flows */}
      {flowOpen && data.designFlows?.length > 0 && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80"
          onClick={() => setFlowOpen(false)}
        >
          <div className="relative w-[95%] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setFlowOpen(false)}
              className="absolute -top-10 right-0 text-gray-300 hover:text-white"
              aria-label="Close"
            >
              <X className="w-7 h-7" />
            </button>
            <img
              src={data.designFlows[flowIndex].img}
              alt={data.designFlows[flowIndex].title}
              className="w-full rounded-xl shadow-2xl"
            />
            {data.designFlows[flowIndex].title && (
              <p className="text-gray-300 text-sm mt-3 text-center">{data.designFlows[flowIndex].title}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

