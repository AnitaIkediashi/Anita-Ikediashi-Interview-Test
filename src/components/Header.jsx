import React from "react";
import logo from "../images/layout.png";
import Img1 from '../images/img-1.jpg'

const Header = () => {
  return (
    <div className=" shadow-lg w-full h-20">
      <div className="max-w-[1440px] h-full flex items-center justify-between lg:px-[5%] px-8">
        {/* logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" />
          <h1 className="text-2xl md:text-3xl overflow-y-hidden">Toscut</h1>
        </div>

        {/* search bar */}
        <div className="w-[20rem] h-[2.5rem] rounded-md relative bg-gray-300">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full pl-1 border-none outline-none focus:border-2 bg-transparent"
          />
          <i className="fa-solid fa-magnifying-glass absolute top-3 right-1"></i>
        </div>

        <div className="flex gap-8 items-center">
          {/* button */}
          <button className="flex items-center gap-1 bg-purple-600 rounded-md px-5 py-2 text-white">
            <i className="fa-solid fa-plus"></i>
            <span>New Project</span>
          </button>
          <div className="text-gray-300">
            <i class="fa-solid fa-bell"></i>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <img
                src={Img1}
                alt=""
                className="w-7 h-7 rounded-full object-cover"
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-semibold">John Doe</h4>
                <p className="text-xs">Manager</p>
              </div>
              <i class="fa-solid fa-chevron-down ml-1"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
