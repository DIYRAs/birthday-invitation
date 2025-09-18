import { Button } from '@/components/ui/button'
import React from 'react'

const Cover = () => {
    return (
        <section id='cover'
            style={{ backgroundImage: 'url(backgrounds/bg.jpg)' }}
            className='w-full min-h-[100vh] flex flex-col items-center justify-between md:py-20 py-10
        bg-cover bg-center gap-y-5 text-white'>
            <div className='mt-20 space-y-3 text-center'>
                <p className='text-xl'>Happy Birthday</p>
                <h1 className='text-4xl font-bold tracking-wider backdrop-blur-xs'>
                    Diymas <br /> Ramadhan
                </h1>
            </div>

            <div className='flex flex-col items-center justify-center mb-10 gap-y-8'>
                <div style={{boxShadow: '0 0 16px gray'}}
                    className='flex flex-col items-center justify-center px-10 py-4 text-center border rounded-lg border-white/50 backdrop-blur-md bg-white/10'>
                    <p>
                        Kepada Yth. <br />
                        Bapak/ Ibu/ Saudara/ i <br />
                        <span className='text-lg font-semibold'>Tamu Undangan</span>
                    </p>
                </div>
                <Button className='px-10 py-5 transition hover:shadow-[0_0_15px_blue] shadow-[0_0_0_white] hover:animate-bounce border-2 border-blue-400 rounded-full cursor-pointer rainbow'>
                    Buka Undangan
                </Button>
            </div>

        </section>
    )
}

export default Cover