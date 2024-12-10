import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_MEDI_INFO_API_URL } from "../../utils/apiUrl";
import { getRequest } from "../../utils/requestMethods";

// get thunk function 정의
const getMediInfoFetchThunk = (actionType, apiURL) => {
  return createAsyncThunk(actionType, async () => {
    // console.log(apiURL);
    const fullPath = `${apiURL}`;
    return await getRequest(fullPath);
  });
};

// get_items data
export const fetchGetMediInfoData = getMediInfoFetchThunk(
  "fetchGetMediInfo", // action type
  GET_MEDI_INFO_API_URL // 요청 url
); // thunk 함수 호출

// handleFulfilled 함수 정의 : 요청 성공 시 상태 업데이트 로직을 별도의 함수로 분리
const handleFulfilled = (stateKey) => (state, action) => {
  state[stateKey] = action.payload; // action.payload에 응답 데이터가 들어있음
};

// handleRejected 함수 정의 : 요청 실패 시 상태 업데이트 로직을 별도의 함수로 분리
const handleRejected = (state, action) => {
  // console.log('Error', action.payload);
  state.isError = true;
  state.errorMessage = action.payload?.msg || "Something went wrong"
};


const medicineSlice = createSlice({
  name: 'medicine', // slice 기능 이름
  initialState: {
    // 초기 상태 지정
    getMediInfoData: null,
    
  },
  
  extraReducers: (builder)=>{
    builder
      .addCase(fetchGetMediInfoData.fulfilled, handleFulfilled('getMediInfoData'))
      .addCase(fetchGetMediInfoData.rejected, handleRejected);   
    
  }
})  // slice 객체 저장


export default medicineSlice.reducer;