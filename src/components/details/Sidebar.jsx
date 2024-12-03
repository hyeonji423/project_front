import React from "react";
import { navMenus } from "../../constants/data";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="left-0 lg:w-1/5 w-[80px] h-full">
      <nav className="rounded-sm py-10 px-4 flex flex-col justify-center items-center">
        <div className="flex w-full items-center justify-center gap-8">
          <h2 className="font-semibold text-xl text-black hidden lg:block">
            <Link to="/mypage">MyPage</Link>
          </h2>
        </div>

        <ul className="menus">
        {
          navMenus.map((menu, idx)=>(
            <li key={idx} className={`${menu.idx}`}>
              <Link to={menu.to} className='flex gap-2 items-center py-2 px-4 lg:px-8'>
                <span className='hidden lg:inline'>{menu.label}</span>
              </Link>
            </li>
          ))
        }
      </ul>
      </nav>
    </div>
  );
};
export default Sidebar;