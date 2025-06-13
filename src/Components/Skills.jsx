import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiNodejsSmall,
  DiNpm,
  DiReact,
} from "react-icons/di";
import {
  SiChakraui,
  SiHandshake,
  SiRevealdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { GiAnticlockwiseRotation, GiBrain } from "react-icons/gi";
import { RiLightbulbFlashFill, RiTeamFill } from "react-icons/ri";
import { IoChatbubblesSharp } from "react-icons/io5";
import Skill from "./Skill";
import { FiClock } from "react-icons/fi";

const TechSkills = [
  {
    id: 1,
    name: "HTML",
    logo: <DiHtml5 />,
    leftDirection: false,
  },
  {
    id: 2,
    name: "CSS",
    logo: <DiCss3 />,
    leftDirection: false,
  },
  {
    id: 3,
    name: "JavaScript",
    logo: <DiJavascript />,
    leftDirection: false,
  },
  {
    id: 4,
    name: "NodeJS",
    logo: <DiNodejsSmall />,
    leftDirection: false,
  },
  {
    id: 5,
    name: "NPM",
    logo: <DiNpm />,
    leftDirection: true,
  },
  {
    id: 6,
    name: "React",
    logo: <DiReact />,
    leftDirection: true,
  },
  {
    id: 7,
    name: "ChakraUI",
    logo: <SiChakraui />,
    leftDirection: true,
  },
  {
    id: 8,
    name: "TailWindCss",
    logo: <SiTailwindcss />,
    leftDirection: true,
  },
  {
    id: 9,
    name: "TypeScript",
    logo: <SiTypescript />,
    leftDirection: false,
  },
  // {
  //   id: 10,
  //   name: "NodeJS",
  //   logo: <SiVisualstudiocode />,
  //   leftDirection: true,
  // },
  {
    id: 11,
    name: "RevealJS",
    logo: <SiRevealdotjs />,
    leftDirection: false,
  },
];

const SoftSkills = [
  {
    id: 1,
    name: "Communication",
    logo: <IoChatbubblesSharp />,
    leftDirection: true,
  },
  {
    id: 2,
    name: "Inovation",
    logo: <RiLightbulbFlashFill />,
    leftDirection: false,
  },
  {
    id: 3,
    name: "Interpersonal Skills",
    logo: <RiTeamFill />,
    leftDirection: true,
  },
  {
    id: 4,
    name: "Time Management",
    logo: <FiClock />,
    leftDirection: false,
  },
];
const CSS = [
  {
    id: 1,
    name: "Active Listening",
    logo: <FaAssistiveListeningSystems />,
    leftDirection: true,
  },
  {
    id: 2,
    name: "Problem Solver",
    logo: <GiBrain />,
    leftDirection: true,
  },
  {
    id: 3,
    name: "Empathy",
    logo: <SiHandshake />,
    leftDirection: true,
  },
  {
    id: 4,
    name: "Quick Resolution",
    logo: <GiAnticlockwiseRotation />,
    leftDirection: false,
  },
];

const Skills = () => {
  const [skill, setSkill] = useState(TechSkills);

  const tech = () => {
    setSkill(TechSkills);
  };
  const soft = () => {
    setSkill(SoftSkills);
  };

  const css = () => {
    setSkill(CSS)
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen  flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center items-center xl:space-y-0 mx-auto "
    >
      <h3 className="absolute top-24 uppercase text-gray-500 tracking-[24px] text-lg md:text-2xl animate-pulse ">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Click on Category to see Specific
      </h3>
      <div className=" absolute top-44 mt-5  h-[50px] w-[60%] flex gap-12 justify-around ">
        <button
          className="profileButton border border-gray-500"
          onClick={() => {
            tech();
          }}
        >
          Technical Skills
        </button>
        <button
          className="profileButton border border-gray-500"
          onClick={() => {
            soft();
          }}
        >
          Soft Skills
        </button>
        <button
          className="profileButton border border-gray-500"
          onClick={() => {
            css();
          }}
        >
          Customer Service Skills
        </button>
      </div>
      <div className=" h-fit absolute  grid grid-cols-2 gap-12 md:grid-cols-4 mt-8 top-[33%] md:top-[37%] p-5 ">
        {skill &&
          skill.map((el) => (
            <Skill
              key={el.id}
              logo={el.logo}
              leftDirection={el.leftDirection}
              name={el.name}
            />
          ))}
      </div>
    </motion.div>
  );
};

export default Skills;
