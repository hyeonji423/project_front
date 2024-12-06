import React, { useState, useEffect } from "react";

const MediList = () => {
  const [drugInfo, setDrugInfo] = useState(null);

  useEffect(() => {
    // 예시 데이터 설정
    const exampleDrugInfo = {
      name: "게보린정",
      main_ingredient: "아세트아미노펜",
      efficacy: "두통 완화",
    };
    setDrugInfo(exampleDrugInfo);
  }, []);

  return (
    <div
      className="medi-list-container"
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        width: "800px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ textAlign: "center" }}>약물 및 성분명 검색</h2>
      <input
        type="text"
        placeholder="SearchBar"
        className="search-bar"
        style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
      />

      <div className="medi-list">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="medi-item"
            style={{ display: "flex", marginBottom: "20px", width: "100%" }}
          >
            <div
              className="medi-image"
              style={{
                width: "100px",
                height: "100px",
                border: "1px solid #000",
                marginRight: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              약에 대한 img
            </div>
            {drugInfo && (
              <div className="medi-info">
                <h3 className="bg-white p-2">{drugInfo.name}</h3>
                <p style={{ fontSize: "12px" }}>{drugInfo.main_ingredient}</p>
                <p style={{ fontSize: "16px" }}>{drugInfo.efficacy}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediList;
