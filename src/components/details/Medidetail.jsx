import React from "react";
import { mediDetailTest } from "../../constants/data";

const Medidetail = () => {
  return (
    <div className="flex w-full justify-center my-12">
      <div className="container">
        {mediDetailTest.map((item) => (
          <div className="wrapper medi_detail flex flex-col gap-5">
            <div className="img-name-ingre-box flex gap-4">
              <div className="img-box border border-slate-500 w-[150px] h-[150px]">
                약 img
              </div>
              <div className="name-inre-box flex flex-col">
                <p className="description">약품명</p>
                <p className="medi-name p-2 text-xl">{item.name}</p>
                <p className="description">성분명</p>
                <p className="ingre p-2 text-md">{item.main_ingredient}</p>
              </div>
            </div>
            <div className="medi-detail flex flex-col gap-4">
              <p className="description">효능</p>
              <p>{item.efficacy}</p>
              <p className="description">사용법</p>
              <p>{item.use}</p>
              <p className="description">부작용</p>
              <p>{item.side_effect}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medidetail;
