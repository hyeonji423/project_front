import React from "react";

function Service() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-8">
      <div className="w-[70%] max-w-[1200px]">
        <div className="mb-4">
          <input
            type="text"
            placeholder="건의사항"
            className="w-full border p-2"
          />
        </div>
        <div className="flex mb-4">
          <div className="w-1/4">
            <button className="w-full bg-blue-500 text-white p-2">
              불만사항
            </button>
          </div>
          <div className="w-3/4">
            <select className="w-full border p-2">
              <option>
                불만사항 list (추가 약품 요청, 기타 불만사항, 정보 수정요청)
              </option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="게시글제목"
            className="w-full border p-2"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="게시글 본문내용"
            className="w-full border p-2 h-32"
          />
        </div>
        <div className="flex items-center mb-4">
          <label className="mr-2">수신받을 이메일</label>
          <input type="checkbox" className="mr-2" />
          <input type="email" className="border p-2 flex-grow" />
        </div>
        <div>
          <button className="bg-blue-500 text-white p-2 w-full">보내기</button>
        </div>
      </div>
    </div>
  );
}

export default Service;
