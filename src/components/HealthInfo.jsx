import React from "react";

function App() {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center border-b-2 pb-2">
        <h1 className="text-2xl font-bold">Medibook</h1>
        <nav className="space-x-4"></nav>
      </header>

      <div className="flex justify-between mt-4">
        <div className="w-2/3">
          <h2 className="font-bold">NEWS</h2>
          <div className="flex flex-col space-x-4 space-y-4 mt-2">
            <div className="w-1/2 h-24 bg-gray-200"></div>
            <div className="w-1/2 h-24 bg-gray-200"></div>
          </div>
        </div>
        <div className="w-1/3">
          <ul className="list-disc pl-5">
            <ul className="flex space-x-4 mt-8 ">
              <ul className="w-1/2 h-24 bg-gray-200">
                <li>NEWS 기사 타이틀</li>
                <li>NEWS 기사 타이틀</li>
                <li>NEWS 기사 타이틀</li>
                <li>NEWS 기사 타이틀</li>
              </ul>
            </ul>
          </ul>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="font-bold">건강정보</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <h3 className="font-bold">건강정보 제목</h3>
              <p>설명</p>
              <div className="h-24 bg-gray-200 mt-2">img</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-8 border-t-2 pt-2">
        <p>푸터: 페이지 소개/전화번호/주소/로그인/카피라이트 등</p>
      </footer>
    </div>
  );
}

export default App;
