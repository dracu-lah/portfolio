import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { Experience } from '../typings'

type Props = {
    experience: Experience
}

function ExperienceCard({experience}: Props)  {
  return (
    <article className="flex  bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity overflow-hidden  duration-200 flex-col rounded-lg snap-center items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] mt-14">
        <motion.img
            initial={{
                y:-100,
                opacity:0
            }}
            transition={{
                duration:1.2
            }} 
            whileInView={{
                opacity: 1, 
                y:0
            }}
            viewport={{
                once: true
            }}
        className=" h-32 w-32 rounded-full object-center  object-cover md:rounded-full xl:w-[200px] xl:h-[200px]"
        src={urlFor(experience?.companyImage).url()} alt="" />
        <div className="px-0 md:px-10 ">
            <h4 className="text-4xl font-light">CEO of DRACU TECHNOLOGIES</h4>
            <p className="font-bold text-2xl mt-1">DRACU TECH</p>
            <div className="flex space-x-2 my-2">
               {experience.technologies.map((technology) =>(
                   <Image key={technology._id}
                    className="h-10 w-10 rounded-full"
                    src={urlFor(technology.image).url()} alt="" />
               )) }
               
            
            </div>
            <p className="uppercase py-5 text-gray-300">{new Date(experience.dateStarted).toDateString()}- {experience.isCurrentlyWorkingHere ? "Present": new Date(experience.dateEnded).toDateString()}</p>
            <ul className="list-disc space-y-4 ml-5 text-lg h-80 ">
                   {experience.points.map((point, i) =>(
                        <li key={i}>{point}</li>
                   ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard