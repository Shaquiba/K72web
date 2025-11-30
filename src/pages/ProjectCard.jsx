import React from 'react'

const ProjectCard = (props) => {
  return (
         <>
          <div className='lg:w-1/2 h-full group transition-all relative rounded-none hover:rounded-4xl overflow-hidden'>
          <img className='h-full w-full object-cover' src={props.image1} alt="" />
          <div className=' h-full opacity-0 group-hover:opacity-100 transition-all w-full flex items-center justify-center  absolute top-0 left-0 bg-black/10'>
            <h2 className='uppercase text-3xl font-[f1] border-2 rounded-full pt-2 px-4'>Vior le Project</h2>
          </div>
          </div>
           <div className='lg:w-1/2 h-full group transition-all relative rounded-none hover:rounded-4xl overflow-hidden'>
          <img className='h-full w-full object-cover' src={props.image2} alt="" />
          <div className=' h-full opacity-0 group-hover:opacity-100 transition-all w-full flex items-center justify-center  absolute top-0 left-0 bg-black/10'>
            <h2 className='uppercase text-3xl font-[f1] border-2 rounded-full pt-2 px-4'>Vior le Project</h2>
          </div>
          </div>
         </>
  )
}

export default ProjectCard