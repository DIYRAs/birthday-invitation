'use client';

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos';

type CoverProps = {
    isItOpen: (itIs: boolean) => void;
};

const Cover = ({ isItOpen }: CoverProps) => {
    const coverRef = useRef<HTMLElement>(null)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = ''
        } else {
            document.body.style.overflow = 'hidden'
        }
    }, [isOpen])

    const handleOpenButton = () => {
        AOS.refresh()
        coverRef.current?.classList.add('translate-y-[-150%]')
        setIsOpen(true)
        isItOpen(true)
    }

    return (
        <section id='cover'
            ref={coverRef}
            style={{ backgroundImage: 'url(backgrounds/bg.jpg)' }}
            className='fixed z-[100] w-full min-h-[100dvh] transition duration-[5s] ease-in-out overflow-hidden flex flex-col items-center justify-between md:py-20 py-10
        bg-cover bg-center gap-y-5 text-white'>
            <div
                className='mt-20 space-y-3 text-center relative z-[1]'>
                <p data-aos='fade-down' className='text-xl'>Happy Birthday</p>
                <h1
                    data-aos='fade-down'
                    data-aos-delay='50'
                    className='text-4xl font-bold tracking-wider backdrop-blur-xs'>
                    Diymas <br /> Ramadhan
                </h1>
            </div>

            <div
                className='flex flex-col relative z-[1] items-center justify-center mb-10 gap-y-8'>
                <div style={{ boxShadow: '0 0 16px gray' }}
                    className='flex flex-col items-center justify-center px-10 py-4 text-center border rounded-lg border-white/50 backdrop-blur-md bg-white/10'>
                    <p>
                        Kepada Yth. <br />
                        Bapak/ Ibu/ Saudara/ i <br />
                        <span className='text-lg font-semibold'>Tamu Undangan</span>
                    </p>
                </div>
                <Button onClick={handleOpenButton}
                    className='px-10 py-5 transition rounded-full shadow-lg cursor-pointer select-none hover:translate-y-1 hover:shadow-none active:translate-y-1 active:shadow-none shadow-gray-700'>
                    Buka Undangan
                </Button>
            </div>

            <div
                data-aos='fade-down'
                data-aos-delay='250'
                className='absolute top-[-10%] right-[-23%] '>
                <Image
                    src={'/images/astronot_fly.png'}
                    alt='foto astronot terbang'
                    height={300}
                    width={300}
                    className='z-0 object-cover object-center astronot-animation scale-70' />
            </div>

            <div
                data-aos={'fade-up'}
                className='absolute bottom-[-250px]'>
                <Image
                    src={'/images/bulan.png'}
                    alt='bulan'
                    height={600}
                    width={600}
                    className='scale-110 w-[450px] h-[450px] moon-rotate z-0 object-contain object-center' />
            </div>

        </section>
    )
}

export default Cover