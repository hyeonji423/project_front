import React from "react";
import Management from "./Management";
import Sidebar from "./Sidebar";
import NewPage from "./NewPage";

const Mypage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <NewPage/>
    </div>
  );
};

export default Mypage;
