import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGetMyMediListData,
  fetchPostMyMediData,
  fetchUpdateMyMediListData,
} from "../../redux/slices/myMediSlice";
import { closeModal } from "../../redux/slices/modalSlice";

// import { useNavigate } from "react-router-dom";

const Modal = () => {
  const dispatch = useDispatch();
  const { modalType, myMediList, isOpen } = useSelector((state) => state.modal);
  // const navigator = useNavigate();
  const user = useSelector((state) => state.login.user);
  // console.log(modalType, myMediList, isOpen);

  const [value, setValue] = useState({
    mediName: "",
    companyName: "",
    buyingDate: "",
    expDate: "",
    mainSymptom: "",
    memo: "",
    user_id: user?.id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("로그인 후 이용해주세요.");
      return;
    }

    if (value.mediName === "" || value.expDate === "") {
      alert("제품명과 유효기간은 필수 입력값입니다.");
      return;
    }

    // const submitData = {
    //   ...value,
    //   user_id: user.id
    // }
    // console.log(submitData);

    try {
      if (modalType === "create" && myMediList === null) {
        await dispatch(fetchPostMyMediData(value)).unwrap();
        alert("등록되었습니다.");
      } else if (modalType === "update" && myMediList) {
        await dispatch(fetchUpdateMyMediListData(value)).unwrap();
        alert("수정되었습니다.");
      }

      handleCloseModal();

      await dispatch(fetchGetMyMediListData(user?.id)).unwrap();
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

  const btnTitle = showModalTitle(modalType, "수정", "", "등록");

  useEffect(() => {
    if (
      (modalType === "details" && myMediList) ||
      (modalType === "update" && myMediList)
    ) {
      setValue({
        mediName: myMediList.medi_name,
        companyName: myMediList.company_name,
        buyingDate: myMediList.buying_date
          ? new Date(myMediList.buying_date).toISOString().split("T")[0]
          : "",
        expDate: myMediList.exp_date
          ? new Date(myMediList.exp_date).toISOString().split("T")[0]
          : "",
        mainSymptom: myMediList.main_symptom,
        memo: myMediList.memo,
        mediId: myMediList.medicine_id,
        user_id: user?.id,
      });
    } else {
      setValue({
        mediName: "",
        companyName: "",
        buyingDate: "",
        expDate: "",
        mainSymptom: "",
        memo: "",
        user_id: user?.id,
      });
    }
  }, [modalType, myMediList, user?.id]);

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-auto">
      <div className="flex justify-center items-center min-h-screen w-full">
        <div className="relative bg-white rounded-lg p-10 flex flex-col gap-6">
          <div className="wrapper">
            <h2 className="title text-2xl font-bold flex justify-center">
              My 상비약 관리 {modalTitle}
            </h2>
            <br></br>
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
                <button className="bg-blue-600 text-white text-sm   rounded-md px-3 py-1">
                  알림설정
                </button>
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
              <button
                className={`btn h-10 !text-lg ${
                  modalType === "details" ? "hidden" : ""
                }`}
                type="submit"
              >
                {btnTitle}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
