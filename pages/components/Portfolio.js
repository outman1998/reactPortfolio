import React from 'react'
import weather from '../../public/iweatherr.png';
import webshop from '../../public/webshopp.png';
import Image from 'next/image'
import crypto from '../../public/krypen.jpg';
import { FiGithub } from "react-icons/fi";
import { RxOpenInNewWindow } from "react-icons/rx";
import Link from 'next/link';

export default function Portfolio(props) {


    const sendToDemo = (demo) => {

        if(demo === 'webshop') {
          window.open('https://smykkewebshop.vercel.app/', '_blank')
        } else if (demo === 'weatherapp') {
          window.open('https://iweather-outman1998.vercel.app/', '_blank')
        } else if (demo === 'crypto') {
          window.open('https://cryptocurrency-gules.vercel.app/', '_blank')
        }
    
      }
      
  return (
    <section className='dark:border-b dark:border-[#32383d] projects py-20 lg:py-32 bg-[#f9f9f9] dark:bg-[#19222a]'>

      <div className='container text-black'>

        <div className='project-content m-auto'>

          <p className='font-bold text-xl dark:text-[#32383d] text-[#137efb]'>Portfolio</p>
          <h3 className='text-[#2d2e32] dark:text-white mb-10 font-bold text-2xl'>Each project is a unique piece of development </h3>

          <div className='project-grid grid grid-cols-1 grid-rows-auto gap-10 h-auto w-full'>

            <div className='pro_1 dark:bg-[#11111133] bg-white shadow-md lg:flex lg:flex-row lg:gap-4 lg:h-96 p-4'>

              <div className='pro_img bg-hsla bg-opacity-20 shadow-md overflow-hidden h-[10rem] lg:h-full'>
                <Image alt='img' className='image w-full h-full rounded-lg' src={crypto} />
              </div>

              <div className='pro_text flex flex-col items-center justify-center h-auto text-center text-[#2d2e32] dark:text-white mt-5 lg:w-1/2'>
                <h3 className='font-bold text-lg'>Cryptohunter.com</h3>
                <p className='text-[#767676] w-[80%] font-semibold'>Cryptohunter is a crypto app that allow users to search for information about various crypto currencies in real-time.</p>

                <div className='flex text-[#2d2e32] dark:text-white gap-4 justify-center mt-4'>
                  <p 
                style={{
                  boxShadow: `${props.darkMode ? '0 0 10px rgba(0, 0, 0, 0.3)' : '0 0 10px rgba(0, 0, 0, 0.1)'}`
                }}
                    className='p-2 rounded-md'
                  >
                      React
                  </p>
                  <p 
                  style={{
                    boxShadow: `${props.darkMode ? '0 0 10px rgba(0, 0, 0, 0.3)' : '0 0 10px rgba(0, 0, 0, 0.1)'}`
                  }}
                    className='p-2 rounded-md'
                  >
                      NEXTUI
                  </p>
                </div>

                <div className='links text-[#2d2e32] dark:text-white flex mt-6 font-semibold'>
                  <Link target="_blank" href="https://github.com/outman1998/cryptocurrency" className='flex items-center mr-10'>
                    <p className='mr-2'>Code</p>
                    <FiGithub className='text-xl' />
                  </Link>

                  <Link target="_blank" href="https://cryptocurrency-gules.vercel.app/" className='flex items-center font-semibold'>
                    <p className='mr-2'>Live Demo</p>
                    <RxOpenInNewWindow className='text-xl' />
                  </Link>
                </div>

              </div>

            </div>

            <div className='pro_1 dark:bg-[#11111133] bg-white rounded-xl shadow-md lg:flex lg:flex-row-reverse lg:gap-4 lg:h-96 p-4'>

              <div className='pro_img bg-hsla bg-opacity-20 rounded-7xl shadow-md overflow-hidden h-[10rem] lg:h-full'>
                <Image alt='img' className='w-full h-full rounded-lg' src={weather} />
              </div>

              <div className='pro_text flex flex-col items-center justify-center h-auto text-center text-[#2d2e32] dark:text-white mt-5 lg:w-1/2'>
                <h3 className='font-bold text-lg'>iWeather.com</h3>
                <p className='text-[#767676] w-[80%] font-semibold'>A weather website where users can search for every city and get current temperature and additional weather information about the searched city.</p>

                <div className='flex text-[#2d2e32] dark:text-white gap-4 justify-center mt-4'>
                  <p 
                  style={{
                    boxShadow: `${props.darkMode ? '0 0 10px rgba(0, 0, 0, 0.3)' : '0 0 10px rgba(0, 0, 0, 0.1)'}`
                  }}
                    className='p-2 rounded-md'
                  >
                    React
                  </p>
                  <p 
                  style={{
                    boxShadow: `${props.darkMode ? '0 0 10px rgba(0, 0, 0, 0.3)' : '0 0 10px rgba(0, 0, 0, 0.1)'}`
                  }}
                    className='p-2 rounded-md'
                  >
                    CSS
                  </p>
                </div>

                <div className='links text-[#2d2e32] dark:text-white flex mt-6 font-semibold'>
                  <Link target="_blank" href="https://github.com/outman1998/weatherApp" className='flex items-center mr-10'>
                    <p className='mr-2'>Code</p>
                    <FiGithub className='text-xl' />
                  </Link>

                  <Link target="_blank" href="https://iweather-outman1998.vercel.app/" className='flex items-center font-semibold'>
                    <p className='mr-2'>Live Demo</p>
                    <RxOpenInNewWindow className='text-xl' />
                  </Link>
                </div>
              </div>

            </div>

            <div className='pro_1 dark:bg-[#11111133] bg-white rounded-xl shadow-md lg:flex lg:flex-row lg:gap-4 lg:h-96 p-4'>
              <div className='pro_img bg-hsla bg-opacity-20 rounded-7xl shadow-md overflow-hidden h-[10rem] lg:h-full'>
                <Image alt='img' width="240" className='w-full h-full rounded-lg' src={webshop} />
              </div>

              <div className='pro_text flex flex-col items-center justify-center h-auto text-center text-[#2d2e32] dark:text-white mt-5 lg:w-1/2'>
                <h3 className='font-bold text-lg'>E-commerce</h3>
                <p className='text-[#767676] w-[80%] font-semibold'>With focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need.
                </p>

                <div className='flex text-[#2d2e32] dark:text-white gap-4 justify-center mt-4'>
                  <p 
                style={{
                  boxShadow: `${props.darkMode ? '0 0 10px rgba(0, 0, 0, 0.3)' : '0 0 10px rgba(0, 0, 0, 0.1)'}`
                }}
                    className='p-2 rounded-md'
                  >
                      Angular
                  </p>
                  <p 
                style={{
                  boxShadow: `${props.darkMode ? '0 0 10px rgba(0, 0, 0, 0.3)' : '0 0 10px rgba(0, 0, 0, 0.1)'}`
                }}
                    className='p-2 rounded-md'
                  >
                      Laravel
                  </p>
                </div>

                <div className='links text-[#2d2e32] dark:text-white flex mt-6 font-semibold'>
                  <Link target="_blank" href="https://github.com/TheSpahThatSpies/smykkewebshop" className='flex items-center mr-10'>
                    <p className='mr-2'>Code</p>
                    <FiGithub className='text-xl' />
                  </Link>
                  
                  <Link target="_blank" href="https://smykkewebshop.vercel.app/" className='flex items-center font-semibold'>
                    <p className='mr-2'>Live Demo</p>
                    <RxOpenInNewWindow className='text-xl' />
                  </Link>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
