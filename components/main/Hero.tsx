import React from 'react'
import HeroContent from '../sub/HeroContent'


const Hero = () => {
  return (
      <div className='relative flex flex-col h-full w-full'>
          <video
              autoPlay
              muted
              loop
              className='absolute  rotate-180  left-0 z-1 xl:top-[-20rem] top-[-2rem] md:top-[-160px] 2xl:top-[-700px]'
          >
              <source src='/spacevid.mp4' type='video/mp4' />
              {/* <source src='/blackhole.webm' type='video/webm'/> */}
          </video>
          <HeroContent/>
          </div>
  )
}

export default Hero