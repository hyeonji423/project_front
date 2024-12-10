import React, { useState } from "react";
import axios from 'axios';

const Service = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [reponse, setReponse] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, content, email);
    
    const data = {
      title,
      content,
      email,
    };

    try {
      const result = await axios.post("http://localhost:8000/email/send-email", data);
      setReponse("건의사항이 전달 되었습니다.");
    } catch (error) {
      setReponse("이메일 전송이 실패했습니다. 다시 시도해주세요.");
    }
  };


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
            <div className="w-full bg-blue-500 text-white p-2">불만사항</div>
          </div>
          <div className="w-3/4">
            <select className="w-full border p-2">
              <option>추가 약품 요청</option>
              <option>기타 불만사항</option>
              <option>정보 수정요청</option>
            </select>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title">게시글제목</label>
            <input id="title" type="text" value={title} onChange={handleTitleChange} className="w-full border p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="content">게시글 본문내용</label>
            <textarea id="content" value={content} onChange={handleContentChange} className="w-full border p-2 h-32" />
          </div>
          <div className="flex items-center mb-4">
            <label className="mr-2">수신받을 이메일</label>
            <input type="checkbox" className="mr-2" />
            <input type="email" value={email} onChange={handleEmailChange} className="border p-2 flex-grow" />
          </div>
          <div>
            <button className="bg-blue-500 text-white p-2 w-full">보내기</button>
          </div>
        </form>
        <p>{reponse}</p>
      </div>
    </div>
  );
}

export default Service;
