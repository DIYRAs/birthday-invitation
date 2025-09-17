import React from 'react'
import Cover from './ui/main/pages/cover'
import Opening from './ui/main/pages/opening'
import Event from './ui/main/pages/event'
import RSVP from './ui/main/pages/rsvp'
import Gallery from './ui/main/pages/gallery'
import Gift from './ui/main/pages/gift'
import Thanks from './ui/main/pages/thanks'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-start *:w-full *:max-w-[400px] overflow-x-hidden'>
      {/* Cover Section */}
      <Cover />
      <Opening />
      <Event />
      <RSVP />
      <Gallery />
      <Gift />
      <Thanks />
    </div>
  )
}

export default Home