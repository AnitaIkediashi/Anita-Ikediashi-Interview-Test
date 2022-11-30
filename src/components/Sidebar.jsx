import React from "react";

const Sidebar = () => {
  return (
    <div className="basis-[15rem] min-h-screen bg-white px-8 pt-[1rem] grow shrink">
      <ul>
        <li className="my-8 flex gap-3 items-center">
          <i className="fa-solid fa-boxes-stacked"></i>
          <span>Dashboard</span>
        </li>
        <li className="my-8 flex gap-3 items-center">
          <i className="fa-solid fa-file-invoice"></i>
          <span>Projects</span>
        </li>
        <li className="my-8 flex gap-3 items-center">
          <i className="fa-solid fa-list"></i>
          <span>My Tasks</span>
        </li>
        <li className="my-8 flex gap-3 items-center">
          <i className="fa-solid fa-message"></i>
          <span>Message</span>
        </li>
        <li className="my-8 flex gap-3 items-center">
          <i className="fa-solid fa-chart-column"></i>
          <span>Analytics</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
