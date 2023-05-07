import Image from 'next/image'
import { Inter } from 'next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin } from 'react-icons/ai';
import deved from '../public/deved.png';
import code from '../public/code.png';
import web1 from '../public/web1.png';
import {FaEnvelope} from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>
      <main className=' bg-white text-black px-10 md:px-20 lg:px-40'> 

        <section className='min-h-screen'>

          <nav className='p-10 mb-12 flex justify-between'>
            <h1 className=' text-xl font-burtons'>OEM</h1>
            <ul className=' flex items-center'>
              <li> 
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/> 
              </li>
              <li>
                <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8' href='#'>resume</a>
              </li>
            </ul>
          </nav>

          <div className=' text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Outman El Mounir</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Frontend developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>Frontend developer providing services for programmering and design content needs. Join me down below and let's get cracking!</p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <FaFacebookSquare />
            <AiFillLinkedin />
            <FaEnvelope />
          </div>

          <div className='relative mx-auto  bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} layout="fill" objectFit='cover'/>
          </div>
      
        </section>

        <section>

          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>Frontend developer providing services for programmering and design content needs. Join me down below and let's get cracking!
            <span className='text-teal-500'>Agencies</span>
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>I offer from a wide range of services, including programming and design.
            </p>
          </div>

          <div className='lg:flex gap-10'>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image className='m-auto' src={code}  width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beatiful designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Deisign tools i use</h4>
              <p className='text-gray-800 py-1'>HTML & CSS</p>
              <p className='text-gray-800 py-1'>React</p>
              <p className='text-gray-800 py-1'>Angular</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image className='m-auto' src={code}  width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beatiful designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Deisign tools i use</h4>
              <p className='text-gray-800 py-1'>HTML & CSS</p>
              <p className='text-gray-800 py-1'>React</p>
              <p className='text-gray-800 py-1'>Angular</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image className='m-auto' src={code}  width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beatiful designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Deisign tools i use</h4>
              <p className='text-gray-800 py-1'>HTML & CSS</p>
              <p className='text-gray-800 py-1'>React</p>
              <p className='text-gray-800 py-1'>Angular</p>
            </div>

          </div>

        </section>

        <section>

          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>Frontend developer providing services for programmering and design content needs. Join me down below and let's get cracking!
            <span className='text-teal-500'>Agencies</span>
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>I offer from a wide range of services, including programming and design.
            </p>
          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

            <div className> 
              <Image src={web1}
              className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'} 
              layout="responsive" /> 
            </div>

            <div className="basis-1/3 flex-1"> 
              <Image 
              src={web1} 
              className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'} 
              layout="responsive"/> 
            </div>

            <div className="basis-1/3 flex-1"> 
              <Image 
              src={web1}  
              className="rounded-lg object-cover"
              width={'100%'} 
              height={'100%'} 
              layout="responsive" /> 
            </div>

            <div className="basis-1/3 flex-1"> 
              <Image 
              src={web1}  
              className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'}
              layout="responsive" /> 
            </div>

            <div className="basis-1/3 flex-1"> 
              <Image 
              src={web1} 
              className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'}
              layout="responsive" /> 
            </div>

            <div className="basis-1/3 flex-1"> 
              <Image 
              src={web1} 
              className="rounded-lg object-cover" 
              width={'100%'} 
              height={'100%'}
              layout="responsive" /> 
            </div>
            
          </div>

        </section>

      </main>
    </>

  )
}
