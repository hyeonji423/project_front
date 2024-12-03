import React from "react";
import Sidebar from "../details/Sidebar";

const MemberInfo = () => {
  return (
    <div className="flex justify-start">
      <Sidebar />
      <div
        className="flex flex-col p-8 w-full max-w-md mx-auto"
        style={{ width: "80%", maxWidth: "600px" }}
      >
        <h2 className="text-2xl font-bold mb-6">회원정보 수정</h2>
        <form className="space-y-4">
          {/* 아이디 입력 필드 */}
          <input
            type="text"
            placeholder="-- 아이디"
            className="w-full p-2 border border-gray-300 rounded"
          />
          {/* 이메일 입력 및 인증 버튼 */}
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="이메일"
              className="flex-grow p-2 border border-gray-300 rounded"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              인증코드 발송
            </button>
          </div>
          {/* 이메일 확인키 입력 및 확인 버튼 */}
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="이메일 확인키"
              className="flex-grow p-2 border border-gray-300 rounded"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              인증코드 확인
            </button>
          </div>
          {/* 비밀번호 입력 필드 */}
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            className="w-full p-2 border border-gray-300 rounded"
          />
          {/* 비밀번호 일치 여부 체크박스 */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="working" />
            <label htmlFor="working">일치합니다/일치하지 않습니다</label>
          </div>
          {/* 생년월일 입력 필드 */}
          <input
            type="date"
            placeholder="-- 생년월일"
            className="w-full p-2 border border-gray-300 rounded"
          />
          {/* 성별 선택 라디오 버튼 */}
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input type="radio" name="gender" value="female" />
              <span className="ml-2">여성</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" value="male" />
              <span className="ml-2">남성</span>
            </label>
          </div>
          {/* 저장 및 회원탈퇴 버튼 */}
          <div className="flex space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              저장
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              회원탈퇴
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MemberInfo;
