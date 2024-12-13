import React, { useState } from "react";
import landingImg from "../../assets/main_landing.jpg";
import LandingSubBox from "./LandingSubBox";
import { useNavigate } from "react-router-dom";
import { summary } from "../../constants/symptomdata";

const Landing = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const matchedSymptom = summary.find((symptom) =>
      symptom.title.includes(searchTerm)
    );

    if (matchedSymptom) {
      navigate(`/symptomdetail/${matchedSymptom.id}`);
    } else {
      alert("해당 증상을 찾을 수 없습니다.");
    }
  };

  return (
    <div className="relative min-w-[320px]">
      <div className="overflow-hidden flex justify-center items-center relative max-h-[600px] min-h-[300px]">
        <div className="absolute opacity-30 overlay w-full h-full bg-white left-0 top-0"></div>
        <div className="slogan-box absolute 
          left-1/2 transform -translate-x-1/2 
          lg:left-[20%] lg:transform-none 
          top-[25%] flex flex-col gap-4">
          <h2 style={{ fontFamily: "LemonMilk" }} className="text-6xl hidden lg:block">
            MediBook
          </h2>
          <p className="text-base lg:text-lg tracking-tight hidden lg:block">
            약물의 효능, 성분, 부작용을 잘 파악하여 안전한
            <br />
            셀프 메디케이션을 할 수 있도록 돕는
            <br />
            가정용 약물 정보 및 관리 사이트입니다.
          </p>

          <form
            className="flex items-center w-full max-w-xl mx-auto"
            onSubmit={handleSearch}
          >
            <div className="relative w-full flex items-center bg-white rounded-md shadow-sm">
              <div className="absolute left-4">
                <svg
                  className="w-6 h-6 text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="w-full py-4 px-12 text-md text-gray-900 rounded-full outline-none"
                placeholder="증상 or 일반의약품 검색"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                required
              />
              <button
                type="submit"
                className="absolute right-2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <img src={landingImg} className="w-full max-h-[600px] min-h-[300px]" alt="" />
      </div>

      <div className="bottom-box absolute 
        bottom-[-50%]
        sm:bottom-[-40%] 
        md:bottom-[-30%] 
        lg:bottom-[-20%] 
        z-0 w-[90%] 
        sm:w-[600px] 
        lg:w-[800px] 
        xl:w-[1100px] 
        left-1/2 transform -translate-x-1/2">
        <LandingSubBox />
      </div>
    </div>
  );
};

export default Landing;
