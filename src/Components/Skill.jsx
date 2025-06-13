import React from "react";
import { motion } from "framer-motion";

// type Props = {
//   logo: any;
//   leftDirection: boolean;
// };

const Skill = ( {logo,name, leftDirection} ) => {
  return (
    <div className="group relative flex cursor-pointer mb-3">
      <motion.div
        initial={{
          y: leftDirection ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{once: true}}
        className="text-[60px] md:text-[85px] m-auto  rounded-full h-16 w-16  md:h-24 md:w-24 justify-center object-cover items-center   "
      >
        <h1 className="text-center text-gray-300 mb-2 ">{logo}</h1>
        <p className="text-[12px] md:text-[14px] text-center text-gray-500 ">{name}</p>
      </motion.div>
      {/* <div className="">
        <div>

        </div>
      </div> */}
      {/* <h3>{logo}</h3> */}
    </div>
  );
};

export default Skill;
