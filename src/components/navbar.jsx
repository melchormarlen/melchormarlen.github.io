import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="section-container flex justify-between items-center py-4 pt-8 bg-[#493545] relative">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src="/mylogo2.png" alt="Marz Logo" className="h-12 w-auto" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-20 text-base font-medium">
        <Link to="/" className="hover:text-[#DC9DD0]">Home</Link>
        <a href="#about" className="hover:text-[#DC9DD0]">About</a>
        <a href="#projects" className="hover:text-[#DC9DD0]">Projects</a>
        <a href="#contact" className="hover:text-[#DC9DD0]">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center space-y-1 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blurred overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-40 sm:w-48 md:w-56 bg-[#493545] z-50 shadow-lg flex flex-col items-start px-6 py-12 space-y-8"
            >
              <button
                className="text-white text-2xl self-end mb-6"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
              <Link to="/" className="hover:text-[#DC9DD0]" onClick={() => setIsOpen(false)}>Home</Link>
              <a href="#about" className="hover:text-[#DC9DD0]" onClick={() => setIsOpen(false)}>About</a>
              <a href="#projects" className="hover:text-[#DC9DD0]" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#contact" className="hover:text-[#DC9DD0]" onClick={() => setIsOpen(false)}>Contact</a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
