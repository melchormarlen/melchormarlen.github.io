import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <div className="bg-[#493545] min-h-screen text-white font-sans">
        <Navbar />
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
        <BackToTop className="!bottom-20" /> {/* push it up a bit */}
        <ScrollToTop /> {/* scroll to top on route change */}
      </div>
    </Router>
  );
}

export default App;
