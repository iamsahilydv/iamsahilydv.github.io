import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { FiExternalLink } from "react-icons/fi";

const Project = ({ image, description, name, projectType, skills, deploy, github }) => {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Aspect Ratio Image Container */}
      <div className="w-full aspect-video overflow-hidden rounded-t-2xl relative group-hover:scale-[1.01] transition-transform duration-500">
        <img 
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" 
          src={image} 
          alt={name} 
        />
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <p className="text-[10px] sm:text-xs text-[#F7AB0A] font-semibold tracking-wider uppercase">
            {projectType}
          </p>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 text-left justify-between">
        <div className="space-y-3">
          <h4 className="text-lg sm:text-xl font-bold text-white tracking-wide">
            {name}
          </h4>
          
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-4">
            {description}
          </p>
          
          <div className="space-y-1 pt-1">
            <p className="text-[10px] sm:text-xs uppercase text-gray-500 tracking-wider font-bold">
              Tech Stack
            </p>
            <p className="text-[#F7AB0A] text-xs sm:text-sm font-semibold tracking-wide leading-relaxed">
              {skills}
            </p>
          </div>
        </div>

        {/* Dynamic Buttons */}
        <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-6 w-full">
          <button
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-700 hover:border-white text-gray-300 hover:text-white rounded-xl text-xs sm:text-sm transition-all"
            onClick={(e) => {
              e.stopPropagation();
              window.open(github, "_blank", "noreferrer");
            }}
          >
            <DiGithubBadge className="text-lg sm:text-xl" />
            <span>Code</span>
          </button>
          
          <button
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#F7AB0A] hover:bg-[#F7AB0A]/90 text-black font-semibold rounded-xl text-xs sm:text-sm transition-all shadow-[0_4px_20px_rgba(247,171,10,0.2)] hover:shadow-[0_4px_25px_rgba(247,171,10,0.4)]"
            onClick={(e) => {
              e.stopPropagation();
              window.open(deploy, "_blank", "noreferrer");
            }}
          >
            <FiExternalLink className="text-sm sm:text-base" />
            <span>Launch</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
