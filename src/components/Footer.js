import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f1a] text-white py-6 mt-12">
      <div className="flex justify-center space-x-6 text-xl">
        <a href="https://x.com/RooHit_" target="_blank" rel="noreferrer" className="hover:text-pink-400 dark:hover:text-purple-400 transition">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/_.rohitbhosale/" target="_blank" rel="noreferrer" className="hover:text-pink-400 dark:hover:text-purple-400 transition">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/rohitbhosale11051/" target="_blank" rel="noreferrer" className="hover:text-pink-400 dark:hover:text-purple-400 transition">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Rohit11051" target="_blank" rel="noreferrer" className="hover:text-pink-400 dark:hover:text-purple-400 transition">
          <FaGithub />
        </a>
        <a href="https://wa.me/+919082531621" target="_blank" rel="noreferrer" className="hover:text-pink-400 dark:hover:text-purple-400 transition">
          <FaWhatsapp />
        </a>
      </div>
      <p className="mt-4 text-center text-sm text-gray-400">© 2025 Rohit Bhosale. All rights reserved.</p>
    </footer>
  );
};

export default Footer;