import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row px-15 pt-25 overflow-hidden">
      <div className="lg:w-1/2 h-screen flex flex-col justify-between pb-[10vw]">
        <div className='flex flex-col text-[#212121] text-[10vw] font-["FoundersGrotesk-semibold"] leading-[0.8] '>
          <h1>EYE-</h1>
          <h1>OPENING</h1>
        </div>
      </div>
      <div className='flex flex-col text-[#212121] text-[10vw] font-["FoundersGrotesk-semibold"] leading-[0.8] '>
        <h1>PRESENTATIONS</h1>
      </div>
    </div>
  );
};

export default Footer;
