import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import HealthInfoDatabase from "../../constants/healthdata";
const HealthDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                  className="w-2/3 md:w-1/2 mx-auto rounded-lg"
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
        <div className="border border-gray-200 w-full mt-10"></div>
        {/* 게시글 목록 추가 */}
        <div className="mt-8">
          <h2 className="text-xl mb-2 pl-1 font-medium">목록</h2>
          <div className="flex justify-between items-center text-sm mb-2 text-gray-400 mx-1">
            <span>글 제목</span>
            <span>작성일</span>
          </div>
          <table className="w-full px-2">
            <tbody>
              {HealthInfoDatabase.map((info, index) => (
                <tr key={index} className="border-b border-t">
                  <td className="py-3">
                    <a
                      href={`/healthdetail/${info.id}`}
                      className="hover:text-blue-500 px-1"
                    >
                      {info.title}
                    </a>
                  </td>
                  <td className="text-gray-500 text-right whitespace-nowrap">
                    {new Date(2024, 9 - index, 17 - index)
                      .toLocaleDateString("ko-KR", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })
                      .replace(/\./g, ". ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* 페이지네이션 */}
        <div className="pt-4">
          <div className="flex justify-center items-center gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className={`px-2 py-1 ${
                  num === 1 ? "text-blue-500" : "text-gray-500"
                } hover:text-blue-700`}
              >
                {num}
              </button>
            ))}
            <button className="text-gray-500 hover:text-blue-700 ml-2">
              다음 ＞
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HealthDetail;
