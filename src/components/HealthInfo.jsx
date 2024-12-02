import React, { useState, useEffect } from 'react';

const itemsPerPage = 5;

function App() {
  const data = Array.from({ length: 15 }, (_, index) => `Item ${index + 1}`);
  
  // 페이지 번호 상태
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    // 현재 페이지에 맞는 데이터만 추출
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(currentItems);
  }, [currentPage]);

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // 페이지 번호 클릭 시 호출되는 함수
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="news w-[70%] mt-10">
        <div className="news-main">
          <h2 className="text-3xl font-bold mb-6">NEWS</h2>
          <div className="flex justify-between">
            <div className="news-main w-2/3 flex flex-col gap-4">
              <div className="h-24 bg-gray-200"></div>
              <div className="h-24 bg-gray-300"></div>
            </div>

            <div className="news-title w-[20%]">
              <ul className="flex flex-col h-auto bg-gray-200">
              {currentItems.map((item, index) => (
                <li key={index}>{item}</li>
               ))}
              </ul>

              {/* 페이지 번호 버튼 표시 */}
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            style={{
              fontWeight: currentPage === index + 1 ? 'bold' : 'normal', 
              margin: '0 5px',
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
            </div>
          </div>
        </div>
      </div>

      <div className="health mt-20 w-[70%]">
        <h2 className="text-3xl font-bold mb-6">건강정보</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <h3 className="font-bold">건강정보 제목</h3>
              <p>설명</p>
              <div className="h-24 bg-gray-200 mt-2">img</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
