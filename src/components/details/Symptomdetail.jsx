import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetMediInfoData } from "../../redux/slices/medicineSlice";
import {
  symptoms,
  disease,
  summary,
  medicines,
} from "../../constants/symptomdata";
import { symptom } from "../../constants/data";

const SymptomDetail = () => {
  const [activeTab, setActiveTab] = useState(1);
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMediItemClick = (itemId) => {
    navigate(`/medidetail/${itemId}`);
  };

  useEffect(() => {
    dispatch(fetchGetMediInfoData());
  }, [dispatch]);

  const getMediInfoData = useSelector(
    (state) => state.medicine.getMediInfoData
  );

  // 데이터가 로드되지 않았을 때 로딩 상태 표시
  if (!getMediInfoData || !symptom || !summary || !disease) {
    return <div>로딩 중...</div>;
  }

  const symptomImage = symptom.find((s) => s.id === Number(id))?.image;
  const symptomInfo = summary.find((info) => info.id === Number(id));

  if (!symptomInfo) {
    return (
      <div className="text-center py-8">존재하지 않는 증상 정보입니다.</div>
    );
  }

  // 약품 필터링
  const filteredMediInfo = getMediInfoData
    .filter((medi) => {
      if (symptomInfo.title === "미열") {
        return medi.효능 && medi.효능.includes("해열");
      }
      if (symptomInfo.title === "피부발진") {
        return medi.효능 && medi.효능.includes("피부");
      }
      return medi.효능 && medi.효능.includes(symptomInfo.title);
    })
    .slice(0, 4); // 최대 4개만 선택

  // medicines에서 현재 증상에 해당하는 약품 찾기
  const currentMedicines = medicines.find(
    (medicine) =>
      medicine.title === disease[Number(id)].types[activeTab - 1].title
  );

  return (
    <div className="w-full flex flex-col justify-center items-center py-8">
      <div className="w-[70%] max-w-[1200px] flex flex-col gap-8">
        <h1 className="text-3xl font-bold mb-8">대표증상</h1>
      </div>
      <div className="flex w-[70%] max-w-[1200px]">
        <div className="border border-gray-200 rounded-lg p-4 mb-8">
          <img
            src={symptomImage}
            alt="증상 이미지"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[70%] text-2xl font-bold gap-4 ml-8">
          {symptomInfo.title}
          <div className="flex w-full text-[18px] font-medium flex-col gap-4 mt-8">
            {symptomInfo.content.map((item, index) => (
              <p key={index} className="leading-relaxed">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[70%] max-w-[1200px] mt-8">
        <h1 className="text-2xl font-bold mb-4">세부증상</h1>
      </div>
      <div className="flex w-[70%] max-w-[1200px] border-t border-x border-gray-200 rounded-t-lg overflow-hidden">
        {disease[Number(id)].types.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex-1 py-3 text-center ${
              activeTab === item.id ? "bg-white" : "bg-gray-50"
            }`}
          >
            {item.id}. {item.title}
          </button>
        ))}
      </div>

      <div className="w-[70%] max-w-[1200px] border border-gray-200 rounded-b-lg p-6">
        {symptoms[Number(id)].types.map(
          (item) =>
            activeTab === item.id && (
              <div key={item.id}>
                {item.content.map((line, index) => (
                  <p key={index} className="mb-2">
                    {line}
                  </p>
                ))}
              </div>
            )
        )}
      </div>

      <div className="w-[70%] max-w-[1200px] mt-4">
        <h1 className="text-2xl font-bold mb-4">치료방법</h1>
      </div>
      <div className="w-[70%] max-w-[1200px] border border-gray-200 rounded-lg p-6">
        {disease[Number(id)].types.map(
          (item) =>
            activeTab === item.id && (
              <div key={item.id}>
                {item.content.map((line, index) => (
                  <p key={index} className="mb-2">
                    {line}
                  </p>
                ))}
              </div>
            )
        )}
        <div>
          <h3 className="text-lg font-bold mt-4 mb-2">
            위 성분이 포함되어 있는 약품
          </h3>
          {currentMedicines &&
            currentMedicines.types.map((medicine) => (
              <button
                onClick={() => handleMediItemClick(medicine.id)}
                key={medicine.id}
                className="mb-2 block hover:text-blue-500"
              >
                - {medicine.name}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SymptomDetail;
