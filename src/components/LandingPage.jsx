import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import ochiSmallCard from "../assets/images/ochi-small-card.jpg";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.6"
      className="w-full h-screen bg-[#F1F1F1] pt-1"
    >
      <div className="textStructure py-30 md:py-40 px-13">
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => (
          <div className="masker" key={item}>
            <div className="flex">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "8vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.8 }}
                  style={{
                    backgroundImage: `url(${ochiSmallCard})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="w-full h-11 lg:w-[8vw] lg:h-[5vw] relative top-3 lg:top-[1vw] rounded-md mr-2 text-wrap"
                />
              )}
              <h1
                className="uppercase text-6xl lg:text-[8vw] lg:leading-[6vw] font-medium text-wrap break-all"
                style={{ fontFamily: "FoundersGrotesk-semibold" }}
              >
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 break-all flex flex-col lg:flex-row justify-between items-center py-[2vw] px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-lg tracking-tight leading-none py-4" key={item}>
            {item}
          </p>
        ))}
        <div className="start flex items-center sm:mt-4 lg:mt-0 gap-3">
          <div className="px-5 py-2 border-[2px] border-zinc-500 uppercase text-md lg:text-lg rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 border-[3px] border-zinc-400 rounded-full flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
