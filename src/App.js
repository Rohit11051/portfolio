import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import TerminalIntro from "./components/TerminalIntro";
import AboutMeFullPage from "./pages/AboutMeFullPage";

// --- MainContent ---
function MainContent({ darkMode, setDarkMode }) {
  const location = useLocation();
  const [introDone, setIntroDone] = useState(location.pathname !== "/");

  useEffect(() => {
  if (location.pathname === "/" && location.state?.scrollTo) {
    const section = document.getElementById(location.state.scrollTo);
    setTimeout(() => {
      section?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
}, [location]);

  return (
    <div className={darkMode ? "dark" : ""}>
      {!introDone ? (
        <TerminalIntro onFinish={() => setIntroDone(true)} />
      ) : (
        <>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Experience />
                  <Projects />
                  <Skills />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/about-me" element={<AboutMeFullPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

// --- App ---
function App() {
  // Step 1: Initialize from localStorage or default to LIGHT
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") return true;
    if (savedTheme === "light") return false;
    // Default to light
    localStorage.setItem("theme", "light");
    return false;
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  // Step 2: Sync theme class + localStorage
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Router>
      <MainContent darkMode={darkMode} setDarkMode={setDarkMode} />
    </Router>
  );
}

export default App;