import React from 'react'
import { motion } from "framer-motion";
import Skill from './Skill';
import { Skill as SkillType } from "@/typings";
import { clearScreenDown } from 'readline';

type Props = {
    skills: SkillType[];
}

export default function Skills({ skills }: Props) {
    // console.log("skills", skills);

    return (
        <div
            // initial={{ opacity: 1 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ duration: 2.0 }}
            className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Skills
            </h3>
            {/* <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
                Hover over a skill for currency profiency
            </h3> */}
            <div className='grid grid-cols-4 gap-5'>
                {skills?.map((skill, i) => (
                    // <Skill key={skill._id} skill={skill} directionLeft={i > 7 ? true : false} />
                    <Skill key={skill._id} skill={skill} directionLeft={false} />
                ))}
            </div>
        </div>
    )
}