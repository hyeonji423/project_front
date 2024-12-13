import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetMediInfoData } from "../../redux/slices/medicineSlice";
import Mediinfoitem from "../details/Mediinfoitem";

function MediInfo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGroup, setCurrentGroup] = useState(1);
  const itemsPerPage = 4;
  const pagesPerGroup = 10;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getMediInfoData = useSelector(
    (state) => state.medicine.getMediInfoData
  );
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchGetMediInfoData());
  }, [dispatch]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      setSearchTerm(searchQuery);
      const filtered = getMediInfoData?.filter(
        (item) =>
          item.제품명.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.주성분.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filtered) {
        setFilteredData(filtered);
        setCurrentPage(1);
        setCurrentGroup(1);
      }
    }
  }, [location.search, getMediInfoData]);

  useEffect(() => {
    if (getMediInfoData && Array.isArray(getMediInfoData)) {
      setFilteredData(getMediInfoData);
    }
  }, [getMediInfoData]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleSearch = () => {
    const filtered = getMediInfoData.filter((item) => {
      const productName = item.제품명 ? item.제품명.toLowerCase() : "";
      const mainIngredient = item.주성분 ? item.주성분.toLowerCase() : "";

      return (
        productName.includes(searchTerm.toLowerCase()) ||
        mainIngredient.includes(searchTerm.toLowerCase())
      );
    });
    setFilteredData(filtered);
    setCurrentPage(1);
    setCurrentGroup(1);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleMediItemClick = (itemId) => {
    navigate(`/medidetail/${itemId}`);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const totalGroups = Math.ceil(totalPages / pagesPerGroup);

  const getPageNumbers = () => {
    const start = (currentGroup - 1) * pagesPerGroup + 1;
    const end = Math.min(start + pagesPerGroup - 1, totalPages);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevGroup = () => {
    if (currentGroup > 1) {
      setCurrentGroup(currentGroup - 1);
      setCurrentPage((currentGroup - 2) * pagesPerGroup + 1);
    }
  };

  const handleNextGroup = () => {
    if (currentGroup < totalGroups) {
      setCurrentGroup(currentGroup + 1);
      setCurrentPage(currentGroup * pagesPerGroup + 1);
    }
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
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={handleSearch}
              className="border p-2 hover:bg-gray-100"
            >
              검색
            </button>
          </div>
        </section>
        <section>
          <div className="flex flex-col justify-center items-center">
            {filteredData.length > 0
              ? currentItems.map((item) => (
                  <Mediinfoitem
                    key={item.아이디}
                    mediitem={item}
                    onClick={() => handleMediItemClick(item.아이디)}
                  />
                ))
              : searchTerm && (
                  <div className="text-center py-4">검색 결과가 없습니다.</div>
                )}
          </div>

          {filteredData.length > itemsPerPage && (
            <div className="flex justify-center mt-4 space-x-2">
              {currentGroup > 1 && (
                <button
                  onClick={handlePrevGroup}
                  className="px-3 py-1 border rounded hover:bg-gray-100"
                >
                  &lt;
                </button>
              )}

              {getPageNumbers().map((number) => (
                <button
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === number
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  {number}
                </button>
              ))}

              {currentGroup < totalGroups && (
                <button
                  onClick={handleNextGroup}
                  className="px-3 py-1 border rounded hover:bg-gray-100"
                >
                  &gt;
                </button>
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default MediInfo;
