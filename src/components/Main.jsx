import React from "react";

const Main = () => {
  return (
    <div className="grow shrink basis-full bg-gray-200 p-6 shadow-md min-h-screen">
      <div className="w-[5rem] bg-white py-3 px-2 flex items-center justify-evenly rounded mb-8">
        <i className="fa-solid fa-file-invoice "></i>
        <i className="fa-solid fa-boxes-stacked"></i>
      </div>
      <div className="flex items-center gap-3 mb-8">
        <h2 className="font-semibold">Working</h2>
        <span>(03)</span>
      </div>
      <div className="flex flex-col gap-8 ">
        <article className="rounded bg-white flex flex-col gap-4 p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">slack</h3>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum
            nihil esse tenetur dolore minima perferendis dignissimos quidem modi
            unde?
          </p>
          <div className="flex gap-1 items-center">
            <button className="text-orange-700 bg-orange-200 px-5 py-2 rounded">
              ios APP
            </button>
            <button className="text-green-700 bg-green-200 px-5 py-2 rounded">
              ANDRIOD
            </button>
          </div>
          <div className="flex items-center gap-5">
            <i className="fa-solid fa-link"></i>
            <div className="flex gap-1 items-center">
              <span>3</span>
              <i className="fa-regular fa-comment"></i>
            </div>
          </div>
        </article>
        <article className="rounded bg-white flex flex-col gap-4 p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">slack</h3>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum
            nihil esse tenetur dolore minima perferendis dignissimos quidem modi
            unde?
          </p>
          <div className="flex gap-1 items-center">
            <button className="text-purple-700 bg-purple-200 px-5 py-2 rounded">
              Branding
            </button>
          </div>
          <div className="flex items-center gap-5">
            <i className="fa-solid fa-link"></i>
            <div className="flex gap-1 items-center">
              <span>3</span>
              <i className="fa-regular fa-comment"></i>
            </div>
          </div>
        </article>
        <article className="rounded bg-white flex flex-col gap-4 p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">slack</h3>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum
            nihil esse tenetur dolore minima perferendis dignissimos quidem modi
            unde?
          </p>
          <div className="flex gap-1 items-center">
            <button className="text-blue-700 bg-blue-200 px-5 py-2 rounded">
              WEBSITE
            </button>
          </div>
          <div className="flex items-center gap-5">
            <i className="fa-solid fa-link"></i>
            <div className="flex gap-1 items-center">
              <span>3</span>
              <i className="fa-regular fa-comment"></i>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Main;
