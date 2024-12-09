import React, { useState, useEffect } from "react";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";

const NewPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [medicinePage, setMedicinePage] = useState(1);
  const [newsPage, setNewsPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchRSS = async () => {
      const proxyUrl = "https://api.allorigins.win/get?url=";
      const feedUrl = encodeURIComponent(
        "https://news.google.com/rss/search?q=건강&hl=ko&gl=KR&ceid=KR:ko"
      );

      try {
        const response = await axios.get(`${proxyUrl}${feedUrl}`);
        const parser = new XMLParser();
        const rssData = parser.parse(response.data.contents);
        const items = rssData.rss.channel.item;
        setArticles(items);
      } catch (error) {
        console.error("RSS 피드를 가져오는 중 오류 발생:", error);
      }
    };

    fetchRSS();
  }, []);

  // 약품 데이터 예시 (실제 데이터로 교체 필요)
  const medicineData = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    name: `약품 ${i + 1}`,
    description: `설명 ${i + 1}`,
  }));

  // 뉴스 데이터 예시 (실제 데이터로 교체 필요)
  const newsData = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: `뉴스 제목 ${i + 1}`,
    content: `뉴스 내용 ${i + 1}`,
  }));

  // 페이지네이션 계산 함수
  const getPaginatedData = (data, currentPage) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return {
      currentItems: data.slice(indexOfFirstItem, indexOfLastItem),
      totalPages: Math.ceil(data.length / itemsPerPage),
    };
  };

  // 탭별 페이지 변경 핸들러
  const handleMedicinePageChange = (pageNumber) => setMedicinePage(pageNumber);
  const handleNewsPageChange = (pageNumber) => setNewsPage(pageNumber);

  // 페이지네이션 UI 컴포넌트
  const PaginationControls = ({ currentPage, totalPages, onPageChange }) => (
    <div className="flex justify-center gap-2 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        이전
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-3 py-1 border rounded ${
            currentPage === number ? "bg-blue-500 text-white" : ""
          }`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        다음
      </button>
    </div>
  );

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
    <div className="w-full h-full flex">
      <div className="w-[70%] h-[79vh] rounded-md bg-sky-300 ml-10">
        <div>
          <div className="flex bg-white last:border-b border-gray-300 mb-4">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 border cursor-pointer focus:outline-none hover:bg-blue-600 transition-colors hover:text-white
                  ${
                    activeTab === index
                      ? "bg-sky-300 border-t border-x border-sky-300"
                      : "bg-gray-200"
                  }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className=" p-4 bg-white rounded-md ml-4 mr-4">
            <h2 className="text-xl font-semibold mb-4">
              {tabs[activeTab].content}
            </h2>
            {/* 탭 내용에 따른 컴포넌트 렌더링 */}
            {activeTab === 0 && (
              <div className="">
                {/* 약품 목록 */}
                <div className="] grid gap-4">
                  {getPaginatedData(
                    medicineData,
                    medicinePage
                  ).currentItems.map((item) => (
                    <div key={item.id} className="p-4 border rounded">
                      <h3 className="font-bold">{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>

                {/* 약품 페이지네이션 */}
                <PaginationControls
                  currentPage={medicinePage}
                  totalPages={
                    getPaginatedData(medicineData, medicinePage).totalPages
                  }
                  onPageChange={handleMedicinePageChange}
                />
              </div>
            )}
            {activeTab === 1 && (
              <div>
                <h2 className="text-xl font-bold mb-4">건강 관련 뉴스</h2>
                {articles.length > 0 ? (
                  <>
                    <div className="grid gap-4">
                      {getPaginatedData(articles, newsPage).currentItems.map(
                        (article, index) => (
                          <div
                            key={index}
                            className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow"
                          >
                            <a
                              href={article.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 font-semibold"
                            >
                              {article.title}
                            </a>
                            <p className="text-gray-600 text-sm mt-2">
                              게시일:{" "}
                              {new Date(article.pubDate).toLocaleDateString(
                                "ko-KR"
                              )}
                            </p>
                          </div>
                        )
                      )}
                    </div>

                    <PaginationControls
                      currentPage={newsPage}
                      totalPages={
                        getPaginatedData(articles, newsPage).totalPages
                      }
                      onPageChange={handleNewsPageChange}
                    />
                  </>
                ) : (
                  <div className="text-center py-8">
                    <p>뉴스를 불러오는 중입니다...</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
