'use client';

import React, { useState } from 'react'
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

const RSVP = ({ className }: { className?: string }) => {
    const [kehadiran, setKehadiran] = useState(false)

    return (
        <section id='event'
            className={`w-full min-h-[100vh] flex flex-col items-center justify-center md:py-16 py-10 px-10
    bg-center gap-y-10 text-white text-center ${className}`}>
            <div
                data-aos='fade-up-left'
                className='w-40 h-40'>
                <Image
                    src={'images/astronot_roket.png'}
                    alt='astronot naik roket'
                    width={300}
                    height={300}
                    className='object-cover object-center w-full h-full astronot-animation' />
            </div>

            <div className='space-y-6'>
                <h2 data-aos='fade-up'
                    className='text-3xl font-semibold'>
                    Kirim ucapan dan konfirmasi kehadiran
                </h2>

                <Dialog>
                    <form>
                        <DialogTrigger asChild>
                            <Button data-aos='fade-up'
                                data-aos-delay='200'
                                variant="outline"
                                className='text-black transition rounded-full cursor-pointer hover:-translate-y-1
                                drop-shadow-[0px_0px_10px_gray] hover:animate-pulse'>
                                Kirim ucapan RSVP
                            </Button>
                        </DialogTrigger>
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
                                    <Label htmlFor="message">Your message</Label>
                                    <Textarea placeholder="Type your message here." id="message" />
                                </div>
                            </div>
                            <DialogFooter className='flex items-center !justify-center'>
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
        </section>
    )
}

export default RSVP