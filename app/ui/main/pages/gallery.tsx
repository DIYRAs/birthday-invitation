'use client';

import { ArrowBigLeft, ArrowBigRight, ArrowLeftCircle, ArrowRightCircle, CircleX } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const Gallery = ({ className }: { className?: string }) => {
    const [currentSlide, setCurrentSlide] = useState(1)
    const [visible, setVisible] = useState({
        status: false,
        startIndex: 0
    })
    const { status, startIndex } = visible

    const images = [
        [
            {
                'src': '/images/ph.webp',
                'alt': 'foto galeri',
                'id': 0
            },
            {
                'src': '/images/ph2.webp',
                'alt': 'foto galeri',
                'id': 1
            },
            {
                'src': '/images/ph3.webp',
                'alt': 'foto galeri',
                'id': 2
            },
            {
                'src': '/images/ph.webp',
                'alt': 'foto galeri',
                'id': 3
            },
        ],
        [
            {
                'src': '/images/ph2.webp',
                'alt': 'foto galeri',
                'id': 4
            },
            {
                'src': '/images/ph3.webp',
                'alt': 'foto galeri',
                'id': 5
            },
            {
                'src': '/images/ph.webp',
                'alt': 'foto galeri',
                'id': 6
            },
            {
                'src': '/images/ph2.webp',
                'alt': 'foto galeri',
                'id': 7
            },
        ],
        [
            {
                'src': '/images/ph3.webp',
                'alt': 'foto galeri',
                'id': 8
            },
            {
                'src': '/images/ph.webp',
                'alt': 'foto galeri',
                'id': 9
            },
            {
                'src': '/images/ph2.webp',
                'alt': 'foto galeri',
                'id': 10
            },
            {
                'src': '/images/ph3.webp',
                'alt': 'foto galeri',
                'id': 11
            },
        ],
    ]

    const allImages = images.flat()

    const handleSwitchSlide = (direction: 'left' | 'right') => {
        setCurrentSlide(prev => {
            if (direction === 'right') {
                return prev === images.length - 1 ? 0 : prev + 1;
            }
            if (direction === 'left') {
                return prev === 0 ? images.length - 1 : prev - 1;
            }
            return prev;
        });
    };

    const handleVisible = (id: number) => {
        setVisible({
            status: true,
            startIndex: id
        })
    }

    const handleVisibleSlide = (direction: 'left' | 'right') => {
        setVisible(prev => {
            if (direction === 'right') {
                return {
                    ...prev,
                    startIndex: (prev.startIndex + 1) % allImages.length,
                };
            }

            if (direction === 'left') {
                return {
                    ...prev,
                    startIndex:
                        (prev.startIndex - 1 + allImages.length) % allImages.length,
                };
            }

            return prev;
        });
    };


    return (
        <section id='gallery'
            className={`w-full relative min-h-[100vh] flex flex-col items-center overflow-y-hidden justify-start md:py-16 py-10 px-10 overflow-x-hidden
        bg-center bg-fixed gap-y-10 text-white text-center ${className}`}>
            <h2 data-aos='fade-up'
                className='mt-10 text-2xl font-semibold'>
                Galeri Foto
            </h2>

            <div className='flex flex-col items-center justify-start mt-16'>
                <div className='relative grid grid-cols-2 gap-3 place-items-center'>
                    {images[currentSlide].map((item, index) => (
                        <Image
                            data-aos={index % 2 == 0 ? 'fade-up-right' : 'fade-up-left'}
                            data-aos-delay={`${index * 200}`}
                            key={`${currentSlide}-${index}`}
                            src={item.src}
                            alt={item.alt}
                            height={200}
                            width={200}
                            onClick={() => { handleVisible(item.id) }}
                            className='object-cover rounded-xl object-center h-[120px] w-[170px] select-none' />
                    ))}

                    {status &&
                        <div className='absolute z-[100] w-full h-[350px] -top-6 flex flex-col place-items-center'>
                            <div className='relative w-full h-[350px] flex items-center justify-center'>
                                <Image
                                    src={allImages[startIndex].src}
                                    alt='orang'
                                    fill
                                    className='object-cover object-center w-full h-full border-8 select-none rainbow rounded-xl' />

                                <div className='relative z-10 flex items-center justify-between w-full *:cursor-pointer *:select-none *:active:text-black *:transition'>
                                    <ArrowLeftCircle onClick={() => { handleVisibleSlide('left') }}
                                        size={48} className='rounded-full bg-white/30 text-black/50' />

                                    <ArrowRightCircle onClick={() => { handleVisibleSlide('right') }}
                                        size={48} className='rounded-full bg-white/30 text-black/50' />
                                </div>
                            </div>

                            <CircleX size={50} className='self-center w-full py-2 backdrop-blur-sm' onClick={() => {
                                setVisible({ status: false, startIndex: 0 })
                            }} />
                        </div>}
                </div>

                <div className='flex z-50 relative items-center justify-center mt-5 gap-x-5 *:hover:scale-90 *:transition *:cursor-pointer *:active:scale-110'>
                    <div data-aos='fade-up-right'>
                        <ArrowBigLeft onClick={() => { handleSwitchSlide('left') }} size={36} />
                    </div>
                    <div data-aos='fade-up-left'>
                        <ArrowBigRight data-aos='fade-up-left' onClick={() => { handleSwitchSlide('right') }} size={36} />
                    </div>
                </div>
            </div>

            {/* Animation */}
            <div data-aos='fade-up-left'
                className='absolute top-0 w-24 h-24 right-3 md:right-7'>
                <Image
                    src={'images/earth.webp'}
                    alt='gambar bumi'
                    height={150}
                    width={150}
                    className='object-cover object-center w-full h-full astronot-animation' />
            </div>
        </section>
    )
}

export default Gallery