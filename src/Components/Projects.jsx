import React from "react";
import Project from "./Project";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import project1img from "../Images/Freshwork-image.png";
import project2img from "../Images/Proflow.png";
import project3img from "../Images/SugarCosmatics.png";

const Projects = () => {
  const ProjectsBuild = [
    {
      id: 1,
      img1: project1img,
      img2: "",
      url: "",
      name: "Fresh Work",
      duration: "3 Days",
      description:
        "Freshworks provides cloud-based software products to help businesses manage customer engagement and support operations.",
      projectType: "Group Onboarding Presentation Project by 2 Members",
      skills: "HTML, CSS, JS, RevealJS",
      githubLink: "https://github.com/iamsahilydv/tse_unit-2_project",
      deployLink: "https://freshwork.netlify.app",
    },
    {
      id: 2,
      img1: project2img,
      img2: "",
      url: "",
      name: "Proflow (Clone of Wrike.com)",
      duration: " 4 Days",
      description:
        "Wrike.com is a cloud-based project management and collaboration software.",
      projectType: "Group Project by 4 members",
      skills: "React, ChakrUI, Redux,",
      githubLink: "https://github.com/iamsahilydv/Wrike-Clone",
      deployLink: "https://proflow.netlify.app",
    },
    {
      id: 3,
      img1: project3img,
      img2: "",
      url: "",
      name: "Clone of Sugar Cosmatics",
      duration: "4 Days",
      description:
        "Sugar Cosmetics Clone, where you can shop for beauty products for women, like eyeliners, brushes etc.",
      projectType: "Group Project by 4 members",
      skills: "HTML, CSS, JS",
      githubLink: "https://github.com/iamsahilydv/SugarCosmatics",
      deployLink: "https://sugarcosmaticsmasai.netlify.app",
    },
    // {
    //   id: 4,
    //   img1: "",
    //   img2: "",
    //   url: "",
    //   name: "",
    //   duration: "4 Days",
    //   projectType: "Group Project",
    //   skills: [],
    // },
  ];
  return (
    <motion.div
      className="h-screen mt-28 lg:mt-0  mx-auto flex flex-col relative text-center justify-evenly md:text-left items-center max-w-7xl px-10 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* <img src={project1Img} alt="" /> */}
      <h3 className="absolute top-16 uppercase tracking-[24px] text-lg md:text-2xl text-gray-500 animate-pulse m-auto ">
        Projects
      </h3>
      {/* <div className="text-md md:text-4xl font-extrabold tracking-widest md:tracking-[16px]">
        To Be Update Soon...
      </div> */}
      {/* <div className="flex gap-10 pt-10 pb-10 overflow-x-scroll border border-green-500 h-[60vh] w-[60vw]   ">
        <div className="border border-red-400 w-14 h-[100%] justify-evenly ">
          <div className=" arrow text-6xl border border-cyan-400 h-[100%] text-center pt-[20vh] ">
            <FiArrowLeft className="border border-red-900 align-middle   w-[100%] " />
          </div>
        </div>
        {ProjectsBuild && ProjectsBuild.map((el) => <Project />)}
        <div className="border border-red-400 w-14 h-[100%] justify-evenly ">
          <div className=" arrow text-6xl border border-cyan-400 h-[100%] text-center pt-[20vh] ">
            <FiArrowRight className="border border-red-900 align-middle   w-[100%] " />
          </div>
        </div>
      </div> */}
      {/* <div className="ProjectsMainDiv w-[80%] h-[70vh] mt-[15vh] flex gap-10 ">
        <Project />
        <Project />
        <Project />
      </div> */}
      <div className=" h-[85%] w-full md:w-[95%]  flex flex-col lg:flex-row gap-10 md:gap-5 mt-40 lg:mt-32">
        {ProjectsBuild &&
          ProjectsBuild.map((el) => (
            <>
              {/* {console.log(el)} */}
              <Project
                key={el.id}
                image={el.img1}
                name={el.name}
                description={el.description}
                end={`${el.projectType} created in ${el.duration} by using ${el.skills}`}
                deploy={el.deployLink}
                github={el.githubLink}
              />
            </>
          ))}
      </div>
    </motion.div>
  );
};

export default Projects;
