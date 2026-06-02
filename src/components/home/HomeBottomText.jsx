import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[f2] flex flex-col lg:flex-row items-center justify-center lg:gap-2 gap-4 w-full px-4 lg:px-0 pb-4 lg:pb-0'>
      <p className='lg:absolute relative lg:w-80 w-full lg:right-20 lg:bottom-40 lg:text-left text-center font-[f1] leading-tight text-sm lg:text-base mb-4 lg:mb-0 max-w-md lg:max-w-none'>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtr, on dit ce qui doit être dit, on fait ce qui doit être fait.
     </p>
      <div className='flex lg:gap-2 gap-4'>
        <div className='lg:border-6 border-2 lg:h-35 h-12 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-4 lg:px-5 border-white rounded-full uppercase'>
        <Link className='lg:text-[6vw] text-lg lg:mt-6' to='/projects'>Projects</Link>
        </div>
        <div className='lg:border-6 border-2 lg:h-35 h-12 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-4 lg:px-5 border-white rounded-full uppercase'>
        <Link className='lg:text-[6vw] text-lg lg:mt-6' to='/agence'>Agence</Link>
        </div>
      </div>
    </div>
  )
}

export default HomeBottomText
