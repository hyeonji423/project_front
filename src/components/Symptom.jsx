import React, { useState } from "react";

const Symptom = () => {
  const [activeTab, setActiveTab] = useState();
  const symptoms = [
    {
      id: 1,
      title: "1단계",
      detail: "1.코 간지러움 시작",
    },
    {
      id: 2,
      title: "2단계",
      detail: "2.몸이 으실으실되지며 기침이 많아짐",
    },
    {
      id: 3,
      title: "3단계",
      detail: "3.변비가 생기며 목도 많이 간지러움",
    },
    {
      id: 4,
      title: "4단계",
      detail: "4.몸이 추워지며 잠이 잘안오는 증상",
    },
  ];
  // 기존 symptoms 배열은 유지
  const medicines = [
    {
      id: 1,
      name: "타이레놀",
      type: "해열/진통제",
      description: "열과 통증을 가라앉히는데 효과적",
      caution: "하루 4000mg 이하로 복용",
    },
    {
      id: 2,
      name: "판콜에이",
      type: "종합감기약",
      description: "기침, 콧물, 두통 등 전반적인 감기 증상 완화",
      caution: "졸음이 올 수 있으니 운전 주의",
    },
    {
      id: 3,
      name: "신신파스아렉스",
      type: "외용제",
      description: "근육통과 몸살 증상 완화",
      caution: "상처 난 곳에는 사용 금지",
    },
    {
      id: 4,
      name: "베아제",
      type: "소화제",
      description: "감기약 복용 시 胃(위) 보호",
      caution: "공복에 복용 시 위장 자극 가능",
    },
  ];
  return (
    <div>
      {/* Contact */}
      <center>
        <h1>
          <p className="public">
            <b>대표증상</b>
          </p>
        </h1>
      </center>
      <div className="cmain">
        <img src="" alt="sickimg1" />
        <div class="symptoms">
          <center>
            <p className="bodyaches">#감기&심한몸살 관련 질환</p>
            <br />
            1.가볍게 코가 간지럽거나 기침이 조금씩나온다!
            <br />
            2.몸이 으실으실 추워지면서 기침이 많아지기 시작한다!
            <br />
            3.변비가 생기면서 목도 많이 간지러워진다!
            <br />
            4.약간 몸이 엄청 추워지며 잠이 잘안온다?! 약사를 보거나 병원내방을
            해야한다!
          </center>
        </div>
      </div>
      <br />
      <div>
        <p className="achesbody">
          {symptoms.map((symptom, index) => (
            <button
              key={symptom.id}
              className={`px-4 py-2 ${
                activeTab === index
                  ? "border-b-2 border-blue-500 text-blue-500 mmm"
                  : "text-gray-500 hover:text-gray-700 mmmm"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {symptom.detail}
            </button>
          ))}
        </p>
      </div>
      <br />
      <div className="symptomsmedic justify-center items-center h-full">
        <h4 className="text-2xl font-bold text-center mb-6 ml-[-40px]">
          &nbsp;추천&nbsp;
          <br />
          약품
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {medicines.map((medicine) => (
            <div
              key={medicine.id}
              className="border p-4 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-blue-600">
                {medicine.name}
              </h3>
              <p className="text-sm text-gray-500">{medicine.type}</p>
              <p className="mt-2">{medicine.description}</p>
              <p className="mt-2 text-red-500 text-sm">
                :경고: {medicine.caution}
              </p>
            </div>
          ))}
          <p className="justify-center items-center relative">
            ※항생제는 감기에 효과가 없으며, 의사의 처방 없이 복용하지 마세요!
          </p>
        </div>
      </div>
      <br />
      <div className="medilist mt-6 text-center text-sm text-gray-500">
        <p className="mt-[35px] text-base">
          약리스트&nbsp;<button>검색</button>
        </p>
      </div>
      <br />
    </div>
  );
};
export default Symptom;
