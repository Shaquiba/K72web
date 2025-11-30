import React from 'react'
import ProjectCard from './ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {
    
    const projects = [{
        image1:'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
       image2: 'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757'
    },{
        image1:'https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124',
       image2:'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47'
    },{
       image1: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022',
        image2:'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c'
    },{
       image1: 'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda',
        image2:'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b'
    }
    ]


   gsap.registerPlugin(ScrollTrigger)
   useGSAP(function(){
    gsap.from('.hero',{
        height:'100px',
        stagger:{
        amount:0.4
        },
        scrollTrigger:{
         trigger:'.lol',
            markers:false,
            start:'top 100%',
            end:'top -150%',
            scrub:true
        }
    })
   })




  return (
   <div className='lg:p-4 p-2 '>
    <div className='pt-[45vh]'>
        <h2 className='font-[f2] lg:text-[9vw] text-5xl uppercase text-black'>Projects</h2>
    </div>
    <div className='-lg:mt-10 lol'>
       {projects.map(function(elem){
        return  <div className=' hero w-full lg:h-[400px]  flex lg:flex-row flex-col lg:gap-3 gap-1 mb-3  '>
        <ProjectCard image1={elem.image1} image2={elem.image2} />
        </div>
       })}
    </div>
   </div>
  )
}

export default Projects