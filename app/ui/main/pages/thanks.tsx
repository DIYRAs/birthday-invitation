'use client';

import Image from 'next/image';
import React from 'react'

const Thanks = ({ className }: { className?: string }) => {
    return (
        <section id='thanks'
            className={`w-full relative min-h-[100vh] flex flex-col items-center justify-center md:py-16 py-10 px-10
        bg-center bg-fixed gap-y-10 text-white text-center ${className}`}>
            <h2 data-aos='fade-down'
                className='space-y-2 text-2xl font-semibold'>
                <span className='text-3xl'>Thank You ^^</span> <br /> <br />
                Jangan lupa datang ke pesta ulang tahunku ya~ <br />
                Akan ada banyak kejutan seru yang sudah aku siapkan untuk kalian!
            </h2>

            {/* Animation */}
            <div data-aos='fade-down-left'
                className='absolute top-0 right-0'>
                <Image
                    src={'images/astronot_fly.webp'}
                    alt='Astronot melayang'
                    width={200}
                    height={200}
                    className='object-cover object-center h-auto w-44 astronot-animation' />
            </div>

            <Image
                src={'images/astronot1.webp'}
                alt='astronot'
                width={400}
                height={300}
                className='absolute bottom-0 left-0 object-cover object-center w-full h-auto' />
        </section>
    )
}

export default Thanks