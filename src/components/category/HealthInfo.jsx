import React, { useState, useEffect } from "react";
import HealthNews from "./../details/HealthNews";
import HealthInfoDatabase from "../../constants/healthdata";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="news w-[70%] mt-10">
        <div className="news-main">
          <h2 className="text-3xl font-bold mb-6">NEWS</h2>
          <HealthNews />
        </div>
      </div>

      <div className="health mt-20 w-[70%]">
        <h2 className="text-3xl font-bold mb-6">건강정보</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {HealthInfoDatabase.map((info, index) => (
            <Link to={`/healthdetail/${index}`} key={index}>
              <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold">{info.title}</h3>
                <p>{info.sections[0].content?.substring(0, 50)}...</p>
                {info.sections[0].image && (
                  <img
                    src={info.sections[0].image}
                    alt={info.title}
                    className="h-24 w-full object-cover mt-2"
                  />
                )}
                {!info.sections[0].image && (
                  <div className="h-24 bg-gray-200 mt-2">이미지 없음</div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
