import React from "react";

const Mediinfoitem = ({ mediitem, onClick }) => {
  const {
    공개일자,
    보관방법,
    사용법,
    사용전주의사항,
    수정일자,
    아이디,
    약음식주의사항,
    업체명,
    이상반응,
    제품명,
    주성분,
    주의사항,
    품목일련번호,
    효능,
  } = mediitem;
  // console.log(
  //   공개일자,
  //   보관방법,
  //   사용법,
  //   사용전주의사항,
  //   수정일자,
  //   아이디,
  //   약음식주의사항,
  //   업체명,
  //   이상반응,
  //   제품명,
  //   주성분,
  //   주의사항,
  //   품목일련번호,
  //   효능
  // );

  return (
    <div
      className="border p-4 mb-4 w-full max-w-2xl cursor-pointer"
      onClick={onClick}
    >
      <div className="flex w-full p-4 shadow-md border-b">
        <div className="w-1/5 mr-8">
          <img src="/medicine_default.png" alt={제품명} className="w-full" />
        </div>
        <div className="w-4/5">
          <div className="mb-4">
            <button className="text-xl font-bold mb-2">{제품명}</button>
            <p className="text-gray-600 text-base">{업체명}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-bold mb-1">주성분</h4>
            <p className="text-lg text-gray-700">{주성분}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-bold mb-1">효능</h4>
            <p className="text-lg text-gray-700">{효능}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-bold mb-1">사용법</h4>
            <p className="text-lg text-gray-700">{사용법}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mediinfoitem;
