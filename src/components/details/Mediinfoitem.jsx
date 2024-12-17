import React from "react";

const Mediinfoitem = ({ mediitem, onClick }) => {
  const {
    사용법,
    업체명,
    제품명,
    주성분,
    효능,
    image_url,
  } = mediitem;

  // 텍스트 길이를 제한하는 함수
  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div
      className="p-2 my-2 w-full max-w-full cursor-pointer"
      onClick={onClick}
    >
      <div className="flex w-full p-10 rounded-lg hover:shadow-md border">
        <div className="w-[40%] mr-10">
          <img src={image_url} alt={제품명} className="w-full" />
        </div>
        <div className="w-4/5">
          <div className="mb-1 flex justify-between items-center">
            <button className="text-xl font-bold mb-2 tracking-wide">
              {truncateText(제품명, 20)}
            </button>
            <p className="text-gray-400 text-xs">{업체명}</p>
          </div>

          <span className="block border-b mb-4 border-gray-300 mx-auto"></span>

          <div className="mb-4">
            <h4 className="font-bold mb-1 text-blue-600">주성분</h4>
            <p className="text-gray-700">{truncateText(주성분, 40)}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-bold mb-1 text-blue-600">효능</h4>
            <p className="text-gray-700">{truncateText(효능, 90)}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-bold mb-1 text-blue-600">사용법</h4>
            <p className="text-gray-700">{truncateText(사용법, 90)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mediinfoitem;
