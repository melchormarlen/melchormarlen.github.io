export default function About() {
  return (
    <section
      id="about"
      className="relative section-container grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-20 pt-32"
    >
      {/* Left Side - Image */}
      <div className="flex justify-start">
        <img
          src="/me.png"
          alt="Marlen Melchor"
          className="w-[500px] h-auto object-contain"
        />
      </div>

      {/* Right Side - Text */}
      <div className="max-w-lg">
        <h2 className="text-3xl font-bold mb-6">
          Hi! I’m a CS major with a strong passion for UI/UX Design and Full-Stack Development
        </h2>

        <p className="text-lg leading-[1.563rem] font-normal text-gray-200 mb-6">
          <span className="text-[#DC9DD0]">
            I’ve gained hands-on experience creating user-centered designs and
            building them with clean, responsive code. Through my internship as
            a Software Engineer at Eli Lilly, I developed a full-stack experience
            by working with technologies like Django, PostgreSQL, and React to build
            internal web applications. With a background in graphic design as a Marketing
            Director, I’ve designed event promotions and boosted engagement through visual
            storytelling. I enjoy blending creativity with functionality to craft engaging,
            impactful digital experiences.
          </span>
        </p>

        <div className="flex gap-6">
          <a
            href="#projects"
            className="bg-[#DC9DD0] px-6 py-2 rounded-full hover:bg-[#b478a9] transition"
          >
            Projects
          </a>
          <a
            href="/ResumeMelchor2025.pdf"
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
            className="px-6 py-2 rounded-full border border-[#DC9DD0] text-[#DC9DD0] hover:bg-[#693365] hover:text-white transition"
          >
            Resume
          </a>
        </div>
      </div>


    </section>
  );
}
