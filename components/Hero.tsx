import React from 'react';
import Link from "next/link";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import me from './DZ.jpg'


type Props = {};

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Developer", "Designer", "Creator"],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image
                alt='me'
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src={me} />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    Software Engineer
                </h2>
                <h1 className='text-5xl lg:text-6x font-semiboldscroll-px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}