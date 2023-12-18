import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='h-full w-full relative flex flex-col'>
        <video
            autoPlay
            muted
            loop
            className='rotate-180 absolute top-[-350px] left-0 z-[1] w-full object-cover'
        >
            <source src='/blackhole.webm' type='video/webm' />
        </video>
        <HeroContent />
    </div>
  )
}

export default Hero