'use client';

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const RSVP = ({ className }: { className?: string }) => {
    const [kehadiran, setKehadiran] = useState(false)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to('.meteor-rsvp', {
            scrollTrigger: {
                trigger: '.trigger-meteor',
                start: 'top bottom',
                toggleActions: 'play none none none',
                markers: true
            },
            opacity: 1,
            y: 300,
            x: -600,
            duration: 6,
            ease: 'power1.inOut'
        })
    }, [])

    return (
        <section id='event'
            className={`w-full relative min-h-[100vh] flex flex-col items-center justify-center md:py-16 py-10 px-10
    bg-center bg-fixed z-0 gap-y-10 text-white text-center ${className}`}>
            <div
                data-aos='fade-up-left'
                className='w-40 h-40 relative z-[1] trigger-meteor'>
                <Image
                    src={'images/astronot_roket.webp'}
                    alt='astronot naik roket'
                    width={300}
                    height={300}
                    className='object-cover object-center w-full h-full astronot-animation' />
            </div>

            <div className='space-y-6  relative z-[1]'>
                <h2 data-aos='fade-up'
                    className='text-3xl font-semibold'>
                    Kirim ucapan dan konfirmasi kehadiran
                </h2>

                {/* open rsvp */}
                <Dialog>
                    <form>
                        <div data-aos='fade-up'
                            data-aos-delay='200'>
                            <DialogTrigger asChild>
                                <Button
                                    variant="outline"
                                    className='text-black transition rounded-full cursor-pointer hover:-translate-y-1
                                drop-shadow-[0px_0px_10px_gray] hover:animate-pulse'>
                                    Kirim ucapan RSVP
                                </Button>
                            </DialogTrigger>
                        </div>
                        <DialogContent style={{ scrollbarWidth: 'none' }}
                            className="sm:max-w-[425px] max-h-11/12 overflow-auto">
                            <DialogHeader>
                                <DialogTitle>Ucapan dan RSVP</DialogTitle>
                                <DialogDescription className='text-[16px]'>
                                    Yuk, konfirmasi kehadiranmu dan tuliskan doa atau ucapan manis untuk DIYRA ya!
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4">
                                {/* nama */}
                                <div className="grid gap-3">
                                    <Label htmlFor="nama">Nama</Label>
                                    <Input id="nama" name="nama" placeholder='Nama kamu' />
                                </div>

                                {/* konfirmasi kehadiran */}
                                <div className="grid gap-3">
                                    <Label htmlFor="kehadiran">Konfirmasi Kehadiran</Label>
                                    <Select onValueChange={(value: string) => setKehadiran(value === 'hadir')}>
                                        <SelectTrigger id='kehadiran' className="w-full">
                                            <SelectValue placeholder="Konfirmasi kehadiran kamu" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Kehadiran</SelectLabel>
                                                <SelectItem value="hadir">Hadir</SelectItem>
                                                <SelectItem value="tidak_hadir">Tidak Hadir</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* jumlah tamu */}
                                {kehadiran && <div className="grid gap-3">
                                    <Label htmlFor="kehadiran">Konfirmasi Jumlah Tamu</Label>
                                    <Select>
                                        <SelectTrigger id='kehadiran' className="w-full">
                                            <SelectValue placeholder="Jumlah tamu yang berhadir" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Jumlah Tamu</SelectLabel>
                                                <SelectItem value="1">1</SelectItem>
                                                <SelectItem value="2">2</SelectItem>
                                                <SelectItem value="3">3</SelectItem>
                                                <SelectItem value="4">4</SelectItem>
                                                <SelectItem value="5">5</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>}

                                {/* ucapan dan doa */}
                                <div className="grid w-full gap-3">
                                    <Label htmlFor="message">Doa dan Ucapan</Label>
                                    <Textarea placeholder="Tulis Doa dan Ucapan kamu disini ya" id="message" />
                                </div>
                            </div>
                            <DialogFooter className='flex items-center flex-row !justify-center gap-x-10'>
                                <DialogClose asChild>
                                    <Button variant="outline">Tutup</Button>
                                </DialogClose>
                                <Button type="submit">Kirim</Button>
                            </DialogFooter>

                            {/* Ucapan dan RSVP display */}
                            <div style={{ scrollbarWidth: 'thin' }}
                                className='flex flex-col items-center justify-start gap-y-3 max-h-[250px] overflow-auto'>
                                <div className='flex flex-col items-start justify-start pb-3 border-b border-b-black/50'>
                                    <h3 className='text-[17px] font-semibold leading-1'>
                                        DIYRA
                                        <span className='px-2 ml-2 text-xs font-normal bg-blue-200 rounded-full'>
                                            Hadir
                                        </span>
                                    </h3>
                                    <h4 className='text-sm'>20 januari 2024 at 20.00</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </DialogContent>
                    </form>
                </Dialog>
            </div>

            {/* Animasi addon */}
            <Image
                src={'images/meteor-biru.webp'}
                alt='meteor warna biru'
                width={200}
                height={100}
                className='absolute meteor-rsvp bottom-[60%] opacity-0 z-0 right-[-35%] rotate-[-8deg] object-cover object-center' />
        </section>
    )
}

export default RSVP