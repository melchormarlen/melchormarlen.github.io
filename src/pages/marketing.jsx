import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MARKETING as data } from "@/data/marketing.index.js";

const Pill = ({ children }) => (
  <span className="px-3 py-1 rounded-full bg-white/5 text-gray-200 border border-white/10 text-xs">
    {children}
  </span>
);

const SectionTitle = ({ children, eyebrow }) => (
  <div className="mb-6">
    {eyebrow && <div className="text-xs tracking-widest uppercase text-[#DC9DD0]/80 mb-2">{eyebrow}</div>}
    <h2 className="text-2xl font-semibold text-[#DC9DD0]">{children}</h2>
  </div>
);

const KPI = ({ kpi, label }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="text-3xl md:text-4xl font-extrabold text-white leading-none">{kpi}</div>
    <div className="text-xs md:text-sm text-gray-300">{label}</div>
  </div>
);

export default function Marketing() {
  return (
    <main className="pt-8">
      {/* Back */}
      <section className="section-container pt-8 pb-6">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-[#DC9DD0]">← Back</Link>

        {/* HERO (left text, right video) */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mt-6">
          <div className="lg:col-span-7">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">{data.title}</h1>
            <div className="mt-6 space-y-3 text-gray-300">
              <p>
                As Marketing Director for <span className="text-white/90">{data.org}</span>, {data.overview}
              </p>

              {data.highlights?.length ? (
                <div className="flex flex-wrap gap-2">
                  {data.highlights.map((h, i) => <Pill key={i}>{h}</Pill>)}
                </div>
              ) : null}
            </div>
          </div>

          {/* Right column: video like CaseStudy (no bg, no shadow, no rounding) */}
          <div className="lg:col-span-5 flex lg:justify-end">
            {data.heroMedia?.videoSrc ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={data.heroMedia?.poster}
                className="block w-full max-w-[520px] md:max-w-[560px] max-h-[80vh] object-contain
                           bg-transparent rounded-none shadow-none ring-0 outline-none border-0"
                style={{ backgroundColor: "transparent", boxShadow: "none" }}
              >
                <source src={data.heroMedia.videoSrc} type="video/mp4" />
              </video>
            ) : (
              <img
                src={data.heroMedia?.fallbackImg}
                alt="Marketing hero"
                className="block w-full h-auto max-w-[560px] bg-transparent rounded-none shadow-none ring-0 border-0"
                style={{ backgroundColor: "transparent", boxShadow: "none" }}
              />
            )}
          </div>
        </div>
      </section>

      {/* KPIs band */}
      {data.kpis?.length ? (
        <section className="section-container py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center border-top border-white/0 pt-0">
            {data.kpis.map((k, i) => <KPI key={i} kpi={k.kpi} label={k.label} />)}
          </div>
        </section>
      ) : null}

      {/* Brand Guidelines */}
      <section className="section-container py-10">
        <SectionTitle eyebrow="Case Snapshot">{data.guidelines.title}</SectionTitle>
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="text-gray-200 leading-relaxed">{data.guidelines.desc}</p>
            {data.guidelines.pills?.length ? (
              <div className="flex flex-wrap gap-2 mt-4">
                {data.guidelines.pills.map((p, i) => <Pill key={i}>{p}</Pill>)}
              </div>
            ) : null}
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              {/* Toolbar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <div className="text-sm text-gray-300">Brand Guidelines (PDF)</div>
                <div className="flex gap-2">
                  <a
                    href={data.guidelines.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 text-sm"
                  >
                    Open
                  </a>
                  <a
                    href={data.guidelines.pdfUrl}
                    download
                    className="px-3 py-1 rounded-full bg-[#DC9DD0] text-[#493545] hover:bg-[#b478a9] text-sm font-medium"
                  >
                    Download
                  </a>
                </div>
              </div>

              {/* Responsive PDF viewer */}
              <div className="aspect-video">
                <iframe
                  title="SHPE-IIT Brand Guidelines (PDF)"
                  src={data.guidelines.pdfUrl}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns */}
      <section className="section-container py-10">
        <SectionTitle eyebrow="Case Snapshot">{data.campaigns.title}</SectionTitle>
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="text-gray-200 leading-relaxed">{data.campaigns.desc}</p>
            {data.campaigns.pills?.length ? (
              <div className="flex flex-wrap gap-2 mt-4">
                {data.campaigns.pills.map((p, i) => <Pill key={i}>{p}</Pill>)}
              </div>
            ) : null}
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
            {data.campaigns.grid?.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-xl overflow-hidden border border-white/10 bg-white/5"
              >
                <div className="aspect-[4/5]"> {/* keeps tiles consistent */}
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      poster={item.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Visual Reel */}
      <section className="section-container py-10">
        <SectionTitle eyebrow="Highlights">{data.gallery.title}</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.gallery.items.map((item, i) =>
            item.type === "video" ? (
              <video
                key={i}
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-xl border border-white/10"
              />
            ) : (
              <img
                key={i}
                src={item.src}
                alt={item.alt}
                className="w-full rounded-xl border border-white/10"
              />
            )
          )}
        </div>
      </section>

      
    </main>
  );
}
