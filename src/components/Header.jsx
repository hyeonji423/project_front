import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from './../constants/data';
import profile from '../assets/profile.png'

const Header = () => {
  const isLoggedIn = false

  return (
    <div className='w-full shadow-custom sticky top-0 z-50 bg-white'>
      <div className='container flex justify-between items-center'>
        <div className="logo">
          <img src="/logo192.png" className='w-7 h-7' alt="" />
        </div>
        <div className='flex gap-8'>
          <div className="navi">
            <ul className='flex gap-6'>
              {
                navItems.map((item, idx)=>(
                  <li key={idx}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="info">
            <ul className='flex gap-6 items-center'>
              {isLoggedIn ? (
                <>
                <li><img src={profile} className='w-7 h-7 rounded-full overflow-hidden' alt="" /></li>
                <li>hyeonji 님</li>
                <li>
                  <button className='btn'>Logout</button>
                </li>
                </>
              ):(
                <li>
                  <Link to='/login' className='btn'>Login</Link>
                </li>
              )}
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header