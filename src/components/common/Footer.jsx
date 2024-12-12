import React from "react";
import mediLogo from "../../assets/medi_logo.png";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center pt-6 border-t">
      <div className="flex justify-between flex-wrap container mx-auto px-4">
        {/* 로고 및 주소 정보 */}
        <div className="flex flex-col lg:flex-row justify-between mb-6">
          <div className="mb-4 lg:mb-0">
            <img src={mediLogo} alt="로고" className="h-6 mb-2" />
            <p className="text-sm text-gray-600">
              (08503) 서울 금천구 가산디지털2로 144 현대테라타워 가산DK A동 20층
            </p>
            <p className="text-sm text-gray-600">
              대표전화: 02-1234-5678 &nbsp; | &nbsp; FAX: 02-000-0000
            </p>
          </div>
        </div>

        {/* 저작권 정보 */}
        <div className="border-gray-200 pt-4 mt-4">
          <p className="text-sm text-gray-400 text-center">
            COPYRIGHT © by CodeLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
