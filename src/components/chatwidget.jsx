import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function ChatWidget() {
  const { pathname } = useLocation();
  const isAllowed = pathname === "/" || pathname === "/about"; // show only Home + About

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showNotif, setShowNotif] = useState(false);

  const popupRef = useRef(null);
  const buttonRef = useRef(null);

  // Reset state on disallowed routes (hooks still run every render)
  useEffect(() => {
    if (!isAllowed) {
      setOpen(false);
      setShowNotif(false);
      setVisible(false);
    }
  }, [isAllowed]);

  // Show after #about intersects (guarded by isAllowed)
  useEffect(() => {
    if (!isAllowed) return;

    const aboutSection = document.getElementById("about");
    if (!aboutSection) return;

    let timer;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !visible) {
            setVisible(true);
            timer = setTimeout(() => {
              setShowNotif(true);
              const audio = new Audio("/notification.mp3");
              audio.play().catch(() => {
                console.log("Sound blocked until user interacts.");
              });
            }, 2000);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(aboutSection);
    return () => {
      observer.unobserve(aboutSection);
      if (timer) clearTimeout(timer);
    };
  }, [isAllowed, visible]);

  // Close popup on outside click or Esc
  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    function handleEscape(event) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  // ✅ Render decision happens AFTER all hooks have been called
  return isAllowed ? (
    <>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Chat Button */}
          <motion.div
            ref={buttonRef}
            onClick={() => {
              setOpen((prev) => !prev);
              setShowNotif(false);
            }}
            className="relative bg-[#693365] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-[#592c55] transition"
            animate={showNotif && !open ? { scale: [1, 1.2, 0.9, 1] } : { scale: 1 }}
            transition={
              showNotif && !open
                ? { duration: 0.6, repeat: 2, repeatType: "loop" }
                : { duration: 0 }
            }
          >
            <MessageCircle className="h-5 w-5 text-white" />
            {showNotif && !open && (
              <span className="absolute top-1.5 right-1.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
            )}
          </motion.div>

          {/* Chatbox */}
          <AnimatePresence>
            {open && (
              <motion.div
                ref={popupRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed bottom-20 right-6 w-72 bg-white text-black rounded-xl shadow-xl p-4 z-[9999]"
              >
                <h4 className="font-semibold text-[#493545] mb-2">👋 Hi there!</h4>
                <p className="text-sm text-gray-700">
                  Thanks for stopping by my portfolio. I’m{" "}
                  <span className="font-medium text-[#DC9DD0]">Marlen</span> — a CS student
                  passionate about UI/UX and Full-Stack Development.
                </p>
                <p className="mt-2 text-sm">
                  ✨ Feel free to check out my projects or scroll down to my contact info!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  ) : null;
}
