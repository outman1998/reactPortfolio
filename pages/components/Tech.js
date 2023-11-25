import React from 'react'

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

            <span className=' absolute bottom-[-33px] right-[-33px] bg-white rounded-full h-[10rem] w-[10rem]  lg:h-[12rem] lg:w-[12rem]'>
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
      </div>



    </section>
  )
}
