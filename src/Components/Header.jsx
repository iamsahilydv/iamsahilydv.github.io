import React, { useState } from "react";
import { motion } from "framer-motion";
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
      className="flex p-5 items-center justify-between sticky top-0 max-w-7xl mx-auto z-40 blur-0 w-full"
    >
      {/* Desktop Logo / Portfolio Title */}
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
        className="hidden md:block text-xl font-semibold tracking-wider text-gray-200"
      >
        <a href="#profile" className="hover:text-[#F7AB0A] transition-colors">
          Sahil's Portfolio
        </a>
      </motion.div>

      {/* Desktop Navigation links */}
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="hidden md:flex flex-row items-center gap-8 text-gray-400"
      >
        <a href="#profile" className="hover:text-[#F7AB0A] hover:scale-105 transition-all uppercase text-xs tracking-[4px]">Home</a>
        <a href="#about" className="hover:text-[#F7AB0A] hover:scale-105 transition-all uppercase text-xs tracking-[4px]">About</a>
        <a href="#skills" className="hover:text-[#F7AB0A] hover:scale-105 transition-all uppercase text-xs tracking-[4px]">Skills</a>
        <a href="#projects" className="hover:text-[#F7AB0A] hover:scale-105 transition-all uppercase text-xs tracking-[4px]">Projects</a>
        <a href="#connect" className="hover:text-[#F7AB0A] hover:scale-105 transition-all uppercase text-xs tracking-[4px]">Connect</a>
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
        className="hidden md:flex flex-row items-center text-gray-400 cursor-pointer pt-0"
      >
        <button 
          className="profileButton inline-flex"
          onClick={resumeDownload}
        >
          Resume
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {hem === true ? (
        <motion.div
          initial={{
            x: "100%",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{
            x: "100%",
            opacity: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          id="menu"
          className="fixed top-0 bottom-0 left-0 right-0 bg-black/90 backdrop-blur-2xl z-50 flex flex-col justify-center items-center h-screen w-screen"
        >
          <div className="absolute top-5 right-8 text-3xl text-gray-300 cursor-pointer hover:text-white transition-colors">
            <RxCross2
              onClick={() => {
                setHem(false);
              }}
            />
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <ul className="flex flex-col gap-8 text-center">
              <li>
                <a 
                  href="#profile" 
                  onClick={() => setHem(false)} 
                  className="hover:text-[#F7AB0A] transition-colors uppercase text-xl tracking-[6px] text-gray-300 font-medium block py-2"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={() => setHem(false)} 
                  className="hover:text-[#F7AB0A] transition-colors uppercase text-xl tracking-[6px] text-gray-300 font-medium block py-2"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  onClick={() => setHem(false)} 
                  className="hover:text-[#F7AB0A] transition-colors uppercase text-xl tracking-[6px] text-gray-300 font-medium block py-2"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={() => setHem(false)} 
                  className="hover:text-[#F7AB0A] transition-colors uppercase text-xl tracking-[6px] text-gray-300 font-medium block py-2"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#connect" 
                  onClick={() => setHem(false)} 
                  className="hover:text-[#F7AB0A] transition-colors uppercase text-xl tracking-[6px] text-gray-300 font-medium block py-2"
                >
                  Connect
                </a>
              </li>
              <li className="mt-4">
                <button 
                  className="profileButton px-8 py-3 text-sm"
                  onClick={() => {
                    resumeDownload();
                    setHem(false);
                  }}
                >
                  Resume
                </button>
              </li>
            </ul>
          </div>
        </motion.div>
      ) : (
        <div className="flex justify-between md:hidden w-full items-center">
          <div className="text-lg font-semibold tracking-wider text-gray-300">
            Sahil's Portfolio
          </div>
          <div className="text-3xl text-gray-300 cursor-pointer hover:text-[#F7AB0A] transition-colors">
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
