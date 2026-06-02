import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[f1] pt-5 text-center mt-8 sm:mt-12 lg:mt-0'>
        <div className='lg:text-[9.5vw] text-[12vw]  justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>L'étincelle</div>
        <div className='lg:text-[9.5vw] text-[12vw]  justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>qui <div className='lg:h-[8vw] h-[10vw] rounded-full lg:-mt-5 -mt-2 overflow-hidden w-[16vw] lg:w-auto'>
            <Video />
            </div>génère</div>
        <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>la créativité</div>
    </div>
  )
}

export default HomeHeroText