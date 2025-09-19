'use client';

import Image from 'next/image'
import React from 'react'

const Opening = ({ className }: { className?: string }) => {
    return (
        <section id='Opening'
            className={`w-full min-h-[100vh] flex flex-col items-center justify-start md:py-20 py-10
        bg-cover bg-center gap-y-8 bg-zinc-900 text-white text-center ${className}`}>
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
                className='font-mono text-2xl'>
                Selamat Ulang tahun yang <br />
                <span className='font-serif text-3xl font-black'>
                    ke- 2
                </span>
            </p>
        </section>
    )
}

export default Opening