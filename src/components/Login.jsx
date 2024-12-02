import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchPostLoginData } from '../redux/slices/authSlice';
import { setToken } from '../redux/slices/loginSlice';

const Login = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  
  const [value, setValue] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault() // 쿼리가 잡히지 않게(경로 표시X)

    if(value.email === '' || value.password === '') {
      alert("이메일, 비밀번호는 필수 입력값입니다.")
      return
    }

    try {
      const response = await dispatch(fetchPostLoginData(value)).unwrap()
      // console.log(response);
      if(response.status === 201){
        alert(response.data.msg)
        localStorage.setItem('token', response.data.token) // 로컬 스토리지에 저장 - localStorage.setItem('저장할 이름', 저장할 값)
        // getItem('저장된 이름(key)') - 저장된 이름의 값을 가져옴
        // removeItem('저장된 이름(key)'): 저장된 이름의 값을 삭제
        dispatch(setToken(response.data.token))
        navigator('/')
        return
      }
      if(response.data.success === false){
        alert(response.data.msg)
        return
      }
    }
    catch (error) {
      alert(error.msg)
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='shadow-lg px-8 py-5 w-[30%] border'>
        <h2 className='text-lg font-bold mb-4'>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor="email" className='block text-neutral-700'>Email</label>
            <input type="email" placeholder='Enter Email' className='w-full px-3 py-2 border' name='email' onChange={handleChange}/>
          </div>
          <div className='mb-4'>
            <label htmlFor="password" className='block text-neutral-700'>Password</label>
            <input type="password" placeholder='Enter password' className='w-full px-3 py-2 border' name='password' onChange={handleChange}/>
          </div>
          <button className='btn w-full h-12 !text-base'>Submit</button>
        </form>
        <div className='mt-4'>
          <span>회원이 아니라면 | </span>
          <Link to='/register' className='underline hover:italic'>회원가입 하기</Link>
        </div>
      </div>
    </div>
  )
}

export default Login