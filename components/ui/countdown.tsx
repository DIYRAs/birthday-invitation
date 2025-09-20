import React, { useEffect, useState } from 'react'

interface CountdownProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string
}

const Countdown = ({ className, ...props }: CountdownProps) => {
    const targetDate: number = new Date('September 22, 2025 08:00:00').getTime()

    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const { days, hours, minutes, seconds } = time

    useEffect(() => {
        const interval = setInterval(() => {
            const now: number = new Date().getTime()
            const difference: number = targetDate - now

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24))
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
                const seconds = Math.floor((difference % (1000 * 60)) / 1000)

                setTime({ days, hours, minutes, seconds })
            } else {
                setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
                clearInterval(interval)
            }

            return () => clearInterval(interval)
        }, 1000);
    }, [targetDate])

    return (
        <div id='countdown'
            {...props}
            className={`flex flex-row items-center justify-center *:w-16 *:h-16 *:md:w-17 *:md:h-17 *:text-center
            *:rounded-full *:leading-4 *:bg-white text-black gap-3 md:gap-5
            *:flex *:flex-col *:items-center *:justify-center *:pb-1
            ${className}`}>
            <p>
                <span className='text-3xl font-bold'>{String(days).padStart(2, '0')}</span>
                <span>
                    Hari
                </span>
            </p>
            <p>
                <span className='text-3xl font-bold'>{String(hours).padStart(2, '0')}</span>
                <span>
                    Jam
                </span>
            </p>
            <p>
                <span className='text-3xl font-bold'>{String(minutes).padStart(2, '0')}</span>
                <span>
                    Menit
                </span>
            </p>
            <p>
                <span className='text-3xl font-bold'>{String(seconds).padStart(2, '0')}</span>
                <span>
                    Detik
                </span>
            </p>
        </div>
    )
}

export default Countdown