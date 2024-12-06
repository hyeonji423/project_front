import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchPostAuthData } from "../../redux/slices/authSlice";
import mediLogo from "../../assets/medi_logo.png";

const Register = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [value, setValue] = useState({
    email: "",
    password: "",
    birth_date: "",
    confirm_password: "",
  });

  // const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 쿼리가 잡히지 않게(경로 표시X)

    if (
      value.email === "" ||
      value.password === "" ||
      value.confirm_password === "" ||
      value.birth_date === ""
    ) {
      alert("모든 항목은 필수 입력값입니다.");
      return;
    }
    if (value.password !== value.confirm_password) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // const formData = new FormData();
    // formData.append("username", value.username);
    // formData.append("email", value.email);
    // formData.append("password", value.password);
    // if (file) {
    //   formData.append("profile_img", file); // 파일 추가
    // }

    const data = {
      email: value.email,
      password: value.password,
      birth_date: value.birth_date,
    };

    try {
      const response = await dispatch(fetchPostAuthData(data)).unwrap();
      // console.log(response);
      if (response.status === 201) {
        alert(response.data.msg);
        navigator("/login");
        return;
      }
      if (response.data.success === false) {
        alert(response.data.msg);
        return;
      }
    } catch (error) {
      alert(error.msg);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-auto">
      <div className='logo w-[350px] mt-20 mb-8'>
        <img src={mediLogo} alt="" />
      </div>
      <div className="shadow-lg px-8 py-5 w-[30%] border mb-16">
        <h2 className="text-lg font-bold mb-4 text-center">회원가입</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {/* <label htmlFor="username" className="block text-neutral-700">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-3 py-2 border"
              name="username"
              onChange={handleChange}
            /> */}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-neutral-700">
              이메일
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-neutral-700">
              비밀번호
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-neutral-700">
              비밀번호 확인
            </label>
            <input
              type="password"
              placeholder="Comfirm Password"
              className="w-full px-3 py-2 border"
              name="confirm_password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="birth_date" className="block text-neutral-700">
              생년월일
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border"
              name="birth_date"
              onChange={handleChange}
            />
          </div>
          {/* <input type="file" name="profile_img" onChange={handleFileChange} /> */}
          <button className="btn w-full h-12 !text-base">회원가입</button>
        </form>
        <div className="mt-4 text-center">
          <span>이미 회원이라면 | </span>
          <Link to="/login" className="underline hover:italic">
            로그인 하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
