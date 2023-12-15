import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import Image from 'next/image'
import foto from '../../public/self.jpg'
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

export default function Intro() {

    const sendToFb = () => {
        window.open("https://www.facebook.com/outman.mounir.12/", "_blank")
      }
    
      const sendTolinkedIn = () => {
        window.open("https://www.linkedin.com/in/outman-el-mounir-8a71711a1/", "_blank")
    
      }
    
      const sendtoGithub = () => {
        window.open('https://github.com/outman1998', '_blank')
      }

  return (
    <section className='intro dark:border-b dark:border-[#32383d]  dark:bg-[#19222a] bg-[#f9f9f9] pt-32 pb-20 lg:h-screen flex items-center font'>
        <div className='container'>
        <div className=' flex flex-col-reverse lg:flex-row items-center justify-end'>

            <div className='lg:pr-10 lg:w-1/2 pt-10 lg:pt-0'>
                <div className='text-center lg:text-start'>
                <h2 className=' text-7xl lg:py-2 text-[#2d2e32] dark:text-white font-bold'>Hi there, I'm Outman</h2>
                <p className='text-md pb-3 lg:py-5 lg:px-0 leading-8 dark:text-white md:text-xl mx-auto text-[#555555]'>
                Hi, I'm a junior front-end developer currently studying web development with focus on webapps, single page applications, database management & fullstack development.
                </p>
                </div>
                <div className='text-5xl flex lg:justify-start justify-center gap-6 lg:pb-0 text-gray-600'>

                <FaFacebookSquare className='cursor-pointer w-7 text-[#2d2e32] dark:text-white' onClick={() => sendToFb()}/>
                <FiLinkedin className='cursor-pointer w-8 text-[#2d2e32] dark:text-white' onClick={() => sendTolinkedIn()} />
                <FiGithub className='cursor-pointer w-8 text-[#2d2e32] dark:text-white' onClick={() => sendtoGithub()} />

                </div>
                <div className='flex items-center justify-center lg:justify-normal'>
                  <div className='bg-red-500 dark:bg-[#65e295] w-[12px] h-[12px] rounded-full mr-1'></div>
                  <p className='text-black dark:text-white'>Open to work</p>
                </div>

            </div>
            <div className='m-auto lg:w-1/2'>
            <Image className='specialDiv billed m-auto w-60 lg:w-96' src={foto}/>
            </div>

        </div>

        </div>
    </section>

  )
}
