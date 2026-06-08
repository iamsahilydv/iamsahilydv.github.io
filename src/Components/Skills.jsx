import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
  SiDocker,
  SiNginx,
  SiPostgresql,
  SiAmazonaws,
  SiOpenai,
  SiGithub,
  SiLinux,
  SiPython,
  SiNextdotjs,
} from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import { IoChatbubblesSharp, IoPeopleSharp } from "react-icons/io5";
import Skill from "./Skill";
import { FiClock } from "react-icons/fi";

const TechSkills = [
  { id: 1, name: "Next.js", logo: <SiNextdotjs /> },
  { id: 2, name: "React", logo: <DiReact /> },
  { id: 3, name: "TypeScript", logo: <SiTypescript /> },
  { id: 4, name: "NodeJS", logo: <DiNodejsSmall /> },
  { id: 5, name: "Tailwind CSS", logo: <SiTailwindcss /> },
  { id: 6, name: "PostgreSQL", logo: <SiPostgresql /> },
  { id: 7, name: "Prisma ORM", logo: <SiPrisma /> },
  { id: 8, name: "Docker", logo: <SiDocker /> },
  { id: 9, name: "AWS Services", logo: <SiAmazonaws /> },
  { id: 10, name: "Nginx", logo: <SiNginx /> },
];

const AISkills = [
  { id: 1, name: "Gemini / OpenAI API", logo: <SiOpenai /> },
  { id: 2, name: "AI & LangChain", logo: <GiBrain /> },
  { id: 3, name: "Python", logo: <SiPython /> },
  { id: 4, name: "Git & GitHub", logo: <SiGithub /> },
  { id: 5, name: "Linux Admin", logo: <SiLinux /> },
];

const SoftSkills = [
  { id: 1, name: "Problem Solving", logo: <GiBrain /> },
  { id: 2, name: "Technical Communication", logo: <IoChatbubblesSharp /> },
  { id: 3, name: "Team Collaboration", logo: <IoPeopleSharp /> },
  { id: 4, name: "Time Management", logo: <FiClock /> },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("tech");
  const [skill, setSkill] = useState(TechSkills);
  const { scrollY } = useScroll();
  const yVal = useTransform(scrollY, [500, 2500], [-100, 100]);

  const selectCategory = (category) => {
    setActiveCategory(category);
    if (category === "tech") setSkill(TechSkills);
    if (category === "ai") setSkill(AISkills);
    if (category === "soft") setSkill(SoftSkills);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen w-full flex flex-col justify-center items-center relative text-center max-w-6xl px-4 sm:px-10 mx-auto pt-24 pb-12 overflow-hidden"
    >
      <motion.div
        style={{ y: yVal }}
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none -z-10 text-[18vw] font-black text-white/[0.015] uppercase tracking-[1rem] sm:tracking-[2rem] leading-none"
      >
        skills
      </motion.div>

      <h3 className="absolute top-6 uppercase tracking-[16px] sm:tracking-[24px] text-gray-500 text-base sm:text-lg md:text-2xl animate-pulse w-full text-center">
        Skills
      </h3>
      
      <h4 className="text-gray-400 text-xs sm:text-sm tracking-[3px] uppercase mt-12 mb-8 font-medium">
        Select Category
      </h4>

      {/* Responsive Category Selector */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full px-2 sm:px-10">
        <button
          className={`profileButton w-full sm:w-auto px-6 py-2.5 rounded-full uppercase text-xs tracking-widest font-semibold transition-all ${
            activeCategory === "tech" 
              ? "border-[#F7AB0A] text-[#F7AB0A] shadow-[0_0_15px_rgba(247,171,10,0.25)]" 
              : "border-gray-600 text-gray-400"
          }`}
          onClick={() => selectCategory("tech")}
        >
          Core Tech Stack
        </button>
        <button
          className={`profileButton w-full sm:w-auto px-6 py-2.5 rounded-full uppercase text-xs tracking-widest font-semibold transition-all ${
            activeCategory === "ai" 
              ? "border-[#F7AB0A] text-[#F7AB0A] shadow-[0_0_15px_rgba(247,171,10,0.25)]" 
              : "border-gray-600 text-gray-400"
          }`}
          onClick={() => selectCategory("ai")}
        >
          AI & Dev Tools
        </button>
        <button
          className={`profileButton w-full sm:w-auto px-6 py-2.5 rounded-full uppercase text-xs tracking-widest font-semibold transition-all ${
            activeCategory === "soft" 
              ? "border-[#F7AB0A] text-[#F7AB0A] shadow-[0_0_15px_rgba(247,171,10,0.25)]" 
              : "border-gray-600 text-gray-400"
          }`}
          onClick={() => selectCategory("soft")}
        >
          Professional Skills
        </button>
      </div>

      {/* Grid wrapper */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 max-w-4xl mx-auto w-full px-2 mt-4">
        {skill &&
          skill.map((el) => (
            <Skill
              key={el.id}
              logo={el.logo}
              name={el.name}
            />
          ))}
      </div>
    </motion.div>
  );
};

export default Skills;
