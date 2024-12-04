import React from "react";
import { useParams } from "react-router-dom";
import { symptoms } from "../../constants/symptomdata";
import symptom2 from "../../assets/symptom/symptom2.jpg";

const SymptomDetail = () => {
  const params = useParams();
  const { id } = params;

  const symptomInfo = symptoms.find((info) => info.id === Number(id));

  if (!symptomInfo) {
    return (
      <div className="text-center py-8">존재하지 않는 증상 정보입니다.</div>
    );
  }
  return (
    <div className="w-full flex flex-col justify-center items-center py-8">
      <div className="w-[70%] max-w-[1200px] flex flex-col gap-8">
        <h1 className="text-3xl font-bold mb-8">대표증상</h1>
      </div>
      <div className="flex w-[70%] max-w-[1200px]">
        <div className="border border-gray-200 rounded-lg p-4 mb-8">
          <img src={symptom2} alt="" />
        </div>
        {/* 제목 */}
        <div className="text-2xl font-bold gap-4 ml-8">
          {symptomInfo.title}
          {/* 증상 */}
          <div className="flex text-lg font-medium flex-col gap-4 mt-8">
            {symptomInfo.sections[0].content.map((item, index) => (
              <p key={index} className="leading-relaxed">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomDetail;
