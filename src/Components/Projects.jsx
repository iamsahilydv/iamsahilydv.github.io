import React from "react";
import Project from "./Project";
import { motion, useScroll, useTransform } from "framer-motion";
import onestepImg from "../Images/onestep_ecommerce_3d.png";
import linuxImg from "../Images/linux_infrastructure_3d.png";
import saeImg from "../Images/sae_member_portal_3d.png";
import TiltCard from "./TiltCard";

const Projects = () => {
  const { scrollY } = useScroll();
  const yVal = useTransform(scrollY, [1000, 3500], [-100, 100]);

  const ProjectsBuild = [
    {
      id: 1,
      image: onestepImg,
      name: "OneStepIndia — MLM E-Commerce",
      duration: "Active Production",
      description:
        "Designed and built a complete MLM e-commerce platform with binary referral logic and automated commission distribution engine. Implemented secure authentication, wallet management, order processing, and administrative dashboards.",
      projectType: "Production Platform",
      skills: "Next.js, Node.js, PostgreSQL, Prisma, AWS S3, Cloudinary, Nginx, Ubuntu",
      githubLink: "https://github.com/iamsahilydv",
      deployLink: "https://github.com/iamsahilydv",
    },
    {
      id: 2,
      image: linuxImg,
      name: "Production Home Lab — DevOps",
      duration: "Ongoing",
      description:
        "Built and actively maintains a 24/7 bare-metal Ubuntu server hosting the OneStepIndia full-stack system. Configured Docker Compose service isolation, Nginx reverse proxy with subdomains, and automated GitHub Actions + Jenkins CI/CD pipelines.",
      projectType: "Infrastructure Lab",
      skills: "Ubuntu Server, Docker, Nginx, PostgreSQL, GitHub Actions, Jenkins, SSL, SSH Hardening",
      githubLink: "https://github.com/iamsahilydv",
      deployLink: "https://github.com/iamsahilydv",
    },
    {
      id: 3,
      image: saeImg,
      name: "SAEINDIA Member Portal",
      duration: "Internship Project",
      description:
        "Developed a comprehensive member portal serving 1,000+ active members for membership management, event registration, and administrative workflows. Built a reusable UI component library and integrated secure payment flows.",
      projectType: "Enterprise Portal",
      skills: "Next.js, TypeScript, Tailwind CSS, Node.js, Express, REST APIs, Payment Gateways",
      githubLink: "https://github.com/iamsahilydv",
      deployLink: "https://github.com/iamsahilydv",
    },
  ];

  return (
    <motion.div
      className="min-h-screen w-full flex flex-col justify-center items-center relative text-center max-w-6xl px-4 sm:px-10 mx-auto pt-24 pb-12 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        style={{ y: yVal }}
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none -z-10 text-[18vw] font-black text-white/[0.015] uppercase tracking-[1rem] sm:tracking-[2rem] leading-none"
      >
        projects
      </motion.div>

      <h3 className="absolute top-6 uppercase tracking-[16px] sm:tracking-[24px] text-gray-500 text-base sm:text-lg md:text-2xl animate-pulse w-full text-center">
        Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-16 px-2">
        {ProjectsBuild &&
          ProjectsBuild.map((el) => (
            <TiltCard
              key={el.id}
              className="rounded-2xl glass-card border border-white/5 shadow-xl p-0 flex flex-col h-full preserve-3d"
              maxTilt={8}
              scale={1.02}
            >
              <Project
                image={el.image}
                name={el.name}
                description={el.description}
                projectType={el.projectType}
                skills={el.skills}
                deploy={el.deployLink}
                github={el.githubLink}
              />
            </TiltCard>
          ))}
      </div>
    </motion.div>
  );
};

export default Projects;
