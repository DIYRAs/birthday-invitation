'use client';

import Countdown from '@/components/ui/countdown'
import Link from 'next/link'
import React from 'react'

const Event = ({ className }: { className?: string }) => {

    return (
        <section id='event'
            style={{ backgroundImage: 'url(backgrounds/stars-galaxy.gif)' }}
            className={`w-full min-h-[100vh] flex flex-col items-center bg-fixed justify-start md:py-16 py-10
        bg-fill bg-center gap-y-10 bg-zinc-900 text-white text-center ${className}`}>
            <h2
                data-aos={'fade-up'}
                className='font-mono'>
                Detail Acara
            </h2>

            <div id='time'>
                <div data-aos='fade-up'
                    data-aos-delay='200'
                    className='text-lg font-semibold'>
                    <p>
                        Minggu, 13 Januari 2025
                    </p>
                    <p>
                        20:00 WITA — Selesai
                    </p>
                </div>

                <Countdown data-aos='fade-up' data-aos-delay='400' className='mt-8' />
            </div>

            <div
                data-aos='flip-up'
                id='location'
                className='flex flex-col items-center justify-center gap-5'>
                <iframe
                    title={'location map'}
                    src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.2196474108796!2d114.58741067437654!3d-3.2957119411229057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de4211bbc1be42d%3A0xd93490f4e3d79a8e!2sSMK%20Negeri%202%20Banjarmasin!5e0!3m2!1sid!2sid!4v1757731631562!5m2!1sid!2sid"}
                    style={{
                    }}
                    className='w-10/12 border-4 border-white border-double rounded-tl-4xl rounded-br-4xl'
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />

                <p
                    data-aos='fade-up'
                    className='px-8 text-sm'>
                    Jl. Brigjend H. Hasan Basri No.6, Sungai Miai, Kec. Banjarmasin Utara, Kota Banjarmasin, Kalimantan Selatan 70124
                </p>

                <Link
                    data-aos='fade-up'
                    data-aos-delay='200'
                    href={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.2196474108796!2d114.58741067437654!3d-3.2957119411229057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de4211bbc1be42d%3A0xd93490f4e3d79a8e!2sSMK%20Negeri%202%20Banjarmasin!5e0!3m2!1sid!2sid!4v1757731631562!5m2!1sid!2sid'}
                    className='px-5 py-2 bg-indigo-300 text-black rounded-full hover:animate-pulse hover:-translate-y-1
                    transition drop-shadow-[0_0_6px_#38bdf8] font-semibold'>
                    Lihat Lokasi
                </Link>
            </div>
        </section>
    )
}

export default Event