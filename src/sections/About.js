import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
    >
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src="/IMG_3334.jpg" // ✅ directly from public folder
          alt="Rohit Bhosale"
          className="w-64 h-85 rounded-2xl border-4 border-pink-500 dark:border-purple-500 shadow-lg hover:scale-105 transform transition duration-300"
        />
      </div>

      {/* Text Content */}
      <div className="text-left flex-1">
        <h2 className="text-4xl font-bold mb-6 font-orbitron">About Me</h2>
        <p className="text-s leading-relaxed text-black-800 dark:text-black-300 font-mono">
         <p style={{ marginBottom: "1rem" }}>I’m a Developer and Cybersecurity Enthusiast based in Texas.</p>
          <p style={{ marginBottom: "1rem" }}>Since stepping into the world of tech, I’ve been building secure, scalable web applications and diving deep into ethical hacking — sleek web apps by day and breaking systems by night.</p>
          <p style={{ marginBottom: "1rem" }}>My journey hasn’t been one-dimensional. I’ve also interned in a non-tech domain, working on real-world business strategies, outreach systems, and digital automation. Instead of seeing it as a mismatch, I treat it as an advantage — I bring a unique mix of tech skills and real-world perspective to the table.</p>
          <p>Whether I’m crafting intuitive UIs or analyzing vulnerabilities, I bring precision and creativity to every project. Let’s team up and build something powerful — secure by design, stunning by default.</p></p>
        <div className="mt-6 flex items-center gap-4">
          {/* Download Resume */}
          <a
            href="/CybrRohit.pdf" // ✅ also from public folder
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 dark:bg-purple-600 text-white px-6 py-2 rounded-full font-orbitron hover:bg-pink-700 dark:hover:bg-purple-700 transition"
          >
            Download Resume
          </a>

          {/* Read More */}
          <Link
            to="/about-me"
            className="text-pink-500 dark:text-purple-400 hover:underline font-medium font-orbitron"
          >
            Read More →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;