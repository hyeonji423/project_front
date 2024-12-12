import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import favi from '../../assets/medi_favi.png'
import { FiLogIn } from "react-icons/fi";
import { MdLogout } from "react-icons/md";

const Mypage = ({ user, onClose, onLogout }) => {
  const modalRef = useRef()

  const handleLogout = () => {
    onLogout()
    onClose()
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  
  if (!user) {
    return (
      <div ref={modalRef} className="absolute right-0 top-full w-60 bg-white rounded-lg p-4 z-50 shadow-[0_2px_6px_rgba(0,0,0,0.05),0_-2px_6px_rgba(0,0,0,0.05)]">
        <div className="flex flex-col items-center mb-3">
          <div className="w-20 h-20 rounded-full bg-blue-100 my-1 flex justify-center items-center">
            <img src={favi} alt="" className="w-12 h-12" />
          </div>
          <h3 className="text-lg font-bold mt-4">guest</h3>
        </div>
        
        <span className="mb-4 border-b-2 border-blue-200 w-3/5 block mx-auto"></span>

        <ul className="space-y-2">
          <Link to="/login" onClick={onClose}>
            <li className="p-1 hover:bg-gray-100 rounded flex items-center justify-between cursor-pointer">
              <span>로그인</span>
              <FiLogIn/>
            </li>
          </Link>
        </ul>
      </div>
    );
  }


  return (
    <div ref={modalRef} className="absolute right-0 top-full w-60 bg-white rounded-lg p-4 z-50 shadow-[0_2px_6px_rgba(0,0,0,0.05),0_-2px_6px_rgba(0,0,0,0.05)]">
      <div className="flex flex-col items-center mb-3">
        <div className="w-20 h-20 rounded-full bg-blue-100 flex justify-center items-center">
          <img src={favi} alt="" className="w-12 h-12" />
        </div>
        <h3 className="text-lg font-bold mt-4">{user?.email}</h3>
      </div>
      
      <span className="mb-4 border-b-2 border-blue-200 w-4/5 block mx-auto"></span>

      <ul className="space-y-2">
      <li className="p-1 hover:bg-gray-100 rounded">
          <Link to="/mymedi_list" onClick={onClose}>약품 관리</Link>
        </li>
        <li className="p-1 hover:bg-gray-100 rounded">
          <Link to="/newpage" onClick={onClose}>열람 목록</Link>
        </li>
        <li className="p-1 hover:bg-gray-100 rounded">
          <Link to="/memberinfo" onClick={onClose}>회원정보 수정</Link>
        </li>
        <li className="p-1 hover:bg-gray-100 rounded flex items-center justify-between cursor-pointer" onClick={handleLogout}>
          로그아웃
          <MdLogout />
        </li>
      </ul>
    </div>
  );
};

export default Mypage;