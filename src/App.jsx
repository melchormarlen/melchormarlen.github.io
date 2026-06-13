// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Projects from "./components/projects.jsx";
import Footer from "./components/footer.jsx";
import ProjectCategory from "./pages/projectcategory.jsx";
import CaseStudy from "./pages/casestudy.jsx";
import Contact from "./components/contact.jsx";
import ChatWidget from "./components/chatwidget.jsx";
import BackToTop from "./components/backtotop.jsx";
import ScrollToTop from "./components/scrolltotop.jsx";

function AppShell() {
  const location = useLocation();
  const hideNavbar = /^\/projects\/.+/.test(location.pathname);

  return (
    <div className="bg-[var(--bg-page)] min-h-screen text-[var(--text-primary)] font-sans">
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/projects/:category" element={<ProjectCategory />} />
        <Route path="/projects/:category/:id" element={<CaseStudy />} />
      </Routes>

      {/* Floating UI elements */}
      <ChatWidget />
      <BackToTop className="!bottom-20" />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}
