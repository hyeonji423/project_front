import React from 'react'
import landingImg from '../assets/landing.avif'
import { Link } from 'react-router-dom'
import LandingSubBox from './LandingSubBox'

const Landing = () => {
  return (
    <div className='relative'>
      <div className='h-[70vh] overflow-hidden flex justify-center items-center relative'>
        <div className="absolute opacity-20 overlay w-full h-full bg-black z-10 left-0 top-0"></div>
        <div className="slogan-box absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center gap-4">
          <h2 className='text-3xl text-white font-semibold'>
            Welcome To the Met
          </h2>
          <Link to='/' className='font-semibold text-white border border-white px-4 py-2 transition-all transition-duration-300 hover:bg-white hover:text-black'>
            Plan you visit
          </Link>
        </div>
        <img src={landingImg} className='w-full' alt="" />
      </div>
      <div className='bottom-box absolute bottom-[-20%] z-50 w-[60%] left-1/2 transform -translate-x-1/2'>
        <LandingSubBox/>
      </div>
    </div>
  )
}

export default Landing