import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react"; // ✅ simple arrow

export default function BackToTop({ className = "" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className={`fixed bottom-20 right-6 z-40 bg-[#693365] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-[#592c55] transition ${className}`}
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5 text-white" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
