import React, { useState } from "react";
import { mediDetailTest } from "../../constants/data";

function ButtonTextChanger() {
  const [text, setText] = useState("기본 텍스트");
  const buttonLabels = ["Button 1", "Button 2", "Button 3", "Button 4"];

  return (
    <div>
      {buttonLabels.map((label, index) => (
        <button key={index} onClick={() => setText(`${label}이 눌렸습니다.`)}>
          {label}
        </button>
      ))}
      <div className="text-div">{text}</div>
    </div>
  );
}

function DrugInfo({ title, description }) {
  return (
    <div className="border p-4 text-center">
      <div className="font-bold">{title}</div>
      <div>{description}</div>
      <div className="h-24 bg-gray-200 mt-2">img</div>
    </div>
  );
}

function DrugInfoGrid({ drugInfo }) {
  return (
    <div className="grid grid-cols-4 divide-x divide-gray-300 text-center">
      {["productName", "ingredientName", "companyName", "itemCategory"].map(
        (key) => (
          <div key={key} className="bg-white p-2">
            {drugInfo[key]}
          </div>
        )
      )}
    </div>
  );
}

function MediInfo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [drugInfo, setDrugInfo] = useState(null);
  const [error, setError] = useState(null);
  const [infoText, setInfoText] = useState("약에 대한 기본 정보 txt");

  const handleSearch = () => {
    const foundDrug = mediDetailTest.find((drug) =>
      drug.name.includes(searchTerm)
    );
    if (foundDrug) {
      setDrugInfo(foundDrug);
      setError(null);
    } else {
      setDrugInfo(null);
      setError("검색 결과가 없습니다.");
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

        <section className="border p-4 mb-4">
          <div className="grid grid-cols-4 divide-x divide-gray-300 text-center">
            {["제품명", "성분명", "업체명", "일련번호"].map((header, index) => (
              <div key={index} className="bg-gray-100 p-2">
                {header}
              </div>
            ))}
          </div>
          {drugInfo && (
            <div className="grid grid-cols-4 divide-x divide-gray-300 text-center">
              <div className="bg-white p-2">{drugInfo.name}</div>
              <div className="bg-white p-2">{drugInfo.main_ingredient}</div>
              <div className="bg-white p-2">{drugInfo.company_name}</div>
              <div className="bg-white p-2">{drugInfo.number}</div>
            </div>
          )}
        </section>

        <section className="flex space-x-4 mb-4 items-start justify-center">
          <div className="border p-4 w-48 h-48 bg-gray-200 flex justify-center items-center">
            {drugInfo?.imageUrl ? (
              <img
                src={drugInfo.imageUrl}
                alt="약 이미지"
                className="max-w-full max-h-full"
              />
            ) : (
              <div>이미지를 불러올 수 없습니다.</div>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            {mediDetailTest.map((drug, index) => (
              <button
                key={index}
                className="border p-2 w-64"
                onClick={() => setInfoText(drug.efficacy)}
              >
                {drug.name}
              </button>
            ))}
          </div>
          <div className="border p-4 w-96 h-48">{infoText}</div>
        </section>

        <section className="border-t-2 pt-4">
          <h2 className="text-lg font-semibold mb-2">많이 사용되는 약품</h2>
          <div className="grid grid-cols-3 gap-4">
            {mediDetailTest.slice(0, 3).map((drug, index) => (
              <DrugInfo
                key={index}
                title={drug.name}
                description={drug.efficacy}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default MediInfo;
export { ButtonTextChanger };
