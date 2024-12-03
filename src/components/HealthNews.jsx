import React, { useEffect, useState } from 'react'

const HealthNews = () => {
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/v1/search/news.xml?query=의약품&display=5');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'application/xml');
        const items = Array.from(xmlDoc.getElementsByTagName('item'));

        const news = items.map((item) => {
          const title = item.getElementsByTagName('title')[0]?.textContent;
          const description = item.getElementsByTagName('description')[0]?.textContent;
          
          return {
            title: title ? decodeHTML(title) : '',  // HTML 엔티티 디코딩
            link: item.getElementsByTagName('link')[0]?.textContent,
            description: description ? decodeHTML(description) : '',  // HTML 엔티티 디코딩
            pubDate: item.getElementsByTagName('pubDate')[0]?.textContent,
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
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };


  return (
    <div className="news">
      <div className="grid grid-cols-12 gap-6">
        {/* 메인 뉴스 섹션 */}
        <div className="col-span-8">
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : newsList.length === 0 ? (
            <p className="text-gray-600">Loading...</p>
          ) : (
            <div className="space-y-4">
              {newsList.slice(0, 2).map((news, index) => (
                <div key={index} className="border border-gray-200 p-4">
                  <a 
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h2 className="text-xl font-bold mb-2 hover:text-blue-700">
                      {news.title.replace(/<\/?b>/g, '')}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      {news.description.replace(/<\/?b>/g, '')}
                    </p>
                    <p className="text-gray-400 text-xs pt-2">
                      {new Date(news.pubDate).toLocaleDateString('ko-KR')}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 사이드 뉴스 목록 */}
        <div className="col-span-4 border border-gray-200 p-4">
          <ul className="space-y-2">
            {newsList.slice(0, 4).map((news, index) => (
              <li key={index}>
                <a 
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue-600"
                >
                  <span className="w-2 h-2 bg-black rounded-full mr-2 flex-shrink-0"></span>
                  <span className="line-clamp-1">
                    {news.title.replace(/<\/?b>/g, '')}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex justify-center mt-4 space-x-2">
            <span>&lt;</span>
            {[1, 2, 3, 4].map((page) => (
              <span key={page} className="cursor-pointer">{page}</span>
            ))}
            <span>&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthNews