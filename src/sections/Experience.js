import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { MdDescription } from "react-icons/md";

const experienceData = {
  education: [
    { title: "Kindergarten", year: "2004, Prolly completed with an unconscious mind" },
    { title: "Victoria High School", year: "2018" },
    { title: "R.D. National College", year: "2023" },
    { title: "Texas Tech University", year: "2024" },
  ],
  work: [
    { title: "Target Publications – Intern", year: "2021" },
    { title: "JMJ Global Consulting – Executive", year: "2024" },
  ],
};

const VerticalTimeline = ({ data, icon: Icon, title }) => {
  return (
    <div className="mb-20 w-full flex flex-col items-center">
      <h3 className="text-2xl font-mono mb-8 text-pink-600 dark:text-purple-400 font-orbitron">
        <Icon className="inline mr-2" /> {title}
      </h3>

      <div className="relative border-l-4 border-pink-500 dark:border-purple-500 h-full">
        {data.map((item, index) => (
          <div key={index} className="ml-6 mb-10 text-left">
            <div className="w-4 h-4 rounded-full bg-pink-500 dark:bg-purple-500 absolute -left-2 mt-1.5"></div>
            <h4 className="text-lg font-semibold font-orbitron text-black dark:text-white">{item.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-orbitron">{item.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="experience"
      className="py-24 px-4 max-w-7xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold mb-16 font-orbitron">Experience</h2>

      <div className="font-mono w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        <VerticalTimeline
          title="Education"
          icon={FaGraduationCap}
          data={experienceData.education}
        />

        <VerticalTimeline
          title="Work & Internships"
          icon={FaBriefcase}
          data={experienceData.work}
        />
      </div>
    </section>
  );
};

export default Experience;
