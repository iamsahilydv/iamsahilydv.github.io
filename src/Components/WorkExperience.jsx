import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const WorkExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly items-center mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[24px] text-gray-500 text-lg md:text-2xl animate-pulse ">
        Experience
      </h3>
      <div className="text-md md:text-4xl font-extrabold tracking-widest md:tracking-[16px]">
        Not Updated Yet
      </div>
      {/* <div className="flex flex-row">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div> */}
    </motion.div>
  );
};

export default WorkExperience;
