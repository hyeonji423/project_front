import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"; // Redux 추가

const HealthNews = () => {
  const [newsList, setNewsList] = useState([]); // 전체 뉴스 목록
  const [error, setError] = useState(null); // 에러 상태
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [newsPerPage] = useState(5); // 한 페이지에 표시할 뉴스 수

  // 로그인한 사용자 정보 가져오기
  const user = useSelector((state) => state.login.user);

  // 화면 크기에 따른 글자 수 제한 함수 추가
  const getTruncateLength = () => {
    if (window.innerWidth >= 1280) { // xl
      return { title: 70, desc: 150 };
    } else if (window.innerWidth >= 1024) { // lg
      return { title: 50, desc: 100 };
    } else {
      return { title: 30, desc: 60 };
    }
  };

  // useState 추가
  const [truncateLength, setTruncateLength] = useState(getTruncateLength());

  // useEffect에 리사이즈 이벤트 리스너 추가
  useEffect(() => {
    const handleResize = () => {
      setTruncateLength(getTruncateLength());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "/v1/search/news.xml?query=의약품&display=30"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "application/xml");
        const items = Array.from(xmlDoc.getElementsByTagName("item"));

        const news = items.map((item) => {
          const title = item.getElementsByTagName("title")[0]?.textContent;
          const description =
            item.getElementsByTagName("description")[0]?.textContent;

          return {
            title: title ? decodeHTML(title) : "", // HTML 엔티티 디코딩
            link: item.getElementsByTagName("link")[0]?.textContent,
            description: description ? decodeHTML(description) : "",
            pubDate: item.getElementsByTagName("pubDate")[0]?.textContent,
          };
        });

        setNewsList(news);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchNews();
  }, []);

  // HTML 엔티티 디코딩 함수
  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  // 페이지 변경 처리 함수
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 현재 페이지에 맞는 뉴스 항목 가져오기
  const indexOfLastNews = currentPage * newsPerPage; // 마지막 뉴스 항목 인덱스
  const indexOfFirstNews = indexOfLastNews - newsPerPage; // 첫 번째 뉴스 항목 인덱스
  const currentNews = newsList.slice(indexOfFirstNews, indexOfLastNews); // 현재 페이지에 해당하는 뉴스 항목

  // 총 페이지 수 계산
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
    pageNumbers.push(i);
  }

  // 뉴스 클릭 시 호출될 함수
  const handleNewsClick = (news) => {
    if (user) {
      // 로그인한 사용자의 열람 기록 가져오기
      const viewedNews = JSON.parse(
        localStorage.getItem(`viewedNews_${user.userId}`) || "[]"
      );

      // 현재 시간과 함께 뉴스 정보 저장
      const newsInfo = {
        ...news,
        viewedAt: new Date().toISOString(),
      };

      // 중복 제거 후 최신 항목 추가 (10개 제한 제거)
      const updatedNews = [
        newsInfo,
        ...viewedNews.filter((item) => item.link !== news.link),
      ];

      // 사용자별 열람 기록 저장
      localStorage.setItem(
        `viewedNews_${user.userId}`,
        JSON.stringify(updatedNews)
      );
    }
  };

  return (
    <div className="news">
      <div className="grid grid-cols-12 gap-6">
        {/* 메인 뉴스 섹션 */}
        <div className="col-span-12 lg:col-span-8">
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : newsList.length === 0 ? (
            <p className="text-gray-600">Loading...</p>
          ) : (
            <div className="space-y-4">
              {newsList.slice(0, 2).map((news, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 hover:border-blue-400 group p-4"
                >
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    onClick={() => handleNewsClick(news)}
                  >
                    <h2 className="text-xl font-bold mb-2 group-hover:text-blue-700">
                      {news.title.replace(/<\/?b>/g, "").length > truncateLength.title
                        ? `${news.title.replace(/<\/?b>/g, "").slice(0, truncateLength.title)}...`
                        : news.title.replace(/<\/?b>/g, "")}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      {news.description.replace(/<\/?b>/g, "").length > truncateLength.desc
                        ? `${news.description
                            .replace(/<\/?b>/g, "")
                            .slice(0, truncateLength.desc)}...`
                        : news.description.replace(/<\/?b>/g, "")}
                    </p>
                    <p className="text-gray-400 text-xs pt-2">
                      {new Date(news.pubDate).toLocaleDateString("ko-KR")}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 사이드 뉴스 목록 */}
        <div className="hidden lg:block col-span-12 lg:col-span-4 rounded-lg border border-gray-200 p-4">
          <ul className="space-y-2">
            {currentNews.map((news, index) => (
              <li key={index} className="w-full px-1 py-1">
                <a
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:underline"
                  onClick={() => handleNewsClick(news)}
                >
                  <span className="line-clamp-1">
                    {news.title.replace(/<\/?b>/g, "").length > truncateLength.title
                      ? `${news.title.replace(/<\/?b>/g, "").slice(0, truncateLength.title)}...`
                      : news.title.replace(/<\/?b>/g, "")}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* 페이지 네비게이션 */}
          <div className="flex justify-center mt-4 space-x-2">
            <span
              className={`cursor-pointer ${
                currentPage === 1 ? "text-gray-300" : ""
              }`}
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            >
              &lt;
            </span>
            {pageNumbers.map((page) => (
              <span
                key={page}
                className={`cursor-pointer ${
                  currentPage === page ? "text-gray-800" : "text-gray-400"
                }`}
                onClick={() => paginate(page)}
              >
                {page}
              </span>
            ))}
            <span
              className={`cursor-pointer ${
                currentPage === pageNumbers.length ? "text-gray-300" : ""
              }`}
              onClick={() =>
                currentPage < pageNumbers.length && paginate(currentPage + 1)
              }
            >
              &gt;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthNews;
