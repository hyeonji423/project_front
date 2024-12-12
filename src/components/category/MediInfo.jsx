import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetMediInfoData } from "../../redux/slices/medicineSlice";
import Mediinfoitem from "../details/Mediinfoitem";

function MediInfo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getMediInfoData = useSelector(
    (state) => state.medicine.getMediInfoData
  );

  useEffect(() => {
    dispatch(fetchGetMediInfoData());
  }, [dispatch]);

  useEffect(() => {
    if (getMediInfoData && Array.isArray(getMediInfoData)) {
      const filtered = getMediInfoData.filter(
        (item) =>
          item.제품명.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.주성분.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, getMediInfoData]);

  const handleSearch = () => {
    const filtered = getMediInfoData.filter(
      (item) =>
        item.제품명.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.주성분.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleMediItemClick = (itemId) => {
    navigate(`/medidetail/${itemId}`);
  };

  if (getMediInfoData && Array.isArray(getMediInfoData)) {
  }

  if (!getMediInfoData || !Array.isArray(getMediInfoData)) {
    return <div>로딩 중...</div>;
  }

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
            <button onClick={handleSearch} className="border p-2">
              검색
            </button>
          </div>
        </section>
        <section>
          <div className="flex flex-col justify-center items-center">
            {filteredData.map((item) => (
              <Mediinfoitem
                key={item.아이디}
                mediitem={item}
                onClick={() => handleMediItemClick(item.아이디)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default MediInfo;
