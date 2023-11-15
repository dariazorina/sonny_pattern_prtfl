import React from 'react';
import { motion } from "framer-motion";
import EducationCard from './EducationCard';
import { Education } from '@/typings';
import Link from 'next/link';
import { urlFor } from '@/sanity';

type Props = {
    education: Education[]
}

export default function EducationList({ education }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Education
            </h3>

            <div className='grid grid-cols-1 gap-2 md:gap-6 xl:gap-8'>
                {education?.map(education =>
                    // <Link href={urlFor(education.diploma).url()}>
                    // <Link href={education.urlDiploma ? education.urlDiploma : urlFor(education.imageDiploma).url()}>
                    <Link href={education.urlDiploma ? education.urlDiploma : ""}>
                        <EducationCard key={education._id} education={education} />
                    </Link>
                )}
            </div>
        </motion.div >
    )
}