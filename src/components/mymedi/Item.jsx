import React from "react";
import { MdEditDocument, MdDelete } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteMyMediListData, fetchGetMyMediListData } from "../../redux/slices/myMediSlice";
import { openModal } from "../../redux/slices/modalSlice";

const Item = ({ myMedi }) => {
  // console.log(myMedi);
  const {
    user_email,
    medicine_id,
    medi_name,
    company_name,
    buying_date,
    exp_date,
    main_symptom,
    memo,
    medicine_created_at,
  } = myMedi;
  // console.log(
  //   user_email,
  //   medicine_id,
  //   medi_name,
  //   company_name,
  //   buying_date,
  //   exp_date,
  //   main_symptom,
  //   memo,
  //   medicine_created_at
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
    dispatch(openModal({ modalType: "details", myMedi }));
  };

  const handleOpenUpdateModal = () => {
    dispatch(openModal({ modalType: "update", myMedi }));
  };

  return (
    <div className="item w-full mx-auto">
      <div className="w-full border border-blue-600 bg-slate-100 rounded-md py-3 px-4 flex items-center gap-4 justify-around">
        <div className="title-box flex items-center bg-sky-300 rounded-md px-3 py-1">
          <h2 className="item-title border-blue-600 text-xl font-semibold">
            {medi_name}
          </h2>
        </div>
        <p className="px-1 text-[17px]">대표증상: {main_symptom}</p>
        <div className="exp-date-box flex items-center">
          <p className="px-1 text-[17px]">유효기간: {formatDate(exp_date)}</p>
          <button>
            <IoNotifications className="text-yellow-300 w-6 h-6" />
          </button>
        </div>
        <div className="btn-box flex items-center gap-2">
          <button onClick={handleOpenDetailModal}>
            <BiSolidMessageAltDetail className="w-6 h-6 text-blue-600" />
          </button>
          <button onClick={handleOpenUpdateModal}>
            <MdEditDocument className="w-6 h-6 text-sky-300" />
          </button>
          <button className="delete text-red-400" onClick={handleDeleteItem}>
            <MdDelete className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
