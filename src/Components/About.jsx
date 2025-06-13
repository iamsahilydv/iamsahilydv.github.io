import { motion } from "framer-motion";
import React from "react";
import profileImg from "../Images/profile-image.JPG";
// import Resume from "../Files/Sahil-Resume.pdf";

const About = () => {
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
      className="flex min-h-screen flex-col gap-32 relative h-full text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[24px] text-gray-500 text-lg md:text-2xl animate-pulse">
        about
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
        src={profileImg}
        className=" -md:mb-20 flex-shrink-0 w-56 h-64  object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] mt-[150px] md:mt-0"
      />
      <div className=" space-y-12 md:space-y-16  px-0 md:px-10 mt-[-200px] md:mt-4 ">
        <h4 className="text-xl lg:text-4xl font-semibold mt-28 ">
          Here is Something about{" "}
          <span className="underline decoration-[#F7AB0A]">Sahil</span>
        </h4>
        <p className="h-fit lg:text-lg  text-md">
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
        <button
          onClick={() => {
            resume();
          }}
          className="profileButton border border-gray-500"
        >
          Resume
        </button>
      </div>
    </motion.div>
  );
};

export default About;
