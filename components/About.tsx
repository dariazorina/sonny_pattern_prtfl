import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function About({ }: Props) {
    return (
        <div className='flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src="https://habrastorage.org/r/w1560/getpro/habr/post_images/d0c/4b6/1dd/d0c4b61dd3efe7a883747edb17d91408.jpg"
                className='md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />
            {/* src="https://photos.app.goo.gl/sJyLXHeuU45BL1aS6"
             alt=""/> */}
            {/* src="https://www.dropbox.com/scl/fi/uu0p0u9xclpmiejid736m/DSC_0484_.jpg?rlkey=ypq19vdh1ya5135om95mm69ab&dl=0" /> */}
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Tra <span className='underline decoration-[#F7AB0A]/50'>tre</span>{" "} tat ata
                </h4>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quasi ipsam, veritatis fuga ut reiciendis quis ex vero voluptatibus necessitatibus totam laborum quia laboriosam voluptate cumque molestias, quam ad eaque.

                </p>
            </div>
        </div>
    )
}