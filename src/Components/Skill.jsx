import React from "react";
import { motion } from "framer-motion";

// type Props = {
//   logo: any;
//   leftDirection: boolean;
// };

const Skill = ( {logo, leftDirection} ) => {
  return (
    <div className="group relative flex cursor-pointer">
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
        className="text-[60px] md:text-[85px] m-auto  rounded-full h-16 w-16 md:h-24 md:w-24 justify-center object-cover items-center   "
      >
        <h1 className="">{logo}</h1>
      </motion.div>
      <div className="">
        <div>

        </div>
      </div>
      {/* <h3>{logo}</h3> */}
    </div>
  );
};

export default Skill;
