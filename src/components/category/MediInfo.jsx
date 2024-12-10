import React, { useState, useEffect, useMemo } from "react";
import {
  mediDetailTest,
  mediDetailTest2,
  mediDetailTest3,
  mediDetailTest4,
} from "../../constants/data";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetMediInfoData } from "../../redux/slices/medicineSlice";


function DrugInfo({ title, description, efficacy, image }) {
  const dispatch = useDispatch();
  const getMediInfoData = useSelector((state) => state.medicine.getMediInfoData);
  console.log(getMediInfoData);
  
  useEffect(() => {
    const fetchGetMediItems = async () => {
      try {
        await dispatch(fetchGetMediInfoData()).unwrap();
      } catch (error) {
        console.error("Error fetching medicine data:", error);
      }
    };
    fetchGetMediItems();
  }, [dispatch]);

  return (
    <div className="flex border p-4 mb-4">
      <div className="w-1/5 mr-4">{image}</div>
      <div className="w-4/5">
        <div className="flex justify-between mb-2 border-b pb-2">
          <div className="font-bold text-sm">제품명</div>
          <div className="text-sm text-left !important">{title}</div>
        </div>
        <div className="flex justify-between mb-2 border-b pb-2">
          <div className="font-bold text-sm">주성분</div>
          <div className="text-xs text-left !important">{description}</div>
        </div>
        <div className="flex justify-between mb-2 border-b pb-2">
          <div className="font-bold text-base w-[10%]">효능</div>
          <div className="text-xs w-[90%] text-left !important">{efficacy}</div>
        </div>
      </div>
    </div>
  );
}

function MediInfo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [drugInfo, setDrugInfo] = useState(null);

  const allMediDetails = useMemo(
    () => [
      ...mediDetailTest,
      ...mediDetailTest2,
      ...mediDetailTest3,
      ...mediDetailTest4,
    ],
    []
  );

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
          <h2 className="text-lg font-semibold mb-2">약품 및 성분명 검색</h2>
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

        <section className="grid grid-cols-1 gap-4 mb-4">
          {drugInfo ? (
            <DrugInfo
              title={drugInfo.name}
              description={drugInfo.main_ingredient}
              efficacy={drugInfo.efficacy}
              image={<img src={drugInfo.image} alt={drugInfo.name} />}
            />
          ) : (
            allMediDetails.map((drug) => (
              <DrugInfo
                key={drug.name}
                title={drug.name}
                description={drug.main_ingredient}
                efficacy={drug.efficacy}
                image={<img src={drug.image} alt={drug.name} />}
              />
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default MediInfo;
