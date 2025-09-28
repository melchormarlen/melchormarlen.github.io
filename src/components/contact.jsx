// src/components/contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState({ loading: false, ok: false, error: "" });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, ok: false, error: "" });

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check
    if (data.get("_hp")) {
      setStatus({ loading: false, ok: true, error: "" });
      form.reset();
      return;
    }

    try {
      const res = await fetch("https://formspree.io/f/xnngjokn", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus({ loading: false, ok: true, error: "" });
        form.reset();
      } else {
        const j = await res.json().catch(() => ({}));
        setStatus({
          loading: false,
          ok: false,
          error: j?.errors?.[0]?.message || "Something went wrong. Try again?",
        });
      }
    } catch {
      setStatus({ loading: false, ok: false, error: "Network error. Please retry." });
    }
  }

  return (
    <section id="contact" className="section-container py-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold">
          Let’s <span className="text-[#DC9DD0]">Connect</span>
        </h2>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
          Have a project, collaboration, or question? I’d love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Left: Contact cards / socials */}
        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Card: quick info */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#DC9DD0]" />
              <div className="font-semibold">Reach me</div>
            </div>
            <div className="mt-4 space-y-3 text-gray-300">
              <a
                href="mailto:melchormarlen@gmail.com"
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail className="w-4 h-4 opacity-70" />
                melchormarlen@gmail.com
              </a>
              <a
                href="tel:+1-000-000-0000"
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="w-4 h-4 opacity-70" />
                Request via email
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 opacity-70" />
                Chicago, IL
              </p>
            </div>
          </div>

          {/* Card: social */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#DC9DD0]" />
              <div className="font-semibold">Social</div>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="https://github.com/melchormarlen"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-[#5C3A57] hover:bg-[#623d5d]"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mmelchor/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-[#5C3A57] hover:bg[#623d5d]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Card: availability blurb */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-gray-300">
              I typically reply within 24–48 hours. For speaking, design critiques,
              or mentorship chats, include a few time windows.
            </div>
          </div>
        </motion.aside>

        {/* Right: Form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/5 p-6 space-y-5"
        >
          {/* success / error */}
          {status.ok && (
            <div className="rounded-xl border border-white/10 bg-emerald-400/10 text-emerald-200 px-4 py-3">
              Thanks! Your message has been sent — I’ll get back to you soon.
            </div>
          )}
          {status.error && (
            <div className="rounded-xl border border-white/10 bg-rose-400/10 text-rose-200 px-4 py-3">
              {status.error}
            </div>
          )}

          {/* Honeypot (hidden) */}
          <input type="text" name="_hp" tabIndex="-1" autoComplete="off" className="hidden" />

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded-xl bg-[#5C3A57] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DC9DD0]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded-xl bg-[#5C3A57] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DC9DD0]"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full p-3 rounded-xl bg-[#5C3A57] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DC9DD0]"
              placeholder="How can I help?"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows={6}
              required
              className="w-full p-3 rounded-xl bg-[#5C3A57] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DC9DD0]"
              placeholder="Tell me a bit about your idea, timeline, and goals."
            />
          </div>

          {/* metadata helpful for you */}
          <input type="hidden" name="_subject" value="Portfolio Contact" />
          <input type="hidden" name="_gotcha" />

          <button
            type="submit"
            disabled={status.loading}
            className={`w-full bg-[#DC9DD0] text-[#493545] font-semibold px-6 py-4 rounded-xl transition shadow-md
              ${status.loading ? "opacity-60 cursor-not-allowed" : "hover:bg-[#b478a9]"}`}
          >
            {status.loading ? "Sending…" : "Send Message"}
          </button>

          {/* direct email fallback */}
          <p className="text-gray-400 text-sm text-center">
            Prefer email?{" "}
            <a href="mailto:melchormarlen@gmail.com" className="text-[#DC9DD0] hover:underline">
              melchormarlen@gmail.com
            </a>
          </p>
        </motion.form>
      </div>
    </section>
  );
}
