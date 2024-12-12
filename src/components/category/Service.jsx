import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Service = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
<<<<<<< HEAD
  const [category, setCategory] = useState("추가 약품 요청");
  const [response, setResponse] = useState("");
  const [isEmailEnabled, setIsEmailEnabled] = useState(false); // 체크박스 상태 추가

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsEmailEnabled(e.target.checked);
    if (!e.target.checked) {
      setEmail(""); // 체크박스 해제시 이메일 초기화
    }
  };
=======
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
>>>>>>> a5724bfd424e33be56f2936268444175f627c60f

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

    if (!title.trim() || !content.trim()) {
      setResponse("제목과 내용을 입력해주세요.");
      return;
    }

    if (isEmailEnabled && !email.trim()) {
      setResponse("이메일 주소를 입력해주세요.");
      return;
    }

    const data = {
      title,
      content,
      email: isEmailEnabled ? email : null,
      category,
    };

    try {
      const result = await axios.post(
        "http://localhost:8000/email/send-email",
        data
      );
      setResponse(result.data.message);
      // 폼 초기화
      setTitle("");
      setContent("");
      setEmail("");
      setCategory("추가 약품 요청");
    } catch (error) {
      setResponse(
        error.response?.data?.message || "이메일 전송에 실패했습니다."
      );
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-8">
<<<<<<< HEAD
      <div className="w-[70%] max-w-[1200px]">
        <h2 className="flex justify-center items-center text-2xl font-bold mb-4">
=======
      <div className="w-[40%] max-w-[1200px] ">
        <h2 className="flex  justify-center items-center text-2xl font-bold mb-4">
>>>>>>> a5724bfd424e33be56f2936268444175f627c60f
          건의사항
        </h2>
        <div className="flex mb-4">
          <div className="w-1/4">
<<<<<<< HEAD
            <div className="w-full bg-blue-500 text-white p-2">Category</div>
          </div>
          <div className="w-3/4">
            <select
              className="w-full border p-2"
              value={category}
              onChange={handleCategoryChange}
            >
=======
            <div className="w-full rounded-l-md bg-blue-500 text-white p-2">
              Category
            </div>
          </div>
          <div className="w-3/4">
            <select className="w-full rounded-r-md border p-2">
>>>>>>> a5724bfd424e33be56f2936268444175f627c60f
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
<<<<<<< HEAD
              checked={isEmailEnabled}
=======
              checked={useUserEmail}
>>>>>>> a5724bfd424e33be56f2936268444175f627c60f
              onChange={handleCheckboxChange}
            />
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
<<<<<<< HEAD
              className="border p-2 flex-grow"
              disabled={!isEmailEnabled}
=======
              className="border rounded-md p-2 flex-grow"
              disabled={useUserEmail}
>>>>>>> a5724bfd424e33be56f2936268444175f627c60f
            />
          </div>
          <div>
            <button className="rounded-md bg-blue-500 text-white p-2 w-full">
              보내기
            </button>
          </div>
        </form>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Service;
