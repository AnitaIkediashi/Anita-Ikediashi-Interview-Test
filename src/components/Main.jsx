import React from "react";

const Main = () => {
  return (
    <div className="grow shrink basis-full bg-gray-200 p-6 shadow-md min-h-screen">
      <div className="w-[5rem] bg-white py-3 px-2 flex items-center justify-evenly rounded mb-8">
        <i className="fa-solid fa-file-invoice "></i>
        <i className="fa-solid fa-boxes-stacked"></i>
      </div>
      <div className="flex flex-col gap-8 ">
        <article className="rounded bg-white flex flex-col gap-4 p-5">
          <h3 className="font-semibold">slack</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum
            nihil esse tenetur dolore minima perferendis dignissimos quidem modi
            unde?
          </p>
          <div>
            <button>ios APP</button>
            <button>ANDRIOD</button>
          </div>
          <div>
            <i className="fa-solid fa-link"></i>
            <div>
              <span>3</span>
              <i className="fa-regular fa-comment"></i>
            </div>
          </div>
        </article>
        <article className="rounded bg-white flex flex-col gap-4 p-5">
          <h3 className="font-semibold">slack</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum
            nihil esse tenetur dolore minima perferendis dignissimos quidem modi
            unde?
          </p>
          <div>
        
            <button>Branding</button>
          </div>
          <div>
            <i className="fa-solid fa-link"></i>
            <div>
              <span>3</span>
              <i className="fa-regular fa-comment"></i>
            </div>
          </div>
        </article>
        <article className="rounded bg-white flex flex-col gap-4 p-5">
          <h3 className="font-semibold">slack</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum
            nihil esse tenetur dolore minima perferendis dignissimos quidem modi
            unde?
          </p>
          <div>
            
            <button>WEBSITE</button>
          </div>
          <div>
            <i className="fa-solid fa-link"></i>
            <div>
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
