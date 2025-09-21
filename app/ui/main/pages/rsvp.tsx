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
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';

type RSVPItem = {
    id: number
    created_at: string
    name: string
    attendance: string
    number: number
    text: string
}

const RSVP = ({ className }: { className?: string }) => {
    const [RSVPItem, setRSVPItem] = useState<RSVPItem[]>([])
    const [kehadiran, setKehadiran] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [RSVPData, setRSVPData] = useState({
        name: '',
        attendance: '',
        number: 0,
        text: ''
    })
    const { name, attendance, number, text } = RSVPData

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target

        setRSVPData((prev) => ({ ...prev, [name]: value }))
    }
    const handleSelectKehadiran = (value: string) => {
        setKehadiran(value === 'hadir')
        setRSVPData(prev => ({ ...prev, attendance: value }))
    }
    const handleSelectJumlah = (value: string) => {
        setRSVPData(prev => ({ ...prev, number: Number(value) }))
    }

    const readRSVP = async () => {
        const { data: RSVP, error } = await supabase
            .from('RSVP')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            console.error(error);
        } else {
            setRSVPItem(RSVP)
            console.log(RSVP)
        }
    }

    const handleSubmit = async () => {
        setIsLoading(true)
        if (name === '' || attendance === '' || text === '') {
            toast.error('Pastikan data untuk RSVPnya udah diisi semua ya 😊')
            setIsLoading(false)
            return
        }
        if (attendance === 'hadir' && number === 0) {
            toast.error('Pastikan data untuk RSVPnya udah diisi semua ya 😊')
            setIsLoading(false)
            return
        }

        const { data, error } = await supabase
            .from('RSVP')
            .insert([
                { name, attendance, number, text },
            ])
            .select()

        if (error) {
            console.error(error);
        } else {
            toast.success('🎉 RSVP kamu berhasil terkirim! Terima kasih sudah mengisi konfirmasi kehadiran.')
            readRSVP()
            setRSVPData({
                name: '',
                attendance: '',
                number: 0,
                text: ''
            })
        }
        setIsLoading(false)
    }

    useEffect(() => {
        readRSVP()
        gsap.registerPlugin(ScrollTrigger)

        gsap.to('.meteor-rsvp', {
            scrollTrigger: {
                trigger: '.trigger-meteor',
                start: 'top bottom',
                toggleActions: 'play none none none',
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
                    className='object-cover relative z-[2] object-center w-full h-full astronot-animation' />
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
                                    <Input id="nama"
                                        name="name"
                                        value={RSVPData.name}
                                        onChange={handleInput}
                                        required
                                        placeholder='Nama kamu' />
                                </div>

                                {/* konfirmasi kehadiran */}
                                <div className="grid gap-3">
                                    <Label htmlFor="kehadiran">Konfi rmasi Kehadiran</Label>
                                    <Select onValueChange={handleSelectKehadiran} required>
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
                                    <Label htmlFor="jumlah">Konfirmasi Jumlah Tamu</Label>
                                    <Select onValueChange={handleSelectJumlah} required>
                                        <SelectTrigger id='jumlah' className="w-full">
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
                                    <Textarea id="message"
                                        name='text'
                                        value={RSVPData.text}
                                        onChange={handleInput}
                                        required
                                        placeholder="Tulis Doa dan Ucapan kamu disini ya" />
                                </div>
                            </div>
                            <DialogFooter className='flex items-center flex-row !justify-center gap-x-10'>
                                <DialogClose asChild>
                                    <Button className='cursor-pointer' variant="outline">Tutup</Button>
                                </DialogClose>
                                <Button
                                    className='cursor-pointer'
                                    disabled={isLoading}
                                    onClick={handleSubmit}
                                    type="submit">Kirim</Button>
                            </DialogFooter>

                            {/* Ucapan dan RSVP display */}
                            <div style={{ scrollbarWidth: 'thin' }}
                                className='flex flex-col items-center justify-start gap-y-4 mt-3 max-h-[300px] overflow-auto'>
                                {RSVPItem.map((item, index) => (
                                    <div key={index}
                                        className='flex flex-col items-start justify-start w-full pb-3 border-b border-b-black/50'>
                                        {/* nama */}
                                        <h3 className='text-[18px] font-semibold leading-1'>
                                            {item.name}
                                            <span className={`${item.attendance === 'hadir' ? 'bg-blue-200' : 'bg-red-200'}
                                            px-2 ml-2 text-xs pb-0.5 font-normal rounded-full`}>
                                                {item.attendance === 'tidak_hadir' ? 'tidak hadir' : item.attendance}
                                            </span>
                                        </h3>

                                        {/* tanggal */}
                                        <h4 className='text-xs'>
                                            {new Date(item.created_at).toLocaleString('id-ID', {
                                                day: '2-digit', month: 'long', year: 'numeric',
                                                hour: '2-digit', minute: '2-digit'
                                            })}
                                        </h4>

                                        {/* doa dan ucapan */}
                                        <p>
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
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

            <div data-aos='fade-up-right'
                className='absolute bottom-12 w-14 h-14 left-7'>
                <Image
                    src={'images/zamoon.webp'}
                    alt='gambar bulan'
                    height={100}
                    width={100}
                    className='object-cover object-center w-full h-full astronot-animation' />
            </div>
        </section>
    )
}

export default RSVP