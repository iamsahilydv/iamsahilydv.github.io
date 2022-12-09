import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from "framer-motion"



const Header = () => {
  return (
    <header className='flex p-5 items-start justify-between sticky top-0 max-w-7xl mx-auto z-20'>
    <motion.div 
    initial={{
        x:-500,
        opacity:0,
        scale:0.5
    }}
    animate={{
        x: 0,
        opacity:1,
        scale:1
    }}
    transition={{
        duration:1.5
    }}
    className='flex flex-row items-center '>
        <SocialIcon url='https://github.com/iamsahilydv/' 
        fgColor='grey'
        bgColor='transparent'
        className='hover:animate-bounce'
        />
        <SocialIcon url='https://www.linkedin.com/in/iamsahilydv/' 
        fgColor='grey'
        bgColor='transparent'
        className='hover:animate-bounce'
        />
        <SocialIcon url='https://twitter.com/iamsahilydv/' 
        fgColor='grey'
        bgColor='transparent'
        className='hover:animate-bounce'
        />
        <SocialIcon url='https://www.facebook.com/iamsahilydv/' 
        fgColor='grey'
        bgColor='transparent'
        className='hover:animate-bounce'
        />
        <SocialIcon url='https://www.instagram.com/iamsahilydv/' 
        fgColor='grey'
        bgColor='transparent'
        className='hover:animate-bounce'
        />
    </motion.div>
    <motion.div 
    initial={{
        x:500,
        opacity:0,
        scale:0.5
    }}
    animate={{
        x: 0,
        opacity:1,
        scale:1
    }}
    transition={{
        duration:1.5
    }}
    className='flex flex-row items-center text-gray-400 cursor-pointer'>
        <SocialIcon 
        className='cursor-pointer hover:animate-bounce'
        network='email'
        fgColor='grey'
        bgColor="transparent"
        
        
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-500'>Connect</p>
    </motion.div>
    </header>
  )
}

export default Header