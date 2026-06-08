import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import profileImg from "../Images/profile-image.JPG";
import TiltCard from "./TiltCard";

const About = () => {
  const { scrollY } = useScroll();
  const yVal = useTransform(scrollY, [0, 2000], [-100, 100]);

  const resume = () => {
    window.open(
      "https://drive.google.com/file/d/1t-KDSb4JXhq0a06F5Q5xUxp1Spdtd2NW/view?usp=sharing"
    );
  };
  
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="min-h-screen w-full flex flex-col justify-center items-center relative text-center lg:text-left max-w-6xl px-6 sm:px-10 mx-auto pt-24 pb-12 overflow-hidden"
    >
      <motion.div
        style={{ y: yVal }}
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none -z-10 text-[18vw] font-black text-white/[0.015] uppercase tracking-[1rem] sm:tracking-[2rem] leading-none"
      >
        about
      </motion.div>

      <h3 className="absolute top-6 uppercase tracking-[16px] sm:tracking-[24px] text-gray-500 text-base sm:text-lg md:text-2xl animate-pulse w-full text-center">
        about
      </h3>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 w-full mt-10 md:mt-16">
        {/* Tilt Wrapper for Profile Image */}
        <TiltCard 
          className="flex-shrink-0 w-48 h-56 sm:w-64 sm:h-80 md:w-72 md:h-[400px] xl:w-[350px] xl:h-[450px] rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden preserve-3d"
          maxTilt={12}
          scale={1.03}
        >
          <motion.img
            initial={{
              scale: 1.1,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
            src={profileImg}
            className="w-full h-full object-cover translate-z-10"
            alt="Sahil's profile picture"
          />
        </TiltCard>

        {/* Text Details Section */}
        <div className="flex-1 space-y-6 sm:space-y-8 max-w-xl lg:max-w-2xl px-2 sm:px-6">
          <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
            Here is Something about{" "}
            <span className="underline decoration-[#F7AB0A] decoration-4 underline-offset-4">Sahil</span>
          </h4>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
            Enthusiastic web developer with a strong foundation in front-end and
            back-end technologies. Passionate about crafting exceptional digital
            experiences through clean, efficient, and scalable code. Experienced
            in using a diverse tech stack, including HTML, CSS, JavaScript, and
            various frameworks. Adept at translating design concepts into
            responsive and dynamic web applications. Committed to staying updated
            on emerging trends and technologies in the ever-evolving web
            development landscape. Excited to collaborate on innovative projects
            and contribute to the world of web development.
          </p>
          <div className="pt-2">
            <button
              onClick={resume}
              className="profileButton px-8 py-3 border border-gray-600 hover:border-[#F7AB0A] font-semibold text-xs sm:text-sm tracking-widest text-gray-300 transition-all rounded-full"
            >
              View Resume
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
