import React, { useState } from "react";
// DrugInfo 컴포넌트 생성
function DrugInfo({ title, description }) {
  return (
    <div className="border p-4 text-center">
      <div className="font-bold">{title}</div>
      <div>{description}</div>
      <div className="h-24 bg-gray-200 mt-2">img</div>
    </div>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [drugInfo, setDrugInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/drugs?name=${searchTerm}`);
      if (!response.ok) {
        throw new Error("API 요청 실패");
      }
      const data = await response.json();
      setDrugInfo(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <main className="mt-4">
        <section className="border p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">약품 및 성분명 검색</h2>
          <div className="flex space-x-2 mb-2">
            <input
              type="text"
              placeholder="SearchBar"
              className="border p-2 flex-grow"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch} className="border p-2">
              검색
            </button>
          </div>
          {error && <div className="text-red-500">{error}</div>}
        </section>

        {drugInfo && (
          <section className="border p-4 mb-4">
            <div className="grid grid-cols-4 divide-x divide-gray-300 text-center">
              <div className="bg-gray-100 p-2">제품명</div>
              <div className="bg-gray-100 p-2">성분명</div>
              <div className="bg-gray-100 p-2">업체명</div>
              <div className="bg-gray-100 p-2">품목구분</div>
            </div>
            <div className="grid grid-cols-4 divide-x divide-gray-300 text-center">
              <div className="bg-white p-2">{drugInfo.productName}</div>
              <div className="bg-white p-2">{drugInfo.ingredientName}</div>
              <div className="bg-white p-2">{drugInfo.companyName}</div>
              <div className="bg-white p-2">{drugInfo.itemCategory}</div>
            </div>
          </section>
        )}

        <section className="flex space-x-4 mb-4 items-center justify-center">
          <div className="border p-4 w-72 h-64 bg-gray-200 flex  justify-center ">
            약. img
          </div>
          <div className="border p-4 flex flex-col space-y-2">
            <button className="border p-2">약 이름(약품 상세 Page 링크)</button>
            <div className="border p-2 w-96 h-40">약에 대한 기본 정보 txt</div>
          </div>
        </section>

        <section className="border-t-2 pt-4">
          <h2 className="text-lg font-semibold mb-2">많이 사용되는 약품</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* DrugInfo 컴포넌트 사용 */}
            <DrugInfo title="약품 제목" description="설명" />
            <DrugInfo title="약품 제목" description="설명" />
            <DrugInfo title="약품 제목" description="설명" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
