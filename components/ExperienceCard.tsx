import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function ExperienceCard({ }: Props) {
    return <article className='flex  flex-col rounded-lg items-center space-y-25 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src="https://static.wixstatic.com/media/e7fcfa_547c512f88a94eea80bade4d65331406~mv2.png/v1/fill/w_180,h_180,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9.png"
            alt=""
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO OF P</h4>
            <p className='font-bold text-2xl mt-1'>PPFM</p>
            <div className='flex space-x-2 my-2'>
                <img className="h-10 w-10 rounded-full"
                    src="https://e7.pngegg.com/pngimages/793/545/png-clipart-javascript-logo-computer-icons-vue-js-angle-text-thumbnail.png"

                    alt="" />

            </div>
            <p  className='uppercase py-5 text-gray-300'>Started worked... - ended...</p>

            <ul className='list disc space-y-4 ml-5 text-lg'>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>

        </div>
    </article>;
}