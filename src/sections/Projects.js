import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "VaultSnatcher – Credential Extractor",
      description:
        "Python-based red team simulator that extracts and decrypts saved Chrome credentials using sqlite3 and pycryptodome. Designed for USB use with future AES logging and Flask exfiltration.",
      tech: ["Python", "sqlite3", "pycryptodome", "AES", "Flask (future)"],
      link: "https://github.com/Rohit11051",
    },
    {
      name: "Vehicle Recognition & Tracking",
      description:
        "Used YOLOv3 to classify car make, model, and motorcycles. Enhanced detection with video frames, color recognition, and future speed estimation.",
      tech: ["Python", "YOLOv3", "OpenCV", "Video Frame Editing"],
      link: "https://github.com/Rohit11051/vehicle-recognition-clean",
    },
    {
      name: "Soul Harmony (E-Commerce Site)",
      description:
        "Built a full-stack e-commerce platform for musical instruments using HTML, CSS, Bootstrap, JS, and MySQL. Users can browse and purchase instruments with responsive UI.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "MySQL"],
      link: "https://github.com/Rohit11051",
    },
    {
      name: "Spylog – Keylogger",
      description:
        "Security tool that captures keystrokes and relays them via Gmail for real-time monitoring. Used across 5 different environments for ethical security testing.",
      tech: ["Python", "smtplib", "Security Testing"],
      link: "https://github.com/Rohit11051",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-4 flex flex-col justify-center items-center text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 font-orbitron">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/10 dark:bg-[#1c1c1e]/50 backdrop-blur-md border border-pink-400/10 dark:border-purple-400/20 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 rounded-xl p-6 text-left"
            >
              <h3 className="text-2xl font-mono mb-2 font-orbitron text-pink-600 dark:text-purple-400">
                {project.name}
              </h3>
              <p className="mb-4 font-mono text-black dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-pink-500 dark:bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-pink-600 dark:text-purple-400 hover:underline font-orbitron"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;