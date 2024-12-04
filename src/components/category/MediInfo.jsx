import React, { useState } from "react";
import {
  mediDetailTest,
  mediDetailTest2,
  mediDetailTest3,
  mediDetailTest4,
} from "../../constants/data";

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
  const [infoText, setInfoText] = useState("약 설명");

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setDrugInfo(null);
      setError(null);
      return;
    }

    const foundDrug = [mediDetailTest, mediDetailTest2, mediDetailTest3].reduce(
      (found, currentArray) => {
        return (
          found ||
          currentArray.find(
            (drug) =>
              drug.name.includes(searchTerm) ||
              drug.main_ingredient.includes(searchTerm)
          )
        );
      },
      null
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
          <h2 className="text-lg font-semibold mb-2">약품명 검색</h2>
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
            {["제품명", "성분명", "업체명", "일련 번호"].map(
              (header, index) => (
                <div key={index} className="bg-gray-100 p-2">
                  {header}
                </div>
              )
            )}
          </div>
          {drugInfo && (
            <div
              className="grid grid-cols-4 divide-x divide-gray-300 text-center"
              id="root > div > div > div.container.mx-auto.p-4 > main > section:nth-child(2) > div:nth-child(2)"
            >
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
            <div className="flex flex-col space-y-2">
              {mediDetailTest2.map((db, index) => (
                <button
                  key={index}
                  className="border p-2 w-64"
                  onClick={() => setInfoText(db.efficacy)}
                >
                  {db.name}
                </button>
              ))}
              <div className="flex flex-col space-y-2">
                {mediDetailTest3.map((db, index) => (
                  <button
                    key={index}
                    className="border p-2 w-64"
                    onClick={() => setInfoText(db.efficacy)}
                  >
                    {db.name}
                  </button>
                ))}
                <div className="flex flex-col space-y-2">
                  {mediDetailTest4.map((db, index) => (
                    <button
                      key={index}
                      className="border p-2 w-64"
                      onClick={() => setInfoText(db.efficacy)}
                    >
                      {db.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="border p-4 w-96 h-48">{infoText}</div>
        </section>

        <section className="border-t-2 pt-4">
          <h2 className="text-lg font-semibold mb-2">많이 사용되는 약품</h2>
          <div className="grid grid-cols-3 gap-4 items-center">
            {Array.from({ length: 1 }).map((_, index) => (
              <DrugInfo
                key={`test1-${index}`}
                title={mediDetailTest[index]?.name}
                description={mediDetailTest[index]?.efficacy}
              />
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
              <DrugInfo
                key={`test2-${index}`}
                title={mediDetailTest2[index]?.name}
                description={mediDetailTest2[index]?.efficacy}
              />
            ))}
            {Array.from({ length: 1 }).map((_, index) => (
              <DrugInfo
                key={`test3-${index}`}
                title={mediDetailTest3[index]?.name}
                description={mediDetailTest3[index]?.efficacy}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default MediInfo;
