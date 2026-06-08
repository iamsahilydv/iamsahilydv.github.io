import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import avatar from "../Images/Avatar.jpg";
import TiltCard from "./TiltCard";

const Profile = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, The Name is Sahil",
      "<CodeWithCoffee />",
      "DevOps & Cloud Enthusiast",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col space-y-8 min-h-screen items-center justify-center text-center overflow-hidden w-full px-4 pt-10">
      <BackgroundCircle />
      
      <TiltCard 
        className="z-10 p-8 rounded-3xl glass-card flex flex-col items-center justify-center max-w-sm sm:max-w-md w-full border border-white/5 preserve-3d"
        maxTilt={10}
        scale={1.03}
      >
        <img
          className="rounded-full h-32 w-32 object-cover border-4 border-[#F7AB0A]/40 mb-6 shadow-[0_0_25px_rgba(247,171,10,0.2)] translate-z-30"
          src={avatar}
          alt="Sahil's avatar"
        />
        <div className="translate-z-10 flex flex-col items-center">
          <h2 className="text-xs sm:text-sm uppercase text-gray-400 tracking-[8px] sm:tracking-[12px] md:tracking-[16px] pb-3 font-medium">
            Full Stack Web Developer
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2 sm:px-4 text-white">
            <span className="mr-2">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
        </div>
      </TiltCard>
    </div>
  );
};

export default Profile;
