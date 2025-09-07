export default function Contact() {
  return (
    <section id="contact" className="section-container text-center py-32">
      {/* Title */}
      <h2 className="text-4xl font-semibold mb-4">
        Get in <span className="text-[#DC9DD0]">Touch</span>
      </h2>
      <p className="text-gray-300 mb-12 max-w-xl mx-auto text-lg">
        I’d love to hear from you! Whether you have a question, want to collaborate, 
        or just say hello — drop me a message below.
      </p>

      {/* Form */}
      <form
        action="https://formspree.io/f/YOUR_FORM_ID" // replace with your Formspree/EmailJS setup
        method="POST"
        className="max-w-2xl mx-auto space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-4 rounded-xl bg-[#5C3A57] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DC9DD0] shadow-sm"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-xl bg-[#5C3A57] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DC9DD0] shadow-sm"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          className="w-full p-4 rounded-xl bg-[#5C3A57] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DC9DD0] shadow-sm"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#DC9DD0] text-[#493545] font-semibold px-6 py-4 rounded-xl hover:bg-[#b478a9] transition shadow-md"
        >
          Send Message
        </button>
      </form>

      {/* Direct Email */}
      <p className="text-gray-400 mt-10">
        Or email me directly at{" "}
        <a href="mailto:melchormarlen@gmail.com" className="text-[#DC9DD0] hover:underline">
          melchormarlen@gmail.com
        </a>
      </p>
    </section>
  );
}
