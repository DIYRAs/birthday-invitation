'use client'
import { useEffect } from 'react'
import AOS from 'aos'
import React from 'react'
import Cover from './ui/main/pages/cover'
import Opening from './ui/main/pages/opening'
import Event from './ui/main/pages/event'
import RSVP from './ui/main/pages/rsvp'
import Gallery from './ui/main/pages/gallery'
import Gift from './ui/main/pages/gift'
import Thanks from './ui/main/pages/thanks'


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div style={{ scrollbarWidth: 'none' }}
      className='flex flex-col items-center snap-y snap-mandatory h-screen overflow-y-auto justify-start *:w-full *:max-w-[400px] overflow-x-hidden'>
      {/* Cover Section */}
      <Cover />
      <Opening className='snap-start' />
      <Event className='snap-start' />
      <RSVP className='snap-start' />
      <Gallery className='snap-start' />
      <Gift className='snap-start' />
      <Thanks className='snap-start' />
    </div>
  )
}

export default Home