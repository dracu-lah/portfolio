import { NextPage } from "next";
import Head from 'next/head'
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Header from "../components/Header";
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Link from "next/link";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Create Next App</title>
      </Head>

      {/* Header */}
      <Header/>
      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About/>
      </section>
      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience/>
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills/>
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects/>
      </section>
      {/* Contact me */}
      <section id="contact" className="snap-start">
        <ContactMe/>
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer "> 
        <div className="flex items-center justify-center">
          {/* <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" 
          src="https://i.pinimg.com/originals/25/97/a4/2597a42df8eaf34cc42d86175b6c6212.png" alt="" /> */}
           <ArrowUpCircleIcon className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer text-[#F7AB0A] animate-pulse"/>
        </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home
