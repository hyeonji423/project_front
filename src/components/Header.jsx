import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from './../constants/data';
import { useDispatch, useSelector } from 'react-redux';
import { clearToken } from '../redux/slices/loginSlice';

const Header = () => {
  const dispatch = useDispatch()
  // const isLoggedIn = false
  const user = useSelector((state)=>state.login.user)
  console.log(user);

  const handleLogout = () => {
    dispatch(clearToken())
  }

  return (
    <div className='w-full shadow-custom sticky top-0 z-50 bg-white'>
      <div className='container flex flex-col justify-end items-center'>
        <div className='gap-8'>
          <div className="info">
            <ul className='flex gap-6 items-center'>
              {user !== null ? (
                <>
                <li>{user.username}님</li>
                <li>
                  <button className='btn' onClick={handleLogout}>로그아웃</button>
                </li>
                </>
              ):(
                <li>
                  <Link to='/login' className='btn'>로그인</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        
        <div className='gap-8'>
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
        </div>
      </div>
    </div>
  )
}

export default Header