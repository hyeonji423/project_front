import React, { useState, useEffect } from 'react';
import HealthNews from './../details/HealthNews';


function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="news w-[70%] mt-10">
        <div className="news-main">
          <h2 className="text-3xl font-bold mb-6">NEWS</h2>
          <HealthNews/>
        </div>
      </div>

      <div className="health mt-20 w-[70%]">
        <h2 className="text-3xl font-bold mb-6">건강정보</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <h3 className="font-bold">건강정보 제목</h3>
              <p>설명</p>
              <div className="h-24 bg-gray-200 mt-2">img</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
