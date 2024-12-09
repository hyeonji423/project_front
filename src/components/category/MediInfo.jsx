import React, { useState, useEffect } from "react";
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

  const allMediDetails = [
    ...mediDetailTest,
    ...mediDetailTest2,
    ...mediDetailTest3,
    ...mediDetailTest4,
  ];

  useEffect(() => {
    if (!searchTerm.trim()) {
      setDrugInfo(null);
      return;
    }

    const foundDrug = allMediDetails.find(
      (drug) =>
        drug.name.includes(searchTerm) ||
        drug.main_ingredient.includes(searchTerm)
    );

    setDrugInfo(foundDrug || null);
  }, [searchTerm, allMediDetails]);

  return (
    <div className="mx-auto p-4 max-w-4xl">
      <main className="mt-4">
        <section className="border p-2 mb-2">
          <h2 className="text-lg font-semibold mb-2">약품명 검색</h2>
          <div className="flex space-x-2 mb-2">
            <input
              type="text"
              placeholder="SearchBar"
              className="border p-2 flex-grow"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={() => setSearchTerm(searchTerm)}
              className="border p-2"
            >
              검색
            </button>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4 mb-4">
          {drugInfo ? (
            <DrugInfo title={drugInfo.name} description={drugInfo.main_ingredient} />
          ) : (
            allMediDetails.map((drug) => (
              <DrugInfo key={drug.name} title={drug.name} description={drug.main_ingredient} />
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default MediInfo;
