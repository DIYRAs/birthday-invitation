'use client';

import { Button } from '@/components/ui/button'
import { GiftCard } from '@/components/ui/card';
import { BanknoteArrowUp, GiftIcon } from 'lucide-react'
import React, { useState } from 'react'

const Gift = ({ className }: { className?: string }) => {
    const [isGift, setIsGift] = useState(false)
    const [giftOption, setGiftOption] = useState('')
    const [rek, setRek] = useState({
        rek1: '12345678',
        rek2: '87654321'
    })
    const { rek1, rek2 } = rek

    const handleGiftVisible = (option: 'cl' | 'c') => {
        setIsGift(true)

        if (option === 'cl') {
            setGiftOption('cl')
        } else {
            setGiftOption('c')
        }
    }

    const handleCopy = (noRek: string) => {
        navigator.clipboard.writeText(noRek)
            .then(() => alert('hore'))
            .catch(err => console.error(err));
    }

    return (
        <section id='gift'
            className={`w-full min-h-[100vh] flex flex-col items-center justify-center md:py-16 py-10 px-10 overflow-x-hidden
    bg-center bg-fixed gap-y-10 text-white text-center ${className}`}>
            <h2 data-aos='fade-up'
                className='text-2xl font-semibold'>
                TANDA KASIH
            </h2>

            <p data-aos='fade-up'
                className='text-[15px]'>
                Kami mengucapkan terima kasih yang sebesar-besarnya atas kehadiran dan hadiah
                indah yang telah menambah kebahagiaan di hari ulang tahun anak kami.
            </p>

            <div className='flex items-center justify-center gap-7 *:w-7/12 **:cursor-pointer *:drop-shadow-[0_0_4px_gray] *:hover:animate-pulse'>
                <div data-aos='fade-up-right' className='w-20'>
                    <Button
                        onClick={() => { handleGiftVisible('cl') }}
                        className='border-2 border-white transition w-full hover:-translate-y-0.5'>
                        Transfer <BanknoteArrowUp size={36} />
                    </Button>
                </div>

                <div data-aos='fade-up-left'>
                    <Button
                        onClick={() => { handleGiftVisible('c') }}
                        className='border-2 border-white transition w-full hover:-translate-y-0.5'>
                        Kirim Kado <GiftIcon size={36} />
                    </Button>
                </div>
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
                                rek={rek1}
                                opt='BCA'
                                an='DIYRA'
                                func={() => { handleCopy(rek1) }} />

                            <GiftCard
                                rek={rek2}
                                opt='BCA'
                                an='DIYRA'
                                func={() => { handleCopy(rek2) }} />
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