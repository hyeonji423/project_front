import React from 'react'
import Sidebar from '../details/Sidebar'

const Modal = () => {
  return (
    <div>
      <Sidebar/>
      <div className='flex justify-center items-center h-screen w-full'>
        <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <h2 className='title text-2xl font-bold flex justify-center'>
            My 상비약 관리 (일반의약품)
          </h2>
          <form className='flex flex-col gap-4'>

            <div className='form-item'>
              <label htmlFor="medi_name">약품명</label>
              <input type="text" placeholder='약품명을 입력해주세요' name='mediName' />
            </div>

            <div className="form-item">
              <label htmlFor="company_name">회사명</label>
              <input type="text" placeholder="제조회사를 입력해주세요." name="companyName"/>
            </div>

              <div className="form-item">
                <label htmlFor="buying_date">구입/개봉날짜</label>
                <input type="date" name="buyingDate"/>
              </div>
              
              <div className="form-item flex justify-between">
                <div>
                  <label htmlFor="exp_date" >유효기간</label>
                  <input type="date" name="expDate"/>
                </div>
                <button className="btn">알림설정</button>
              </div>

              <div className="form-item">
                <label htmlFor="main_symptom">대표증상</label>
                <input type="text" placeholder="대표증상을 입력해주세요." name="mainSymptom"/>
              </div>

              <div className="form-item flex flex-col gap-2">
                <label htmlFor="memo">NOTE</label>
                <textarea rows="4" name="memo"></textarea>
              </div>
              
              <button className="btn h-10 !text-sm">입력완료</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal