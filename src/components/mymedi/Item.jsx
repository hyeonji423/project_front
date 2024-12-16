import React from "react";
import { MdEditDocument, MdDelete } from "react-icons/md";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { FaCalendarCheck } from "react-icons/fa6";
import favi from "../../assets/medi_favi.png";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeleteMyMediListData,
  fetchGetMyMediListData,
} from "../../redux/slices/myMediSlice";
import { openModal } from "../../redux/slices/modalSlice";

const Item = ({ myMediList }) => {
  // console.log(myMediList);
  const {
    user_email,
    medicine_id,
    medi_name,
    company_name,
    buying_date,
    exp_date,
    main_symptom,
    memo,
    created_at,
    notification,
  } = myMediList;
  // console.log(
  //   user_email,
  //   medicine_id,
  //   medi_name,
  //   company_name,
  //   buying_date,
  //   exp_date,
  //   main_symptom,
  //   memo,
  //   created_at,
  //   notification
  // );

  const dispatch = useDispatch();

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  // const textLengthOverCut = (text, length, lastText) => {
  //   if (length === "" || length === null) {
  //     length = 20;
  //   }

  //   if (lastText === "" || lastText === null) {
  //     lastText = "...";
  //   }

  //   if (text.length > length) {
  //     return text.substring(0, length) + lastText;
  //   }

  //   return text;
  // };

  const loginData = useSelector((state) => state.login.user);
  const userKey = loginData?.id;

  const handleDeleteItem = async () => {
    const confirm = window.confirm("정말 삭제하시겠습니까?");

    if (confirm) {
      if (!user_email) {
        alert("잘못된 사용자입니다.");
        return;
      }
      console.log("삭제할 medicine_id:", medicine_id);

      try {
        await dispatch(fetchDeleteMyMediListData(medicine_id)).unwrap();
        alert("삭제되었습니다.");
        await dispatch(fetchGetMyMediListData(userKey)).unwrap();
      } catch (error) {
        alert("삭제에 실패하였습니다.");
        console.error("삭제 실패: ", error);
      }
    }
  };
  const handleOpenDetailModal = () => {
    dispatch(openModal({ modalType: "details", myMediList }));
  };

  const handleOpenUpdateModal = () => {
    dispatch(openModal({ modalType: "update", myMediList }));
  };

  return (
    <div className="item w-4/5 mx-auto ">
      <div className="w-full shadow-md border py-6 px-7 flex items-center gap-4 rounded-lg">
        <div className="w-[8%] flex items-center">
          <img src={favi} alt="list" className="w-6 h-6" />
        </div>
        <div className="title-box w-[20%] px-3 py-1 flex">
          <h2 className="item-title text-xl font-semibold">{medi_name}</h2>
        </div>
        <p className="w-[30%] px-1 text-[17px]">대표증상: {main_symptom}</p>
        <div className="exp-date-box w-[30%] flex items-center">
          <p className="px-1 text-[17px]">유효기간: {formatDate(exp_date)}</p>
          { notification && (
            <button>
              <FaCalendarCheck className="w-4 h-4 text-yellow-300" />
            </button>
          )}
        </div>
        <div className="btn-box w-[12%] flex items-center gap-2">
          <button onClick={handleOpenDetailModal}>
            <BiSolidMessageAltDetail className="w-6 h-6 text-blue-600" />
          </button>
          <button onClick={handleOpenUpdateModal}>
            <MdEditDocument className="w-6 h-6 text-sky-300" />
          </button>
          <button className="delete text-gray-700" onClick={handleDeleteItem}>
            <MdDelete className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
