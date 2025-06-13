import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { MdTransitEnterexit } from "react-icons/md";

const Project = ({ image, description, name, end, deploy, github }) => {
  return (
    <div
      className=" ProjectsDiv rounded-lg  h-[100%] w-[100%] box-border m-auto pt-5 pb-3 pl-5 pr-5"
      onClick={() => {
        window.open(deploy, "_blank", "noreferrer");
      }}
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <div className="flex h-[40%]  w-[100%] rounded-lg ">
        <img className="h-[100%]  w-[100%] rounded-lg " src={image} alt="" />
      </div>
      <div>
        <h2 className="text-left text-[22px]  w-[100%] p-3  ">{name}</h2>
        <div>
        <p className="text-gray-400 pl-3 text-[12px] sm:text-[16px] text-left">
        <span className="text-white font-bold">About Site:</span> {description}
      </p>
      <p className="text-gray-400 pl-3 mt-3 text-[12px] sm:text-[16px] text-left">
        {end}
      </p>
      <div className="flex justify-around">
        <button
          className="profileButton  flex gap-10 mt-3 self-center text-xl sm:text-4xl"
          onClick={() => {
            window.open(github, "_blank", "noreferrer");
          }}
        >
          {<DiGithubBadge />}
        </button>
        <button
          className="profileButton flex items-center h-fit mt-3"
          onClick={() => {
            window.open(deploy, "_blank", "noreferrer");
          }}
        >
          <p className="text-[12px] sm:text-[16px]">Visit</p>
          <span className="text-xl sm:text-4xl">
            <MdTransitEnterexit />
          </span>
        </button>
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default Project;
