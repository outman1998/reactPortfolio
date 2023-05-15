import Image from 'next/image'
import { Inter } from 'next/font/google'
import {AiFillLinkedin } from 'react-icons/ai';
import deved from '../public/deved.png';
import foodapp from '../public/foodorderapp.png';
import web1 from '../public/web1.png';
import { FaFacebookSquare } from "react-icons/fa";
import { useState } from 'react';
SiVisualstudio
import { SiVisualstudio, SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import weather from '../public/weather.png';
import webshop from '../public/webshop.png';
import { GrMail, GrMysql } from "react-icons/gr";
import { MdOutlineLocationOn } from "react-icons/md";
import Head from 'next/head';
import { BsArrowRightCircleFill, BsLightbulb, BsGithub, BsFillMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import foto from '../public/foto.jpg';








const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  const sendToMail = () => {
      window.open("https://www.facebook.com/outman.mounir.12/", "_blank")
  }

  const sendTolinkedIn = () => {
    window.open("https://www.linkedin.com/in/outman-el-mounir-8a71711a1/", "_blank")

  }

  const sendtoGithub = () => {
    window.open('https://github.com/outman1998', '_blank')
  }

  const sendToDemo = (demo) => {

    if(demo === 'webshop') {
      window.open('https://smykkewebshop.vercel.app/', '_blank')
    } else if (demo === 'weatherapp') {
      window.open('https://iweather-outman1998.vercel.app/', '_blank')
    } else if (demo === 'foodapp') {
      window.open('https://food-order-app-henna-five.vercel.app/', '_blank')
    }

  }


  return (
    

    <div className={darkMode ? "dark" : ""} >

    <Head>
      <title>Outman El Mounir</title>
      <meta name='description' content='Outman El Mounirs portfolio' />
    </Head>

      <main className=' bg-gray-900 text-white px-5 md:px-20 lg:px-40 dark:bg-white'> 

        <section className='min-h-screen'>

          <nav className='p-10 mb-12 flex justify-between'>
            <h1 className=' text-xl font-burtons dark:text-gray-800'>OEM</h1>
            <ul className=' flex items-center'>
              {darkMode ? <li> 
                <BsFillMoonStarsFill 
                className='cursor-pointer text-2xl dark:text-gray-800' 
                onClick={() => setDarkMode(!darkMode)}/> 
              </li> : <li> 
                <MdLightMode 
                className='cursor-pointer text-2xl dark:text-gray-800' 
                onClick={() => setDarkMode(!darkMode)}/> 
              </li>}
              <li>
                <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8' href='https://github.com/outman1998' target="_blank">Github</a>
              </li>
            </ul>
          </nav>

          <div className=' text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>I'm Outman El Mounir</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-800'>A frontend developer</h3>
            <p className='text-md py-5 leading-8 text-white md:text-xl max-w-lg mx-auto dark:text-gray-800'>
            I enjoy designing and creating things that lives on the web
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <FaFacebookSquare className='cursor-pointer' onClick={() => sendToMail()}/>
            <AiFillLinkedin className='cursor-pointer' onClick={() => sendTolinkedIn()} />
            <BsGithub className='cursor-pointer' onClick={() => sendtoGithub()} />
          </div>

          <div className='relative mx-auto  bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 		'>
            <Image className='-mt-10' src={foto}/>
          </div>
      
        </section>

        <section className='mt-20'>

          <div>
          <div class="border-t-4  border-teal-600 w-8 mb-1"></div>
            <h3 className='text-3xl py-1  dark:text-gray-800 text-white '>Technologies</h3>
            <p className='text-md py-2 leading-8 text-white dark:text-gray-800'>I'm a Frontend developer who is currently into React and JavaScript.
            I love creating modern user-friendly interfaces, where I'm incredibly strong at developing frontend from scratch and also have good experience with styling frameworks with Tailwind as my favourite. All coding projects are built from the ground up, and many more to come.
            </p>
          </div>

          <div className='md:flex justify-between mt-5 dark:text-gray-800 text-white'>
            <div className='mb-10'>
              <RiReactjsLine  className='text-3xl text-gray-600 '/>
              <h3 className='font-semibold text-xl	'>Front-end</h3>
              <p>React</p>
              <p>Angular</p>
              <p>JS/TS</p>
            </div>

            <div className='mb-10'>
              <GrMysql  className='text-3xl text-gray-600 '/>
              <h3 className='font-semibold text-xl 	'>Back-end</h3>
              <p>MySQL</p>
              <p>Node.js</p>
              <p>Firebase</p>
            </div>

            <div className='mb-10 '>
              <SiTailwindcss  className='text-3xl text-gray-600 '/>
              <h3 className='font-semibold text-xl	'>CSS Frameworks</h3>
              <p>Tailwind CSS</p>
              <p>Bootstrap</p>
              <p>Bulma</p>
            </div>

            <div>
              <BsLightbulb className='text-3xl text-gray-600 '/>
              <h3 className='font-semibold text-xl'>UI / UX</h3>
              <p>Figma</p>
              <p>Design patterns</p>
              <p>Responsive design</p>
            </div>
          </div>

        </section>

        <section className='mt-20'>
        <div class="border-t-4 border-teal-600 w-8 mb-1"></div>
          <div>
            <h3 className='text-3xl py-1 dark:text-gray-800'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-white dark:text-gray-800'>I specialize in creating stunning websites and digital experiences.
            </p>
          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

            <div className="basis-1/3 relative flex-1"> 
              <Image 
              src={foodapp} 
              className="rounded-lg h-60 md:h-72" 
              width={'100%'} 
              /> 

              <div className=' absolute flex bottom-4 bg-gray-200/50 px-3 backdrop-blur-sm bg-opacity-100 text-dark-bg text-center  mx-5 pb-4 pt-5 rounded-xl'>
       
                <div onClick={() => sendToDemo('foodapp')} className='bg-gray-900 cursor-pointer flex items-center text-white px-4 py-2 rounded-md text-sm md:text-base relative'>
                  <span className='mr-2'>View live</span>
                  <BsArrowRightCircleFill/>
                </div>
                <button className=' bg-white text-gray-900 px-4 py-2 rounded-md text-sm md:text-base ml-8'><a href='https://github.com/outman1998/foodOrderApp' target="_blank">
                  Code</a></button>

              </div>
            </div>

            <div className="basis-1/3 relative flex-1"> 
              <Image 
              src={weather}  
              className="rounded-lg h-60 md:h-72"
              width={'100%'} 
               /> 

              <div className=' absolute flex bottom-4 bg-gray-200/50 px-3 backdrop-blur-sm bg-opacity-100 text-dark-bg text-center  mx-5 pb-4 pt-5 rounded-xl'>
       
                <div onClick={() => sendToDemo('weatherapp')} className='bg-gray-900 flex items-center text-white px-4 py-2 rounded-md text-sm md:text-base relative cursor-pointer'>
                  <span className='mr-2'>View live</span>
                  <BsArrowRightCircleFill/>
                </div>
                <button className=' bg-white text-gray-900 px-4 py-2 rounded-md text-sm md:text-base ml-8'><a href='https://github.com/outman1998/weatherApp' target="_blank">
                  Code</a>
                </button>
                
              </div>
              
            </div>

            <div className="basis-1/3 relative flex-1"> 
              <Image 
              src={webshop}  
              className="rounded-lg h-60 md:object-cover md:object-top md:h-96" 
              /> 

              <div className=' absolute flex bottom-4 bg-gray-200/50 px-3 backdrop-blur-sm bg-opacity-100 text-dark-bg text-center  mx-5 pb-4 pt-5 rounded-xl'>
       
                <div onClick={() => sendToDemo('webshop')} className='bg-gray-900 flex items-center text-white px-4 py-2 rounded-md text-sm md:text-base relative cursor-pointer'>
                  <span className='mr-2'>View live</span>
                  <BsArrowRightCircleFill/>
                </div>
                <button className=' bg-white text-gray-900 px-4 py-2 rounded-md text-sm md:text-base ml-8'><a href='https://github.com/TheSpahThatSpies/smykkewebshop' target="_blank">
                  Code</a>
                </button>
       
              </div>

            </div>

            {/* <div className="basis-1/3 relative flex-1"> 
              <Image 
              src={web1} 
              className="rounded-lg h-60  md:h-72	" 
              /> 

              <div className=' absolute flex bottom-4 bg-gray-200/50 px-3 backdrop-blur-sm bg-opacity-100 text-dark-bg text-center  mx-5 pb-4 pt-5 rounded-xl'>
                
                <div className='bg-gray-900 flex items-center text-white px-4 py-2 rounded-md text-sm md:text-base relative cursor-pointer'>
                  <span className='mr-2'>View demo</span>
                  <BsArrowRightCircleFill/>
                </div>
                <button className=' bg-white text-gray-900 px-4 py-2 rounded-md text-sm md:text-base ml-8'><a href='https://github.com/TheSpahThatSpies/smykkewebshop' target="_blank">
                  Code</a>
                </button>

              </div>

            </div> */}

          </div>

        </section>

        <section className='mt-20 pb-10'>
        <div class="border-t-4 border-teal-600 w-8 mb-1"></div>
          <h3 className='text-3xl py-1 dark:text-gray-800 text-white'>Wanna get in touch?</h3>
          <p className='text-md py-1 dark:text-gray-800 text-white'>I'm always available for exciting discussions</p>
          <div className='flex items-center'>
            <GrMail className='mr-2 text-white dark:text-gray-800' />
            <p className='text-md dark:text-gray-800 text-white'>outmanmounir98@hotmail.com</p>
            
          </div>
          <div className='flex items-center'>
            <MdOutlineLocationOn className='mr-2 text-white dark:text-gray-800' />
            <p className='text-md dark:text-gray-800 text-white'>København, Denmark</p>
          </div>
          
        </section>

      </main>
    </div>

  )

}
