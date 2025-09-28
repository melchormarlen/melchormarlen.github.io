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
import Marketing from "./pages/marketing.jsx";

function AppShell() {
  const location = useLocation();

  // Hide navbar on project pages and the Marketing page
  const hideNavbar =
    /^\/projects\/.+/.test(location.pathname) || location.pathname === "/marketing";

  return (
    <div className="bg-[#493545] min-h-screen text-white font-sans">
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
        <Route path="/marketing" element={<Marketing />} />
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
