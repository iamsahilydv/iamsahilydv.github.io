import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import avatar from "../Images/Avatar.jpg";
import profileImg from "../Images/profile-image.JPG";

const Profile = () => {
  const [text, count] = useTypewriter({
    words: ["Hi, The Name is Sahil", "<CodeWithCoffee />", "Problem-Solver"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col space-y-8 h-screen items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        className="relative rounded-full h-32 w-32 m-auto object-cover"
        src={avatar}
        alt=""
      />
      <div className="z-10">
        <h2 className="text-sm uppercase text-gray-500 tracking-[16px] pb-2">
          Full Stack Web Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
    </div>
  );
};

export default Profile;
