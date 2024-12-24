import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../constants/data";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../../redux/slices/loginSlice";
import mediLogo from "../../assets/medi_logo.png";
import Mypage from "../category/Mypage";
import { IoMenu, IoClose } from "react-icons/io5";
import chatIcon from "../../assets/챗봇icon/simple.png";

const Header = () => {
  const dispatch = useDispatch();
  // const isLoggedIn = false
  const user = useSelector((state) => state.login.user);
  // console.log(user);
  const [showMypage, setShowMypage] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // ref 추가
  const mypageRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // 외부 클릭 감지 핸들러 추가
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mypageRef.current && !mypageRef.current.contains(event.target)) {
        setShowMypage(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    dispatch(clearToken());
    alert("로그아웃 되었습니다.");
  };

  const toggleMypage = (e) => {
    e.preventDefault();
    setShowMypage(!showMypage);
  };
  
  const openChatWindow = (e) => {
    e.preventDefault();
    const width = 390;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      "/",
      "chatWindow",
      `width=${width}, height=${height}, left=${left}, top=${top}`
    );
  };
  return (
    <div className="w-full flex justify-center shadow-custom sticky top-0 z-50 bg-white">
      <div className="container flex justify-between items-center relative">
        <div className="logo left-0">
          <Link to="/">
            <img 
              src={mediLogo} 
              alt="메디 로고" 
              className="w-[150px] md:w-[200px]"
            />
          </Link>
        </div>
        <div className="head-all">
          <div className="head-top w-full text-xs md:text-sm info mt-2">
            <ul className="flex gap-2 md:gap-6 items-center justify-end">
              {user !== null ? (
                <>
                  <li className="text-neutral-500 hover:text-black transition-all duration-100">
                    <button onClick={handleLogout}>로그아웃</button>
                  </li>
                </>
              ) : (
                <li className="text-neutral-500 hover:text-black transition-all duration-100">
                  <Link to="/login">로그인</Link>
                </li>
              )}
              <li className="text-neutral-500 hover:text-black transition-all duration-100">
                <Link to="/register">회원가입</Link>
              </li>
              <li className="relative" ref={mypageRef}>
                <Link
                  onClick={toggleMypage}
                  className="text-neutral-500 hover:text-black transition-all duration-100"
                >
                  마이페이지
                </Link>
                {showMypage && (
                  <Mypage
                    user={user}
                    onClose={() => setShowMypage(false)}
                    onLogout={handleLogout}
                  />
                )}
              </li>
            </ul>
          </div>

          <div className="head-bottom w-full text-lg py-2 relative h-8">
            {/* ref 추가된 모바일 메뉴 영역 */}
            <div ref={mobileMenuRef}>
              {/* 모바일 메뉴 버튼과 내용 */}
              <button 
                className="hidden max-sm:block fixed top-4 right-4 webkit-z-40 z-40 mt-2 sm:mt-0" 
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
              </button>
              
              <ul className={`flex sm:gap-6 items-center justify-center sm:justify-end ${!isMobileMenuOpen && 'max-sm:hidden'}
                ${isMobileMenuOpen && 'max-sm:flex max-sm:fixed max-sm:left-0 max-sm:right-0 max-sm:bg-white max-sm:shadow-lg max-sm:flex-col max-sm:py-2 max-sm:z-40'}`}>
                {navItems.map((item, idx) => (
                  <li key={idx} className={`tracking-tight max-sm:w-full max-sm:text-center max-sm:py-2 ${(item.label === "챗봇" || item.label === "건강정보") ? 'max-sm:bg-blue-50' : ''}`}>
                    {item.to === "/chat" ? (
                      <Link
                        to={item.to}
                        className="hover:text-blue-600 transition-all duration-100 w-full flex items-center justify-center gap-1"
                        onClick={(e) => {
                          openChatWindow(e);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <img src={chatIcon} alt="챗봇 아이콘" className="w-5 h-5 mb-px" />
                        {item.label}
                      </Link>
                    ) : item.to === "/mediinfo" ? (
                      <Link
                        to={item.to}
                        className="hover:text-blue-600 transition-all duration-100 block w-full"
                        onClick={() => {
                          window.location.href = "/mediinfo";
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <Link
                        to={item.to}
                        className="hover:text-blue-600 transition-all duration-100 block w-full"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
