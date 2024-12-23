import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const NewPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGroup, setCurrentGroup] = useState(1);
  const itemsPerPage = 5;
  const pagesPerGroup = 10;
  const user = useSelector((state) => state.login.user);
  const [viewedNews, setViewedNews] = useState([]);
  const [viewedMedicines, setViewedMedicines] = useState([]);

  console.log(viewedMedicines);

  useEffect(() => {
    if (user) {
      // 로그인한 사용자의 열람 기록 가져오기
      const storedMedicines = JSON.parse(
        localStorage.getItem(`viewedMedicines_${user.userId}`) || "[]"
      );
      // 최신순으로 정렬
      const sortedMedicines = storedMedicines.sort(
        (a, b) => new Date(b.viewedAt) - new Date(a.viewedAt)
      );
      setViewedMedicines(sortedMedicines);

      const storedNews = JSON.parse(
        localStorage.getItem(`viewedNews_${user.userId}`) || "[]"
      );
      // 최신순으로 정렬
      const sortedNews = storedNews.sort(
        (a, b) => new Date(b.viewedAt) - new Date(a.viewedAt)
      );
      setViewedNews(sortedNews);
    } else {
      // 로그인하지 않은 경우 빈 배열 설정
      setViewedMedicines([]);
      setViewedNews([]);
    }
  }, [user]);

  // 로그인하지 않은 경우 메시지 표시
  if (!user) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="text-center py-8">
          <p>로그인이 필요한 서비스입니다.</p>
        </div>
      </div>
    );
  }

  const totalPages = Math.ceil(
    (activeTab === 0 ? viewedMedicines : viewedNews).length / itemsPerPage
  );
  const totalGroups = Math.ceil(totalPages / pagesPerGroup);

  const getPageNumbers = () => {
    const start = (currentGroup - 1) * pagesPerGroup + 1;
    const end = Math.min(start + pagesPerGroup - 1, totalPages);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevGroup = () => {
    if (currentGroup > 1) {
      setCurrentGroup(currentGroup - 1);
      setCurrentPage((currentGroup - 2) * pagesPerGroup + 1);
    }
  };

  const handleNextGroup = () => {
    if (currentGroup < totalGroups) {
      setCurrentGroup(currentGroup + 1);
      setCurrentPage(currentGroup * pagesPerGroup + 1);
    }
  };

  const PaginationControls = () => (
    <div className="flex justify-center mt-4 space-x-2">
      {currentGroup > 1 && (
        <button
          onClick={handlePrevGroup}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          &lt;
        </button>
      )}

      {getPageNumbers().map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={`px-3 py-1 border rounded ${
            currentPage === number
              ? "bg-blue-500 text-white"
              : "bg-white text-black hover:bg-gray-100"
          }`}
        >
          {number}
        </button>
      ))}

      {currentGroup < totalGroups && (
        <button
          onClick={handleNextGroup}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          &gt;
        </button>
      )}
    </div>
  );

  const tabs = [
    {
      title: "약품 열람목록",
      content: "열람한 약품목록",
    },
    {
      title: "News 열람목록",
      content: "열람한 NEWS",
    },
  ];

  return (
    <div className="w-full min-h-screen pb-8 flex justify-center items-start">
      <div className="flex justify-center items-start w-[90%] h-full m-4">
        <div className="w-[90%] md:w-[70%] rounded-md">
          <div>
            <div className="flex bg-white border-gray-300">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border cursor-pointer focus:outline-none transition-colors rounded-t-md
                  ${
                    activeTab === index
                      ? "bg-blue-500 text-white border-blue-500"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <div className="p-4 border rounded-b-md ">
              <h2 className="text-2xl m-4 font-semibold mb-4">
                {tabs[activeTab].content}
              </h2>
              {/* 탭 내용에 따른 컴포넌트 렌더링 */}
              {activeTab === 0 && (
                <div>
                  {viewedMedicines.length > 0 ? (
                    <>
                      <div className="grid gap-4">
                        {viewedMedicines
                          .slice(
                            (currentPage - 1) * itemsPerPage,
                            currentPage * itemsPerPage
                          )
                          .map((item) => (
                            <div
                              key={item.id}
                              className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                              onClick={() => navigate(`/medidetail/${item.id}`)}
                            >
                              <div className="flex items-center gap-4">
                                <div className="w-[200px] h-[200px] flex items-center justify-center">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="max-w-full max-h-full object-contain"
                                  />
                                </div>
                                <div>
                                  <h3 className="font-bold">{item.name}</h3>
                                  <p className="text-sm text-gray-600">
                                    {item.main_ingredient}
                                  </p>
                                  <p className="text-sm mt-2">
                                    {item.efficacy}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>

                      <PaginationControls />
                    </>
                  ) : (
                    <div className="text-center py-8 text-gray-400">
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
                        {viewedNews
                          .slice(
                            (currentPage - 1) * itemsPerPage,
                            currentPage * itemsPerPage
                          )
                          .map((news, index) => (
                            <div
                              key={index}
                              className="p-4 border rounded shadow-sm hover:shadow-md transition-shadow"
                            >
                              <a
                                href={news.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
                              >
                                {news.title.replace(/<\/?b>/g, "")}
                              </a>
                              <p className="text-gray-600 text-sm mt-2">
                                {new Date(news.pubDate).toLocaleDateString(
                                  "ko-KR"
                                )}
                              </p>
                            </div>
                          ))}
                      </div>

                      <PaginationControls />
                    </>
                  ) : (
                    <div className="text-center py-8 text-gray-400">
                      <p>열람한 뉴스가 없습니다.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
