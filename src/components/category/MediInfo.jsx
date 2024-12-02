import React, { useState } from "react";

function ButtonTextChanger() {
  const [text, setText] = useState("기본 텍스트");

  return (
    <div>
      <button onClick={() => setText("Button 1이 눌렸습니다.")}>
        Button 1
      </button>
      <button onClick={() => setText("Button 2이 눌렸습니다.")}>
        Button 2
      </button>
      <button onClick={() => setText("Button 3이 눌렸습니다.")}>
        Button 3
      </button>
      <button onClick={() => setText("Button 4이 눌렸습니다.")}>
        Button 4
      </button>
      <div className="text-div">{text}</div>
    </div>
  );
}

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

function MediInfo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [drugInfo, setDrugInfo] = useState(null);
  const [error, setError] = useState(null);
  const [infoText, setInfoText] = useState("약에 대한 기본 정보 txt");

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

        <section className="flex space-x-4 mb-4 items-start justify-center">
          <div className="border p-4 w-48 h-48 bg-gray-200 flex justify-center items-center">
            약. img
          </div>

          <div className="flex flex-col space-y-2">
            <button
              className="border p-2 w-64"
              onClick={() => setInfoText("약 이름 1에 대한 정보")}
            >
              약 이름 1
            </button>
            <button
              className="border p-2 w-64"
              onClick={() => setInfoText("약 이름 2에 대한 정보")}
            >
              약 이름 2
            </button>
            <button
              className="border p-2 w-64"
              onClick={() => setInfoText("약 이름 3에 대한 정보")}
            >
              약 이름 3
            </button>
            <button
              className="border p-2 w-64"
              onClick={() => setInfoText("약 이름 4에 대한 정보")}
            >
              약 이름 4
            </button>
          </div>
          <div className="border p-4 w-96 h-48">{infoText}</div>
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

export default MediInfo;
export { ButtonTextChanger };
