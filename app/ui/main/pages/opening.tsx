'use client';

import Image from 'next/image'
import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Opening = ({ className }: { className?: string }) => {
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.to('.openingItem', {
            scrollTrigger: {
                trigger: '#event',
                end: 'bottom top',
                scrub: 5,
                markers: true
            },
            translateY: () => {
                const el = document.getElementById('event');
                return el ? el.offsetHeight + 200 : 0;
            }
        })
    }, [])

    return (
        <section id='opening'
            className={`w-full min-h-[100vh] bg-fixed relative flex flex-col items-center justify-start md:py-20 py-10
        bg-center gap-y-8 text-white text-center ${className}`}>
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
                src={'/images/ph.webp'}
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

            <div className='absolute z-[1] openingItem bottom-0 left-[-10%] scale-[0.6]'>
                <div data-aos='fade-up-right'
                    data-aos-delay='1000'>
                    <Image
                        src={'images/astronot_iss.webp'}
                        alt='foto astronot'
                        width={200}
                        height={300}
                        className='astronot-animation' />
                </div>
            </div>

            <div className='absolute z-[1] openingItem bottom-0 yanglain right-[-10%] scale-x-[-1]'>
                <div data-aos='fade-up-right'
                    data-aos-delay='1000'>
                    <Image
                        src={'images/astronot_iss.webp'}
                        alt='foto astronot'
                        width={200}
                        height={300}
                        className='astronot-animation scale-[0.6]' />
                </div>
            </div>
        </section>
    )
}

export default Opening