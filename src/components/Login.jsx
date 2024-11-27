import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div>
        <h2>LOGIN</h2>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter Email' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter password' />
          </div>
          <button>submit</button>
        </form>
        <div>
          <span>아직 회원이 아니라면 | </span>
          <Link to='/register'>회원가입 하기</Link>
        </div>
      </div>
    </div>
  )
}

export default Login