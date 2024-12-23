import React, { useState } from "react";
import defaultImage from "../../assets/default.jpg"; // default 이미지를 import

const Mediinfoitem = React.memo(({ mediitem, onClick }) => {
  const { 사용법, 업체명, 제품명, 주성분, 효능, image_url } = mediitem;
  const [imgSrc, setImgSrc] = useState(image_url || defaultImage);

  const handleImageError = () => {
    // image_url이 실패하면 public 폴더의 이미지를 시도
    if (imgSrc !== "/mediImage/default.jpg") {
      setImgSrc("/mediImage/default.jpg");
    }
    // public 폴더의 이미지도 실패하면 import한 이미지를 사용
    else if (imgSrc !== defaultImage) {
      setImgSrc(defaultImage);
    }
  };

  // 텍스트 길이를 제한하는 함수
  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="p-2 my-2 w-full max-w-full cursor-pointer" onClick={onClick}>
      <div className="flex flex-col md:flex-row w-full p-4 md:p-10 rounded-lg hover:shadow-md border">
        <div className="w-full md:w-[40%] mb-4 md:mb-0 md:mr-10 h-[200px] md:h-[300px] flex items-center justify-center">
          <img
            src={imgSrc}
            onError={handleImageError}
            alt={제품명 || "의약품 이미지"}
            className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] object-contain"
          />
        </div>
        <div className="w-full md:w-4/5">
          <div className="mb-1 flex flex-col md:flex-row md:justify-between md:items-center">
            <button className="text-lg md:text-xl font-bold mb-2 tracking-wide">
              {truncateText(제품명, 20)}
            </button>
            <p className="text-gray-400 text-xs md:text-sm">{업체명}</p>
          </div>

          <span className="block border-b mb-3 md:mb-4 border-gray-300 mx-auto"></span>

          <div className="mb-3 md:mb-4">
            <h4 className="font-bold mb-1 text-blue-600 text-sm md:text-base">주성분</h4>
            <p className="text-gray-700 text-xs md:text-sm">
              {truncateText(주성분, 40)}
            </p>
          </div>

          <div className="mb-3 md:mb-4">
            <h4 className="font-bold mb-1 text-blue-600 text-sm md:text-base">효능</h4>
            <p className="text-gray-700 text-xs md:text-sm">
              {truncateText(효능, 90)}
            </p>
          </div>

          <div className="mb-3 md:mb-4">
            <h4 className="font-bold mb-1 text-blue-600 text-sm md:text-base">사용법</h4>
            <p className="text-gray-700 text-xs md:text-sm">
              {truncateText(사용법, 90)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Mediinfoitem;
