'use client';
import { useEffect, useState } from 'react'
import Cover from './ui/main/pages/cover'
import Opening from './ui/main/pages/opening'
import Event from './ui/main/pages/event'
import RSVP from './ui/main/pages/rsvp'
import Gallery from './ui/main/pages/gallery'
import Gift from './ui/main/pages/gift'
import Thanks from './ui/main/pages/thanks'
import AOS from 'aos'
import Image from 'next/image';

const Home = () => {

  const [loading, setLoading] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = (itIs: boolean) => {
    setIsOpen(itIs)
  }

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        AOS.refreshHard();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => window.removeEventListener('load', handleLoad)
  }, [])

  if (loading) {
    return (
      <div className='fixed inset-0 z-[999] flex items-center justify-center bg-black text-white'>
        <div className='bg-blue-400 shadow-[0_0_20px_lightblue] rounded-full w-20 h-20 animate-bounce' />
      </div>
    )
  }

  return (
    <div
      style={{ scrollbarWidth: 'none' }}
      className='flex flex-col items-center relative justify-start w-full max-w-[400px] *:w-full *:max-w-[400px] overflow-x-hidden'
    >
      <Cover isItOpen={handleIsOpen} />
      {isOpen && <>
        <Opening />
        <Event />
        <RSVP />
        <Gallery />
        <Gift />
        <Thanks />
      </>}
    </div>
  )
}

export default Home
