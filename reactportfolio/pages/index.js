import Image from 'next/image'
import { Inter } from 'next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillTwitterCircle, 
  AiFillLinkedin, 
  AiFillYoutube
} from 'react-icons/ai';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>

      <main className=' bg-white text-black px-10'> 
        <section className='min-h-screen'>

          <nav className='p-10 mb-12 flex justify-between'>
            <h1 className=' text-xl font-burtons'>DevelopedByEd</h1>
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
            <h2>Dimitri Marco</h2>
            <h3>Developer and designer</h3>
            <p>Freelancer providing services for programmering needs. Join me down below and let's get cracked.</p>
          </div>

          <div>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>

        </section>
      </main>

    </>

  )
}
