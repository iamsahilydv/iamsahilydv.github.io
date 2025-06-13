import React, { useState } from "react";
import { motion } from "framer-motion";
import Resume from "../Files/Sahil-Resume.pdf";
import { RxCross2 } from "react-icons/rx";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const [hem, setHem] = useState(false);

  const resumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1t-KDSb4JXhq0a06F5Q5xUxp1Spdtd2NW/view?usp=sharing"
    );
  };

  return (
    <header
      id="head"
      className="flex p-5 items-start justify-between sticky top-0 max-w-7xl mx-auto z-30 blur-0"
    >
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="md:flex flex-row items-center none "
      >
        {/* Navigation links */}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-400 cursor-pointer pt-3 z-20"
      >
        <button className="profileButton hidden mt-1.5 md:inline-flex">
          <a
            href={Resume}
            onClick={() => {
              resumeDownload();
            }}
            className="uppercase "
            download={"Sahil's Portfolio"}
          >
            Resume
          </a>
        </button>
      </motion.div>

      {hem === true ? (
        <motion.div
          initial={{
            x: "40%",
            y: "-40%",
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.1,
          }}
          id="menu"
          className=" transition-transform h-screen absolute top-0 bottom-0 left-0 right-0 bg-black  "
        >
          <div className="absolute m-auto top-5 right-16 text-2xl">
            <RxCross2
              onClick={() => {
                setHem(false);
              }}
            />{" "}
          </div>
          <div className="pt-[200px] sm:p-[200px] z-100">
            <ul className=" flex flex-col gap-10">{/* Menu items */}</ul>
          </div>
        </motion.div>
      ) : (
        <div className="flex justify-between md:hidden w-full pr-10">
          <div className="text-xl  animate-pulse text-gray-400 ">
            Sahil's Portfolio
          </div>
          <div className="text-2xl">
            <HiMenu
              onClick={() => {
                setHem(true);
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
