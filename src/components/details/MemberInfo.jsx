import React from "react";
import Sidebar from "../../components/details/Sidebar";

const MemberInfo = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">회원가입</h1>
      <div className="w-full max-w-xs">
        <input
          className="mb-2 p-2 border rounded w-full"
          type="text"
          placeholder="아이디"
        />
        <div className="flex mb-2">
          <input
            className="p-2 border rounded w-full"
            type="email"
            placeholder="이메일"
          />
          <button className="ml-2 p-2 bg-blue-500 text-white rounded">
            인증코드 발송
          </button>
        </div>
        <div className="flex mb-2">
          <input
            className="p-2 border rounded w-full"
            type="text"
            placeholder="이메일 확인기"
          />
          <button className="ml-2 p-2 bg-blue-500 text-white rounded">
            인증코드 확인
          </button>
        </div>
        <input
          className="mb-2 p-2 border rounded w-full"
          type="password"
          placeholder="비밀번호"
        />
        <input
          className="mb-2 p-2 border rounded w-full"
          type="password"
          placeholder="비밀번호 확인"
        />
        <p className="text-xs mb-2">*일치합니다/일치하지 않습니다</p>
        <input
          className="mb-2 p-2 border rounded w-full"
          type="date"
          placeholder="생년월일"
        />
        <div className="mb-2">
          <label className="block mb-1">약관(필수)</label>
          <div className="flex items-center">
            <input type="radio" name="agreement" className="mr-1" /> 동의
            <input type="radio" name="agreement" className="ml-4 mr-1" /> 비동의
          </div>
        </div>
        <button className="p-2 bg-green-500 text-white rounded w-full">
          회원가입
        </button>
      </div>
      <footer className="mt-4 text-sm">
        페이지 소개/전화번호/팩스/로고/카피라이트 등
      </footer>
    </div>
  );
};

export default MemberInfo;
