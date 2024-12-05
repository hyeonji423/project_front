import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { symptoms } from "../../constants/symptomdata";
import symptom2 from "../../assets/symptom/symptom2.jpg";
import symptom1 from "../../assets/symptom/symptom1.jpg";

const SymptomDetail = () => {
  const [activeTab, setActiveTab] = useState(1);
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
          <img src={symptom1} alt="" className="w-full h-full object-cover" />
        </div>
        {/* 제목 */}
        <div className="w-[70%] text-2xl font-bold gap-4 ml-8">
          {symptomInfo.title}
          {/* 증상 */}
          <div className="flex w-full text-[16px] font-medium flex-col gap-4 mt-8">
            {symptomInfo.sections[0].content.map((item, index) => (
              <p key={index} className="leading-relaxed">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* 탭 버튼 */}
      <div className="flex w-[70%] max-w-[1200px] mt-8 border-t border-x border-gray-200 rounded-t-lg overflow-hidden">
        <button
          onClick={() => setActiveTab(1)}
          className={`flex-1 py-3 text-center ${
            activeTab === 1 ? "bg-white" : "bg-gray-50"
          }`}
        >
          1. 긴장두통
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`flex-1 py-3 text-center ${
            activeTab === 2 ? "bg-white" : "bg-gray-50"
          }`}
        >
          2. 편두통
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className={`flex-1 py-3 text-center ${
            activeTab === 3 ? "bg-white" : "bg-gray-50"
          }`}
        >
          3. 군발두통
        </button>
      </div>

      {/* 탭 내용 */}
      <div className="w-[70%] max-w-[1200px] border border-gray-200 rounded-b-lg p-6">
        {activeTab === 1 && (
          <div>
            긴장두통의 확실한 치료법은 없지만, 약국에서 쉽게 구할 수 있는
            진통제(아스피린, 아세트아미노펜, 비스테로이드소염진통제)로 통증을
            조절할 수 있습니다. 스트레스, 불안, 초조, 우울감, 예민함이
            긴장두통과 관련되어 있을 수 있으므로 항우울제, 항불안제 등의 약물이
            필요할 때도 있습니다.
          </div>
        )}
        {activeTab === 2 && (
          <div>
            편두통의 치료 원칙은 크게 두 가지입니다. 편두통이 생기지 않도록
            예방하고, 편두통의 전조증상이 생겼다면 빨리 두통이 호전되도록
            치료해야 합니다. 약물치료를 통해 편두통의 횟수와 강도를 조절할 수
            있으며, 전구기나 전조기까지만 겪고 두통기가 오지 않도록 예방할 수
            있습니다. 편두통의 전조증상이 시작되었다면, 우선 아세트아미노펜,
            소염진통제가 도움 될 수 있고 여기에 반응이 없다면 트립탄 등의 편두통
            치료 약물을 단독 혹은 아세트아미노펜이나 소염진통제와 함께 사용할 수
            있습니다. 그러나 트립탄은 혈관 수축 작용이 있어 협심증 등의 혈관
            질환이 있는 사람은 사용하지 않아야 하며 그렇지 않더라도 의사와
            사용의 필요성, 간격을 잘 상의하여야 합니다. 투약 횟수가 주 3회
            이상이 된다면 도리어 약물 과용 두통으로 옮겨갈 수 있어, 예방 약물을
            규칙적으로 먹는 예방요법으로 바꾸는 게 나은데, 이때 사용되는 예방
            약물로는 베타차단제, 토피라메이트가 있습니다.
          </div>
        )}
        {activeTab === 3 && (
          <div>
            아스피린, 아세트아미노펜, 소염진통제는 군발두통에는 효과적이지
            않습니다. 산소마스크로 산소를 흡입하는 것이 도움이 되고 이를 위해
            가정 또는 이동 시 사용할 산소를 갖추는 것이 좋습니다. 다른 약제로는
            피하 주사 또는 비강 내 뿌리는 트립탄제를 사용할 수 있습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomDetail;
