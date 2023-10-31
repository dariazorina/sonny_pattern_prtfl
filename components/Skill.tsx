import React from 'react'
import { motion } from "framer-motion";
import { Skill } from '@/typings';
import { urlFor } from '@/sanity';

// import { sanityClient }  from '@/sanity';
// import imageUrlBuilder from '@sanity/image-url'

// const builder = imageUrlBuilder(sanityClient);


type Props = {
    skill: Skill;
    directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {

    // function urlFor(source: any) {
    //     return builder.image(source)
    // }

    return (
        <div className='group relative flex cursor-pointer background-color '>
            <motion.img
                initial={{
                    // y: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                src = {urlFor(skill?.image)?.url()}                
                alt=''
                className='rounded border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className="text-2xl text-black opacity-80">{skill.title}</p>
                </div>
            </div>
        </div>
    )
}