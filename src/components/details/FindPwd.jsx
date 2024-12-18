import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchPostEmailVerificationData,
  fetchUpdateAuthData,
  resetAuthState,
  verifyEmail,
} from "../../redux/slices/authSlice";
import mediLogo from "../../assets/medi_logo.png";
import { clearToken } from "../../redux/slices/loginSlice";

const FindPwd = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { verificationCode, isEmailVerified } = useSelector(
    (state) => state.auth
  );

  const user = useSelector((state) => state.login.user);
  console.log(user);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      alert("이미 로그인된 상태입니다.");
      navigator("/");
    }
  }, [navigator]);

  // 컴포넌트 마운트/언마운트 시 인증 상태 초기화
  useEffect(() => {
    return () => {
      dispatch(resetAuthState());
    };
  }, [dispatch]);

  const [value, setValue] = useState({
    email: "",
    password: "",
    birth_date: "",
    confirm_password: "",
  });

  const [userInputCode, setUserInputCode] = useState("");

  const handleSendVerification = async () => {
    if (!value.email) {
      alert("이메일을 입력해주세요.");
      return;
    }
    try {
      const result = await dispatch(
        fetchPostEmailVerificationData(value.email)
      ).unwrap();
      console.log("이메일 인증 응답:", result); // 디버깅용
      alert("인증 코드가 발송되었습니다.");
    } catch (error) {
      alert("인증 코드 발송 실패");
    }
  };

  // 인증 코드 확인
  const handleVerifyCode = () => {
    console.log("서버 인증코드", verificationCode.data.verificationCode);
    console.log("유저 인증코드", userInputCode);

    if (userInputCode === verificationCode.data.verificationCode) {
      // dispatch(verifyEmail({ data: { verificationCode: userInputCode } }));
      dispatch(verifyEmail());

      alert("이메일 인증이 완료되었습니다.");
    } else {
      alert("인증코드가 일치하지 않습니다.");
    }
  };
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

    // 이메일 인증 확인
    if (!isEmailVerified) {
      alert("이메일 인증이 필요합니다.");
      return;
    }
    console.log("이메일 인증 확인", isEmailVerified);

    if (
      value.email === "" ||
      value.password === "" ||
      value.confirm_password === ""
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
    };

    try {
      const response = await dispatch(fetchUpdateAuthData(data)).unwrap();
      if (response && response.msg) {
        // response.msg 확인
        alert(response.msg);
        dispatch(clearToken());
        navigator("/login");
      } else {
        alert("회원정보 수정에 실패했습니다.");
      }
    } catch (error) {
      alert(error.msg || "회원정보 수정 중 오류가 발생했습니다.");
    }
  };

  // 가입하기 버튼 비활성화 조건
  // const isSubmitDisabled = !isEmailVerified;

  return (
    <div className="flex flex-col justify-center items-center h-auto mb-16">
      <div className="logo w-[350px] mt-32 mb-12">
        <img src={mediLogo} alt="logo" />
      </div>
      <div className="shadow-lg px-12 py-10 w-[500px] border mb-16 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">비밀번호 찾기</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
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
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-neutral-700 text-lg"
            >
              이메일
            </label>
            <div className="flex items-center justify-center gap-1.5">
              <input
                type="email"
                placeholder="Email"
                className="w-[70%] px-3 py-2 border rounded-md"
                name="email"
                onChange={handleChange}
              />
              <button
                onClick={handleSendVerification}
                className="w-[30%] py-2 bg-blue-400 text-white rounded-md text-[10px] hover:bg-blue-500 transition-all duration-200 text-base"
                type="button"
              >
                인증코드 발송
              </button>
            </div>
          </div>

          {verificationCode && (
            <div className="mb-4">
              <label className="block text-neutral-700 text-lg mb-1">
                이메일 확인
              </label>
              <div className="flex gap-1.5">
                <input
                  type="text"
                  placeholder="인증코드 입력"
                  className="w-[70%] px-3 py-2 border rounded-md"
                  value={userInputCode}
                  onChange={(e) => setUserInputCode(e.target.value)}
                />
                <button
                  onClick={handleVerifyCode}
                  className="w-[30%] py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200 text-base"
                  type="button"
                >
                  확인
                </button>
              </div>
            </div>
          )}

          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-neutral-700 text-lg mb-1"
            >
              새 비밀번호
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md mb-2"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="confirmPassword"
              className="block text-neutral-700 text-lg mb-1"
            >
              새 비밀번호 확인
            </label>
            <input
              type="password"
              placeholder="Comfirm Password"
              className="w-full px-3 py-2 border rounded-md mb-2"
              name="confirm_password"
              onChange={handleChange}
            />
          </div>
          
          <div className="flex justify-center items-center gap-2 mb-6">
            <button
              className="w-full h-12 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:text-white transition-all duration-200"
              type="submit"
              // disabled={isSubmitDisabled}
            >
              가입 하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FindPwd;
