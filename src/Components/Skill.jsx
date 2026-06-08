import React from "react";
import { motion } from "framer-motion";

const Skill = ({ logo, name }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6, scale: 1.05 }}
      className="flex flex-col items-center justify-center p-4 rounded-2xl glass-card w-28 h-28 sm:w-32 sm:h-32 border border-white/5 hover:border-[#F7AB0A]/40 transition-all cursor-pointer group shadow-lg"
    >
      <div className="text-3xl sm:text-4xl text-gray-400 group-hover:text-[#F7AB0A] transition-colors duration-300">
        {logo}
      </div>
      <p className="text-[10px] sm:text-xs text-center text-gray-400 group-hover:text-white transition-colors duration-300 tracking-wide mt-2 font-semibold">
        {name}
      </p>
    </motion.div>
  );
};

export default Skill;
