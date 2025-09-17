import React from 'react'

interface CountdownProps {
    className?: string
}

const Countdown = ({ className }: CountdownProps) => {
    return (
        <div id='countdown'
            className={`flex flex-row items-center justify-center *:w-16 *:h-16 *:md:w-17 *:md:h-17 *:text-center
            *:rounded-full *:leading-4 *:bg-white text-black gap-3 md:gap-5
            *:flex *:flex-col *:items-center *:justify-center
            ${className}`}>
            <p>
                <span className='text-3xl font-bold'>00</span>
                <span>
                    Hari
                </span>
            </p>
            <p>
                <span className='text-3xl font-bold'>00</span>
                <span>
                    Jam
                </span>
            </p>
            <p>
                <span className='text-3xl font-bold'>00</span>
                <span>
                    Menit
                </span>
            </p>
            <p>
                <span className='text-3xl font-bold'>00</span>
                <span>
                    Detik
                </span>
            </p>
        </div>
    )
}

export default Countdown