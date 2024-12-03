import React from 'react'
import landingImg from '../assets/main_landing.jpg'
import LandingSubBox from './LandingSubBox'

const Landing = () => {
  return (
    <div className='relative'>
      <div className='overflow-hidden flex justify-center items-center relative max-h-[600px]'>
        <div className="absolute opacity-30 overlay w-full h-full bg-white z-10 left-0 top-0"></div>
        <div className="slogan-box absolute left-[20%] top-[25%] z-30 flex flex-col gap-4">
          <h2 style={{fontFamily: 'LemonMilk'}} className='text-5xl'>
            MediBook
          </h2>
          <p>
          약물의 효능, 성분, 부작용을 잘 파악하여 안전한<br/>
          셀프 메디케이션을 할 수 있도록 돕는<br/>
          가정용 약물 정보 및 관리 사이트입니다.
          </p>
          <form>
            <input type="text" />
            <button>돋보기</button>
          </form>
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