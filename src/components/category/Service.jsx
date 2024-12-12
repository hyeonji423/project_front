import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Service = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("추가 약품 요청");
  const [response, setResponse] = useState("");
  const [useUserEmail, setUseUserEmail] = useState(false);

  const user = useSelector((state) => state.login.user);

  useEffect(() => {
    if (user?.email) {
      setEmail(user.email);
    }
  }, [user]);

  useEffect(() => {
    const emailInput = document.getElementById('emailInput');
    if (emailInput) {
      emailInput.disabled = !useUserEmail;
      emailInput.style.color = useUserEmail ? 'black' : 'gray';
    }
  }, []);

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
    const emailInput = document.getElementById('emailInput');
    
    if (e.target.checked) {
      setEmail('');
      emailInput.disabled = false;
      emailInput.style.color = 'black';
    } else {
      if (user?.email) {
        setEmail(user.email);
      }
      emailInput.disabled = true;
      emailInput.style.color = 'gray';
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
          <div className="mb-3">
            <label htmlFor="email" className="block text-neutral-700 text-lg mb-1">이메일</label>
            <div className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={useUserEmail}
                onChange={handleCheckboxChange}
                id="useCustomEmail"
              />
              <label htmlFor="useCustomEmail" className="text-sm text-gray-600">다른 이메일 사용</label>
            </div>
            <input
              type="email"
              id="emailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="이메일 주소 입력"
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
