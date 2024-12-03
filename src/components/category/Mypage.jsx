import React from "react";
import Sidebar from "../details/Sidebar";
import NewPage from './../details/NewPage';

const Mypage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <NewPage/>
    </div>
  );
};

export default Mypage;
