import React, { useState } from 'react';
import crypt from '../../public/crypt.png';
import krypt from '../../public/kryp.png';
import Link from 'next/link';
import Image from 'next/image';
import { FiGithub } from "react-icons/fi";
import { RxOpenInNewWindow } from "react-icons/rx";

const YourComponent = (props) => {
  const [isHovered1, setHovered1] = useState(false);
  const [isHovered2, setHovered2] = useState(false);
  const [projectText, setProjectText] = useState('');

  const handleMouseEnter = (text) => {
    setProjectText(text);
  };

  const handleMouseLeave = () => {
    setProjectText('');
  };

  return (
    <div className='py-20'>
      <div className='flex justify-between container'>

        <div
          className={`w-1/2 mr-5 rounded ${isHovered1 ? 'relative z-50' : ''}`}
          onMouseEnter={() => { setHovered1(true); handleMouseEnter("Description about the first project goes here."); }}
          onMouseLeave={() => { setHovered1(false); handleMouseLeave(); }}
        >
          <Image
            className='w-full h-full rounded-xl cursor-pointer'
            alt="NextUI hero Image"
            src={krypt}
          />
          {isHovered1 && (
            <div className="absolute rounded-xl inset-0 bg-black bg-opacity-75 flex items-center justify-center">
              <div className='pro_text flex flex-col items-center justify-center h-auto text-center text-white dark:text-white lg:w-full'>
                <h3 className='font-bold text-lg'>Cryptohunter.com</h3>
                <p className='text-white w-[80%] font-semibold'>cryptoHunter is a crypto app that allows users to search for information about various cryptocurrencies in real-time.</p>

                <div className='flex text-white dark:text-white gap-4 justify-center mt-4'>
                  <p 
                style={{
                  boxShadow: 'rgb(255 255 255 / 18%) 0px 0px 10px'
                }}
                    className='p-2 rounded-md'
                  >
                      React
                  </p>
                  <p 
                  style={{
                    boxShadow: 'rgb(255 255 255 / 18%) 0px 0px 10px'
                  }}
                    className='p-2 rounded-md'
                  >
                      NEXTUI
                  </p>
                </div>

                <div className='links text-white dark:text-white flex mt-6 font-semibold'>
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
          )}
        </div>

        <div
          className={`w-1/2 rounded ${isHovered2 ? 'relative z-50' : ''}`}
          onMouseEnter={() => { setHovered2(true); handleMouseEnter("Description about the second project goes here."); }}
          onMouseLeave={() => { setHovered2(false); handleMouseLeave(); }}
        >
          <Image
            className='w-full h-full rounded-xl cursor-pointer'
            alt="NextUI hero Image"
            src={krypt}
          />
          {isHovered2 && (
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
              <div className="text-white text-center">
                <p>{projectText}</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default YourComponent;
