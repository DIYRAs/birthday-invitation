'use client';

import React from 'react'

const Thanks = ({ className }: { className?: string }) => {
    return (
        <section id='thanks'
            style={{ backgroundImage: 'url(backgrounds/stars-galaxy.gif)' }}
            className={`w-full min-h-[100vh] flex flex-col items-center bg-fixed justify-center md:py-16 py-10 px-10
        bg-fill bg-center gap-y-10 bg-zinc-900 text-white text-center ${className}`}>
            <h2 data-aos='fade-down'
                className='space-y-2 text-2xl font-semibold'>
                <span className='text-3xl'>Thank You ^^</span> <br /> <br />
                Jangan lupa datang ke pesta ulang tahunku ya~ <br />
                Akan ada banyak kejutan seru yang sudah aku siapkan untuk kalian!
            </h2>
        </section>
    )
}

export default Thanks