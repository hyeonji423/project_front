import React from "react";
import { useParams } from "react-router-dom";
import HealthInfoDatabase from "../../constants/healthdata";

const HealthDetail = () => {
  const { id } = useParams();
  console.log("현재 id:", id);
  console.log("데이터베이스:", HealthInfoDatabase);

  const healthInfo = HealthInfoDatabase.find((info) => info.id === Number(id));

  if (!healthInfo) {
    return (
      <div className="text-center py-8">존재하지 않는 건강 정보입니다.</div>
    );
  }

  return (
    <div className="w-full flex flex-col justify-center items-center py-8">
      <div className="w-[70%] max-w-[1200px]">
        {/* 제목 */}
        <h1 className="text-3xl font-bold mb-8">{healthInfo.title}</h1>

        {/* 섹션별 내용 */}
        {healthInfo.sections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>

            {/* 일반 콘텐츠 */}
            {section.content && (
              <div
                className="text-gray-700 mb-6"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            )}

            {/* 진단 기준 */}
            {section.diagnosticCriteria && (
              <div className="mb-6">
                {section.diagnosticCriteria.map((criteria, idx) => (
                  <div key={idx} className="mb-2">
                    <span className="font-semibold">{criteria.level}:</span>{" "}
                    {criteria.count}
                  </div>
                ))}
              </div>
            )}

            {/* 질문과 답변 */}
            {section.items &&
              section.items.map((item, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {item.question}
                  </h3>
                  <p
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              ))}

            {/* 단계별 내용 */}
            {section.steps &&
              section.steps.map((step, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  {step.details &&
                    step.details.map((detail, detailIdx) => (
                      <p
                        key={detailIdx}
                        className="text-gray-700 mb-2"
                        dangerouslySetInnerHTML={{ __html: detail }}
                      />
                    ))}
                </div>
              ))}

            {/* 이미지 */}
            {section.image && (
              <div className="mb-6">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-1/2 md:w-1/3 mx-auto rounded-lg"
                />
              </div>
            )}

            {/* 메시지 */}
            {section.message && (
              <div
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: section.message }}
              />
            )}
          </div>
        ))}

        <div className="border border-gray-200 w-[70%] mt-10"></div>

        {/* 하단 박스 */}
        <div className="border-t pt-4 mt-8">
          <p className="text-center text-gray-500">1/2/3/4</p>
        </div>
      </div>
    </div>
  );
};

export default HealthDetail;
