import React from 'react'
import Landing from './../main/Landing';
import HealthList from '../details/HealthList';

const Home = () => {
  return (
    <div className='w-full'>
      <Landing/>
      <div className='flex justify-center items-center'>
        <div className='mt-44 mx-10 lg:mx-28 mb-14'>
          <div className="container">
            <h2 className="text-3xl font-semibold mb-4">건강정보</h2>
            <HealthList/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home