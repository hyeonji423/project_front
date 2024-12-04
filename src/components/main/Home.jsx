import React from 'react'
import Landing from './../main/Landing';
import HealthList from '../details/HealthList';

const Home = () => {
  return (
    <div className='w-full'>
      <Landing/>
      <div className='flex justify-center items-center'>
        <div className='mt-44 mx-28 mb-14'>
          <div className="container">
            <HealthList/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home