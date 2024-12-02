import React, { useState } from "react";

// 유인규

const NewPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "약품열람목록",
      content: "약품열람목록 내용",
    },
    {
      title: "News 열람목록",
      content: "News 열람목록 내용",
    },
  ];

  return (
    <div className="w-full h-auto flex">
      <div className="w-[70%] bg-[skyblue] ml-10">
        <div>
          <div className="flex bg-white last:border-b border-gray-300 mb-4">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 border cursor-pointer focus:outline-none hover:bg-gray-700 transition-colors
                ${
                  activeTab === index
                    ? "bg-white border-t border-x border-gray-300"
                    : "bg-gray-300"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="p-4 bg-white rounded-md ml-4 mr-4">
            <h2 className="text-xl font-semibold mb-4">
              {tabs[activeTab].content}
            </h2>
            {/* 탭 내용에 따른 컴포넌트 렌더링 */}
            {activeTab === 0 && <div>{/* 약품 관련 컨텐츠 */}</div>}
            {activeTab === 1 && <div>{/* 뉴스 관련 컨텐츠 */}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
