import React from "react";
import { Link } from "react-router-dom";
import HealthInfoDatabase from "../../constants/healthdata";

const HealthList = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {HealthInfoDatabase.map((info, index) => (
          <Link to={`/healthdetail/${info.id}`} key={index}>
            <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow h-[200px] flex flex-col">
              <h3 className="font-bold">{info.title.substring(0, 20)}...</h3>
              <p className="text-gray-600 text-sm h-[48px] overflow-hidden">
                {info.sections[0].content?.substring(0, 50)}...
              </p>
              {info.defaultImage ? (
                <img
                  src={info.defaultImage}
                  alt={info.title}
                  className="w-full h-30 object-cover rounded-md mt-2 overflow-hidden"
                />
              ) : info.sections[0].image ? (
                <img
                  src={info.sections[0].image}
                  alt={info.title}
                  className="h-24 w-full object-cover mt-2"
                />
              ) : (
                <div className="h-32 mt-2 bg-gray-200 rounded-md flex items-center justify-center">
                  <p className="text-gray-400 text-sm">이미지 없음</p>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HealthList;
