import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import { Social } from '@/typings';

type Props = {
    socials: Social[]
};

export default function Header({ socials }: Props) {

    // console.log("HEADER", socials);

    return (
        <header className="sticky top-0 p-5 flex items justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-left">

                {socials?.map((social) => (                    
                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor="gray"
                        bgColor="transparent"
                    />
                ))}

                {/* { <SocialIcon
                    url="https:www.youtube.com/sonnysangha"
                    fgColor="gray"
                    bgColor="transparent"
                /> } */}
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center text-gray-300 cursor-pointer">
                <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    fgColor="grey"
                    bgColor="transparent"
                    href='#contact'
                />
                <a className="uppercase hidden md:inline-flex text-sm text-gray-400" href='#contact'>Get In Touch</a>
            </motion.div>
        </header >
    )
}