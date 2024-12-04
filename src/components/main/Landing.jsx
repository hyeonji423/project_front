import React from 'react'
import landingImg from '../../assets/main_landing.jpg'
import icon from '../../assets/searchic.png'
import LandingSubBox from './LandingSubBox'
import HealthDetail from './../details/HealthDetail';
import HealthList from '../details/HealthList';

const Landing = () => {
  return (
    <div className='relative'>
      <div className='overflow-hidden flex justify-center items-center relative max-h-[600px]'>
        <div className="absolute opacity-30 overlay w-full h-full bg-white z-10 left-0 top-0"></div>
        <div className="slogan-box absolute left-[20%] top-[25%] z-30 flex flex-col gap-4">
          <h2 style={{fontFamily: 'LemonMilk'}} className='text-7xl'>
            MediBook
          </h2>
          <p className='text-lg'>
          약물의 효능, 성분, 부작용을 잘 파악하여 안전한<br/>
          셀프 메디케이션을 할 수 있도록 돕는<br/>
          가정용 약물 정보 및 관리 사이트입니다.
          </p>
          
          <form class="flex items-center max-w-sm" action='http//localhost:8000/medi_info'>   
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <input type="text" id="simple-search" class="bg-white text-md block w-full p-2.5" placeholder="증상 or 일반의약품 검색" required />
            </div>
            <button type="submit" class="p-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                <img src={icon} alt="" className='w-[26px]' />
                <span class="sr-only">Search</span>
            </button>
          </form>

        </div>
        <img src={landingImg} className='w-full' alt="" />
      </div>
      <div className='bottom-box absolute bottom-[-25%] z-50 w-[60%] left-1/2 transform -translate-x-1/2'>
        <LandingSubBox/>
      </div>
    </div>
  )
}

export default Landing