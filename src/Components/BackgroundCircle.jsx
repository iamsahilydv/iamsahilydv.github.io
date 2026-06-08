import React from 'react'
import { motion } from "framer-motion"

const BackgroundCircle = () => {
  return (
    <motion.div 
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 1.2, 1.1, 1.3, 1],
        opacity: [0.1, 0.2, 0.4, 0.6, 0.3],
      }}
      transition={{
        duration: 3
      }}
      className="absolute flex justify-center items-center -z-10 pointer-events-none mt-20"
    >
      <div className="absolute border border-gray-800 rounded-full h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] animate-ping" />
      <div className="absolute border border-gray-800 rounded-full h-[220px] w-[220px] sm:h-[300px] sm:w-[300px]" />
      <div className="absolute border border-gray-800 rounded-full h-[350px] w-[350px] sm:h-[500px] sm:w-[500px]" />
      <div className="absolute border border-[#F7AB0A] rounded-full h-[450px] w-[450px] sm:h-[650px] sm:w-[650px] opacity-10 animate-pulse" />
      <div className="absolute border border-gray-800 rounded-full h-[550px] w-[550px] sm:h-[800px] sm:w-[800px]" />
    </motion.div>
  )
}

export default BackgroundCircle