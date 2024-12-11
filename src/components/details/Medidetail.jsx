import React, { useEffect } from "react";
import {
  mediDetailTest,
  mediDetailTest2,
  mediDetailTest3,
  mediDetailTest4,
} from "../../constants/data";
import { useParams } from "react-router-dom";

// ID에 따라 다른 내용을 설정
const getContentById = (id) => {
  switch (id) {
    case 1:
      return "이 약은 두통과 관련된 특별한 주의사항이 있습니다.";
    case 2:
      return "위장 관련 문제에 대한 추가 정보가 필요합니다.";
    case 3:
      return "이 약은 소화불량에 효과적입니다.";
    case 4:
      return "소화 촉진에 대한 특별한 주의사항이 있습니다.";
    default:
      return "일반적인 약품 정보입니다.";
  }
};

const Medidetail = () => {
  const { id } = useParams(); // URL에서 ID를 가져옴
  const allMediDetails = [
    ...mediDetailTest,
    ...mediDetailTest2,
    ...mediDetailTest3,
    ...mediDetailTest4,
  ];

  const drugDetail = allMediDetails.find((item) => item.id === parseInt(id));

  useEffect(() => {
    if (drugDetail) {
      // 열람한 약품을 localStorage에 저장
      const viewedMedicines = JSON.parse(
        localStorage.getItem("viewedMedicines") || "[]"
      );
      const isAlreadyViewed = viewedMedicines.some(
        (medicine) => medicine.id === drugDetail.id
      );

      if (!isAlreadyViewed) {
        const updatedMedicines = [...viewedMedicines, drugDetail];
        localStorage.setItem(
          "viewedMedicines",
          JSON.stringify(updatedMedicines)
        );
      }
    }
  }, [drugDetail]);

  if (!drugDetail) {
    return <div>약품 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex w-full justify-center my-12 bg-white">
      <div className="container">
        <div className="wrapper medi_detail flex flex-col gap-5">
          <div className="img-name-ingre-box flex gap-4">
            <div className="img-box border border-slate-500 w-[150px] h-[150px]">
              <img src={drugDetail.image} alt={drugDetail.name} />
            </div>
            <div className="name-ingre-box flex flex-col">
              <p className="description">약품명</p>
              <p className="medi-name p-2 text-xl">{drugDetail.name}</p>
              <p className="description">성분명</p>
              <p className="ingre p-2 text-md">{drugDetail.main_ingredient}</p>
            </div>
          </div>
          <div className="medi-detail flex flex-col gap-4">
            <p className="description">효능</p>
            <p>{drugDetail.efficacy}</p>
            <p className="description">사용법</p>
            <p>{drugDetail.use}</p>
            <p className="description">부작용</p>
            <p>{drugDetail.side_effect}</p>
            <p className="description">추가 정보</p>
            <p>{getContentById(drugDetail.id)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medidetail;
