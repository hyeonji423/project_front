import { createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from '../../utils/jwtDecode'

const initialToken = localStorage.getItem('token')
const initialState = {
  token: initialToken || null,
  user: null,
}

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setToken: (state, action)=>{
      state.token = action.payload // action으로 전달받은 결과값
      state.user = jwtDecode(action.payload)
    },
    clearToken: (state)=>{
      state.token = null
      state.user = null
      localStorage.removeItem('token')
    },
  }
})

export const { setToken, clearToken } = loginSlice.actions
export default loginSlice.reducer