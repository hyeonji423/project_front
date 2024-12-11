import React, { useState, useEffect } from "react";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import { useNavigate } from "react-router-dom";

const NewPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [medicinePage, setMedicinePage] = useState(1);
  const [newsPage, setNewsPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [viewedNews, setViewedNews] = useState([]);
  const [viewedMedicines, setViewedMedicines] = useState([]);
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

  useEffect(() => {
    // localStorage에서 열람한 뉴스 가져오기
    const storedNews = JSON.parse(localStorage.getItem("viewedNews") || "[]");
    setViewedNews(storedNews);
  }, []);

  useEffect(() => {
    // localStorage에서 열람한 약품 가져오기
    const storedMedicines = JSON.parse(
      localStorage.getItem("viewedMedicines") || "[]"
    );
    setViewedMedicines(storedMedicines);
  }, []);

  // 약품 데이터 예시 (실제 데이터로 교체 필요)
  const medicineData = viewedMedicines;

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
      content: "열람한 약품목록",
    },
    {
      title: "News 열람목록",
      content: "열람한 NEWS",
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
              <div>
                {viewedMedicines.length > 0 ? (
                  <>
                    <div className="grid gap-4">
                      {getPaginatedData(
                        viewedMedicines,
                        medicinePage
                      ).currentItems.map((item) => (
                        <div
                          key={item.id}
                          className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => navigate(`/medidetail/${item.id}`)}
                        >
                          <div className="flex items-center gap-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover"
                            />
                            <div>
                              <h3 className="font-bold">{item.name}</h3>
                              <p className="text-sm text-gray-600">
                                {item.main_ingredient}
                              </p>
                              <p className="text-sm mt-2">{item.efficacy}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <PaginationControls
                      currentPage={medicinePage}
                      totalPages={
                        getPaginatedData(viewedMedicines, medicinePage)
                          .totalPages
                      }
                      onPageChange={handleMedicinePageChange}
                    />
                  </>
                ) : (
                  <div className="text-center py-8">
                    <p>열람한 약품이 없습니다.</p>
                  </div>
                )}
              </div>
            )}
            {activeTab === 1 && (
              <div>
                {viewedNews.length > 0 ? (
                  <>
                    <div className="grid gap-4">
                      {getPaginatedData(viewedNews, newsPage).currentItems.map(
                        (news, index) => (
                          <div
                            key={index}
                            className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow"
                          >
                            <a
                              href={news.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 font-semibold"
                            >
                              {news.title.replace(/<\/?b>/g, "")}
                            </a>
                            <p className="text-gray-600 text-sm mt-2">
                              {new Date(news.pubDate).toLocaleDateString(
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
                        getPaginatedData(viewedNews, newsPage).totalPages
                      }
                      onPageChange={handleNewsPageChange}
                    />
                  </>
                ) : (
                  <div className="text-center py-8">
                    <p>열람한 뉴스가 없습니다.</p>
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
