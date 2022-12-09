import { motion } from 'framer-motion'
import React from 'react'



const About = () => {
  return (
    <motion.div

    initial={{
      opacity:0
    }}
    whileInView={{ opacity:1 }}
    transition={{
      duration:1.5
    }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '
    >
      <h3 className='absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl' >about</h3>

      <motion.img 
      initial={{
        x:-200,
        opacity:0

      }}
      whileInView={{
        x:0,
        opacity:1
      }}
      viewport={{once:true}}
      transition={{
        duration:1,
      }}
      src='https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/312251150_3372126473059677_7540396173560198222_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VKJW3CJAnGcAX9Ao2O4&_nc_ht=scontent-del1-2.xx&oh=00_AfB-JmsE22tCjV_M4AynI1uecgZXo-l6dCe_3E1ZRUKQTQ&oe=63958B7A'
      className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px] mt-56 md:mt-0" 
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold mt-28 '>
          Here is Something about {" "}
          <span className='underline decoration-[#F7AB0A]'>
            Sahil
            </span> 
        </h4>
        <p className='h-28 md:text-lg text-[0.5rem]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt porro pariatur molestiae! Facilis, repellendus. Commodi cupiditate dignissimos, et nobis tempora facilis blanditiis voluptatum consectetur. Odio veritatis eos delectus reprehenderit!
        </p>
      </div>
    </motion.div>
  )
}

export default About