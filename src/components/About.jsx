import React from "react";

const About = () => {
  return (
    <div
      data-scroll
      data-scrool-section
      data-scroll-speed="-0.2"
      className="w-full py-25 px-15 bg-[#CDEA68] rounded-t-[1.5vw] "
    >
      <h1 className='text-[#212121] font-light font-["NeueMontreal-Regular"] text-[3.5vw] leading-[3.5vw] tracking-tight pb-[3.5vw]'>
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-screen border-t-[2px] pt-[2vw] border-[#94a65b] ml-[-4.75rem]"></div>
      <div className="flex flex-col items-center justify-center lg:flex-row gap-2 md:gap-5">
        <div className="w-1/2">
          <h1 className="text-black text-[3.5vw] -mt-[2vw] py-3">
            Our approach:
          </h1>
          <button className=" px-[4vw] py-[4vw] justify-center md:px-10 md:py-5 flex md:gap-10 items-center bg-zinc-900 rounded-full text-white  md:text-2xl text-nowrap">
            READ MORE
            <div className="md:w-2 md:h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className='w-1/2 h-[40vw] md:h-[65vh] rounded-3xl bg-cover bg-[url("https://media.licdn.com/dms/image/v2/D5603AQH-tXNZEww_QA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725863436600?e=1756339200&v=beta&t=veaU7Y6hkZ3rZUsAFSKCFI6wUH90c7SbQVtpQbpU4ZY")]'></div>
      </div>
    </div>
  );
};

export default About;
