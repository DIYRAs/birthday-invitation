'use client';

import { Button } from '@/components/ui/button'
import { GiftCard } from '@/components/ui/card';
import { BanknoteArrowUp, GiftIcon } from 'lucide-react'
import React, { useState } from 'react'

const Gift = ({ className }: { className?: string }) => {
    const [isGift, setIsGift] = useState(false)
    const [giftOption, setGiftOption] = useState('')

    const handleGiftVisible = (option: 'cl' | 'c') => {
        setIsGift(true)

        if (option === 'cl') {
            setGiftOption('cl')
        } else {
            setGiftOption('c')
        }
    }

    return (
        <section id='gift'
            className={`w-full min-h-[100vh] flex flex-col items-center justify-center md:py-16 py-10 px-10 overflow-x-hidden
    bg-center gap-y-10 text-white text-center ${className}`}>
            <h2 data-aos='fade-up'
                className='text-2xl font-semibold'>
                TANDA KASIH
            </h2>

            <p data-aos='fade-up'
                className='text-[15px]'>
                Kami mengucapkan terima kasih yang sebesar-besarnya atas kehadiran dan hadiah
                indah yang telah menambah kebahagiaan di hari ulang tahun anak kami.
            </p>

            <div className='flex items-center justify-center gap-7 *:w-6/12 *:cursor-pointer *:drop-shadow-[0_0_4px_gray] *:hover:-translate-y-0.5 *:hover:animate-pulse'>
                <Button data-aos='fade-up-right'
                    onClick={() => { handleGiftVisible('cl') }}
                    className='border-2 border-white'>
                    Transfer <BanknoteArrowUp size={36} />
                </Button>

                <Button data-aos='fade-up-left'
                    onClick={() => { handleGiftVisible('c') }}
                    className='border-2 border-white'>
                    Kirim Kado <GiftIcon size={36} />
                </Button>
            </div>

            {/* Gift Option */}
            {isGift &&
                <div data-aos='fade-up'
                    key={giftOption}
                    className='flex items-center justify-center w-full h-max'>
                    {giftOption === 'cl' ? (
                        // CASHLESS
                        <div className='flex flex-col items-start justify-center w-full h-full gap-5'>
                            <GiftCard
                                rek={'12345678'}
                                opt='BCA'
                                an='DIYRA' />

                            <GiftCard
                                rek={'12345678'}
                                opt='BCA'
                                an='DIYRA' />
                        </div>
                    ) : (
                        // CASH
                        <div>
                            <p className='text-[15px]'>
                                Ingin berbagi kado? Bisa kirim langsung ke: <br />
                                <span className='font-semibold'>
                                    Jl. Nama Jalan No. 11, Banjarmasin Utara 12345.
                                </span>
                            </p>
                        </div>
                    )}

                </div>}
        </section>
    )
}

export default Gift