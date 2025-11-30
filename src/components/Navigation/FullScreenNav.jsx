import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import  { NavBarContext } from '../context/NavContext'

const FullScreenNav = () => {
 
    
    const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)

     const [navOpen, setnavOpen] = useContext(NavBarContext)

      function gsapAnimation(){
        const tl= gsap.timeline()
        tl.from('.stairing',{
          delay:0.25,
          height:0,
          stagger: {
            amount: -0.3
          }
        })
        tl.from('.link',{
          opacity:0,
          rotateX:90,
          stagger: {
            amount: 0.3
          }
        })
        tl.from('.navlink',{
          opacity:0
        })
      }
        useGSAP(()=>{
          if(navOpen){
            gsap.to('.fullscreennav',{
              display:'block'
            })
            gsapAnimation()
          }else{
            gsap.to('.fullscreennav',{
              display:'none'
            })
          }
      },[navOpen])
  return (
    <div ref={fullScreenRef} id='fullscreennav' className=' fullscreennav hidden  text-white overflow-hidden h-screen w-full  z-50 absolute bg-black '>
        <div className='h-screen w-full fixed'>
      <div className="h-full w-full flex">
        <div className="stairing h-full w-1/5 bg-black"></div>
        <div className="stairing h-full w-1/5 bg-black"></div>
        <div className="stairing h-full w-1/5 bg-black"></div>
        <div className="stairing h-full w-1/5 bg-black"></div>
        <div className="stairing h-full w-1/5 bg-black"></div>
      </div>
        </div>
        <div ref={fullNavLinksRef} className='relative'>
            <div className=' navlink flex w-full justify-between lg:p-3 p-1 items-start'>
            <div className='p-4'>
            <div className='w-25'>
            <svg className='w-full' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 103 44">
      <path  fill='white' fill-rule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
     </svg>
        </div>
        </div>
        <div onClick={()=>{
          setnavOpen(false)
        }} className='lg:h-32 h-16 w-16 lg:w-32  relative cursor-pointer'>
            <div className='lg:h-44 h-20 lg:w-1 w-0.5 bg-[#D3FD50] absolute -rotate-45 origin-top'></div>
            <div className='lg:h-44 h-20 lg:w-1 w-0.5 bg-[#D3FD50] absolute right-0 rotate-45 origin-top'></div>
        </div>
        </div>
        <div className='py-5'>
       </div>
        <div className='link relative origin-top border-t-1 border-white'>
                <h1 className='font-[f2] text-[6vw]  text-center leading-[0.8] pt-3 uppercase'>Projects</h1>
               <div className='movelink absolute text-black flex top-0 bg-[#D3FD50]'>
                    <div className=' moveX flex item-center' >
                   <h2 className='whitespace-nowrap overflow-hidden font-[f2] lg:text-[6vw] text-2xl text-center lg:leading-[0.8] lg:pt-3 pt-1 uppercase'>POUR TOUT VOIR</h2>
                   <img className='lg:h-20 h-10 rounded-full lg:w-50 w-20 object-cover px-2 py-2 shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                   <h2 className='whitespace-nowrap overflow-hidden font-[f2] lg:text-[6vw] text-2xl text-center lg:leading-[0.8] lg:pt-3 pt-1 uppercase'>POUR TOUT VOIR</h2>
                   <img className=' lg:h-20 h-10 rounded-full lg:w-50 w-20 object-cover px-2 py-2 shrink-0' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                    </div>
                    <div className='moveX flex item-center' >
                   <h2 className='whitespace-nowrap font-[f2] lg:text-[6vw] text-2xl text-center lg:leading-[0.8] lg:pt-3 pt-1 uppercase'>POUR TOUT VOIR</h2>
                   <img className='lg:h-20 h-10 rounded-full lg:w-50 w-20 object-cover px-2 py-2 shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                   <h2 className='whitespace-nowrap font-[f2] lg:text-[6vw] text-2xl text-center lg:leading-[0.8] lg:pt-3 pt-1 uppercase'>POUR TOUT VOIR</h2>
                   <img className=' lg:h-20 h-10 rounded-full lg:w-50 w-20 object-cover px-2 py-2 shrink-0' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                    </div>
                </div>
            </div>
            <div className='link relative origin-top  border-t-1 border-white'>
                <h1 className='font-[f2] text-[6vw]  text-center leading-[0.8] pt-3 uppercase'>Agence</h1>
               <div className='movelink absolute text-black flex top-0 bg-[#D3FD50]'>
                    <div className=' moveX flex item-center' >
                   <h2 className='whitespace-nowrap overflow-hidden font-[f2] lg:text-[6vw] text-2xl text-center lg:leading-[0.8] lg:pt-3 pt-1 uppercase'>POUR TOUT SAVIOUR</h2>
                   <img className='lg:h-20 h-10 rounded-full lg:w-50 w-20 object-cover px-2 py-2 shrink-0' src='https://k72.ca/images/teamMembers/CAMILLE_640X290_2.jpg?w=640&h=290&s=245670e7fb5e1d229c25bfc5129b8577' alt="" />
                   <h2 className='whitespace-nowrap overflow-hidden font-[f2] lg:text-[6vw] text-2xl text-center lg:leading-[0.8] lg:pt-3 pt-1 uppercase'>POUR TOUT SAVIOR</h2>
                   <img className=' lg:h-20 h-10 rounded-full lg:w-50 w-20 object-cover px-2 py-2 shrink-0' src="https://k72.ca/images/teamMembers/MEGGIE_640X290_2.jpg?w=640&h=290&s=547adc6f80885f8627de0683f7e03362" alt="" />
                    </div>
                    <div className='moveX flex item-center' >
                   <h2 className='whitespace-nowrap font-[f2] lg:text-[6vw] text-2xl text-center lg:leading-[0.8] lg:pt-3 pt-1 uppercase'>POUR TOUT SAVIOR</h2>
                   <img className='lg:h-20 h-10 rounded-full lg:w-50 w-20 object-cover px-2 py-2 shrink-0' src="https://k72.ca/images/teamMembers/CAMILLE_640X290_2.jpg?w=640&h=290&s=245670e7fb5e1d229c25bfc5129b8577" alt="" />
                   <h2 className='whitespace-nowrap font-[f2] lg:text-[6vw] text-2xl text-center lg:leading-[0.8] lg:pt-3 pt-1 uppercase'>POUR TOUT SAVIOR</h2>
                   <img className=' lg:h-20 h-10 rounded-full lg:w-50 w-20 object-cover px-2 py-2 shrink-0' src="https://k72.ca/images/teamMembers/MEGGIE_640X290_2.jpg?w=640&h=290&s=547adc6f80885f8627de0683f7e03362" alt="" />
                    </div>
                </div>
            </div>
            <div className='link relative  origin-top border-t-1 border-white'>
                <h1 className='font-[f2] text-[6vw]  text-center leading-[0.8] pt-3 uppercase'>contact</h1>
               <div className='movelink absolute text-black flex top-0 bg-[#D3FD50]'>
                    <div className=' moveX flex item-center' >
                   <h2 className='whitespace-nowrap overflow-hidden font-[f2] lg:text-[6vw] text-2xl text-center lg:leading-[0.8] lg:pt-3 pt-1 uppercase'>POUR ENVOYER UN FAX~</h2>
                   <img className='lg:h-20 h-10 rounded-full w-50 object-cover px-2 py-2 shrink-0' src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" alt="" />
                   <h2 className='whitespace-nowrap overflow-hidden font-[f2] lg:text-[6vw] text-2xl text-center lg:leading-[0.8] lg:pt-3 pt-1 uppercase'>POUR ENVOYER UN FAX~</h2>
                   <img className=' lg:h-20 h-10 rounded-full w-50 object-cover px-2 py-2 shrink-0' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                    </div>
                    <div className='moveX flex item-center' >
                   <h2 className='whitespace-nowrap font-[f2] lg:text-[6vw] text-2xl text-center lg:leading-[0.8] lg:pt-3 pt-1 uppercase'>POUR ENVOYER UN FAX~</h2>
                   <img className='lg:h-20 h-10 rounded-full w-50 object-cover px-2 py-2 shrink-0' src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" alt="" />
                   <h2 className='whitespace-nowrap font-[f2] lg:text-[6vw] text-2xl text-center lg:leading-[0.8] lg:pt-3 pt-1 uppercase'>POUR ENVOYER UN FAX~</h2>
                   <img className=' lg:h-20 h-10 rounded-full w-50 object-cover px-2 py-2 shrink-0' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                    </div>
                </div>
            </div>
            <div className='link relative  origin-top border-y-1 border-white'>
                <h1 className='font-[f2] text-[6vw]  text-center leading-[0.8] pt-3 uppercase'>blogue</h1>
               <div className='movelink absolute text-black flex top-0 bg-[#D3FD50]'>
                    <div className=' moveX flex item-center' >
                   <h2 className='whitespace-nowrap overflow-hidden font-[f2] lg:text-[6vw] text-2xl  text-center lg:leading-[0.8] lg:pt-3 pt-1 uppercase'>LIRE LES ARTICLES</h2>
                   <img className='lg:h-20 h-10 rounded-full lg:w-50 w-20 object-cover px-2 py-2 shrink-0' src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a" alt="" />
                   <h2 className='whitespace-nowrap overflow-hidden font-[f2] lg:text-[6vw] text-2xl  text-center lg:leading-[0.8] lg:pt-3 pt-1 uppercase'>LIRE LES ARTICLES</h2>
                   <img className=' lg:h-20 h-10 rounded-full lg:w-50 w-20 object-cover px-2 py-2 shrink-0' src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" />
                    </div>
                    <div className='moveX flex item-center' >
                   <h2 className='whitespace-nowrap font-[f2] lg:text-[6vw] text-2xl  text-center lg:leading-[0.8] lg:pt-3 pt-1 uppercase'>LIRE LES ARTICLES</h2>
                   <img className='lg:h-20 h-10 rounded-full lg:w-50 w-20 object-cover px-2 py-2 shrink-0' src="https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a" alt="" />
                   <h2 className='whitespace-nowrap font-[f2] lg:text-[6vw] text-2xl  text-center lg:leading-[0.8] lg:pt-3 pt-1 uppercase'>LIRE LES ARTICLES</h2>
                   <img className=' lg:h-20 h-10 rounded-full lg:w-50 w-20 object-cover px-2 py-2 shrink-0' src="https://k72.ca/images/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b.png?w=640&h=290&s=4f8134f04fe18db7382b99cec63c95f5" alt="" />
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}

 export default FullScreenNav