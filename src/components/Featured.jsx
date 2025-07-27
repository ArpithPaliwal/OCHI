import React from "react";
import Threecards from "./Threecards";

const Featured = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.001"
      className="w-full py-25 bg-[#F1F1F1]"
    >
      <div className="w-full px-15 border-b-[1px] border-zinc-800 pb-2">
        <h1 className='text-zinc-900 text-[3.5vw] tracking-wide font-["NeueMontreal-Regular"]'>
          Featured projects
        </h1>
      </div>
      <div className="cards w-full px-15 mt-10 flex flex-col lg:flex-row gap-5">
        <div className="cardcontainer relative lg:w-1/2 md:h-[80vh] ">
          <h1 className='absolute left-full z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 text-[5vw] leading-none tracking-wide font-["FoundersGrotesk-semibold"] text-[#CDEA68]'>
            {"VISE".split("").map((item, index) => (
              <span>{item}</span>
            ))}
          </h1>
          <div className="w-full h-full  rounded-xl  overflow-hidden">
            <img
              className="h-full w-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
              alt=""
            />
          </div>
        </div>
        <div className="cardcontainer relative lg:w-1/2 md:h-[80vh] rounded-xl  overflow-hidden">
          <h1 className='absolute right-full z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 text-[5vw] leading-none tracking-wide font-["FoundersGrotesk-semibold"] text-[#CDEA68]'>
            {"VISE".split("").map((item, index) => (
              <span>{item}</span>
            ))}
          </h1>
          <div className="w-full h-full ">
            <img
              className="h-full w-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Threecards></Threecards>
    </div>
  );
};

export default Featured;
