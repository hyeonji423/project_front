import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Service = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [reponse, setReponse] = useState("");
  const [useUserEmail, setUseUserEmail] = useState(true);

  // Redux store에서 사용자 정보 가져오기
  const user = useSelector((state) => state.login.user);

  // 컴포넌트 마운트 시 사용자 이메일 설정
  useEffect(() => {
    if (user?.email) {
      setEmail(user.email);
    }
  }, [user]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setUseUserEmail(e.target.checked);
    if (e.target.checked && user?.email) {
      setEmail(user.email);
    } else {
      setEmail("");
    }
  };

  const handleEmailChange = (e) => {
    if (!useUserEmail) {
      setEmail(e.target.value);
    }
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
      const result = await axios.post(
        "http://localhost:8000/email/send-email",
        data
      );
      setReponse("건의사항이 전달 되었습니다.");
    } catch (error) {
      setReponse("이메일 전송이 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-8">
      <div className="w-[30%] max-w-[1200px] ">
        <h2 className="flex  justify-center items-center text-2xl font-bold mb-8">
          건의사항
        </h2>
        <div className="flex mb-8">
          <div className="w-1/4">
            <div className="w-full rounded-l-md bg-blue-500 text-white p-2">
              Category
            </div>
          </div>
          <div className="w-3/4">
            <select className="w-full rounded-r-md border p-2">
              <option>추가 약품 요청</option>
              <option>정보 수정요청</option>
              <option>기타 불만사항</option>
            </select>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title">제목</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="w-full rounded-md border p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content">내용</label>
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              className="w-full rounded-md border p-2 h-32"
            />
          </div>
          <div className="flex items-center mb-4">
            <label className="mr-2">수신받을 이메일</label>
            <input
              type="checkbox"
              className="mr-2"
              checked={useUserEmail}
              onChange={handleCheckboxChange}
            />
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="border rounded-md p-2 flex-grow"
              disabled={useUserEmail}
            />
          </div>
          <div>
            <button className="rounded-md bg-blue-500 text-white p-2 w-full">
              보내기
            </button>
          </div>
        </form>
        <p>{reponse}</p>
      </div>
    </div>
  );
};

export default Service;
