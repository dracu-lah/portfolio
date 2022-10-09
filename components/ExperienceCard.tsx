import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ExperienceCard({}: Props)  {
  return (
    <article className="flex bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity overflow-hidden duration-200 flex-col rounded-lg snap-center items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]">
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
        src="https://images.unsplash.com/photo-1635756837851-d3b6edbaa11c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80" alt="" />
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">CEO of DRACU TECHNOLOGIES</h4>
            <p className="font-bold text-2xl mt-1">DRACU TECH</p>
            <div className="flex space-x-2 my-2">
               <img
                className="h-10 w-10 rounded-full"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902" alt="" />
                
                <img
                className="h-10 w-10 rounded-full"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902" alt="" />
                
                <img
                className="h-10 w-10 rounded-full"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902" alt="" />
            
            </div>
            <p className="uppercase py-5 text-gray-300">Started work ... -Ended ...</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Summary pointsSummary pointsSummary pointsSummary points</li>
                <li>Summary pointsSummary pointsSummary pointsSummary points</li>
                <li>Summary pointsSummary pointsSummary pointsSummary points</li>
                <li>Summary pointsSummary pointsSummary pointsSummary points</li>
                <li>Summary pointsSummary pointsSummary pointsSummary points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard