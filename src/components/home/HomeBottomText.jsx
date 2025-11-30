import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[f2] flex items-center justify-center gap-2'>
      <p className='absolute lg:w-80 w-40 lg:right-20 right-0 lg:bottom-40 bottom-90  font-[f1]  leading-tight'>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtr, on dit ce qui doit être dit, on fait ce qui doit être fait.
     </p>
      <div className='lg:border-6 border-2 lg:h-35 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-2 pt-1 lg:px-5 border-white rounded-full uppercase'>
      <Link className='text-[6vw]  lg:mt-6' to='/projects'>Projects</Link>
      </div>
      <div className='lg:border-6 border-2 lg:h-35  hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-2 pt-1 lg:px-5 border-white rounded-full uppercase'>
      <Link className='text-[6vw]  lg:mt-6' to='/agence'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
