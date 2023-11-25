import React from 'react'
import { MdLightMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";


export default function ({darkMode, setDarkMode}) {


  return (
    <section className='absolute w-full px-5 shadow-md bg-white dark:bg-[#19222a]'>

    <nav className=' py-5 flex justify-between'>
      <h1 className=' text-xl font-bold text-[#2d2e32] dark:text-white'>Outman.dev</h1>
      <ul className=' flex items-center'>
        {darkMode ? <li> 
          <BsFillMoonStarsFill 
          className='cursor-pointer text-2xl text-[#2d2e32] dark:text-white' 
          onClick={() => setDarkMode(!darkMode)}/> 
        </li> : <li> 
          <MdLightMode 
          className='cursor-pointer text-2xl text-[#2d2e32] dark:text-white' 
          onClick={() => setDarkMode(!darkMode)}/> 
        </li>}
        <li>
          <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-[#2d2e32] dark:text-white px-4 py-2 rounded-md ml-8' href='https://github.com/outman1998' target="_blank">Github</a>
        </li>
      </ul>
    </nav>
    
  </section>
  )
}
