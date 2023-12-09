import React from 'react'
import { FaReact } from "react-icons/fa";

export default function Tech() {
  return (
    <section className='dark:border-b dark:border-[#32383d] about py-20 lg:py-32 dark:bg-[#19222a]'>

      <div className='container'>

        <div className='about-content lg:flex justify-center items-center'>
          <div className='relative img-side m-auto lg:m-0 lg:w-fit'>
            <img 
            src='https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp' 
            className='rounded-[1.7rem] max-h-80 lg:m-0 m-auto'>
              
            </img>

            <span className='absolute md:hidden lg:block bottom-[-15px] right-[-10px] lg:right-[-33px] bg-white rounded-full h-[7rem] w-[7rem]  lg:h-[12rem] lg:w-[12rem]'>
              <img className='rotate' src='https://www.stefantopalovic.com/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg' />
            </span>
          </div>

          <div className='lg:ml-20 mt-10 lg:mt-0 max-w-3xl m-auto lg:m-0 text-center lg:text-left lg:w-[500px] '>
            <p className=' font-bold text-xl dark:text-[#32383d] text-[#137efb]'>About Me</p>
            <h3 className='font-bold text-2xl mb-3 text-[#2d2e32] dark:text-white'>A dedicated front-end developer based in Copenhagen, Denmark</h3>

            <p className='text-[#767676] dark:text-white'>
            As a junior front-end developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
            </p>
          </div>
        </div>

        <div className='text-center mt-20'>

          <p className='font-bold text-2xl mb-6 text-[#2d2e32] dark:text-white'>Front-end technologies I prefer using</p>

          <div className='flex flex-wrap md:flex-nowrap justify-center items-center'>
            <div className='text-center w-1/2 mb-5 md:mb-0'>
              <img className='w-16 rounded m-auto' src={'https://www.svgrepo.com/show/353925/javascript.svg'} />
              <p className='text-[#767676] mt-2'>javascript</p>
            </div>

            <div className='text-center w-1/2 mb-5 md:mb-0'>
              <img className='w-16 m-auto rounded-md' src={'https://www.svgrepo.com/show/354259/react.svg'} />
              <p className='text-[#767676] mt-2'>React</p>
            </div>

            <div className='text-center w-1/2'>
              <img className='w-16 m-auto' src={'https://www.svgrepo.com/show/452228/html-5.svg'} />
              <p className='text-[#767676] mt-2'>HTML5</p>
            </div>

            <div className='text-center w-1/2'>
              <img className='w-16 m-auto' src={'https://www.svgrepo.com/show/452185/css-3.svg'} />
              <p className='text-[#767676] mt-2'>CSS</p>
            </div>
          </div>

          <div className='flex flex-wrap md:flex-nowrap	 mt-5 justify-center items-center '>
            <div className='text-center w-1/2 mb-5 md:mb-0'>
              <img className='w-16 m-auto rounded' src={'https://www.svgrepo.com/show/378440/nextjs-fill.svg'} />
              <p className='text-[#767676] mt-2'>Next.js</p>
            </div>

            <div className='text-center w-1/2 mb-5 md:mb-0'>
              <img className='w-16 m-auto rounded-md' src={'https://www.svgrepo.com/show/452210/git.svg'} />
              <p className='text-[#767676] mt-2'>Git</p>
            </div>

            <div className='text-center w-1/2'>
              <img className='w-16 m-auto' src={'https://www.svgrepo.com/show/374068/scss.svg'} />
              <p className='text-[#767676] mt-2'>SCSS</p>
            </div>

            <div className='text-center w-1/2'>
              <img className='w-16 m-auto' src={'https://www.svgrepo.com/show/374118/tailwind.svg'} />
              <p className='text-[#767676] mt-2'>Tailwind</p>
            </div>
          </div>

        </div>

        <div className='text-center mt-16'>

          <p className='font-bold text-2xl mb-6 text-[#2d2e32] dark:text-white'>Other technologies</p>

          <div className='flex flex-wrap md:flex-nowrap	 justify-center items-center'>

            <div className='text-center w-1/2 mb-5 md:mb-0'>
              <img className='w-16 rounded m-auto' src={'https://www.svgrepo.com/show/452088/php.svg'} />
              <p className='text-[#767676] mt-2'>PHP</p>
            </div>

            <div className='text-center w-1/2 mb-5 md:mb-0'>
              <img className='w-16 m-auto rounded-md' src={'https://www.svgrepo.com/show/353985/laravel.svg'} />
              <p className='text-[#767676] mt-2'>Laravel</p>
            </div>

            <div className='text-center w-1/2'>
              <img className='w-16 m-auto' src={'https://www.svgrepo.com/show/373848/mysql.svg'} />
              <p className='text-[#767676] mt-2'>MySQL</p>
            </div>

            <div className='text-center w-1/2'>
              <img className='w-16 m-auto' src={'https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg'} />
              <p className='text-[#767676] mt-2'>NodeJS</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
