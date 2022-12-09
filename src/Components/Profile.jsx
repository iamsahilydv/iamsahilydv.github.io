import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Link from 'next/link'



const Profile = () => {
    const [text, count]= useTypewriter({
        words:[
            "Hi, The Name is Sahil",
            "<CodeWithCoffee />",
            "Problem-Solver"
        ],
        loop: true,
        delaySpeed:2000,
    })
  return (
    <div className='flex flex-col space-y-8 h-screen items-center justify-center text-center overflow-hidden'>
        <BackgroundCircle />
        <img
        className='relative rounded-full h-32 w-32 m-auto object-cover'
        src="https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/312251150_3372126473059677_7540396173560198222_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VKJW3CJAnGcAX9Ao2O4&_nc_ht=scontent-del1-2.xx&oh=00_AfB-JmsE22tCjV_M4AynI1uecgZXo-l6dCe_3E1ZRUKQTQ&oe=63958B7A" alt="" />
        <div className='z-10'>
            <h2 className='text-sm uppercase text-gray-500 tracking-[16px] pb-2'>
                Web Developer
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>
                    {text}
                </span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>
        </div>
        <div className='pt-5 z-20'>
            <Link href="#about">
            <button className='profileButton'>
                About
            </button>
            </Link>
            <Link href="#experience">
            <button className='profileButton'>
                Experience    
            </button>
            </Link>
            <Link href="#skills">
            <button className='profileButton'>
                Skills
            </button>
            </Link>
            <Link href="#projects">
            <button className='profileButton'>
                Projects
            </button>
            </Link>
        </div>
        
    </div>
  )
}

export default Profile