import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGetMyMediListData,
  fetchPostMyMediData,
} from "../../redux/slices/myMediSlice";
import { closeModal } from "../../redux/slices/modalSlice";

// import { useNavigate } from "react-router-dom";

const Modal = () => {
  const dispatch = useDispatch();
  const { modalType, myMediList } = useSelector((state) => state.modal);
  // const navigator = useNavigate();
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

    if (!user.sub) {
      alert("로그인 후 이용해주세요.");
      return;
    }

    if (value.mediName === "" || value.expDate === "") {
      alert("제품명과 유효기간은 필수 입력값입니다.");
      return;
    }

    try {
      if (modalType === "create" && myMediList === null) {
        await dispatch(fetchPostMyMediData(value)).unwrap();
        alert("등록되었습니다.");
      }
      //  else if(modalType === "update" && myMediList) {
      //   await dispatch(fetchUpdateMyMediData(value)).unwrap();
      //   alert("수정되었습니다.");

      handleCloseModal();

      await dispatch(fetchGetMyMediListData(user?.sub)).unwrap();
    } catch (error) {
      console.error("등록 중 오류가 발생했습니다.", error);
    }
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const showModalTitle = (modalType, str1, str2, str3) => {
    switch (modalType) {
      case "update":
        return str1;
      case "details":
        return str2;
      default:
        return str3;
    }
  };

  const modalTitle = showModalTitle(modalType, "수정", "상세", "등록");

  const btnTitle = showModalTitle(modalType, "수정", "등록");

  useEffect(() => {
    if (
      (modalType === "update" && myMediList) ||
      (modalType === "details" && myMediList)
    ) {
      setValue({
        mediName: myMediList.mediName,
        companyName: myMediList.companyName,
        buyingDate: myMediList.buyingDate,
        expDate: myMediList.expDate,
        mainSymptom: myMediList.mainSymptom,
        memo: myMediList.memo,
        user_id: user.id,
      });
    } else {
      setValue({
        mediName: "",
        companyName: "",
        buyingDate: "",
        expDate: "",
        mainSymptom: "",
        memo: "",
        user_id: user.id,
      });
    }
  }, [modalType, myMediList, user.id]);

  console.log(myMediList);

  // const data = {
  //   mediName: value.mediName,
  //   companyName: value.companyName,
  //   buyingDate: value.buyingDate,
  //   expDate: value.expDate,
  //   mainSymptom: value.mainSymptom,
  //   memo: value.memo,
  //   user_id: user.id,
  // };
  // try {
  //   const response = await dispatch(fetchPostMyMediData(data)).unwrap();
  //   // console.log(response);
  //   if (response.status === 201) {
  //     alert(response.data.msg);
  //     // navigator("/myPage");
  //     return;
  //   }
  //   if (response.data.success === false) {
  //     alert(response.data.msg);
  //     return;
  //   }
  // } catch (error) {
  //   alert(error.msg);
  // }

  return (
    <div>
      <div className="flex justify-center items-center h-screen w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="wrapper border border-gray-300 rounded-lg p-10 flex flex-col gap-6">
            <h2 className="title text-2xl font-bold flex justify-center">
              My 상비약 관리 (일반 의약품) <br></br>
              {modalTitle}
            </h2>
            <IoMdClose
              className="absolute top-2 right-2 cursor-pointer"
              onClick={handleCloseModal}
            />

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="form-item">
                <label htmlFor="medi_name">제품명</label>
                <input
                  type="text"
                  id="mediName"
                  name="mediName"
                  value={value.mediName}
                  placeholder="제품명을 입력해주세요."
                  onChange={handleChange}
                  {...(modalType === "details" && { disabled: true })}
                />
              </div>
              <div className="form-item">
                <label htmlFor="company_name">회사명</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={value.companyName}
                  placeholder="제조회사를 입력해주세요."
                  onChange={handleChange}
                  {...(modalType === "details" && { disabled: true })}
                />
              </div>
              <div className="form-item">
                <label htmlFor="buying_date">구입/개봉날짜</label>
                <input
                  type="date"
                  id="buyingDate"
                  name="buyingDate"
                  value={value.buyingDate}
                  onChange={handleChange}
                  {...(modalType === "details" && { disabled: true })}
                />
              </div>
              <div className="form-item flex justify-between">
                <div>
                  <label htmlFor="exp_date">유효기간</label>
                  <input
                    type="date"
                    id="expDate"
                    name="expDate"
                    value={value.expDate}
                    onChange={handleChange}
                    {...(modalType === "details" && { disabled: true })}
                  />
                </div>
                <button className="btn">알림설정</button>
              </div>
              <div className="form-item">
                <label htmlFor="main_symptom">대표증상</label>
                <input
                  type="text"
                  id="mainSymptom"
                  name="mainSymptom"
                  value={value.mainSymptom}
                  placeholder="대표증상을 입력해주세요."
                  onChange={handleChange}
                  {...(modalType === "details" && { disabled: true })}
                />
              </div>
              <div className="form-item flex flex-col gap-2">
                <label htmlFor="memo">NOTE</label>
                <textarea
                  rows="4"
                  id="memo"
                  name="memo"
                  value={value.memo}
                  onChange={handleChange}
                  {...(modalType === "details" && { disabled: true })}
                ></textarea>
              </div>
              <button className={`btn h-10 !text-sm ${modalType === "details" ? "hidden" : ""}`} type="submit">{btnTitle}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
