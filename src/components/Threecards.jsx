import React from "react";

const Threecards = () => {
  return (
    <div className="w-full  flex flex-col lg:flex-row gap-5  mt-[25vw] bg-[#F1F1F1] px-15">
      <div className="cardcontainer lg:w-1/2">
        <div className=" relative w-full h-[50vh] bg-[#004D43] flex items-center justify-center rounded-lg">
          <img
            className="w-[10vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-8 border-2 rounded-full text-[#CDEA68] px-[1vw]  border-[#CDEA68]">
            ©2019-2025
          </button>
        </div>
      </div>
      <div className="cardcontainer flex md:flex-row flex-col gap-5 lg:w-1/2">
        <div className=" relative flex items-center justify-center w-full h-[50vh] bg-[#212121] rounded-lg">
          <img
            className="w-[10vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute  bottom-8 border-2 rounded-full text-[#F1F1F1] px-[1vw]  border-[#d0d0d0]">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className=" relative flex items-center justify-center w-full h-[50vh] bg-[#212121] rounded-lg">
          <img
            className="w-[10vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute  bottom-8 border-2 rounded-full text-[#F1F1F1] px-[1vw]  border-[#d0d0d0]">
            BUSINESS BOOTCAMP ALUMINI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Threecards;
