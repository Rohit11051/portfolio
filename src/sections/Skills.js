import React, { useState } from "react";
import {
  FaPython,
  FaJava,
  FaGit,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaTerminal,
} from "react-icons/fa";
import {
  SiKalilinux,
  SiWireshark,
  SiBurpsuite,
  SiMetasploit,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFlask,
  SiDocker,
  SiFigma,
  SiCplusplus,
  SiCanva,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { SiGoogle, SiEc } from "react-icons/si"; // EC-Council substitute
import { FaUniversity } from "react-icons/fa"; // Forage fallback
import { GrMysql } from "react-icons/gr";
import { TbSql, TbRegex } from "react-icons/tb";
import { PiBugBeetleLight } from "react-icons/pi";
import { CgSearch } from "react-icons/cg";
import { MdOutlineRadar, MdOutlineWifi, MdLockOpen } from "react-icons/md";
import { AiOutlineLayout, AiOutlineEdit, AiOutlineRobot } from "react-icons/ai";
import { BsPaintBucket } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";
import { FiSend } from "react-icons/fi";
import { ImDatabase } from "react-icons/im";

const skillsData = {
  Cybersecurity: [
    { name: "Python", level: 90, icon: FaPython },
    { name: "Kali Linux", level: 88, icon: SiKalilinux },
    { name: "Metasploit", level: 80, icon: SiMetasploit },
    { name: "Wireshark", level: 85, icon: SiWireshark },
    { name: "Burp Suite", level: 78, icon: SiBurpsuite },
    { name: "Nmap", level: 85, icon: MdOutlineRadar },
    { name: "Aircrack-ng", level: 75, icon: MdOutlineWifi },
    { name: "Hashcat", level: 70, icon: MdLockOpen },
    { name: "SQLMap", level: 80, icon: TbSql },
    { name: "OSINT Techniques", level: 80, icon: CgSearch },
  ],
  "Web Development": [
    { name: "HTML5", level: 95, icon: FaHtml5 },
    { name: "CSS3", level: 90, icon: FaCss3Alt },
    { name: "JavaScript", level: 88, icon: FaJs },
    { name: "React.js", level: 90, icon: FaReact },
    { name: "Tailwind CSS", level: 85, icon: SiTailwindcss },
    { name: "Next.js", level: 75, icon: FaJs },
    { name: "Node.js", level: 80, icon: FaNodeJs },
    { name: "Express.js", level: 78, icon: SiExpress },
    { name: "MongoDB", level: 70, icon: SiMongodb },
    { name: "MySQL", level: 75, icon: GrMysql },
    { name: "Flask (Basics)", level: 60, icon: SiFlask },
  ],
  Programming: [
    { name: "Python", level: 90, icon: FaPython },
    { name: "C++", level: 80, icon: SiCplusplus },
    { name: "Java", level: 75, icon: FaJava },
    { name: "JavaScript", level: 88, icon: FaJs },
    { name: "Shell Scripting", level: 70, icon: FaTerminal },
    { name: "SQL", level: 78, icon: ImDatabase },
    { name: "Git", level: 85, icon: FaGit },
    { name: "Regex", level: 65, icon: TbRegex },
  ],
  Design: [
    { name: "Figma", level: 75, icon: SiFigma },
    { name: "Canva", level: 90, icon: SiCanva },
    { name: "Adobe Express", level: 70, icon: BsPaintBucket },
    { name: "UI/UX Principles", level: 80, icon: AiOutlineLayout },
    { name: "Prototyping", level: 70, icon: AiOutlineEdit },
  ],
  Tools: [
    { name: "VS Code", level: 95, icon: VscVscode },
    { name: "GitHub", level: 90, icon: SiGithub },
    { name: "Postman", level: 80, icon: FiSend },
    { name: "Nmap", level: 85, icon: MdOutlineRadar },
    { name: "Burp Suite", level: 78, icon: SiBurpsuite },
    { name: "Terminal / CLI", level: 85, icon: FaTerminal },
    { name: "ChatGPT / AI Tools", level: 90, icon: AiOutlineRobot },
    { name: "Docker (Basics)", level: 65, icon: SiDocker },
  ],
    Certificates: [
    {
      name: "Certified Ethical Hacker v12 - EC-Council",
      icon: FaUniversity,
      file: "/certificates/ceh-ec-council.pdf",
    },
    {
      name: "Certified Ethical Hacker (CEH) - RSTForum",
      icon: FaUniversity,
      file: "/certificates/ceh-rstforum.pdf",
    },
    {
      name: "Security Analyst - Forage",
      icon: FaUniversity,
      file: "/certificates/forage-security-analyst.pdf",
    },
    {
      name: "Google CyberSecurity Professional - Google",
      icon: SiGoogle,
      file: "/certificates/google-cybersecurity.pdf",
    },
  ],
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Cybersecurity");

  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12 font-orbitron">Skills</h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-orbitron border transition duration-300 hover:bg-pink-500 hover:text-white dark:hover:bg-purple-500 ${
              selectedCategory === category
                ? "bg-pink-500 text-white dark:bg-purple-500"
                : "border-pink-500 dark:border-purple-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData[selectedCategory].map((skill, index) => (
          <div
            key={index}
            className="relative rounded-xl shadow-[0_0_12px_rgba(236,72,153,0.3)] dark:shadow-[0_0_12px_rgba(168,85,247,0.25)] transition-all duration-300"
          >
            <div className="bg-white dark:bg-[#0d0d0d] rounded-xl p-6 text-left">
              <div className="flex items-center mb-3">
                <span className="mr-4">
                  {selectedCategory === "Certificates" ? (
                    <a
                      href={skill.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 dark:text-purple-400 text-3xl"
                    >
                      <skill.icon />
                    </a>
                  ) : (
                    <skill.icon className="text-3xl text-pink-500 dark:text-purple-400" />
                  )}
                </span>
                {selectedCategory === "Certificates" ? (
                  <a
                    href={skill.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-black dark:text-white font-orbitron hover:underline"
                  >
                    {skill.name}
                  </a>
                ) : (
                  <span className="text-xl font-semibold text-black dark:text-white font-orbitron">
                    {skill.name}
                  </span>
                )}
              </div>

              {selectedCategory !== "Certificates" && (
                <>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-pink-500 dark:bg-purple-500 h-3 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_2px_rgba(236,72,153,0.6)] dark:shadow-[0_0_10px_2px_rgba(168,85,247,0.5)]"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-gray-600 dark:text-gray-400 mt-1 font-orbitron">
                    {skill.level}%
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;