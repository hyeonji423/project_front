import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Service = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("추가 약품 요청");
  const [response, setResponse] = useState("");
  const [useUserEmail, setUseUserEmail] = useState(true);

  const user = useSelector((state) => state.login.user);

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

  const handleEmailChange = (e) => {
    if (!useUserEmail) {
      setEmail(e.target.value);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setUseUserEmail(e.target.checked);
    if (e.target.checked && user?.email) {
      setEmail(user.email);
    } else {
      setEmail("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(title, content, email);

    if (!title.trim() || !content.trim()) {
      setResponse("제목과 내용을 입력해주세요.");
      return;
    }

    if (!email.trim()) {
      setResponse("이메일 주소를 입력해주세요.");
      return;
    }

    const data = {
      title,
      content,
      email,
      category
    };

    try {
      const result = await axios.post(
        "http://localhost:8000/email/send-email",
        data
      );
      setResponse("건의사항이 전달 되었습니다.");

      setResponse(result.data.message);
      // 성공시 폼 초기화
      if (result.data.success) {
        setTitle("");
        setContent("");
        if (!useUserEmail) {
          setEmail("");
        }
      }
    } catch (error) {
      setResponse("이메일 전송이 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-8">
      <div className="w-[40%] max-w-[1200px]">
        <h2 className="flex justify-center items-center text-2xl font-bold mb-4">
          건의사항
        </h2>
        <div className="flex mb-8">
          <div className="w-1/4">
            <div className="w-full rounded-l-md bg-blue-500 text-white p-2">
              Category
            </div>
          </div>
          <div className="w-3/4">
            <select 
              className="w-full rounded-r-md border p-2"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="추가 약품 요청">추가 약품 요청</option>
              <option value="정보 수정요청">정보 수정요청</option>
              <option value="기타 불만사항">기타 불만사항</option>
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
              placeholder="제목을 입력해주세요"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content">내용</label>
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              className="w-full rounded-md border p-2 h-32"
              placeholder="내용을 입력해주세요"
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
              placeholder={user?.userId || "이메일을 입력해주세요"}
              disabled={useUserEmail}
              placeholder="이메일 주소를 입력해주세요"
            />
          </div>
          <button className="rounded-md bg-blue-500 text-white p-2 w-full">
            보내기
          </button>
        </form>
        {response && (
          <p className="mt-4 text-center text-blue-600">{response}</p>
        )}
      </div>
    </div>
  );
};

export default Service;
