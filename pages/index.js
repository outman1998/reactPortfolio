import { useState } from 'react';
SiVisualstudio
import { SiVisualstudio } from "react-icons/si";
import Head from 'next/head';
import Nav from './components/Nav';
import Tech from './components/Tech';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Intro from './components/Intro';

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
  
    <div className={darkMode ? "dark" : ""} >

    <Head>
      <title>Outman El Mounir</title>
      <meta name='description' content='Outman El Mounirs portfolio' />
      <link rel="icon" href='https://www.stefantopalovic.com/porticon.png' />
    </Head>

      <main className=' text-white dark:bg-[#19222a] bg-white'> 

      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <Intro />
      <Tech />
      <Portfolio darkMode={darkMode} />

      <Footer /> 

      </main>
      
    </div>

  )

}
