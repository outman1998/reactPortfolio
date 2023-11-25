import React from 'react'
import { GrMail } from "react-icons/gr";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <section className='footer py-7 dark:bg[#19222a]'>
      <div className='container'>
        <p className='font-bold text-xl dark:text-[#32383d] text-[#137efb]'>Contact</p>
        <h3 className='text-2xl py-1 text-[#2d2e32] dark:text-white font-bold'>Wanna get in touch?</h3>
        <p className='text-md py-1 text-[#2d2e32] dark:text-white'>I'm always available for exciting discussions</p>
        <div className='flex items-center'>
          <GrMail className='mr-2 dark:text-white text-[#2d2e32]' />
          <p className='text-md text-[#2d2e32] dark:text-white'>outmanmounir98@gmail.com</p>
          
        </div>
        <div className='flex items-center'>
          <MdOutlineLocationOn className='mr-2 dark:text-white text-[#2d2e32]' />
          <p className='text-md text-[#2d2e32] dark:text-white'>København, Denmark</p>
        </div>
      </div>
      
    </section>
  )
}
