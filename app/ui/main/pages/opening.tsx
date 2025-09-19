'use client';

import Image from 'next/image'
import React from 'react'

const Opening = ({ className }: { className?: string }) => {
    return (
        <section id='Opening'
            style={{ backgroundImage: 'url(backgrounds/stars-galaxy.gif)' }}
            className={`w-full min-h-[100vh] relative flex flex-col items-center bg-fixed justify-start md:py-20 py-10
        bg-fill bg-center gap-y-8 bg-zinc-900 text-white text-center ${className}`}>
            <h1 data-aos='fade-down'
                data-aos-delay='1900'
                data-aos-offset='200'
                className='mt-12 text-3xl font-bold'>
                Diymas Ramadhan
            </h1>

            <Image
                data-aos='fade-down'
                data-aos-delay='1700'
                data-aos-offset='200'
                src={'/images/ph.png'}
                alt='Foto ulang tahun diymas ramadhan'
                height={200}
                width={200}
                className='object-cover object-center w-40 h-40 rounded-full' />

            <p
                data-aos='fade-down'
                data-aos-delay='1500'
                data-aos-offset='200'
                className='text-2xl'>
                Selamat Ulang Tahun <br />
                Yang Ke-2
            </p>

            {/* <Image
                src={'images/astronot_iss.png'}
                alt='foto astronot'
                width={200}
                height={300}
                className='fixed bottom-0 left-0 sm:left-[20%] md:left-[30%] scale-[60%]' /> */}
        </section>
    )
}

export default Opening