import React, { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaAward,
  FaLaptopCode,
  FaTools,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const navItems = [
  { href: "#home", id: "home", icon: <FaHome size={20} title="Home" /> },
  { href: "#about", id: "about", icon: <FaUser size={20} title="About" /> },
  { href: "#experience", id: "experience", icon: <FaAward size={20} title="Experience" /> },
  { href: "#projects", id: "projects", icon: <FaLaptopCode size={20} title="Projects" /> },
  { href: "#skills", id: "skills", icon: <FaTools size={20} title="Skills" /> },
  { href: "#contact", id: "contact", icon: <FaEnvelope size={20} title="Contact" /> },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      // Navigate to homepage and scroll after load
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 dark:bg-black/30 text-black dark:text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-pink-500 dark:text-purple-500 font-bold text-lg"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="w-8 h-8 rounded-full drop-shadow"
          />
          Rohit Bhosale
        </Link>
        <ul className="flex space-x-6 items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavClick(item.id)}
                className="hover:text-pink-500 dark:hover:text-purple-400 transition duration-300"
              >
                {item.icon}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-pink-500 hover:text-pink-400 dark:text-purple-400 dark:hover:text-purple-300 transition duration-300"
              title="Toggle Dark Mode"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;