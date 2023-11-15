import React from 'react';
// import { motion } from "framer-motion";
import { Education } from '@/typings';
// import { urlFor } from '@/sanity';

type Props = {
    education: Education;
}

export default function EducationCard({ education }: Props) {

    console.log(education.dateStarted);
    console.log(education.dateEnded);
    // console.log({urlFor(education.diploma).url())};

    return <article className='flex flex-col rounded-lg items-center space-y-25 flex-shrink-0 w-[500px] md:w-[700px] xl:w-[1000px] snap-center bg-[#703333] p-5 md:p-15 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>

        <div className='px-0'>
            <h4 className='text-xl md:text-3xl xl:text-4xl font-light'>{education?.title}</h4>
            <p className='text-base md:text-2xl mt-1'>{education.institution}</p>

            <p className='uppercase py-5 text-gray-300'>
                {new Date(education.dateStarted)?.toDateString()}  
                {education.dateEnded ? " - " + new Date(education.dateEnded).toDateString() : ""}
            </p>
        </div>
    </article>;

// bg-[#292929]
}