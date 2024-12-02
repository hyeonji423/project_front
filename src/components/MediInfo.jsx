import React, { useState, useEffect } from "react";

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

function App() {
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
            />
          </div>
        </section>

        <section className="border p-4 mb-4">
          <div className="grid grid-cols-4 gap-2 text-center">
            <div>제품명</div>
            <div>성분명</div>
            <div>업체명</div>
            <div>품목구분</div>
          </div>
          <div className="text-center mt-2">.TEXT.</div>
        </section>

        <section className="flex space-x-4 mb-4">
          <div className="border p-4 flex-grow">
            <div className="h-32 bg-gray-200 flex items-center justify-center">
              약. img
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <button className="border p-2">약 이름(약품 상세 Page 링크)</button>
            <button className="border p-2">약에 대한 기본 정보</button>
          </div>
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

export default App;
