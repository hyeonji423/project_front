import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostMyMediData } from "../../redux/slices/myMediSlice";
import { useNavigate } from "react-router-dom";

const Management = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const user = useSelector((state) => state.login.user);
  console.log(user);

  const [value, setValue] = useState({
    mediName: "",
    companyName: "",
    buyingDate: "",
    expDate: "",
    mainSymptom: "",
    memo: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value.mediName === "" || value.expDate === "") {
      alert("제품명과 유효기간은 필수 입력값입니다.");
      return;
    }

    const data = {
      mediName: value.mediName,
      companyName: value.companyName,
      buyingDate: value.buyingDate,
      expDate: value.expDate,
      mainSymptom: value.mainSymptom,
      memo: value.memo,
      user_id: user.id,
    };
    try {
      const response = await dispatch(fetchPostMyMediData(data)).unwrap();
      // console.log(response);
      if (response.status === 201) {
        alert(response.data.msg);
        navigator("/myPage");
        return;
      }
      if (response.data.success === false) {
        alert(response.data.msg);
        return;
      }
    } catch (error) {
      alert(error.msg);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="flex justify-center items-center h-screen w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="wrapper border border-gray-300 rounded-lg p-10 flex flex-col gap-6">
            <h2 className="title text-2xl font-bold flex justify-center">
              My 상비약 관리
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="form-item">
                <label htmlFor="medi_name">제품명</label>
                <input
                  type="text"
                  placeholder="제품명을 입력해주세요."
                  onChange={handleChange}
                  name="mediName"
                />
              </div>
              <div className="form-item">
                <label htmlFor="company_name">회사명</label>
                <input
                  type="text"
                  placeholder="제조회사를 입력해주세요."
                  onChange={handleChange}
                  name="companyName"
                />
              </div>
              <div className="form-item">
                <label htmlFor="buying_date">구입/개봉날짜</label>
                <input type="date" onChange={handleChange} name="buyingDate" />
              </div>
              <div className="form-item flex justify-between">
                <div>
                  {" "}
                  <label htmlFor="exp_date">유효기간</label>
                  <input type="date" onChange={handleChange} name="expDate" />
                </div>
                <button className="btn">알림설정</button>
              </div>
              <div className="form-item">
                <label htmlFor="main_symptom">대표증상</label>
                <input
                  type="text"
                  placeholder="대표증상을 입력해주세요."
                  onChange={handleChange}
                  name="mainSymptom"
                />
              </div>
              <div className="form-item flex flex-col gap-2">
                <label htmlFor="memo">NOTE</label>
                <textarea
                  rows="4"
                  onChange={handleChange}
                  name="memo"
                ></textarea>
              </div>
              <button className="btn h-10 !text-sm">입력완료</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Management;
