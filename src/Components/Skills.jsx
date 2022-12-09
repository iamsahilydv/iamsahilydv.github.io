import React from 'react'
import {motion} from "framer-motion"

import {DiHtml5,DiCss3,DiJavascript,DiNodejsSmall,DiNpm,DiReact} from "react-icons/di"
import {SiChakraui, SiTailwindcss,SiTypescript,SiVisualstudiocode} from "react-icons/si"
import Skill from './Skill'



const Skills = () => {
    let abc=<DiCss3 />
    const CurrentSkills=[
        {
            "id":1,
            "name":"HTML",
            "logo":<DiHtml5 />,
            "leftDirection":false
        },
        {
            "id":2,
            "name":"CSS",
            "logo":<DiCss3 />,
            "leftDirection":false
        },
        {
            "id":3,
            "name":"JavaScript",
            "logo":<DiJavascript />,
            "leftDirection":false
        },
        {
            "id":4,
            "name":"NodeJS",
            "logo":<DiNodejsSmall />,
            "leftDirection":false
        },
        {
            "id":5,
            "name":"NPM",
            "logo":<DiNpm />,
            "leftDirection":true
        },
        {
            "id":6,
            "name":"React",
            "logo":<DiReact />,
            "leftDirection":true
        },
        {
            "id":7,
            "name":"ChakraUI",
            "logo":<SiChakraui />,
            "leftDirection":true
        },
        {
            "id":8,
            "name":"TailWindCss",
            "logo":<SiTailwindcss />,
            "leftDirection":true
        },
        {
            "id":9,
            "name":"TypeScript",
            "logo":<SiTypescript />,
            "leftDirection":false
        },
        {
            "id":10,
            "name":"NodeJS",
            "logo":<SiVisualstudiocode />,
            "leftDirection":true
        }
    ]
  return (
    
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center items-center xl:space-y-0 mx-auto '

    >
        <h3 
        className='absolute top-24 uppercase text-gray-500 tracking-[24px] text-2xl '>
            Skills
        </h3>
        <h3
        className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'
        >
            Hover over a skill for current profieciency
        </h3>
        <div
        className='grid grid-cols-2 gap-5 md:grid-cols-4 mt-28 md:mt-0'
        >
            {CurrentSkills && CurrentSkills.map((el)=>(
                <Skill 
                key={el.id}
                logo={el.logo}
                // leftDirection={el.leftDirection}
                
                />
                // <h3>{el.leftDirection}</h3>
                // <Skill />
            ))}
        </div>
    </motion.div>
  )
}

export default Skills