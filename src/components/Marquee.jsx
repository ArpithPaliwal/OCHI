import React from "react";
import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div
      data-scroll
      data-scrool-section
      data-scroll-speed="0.028"
      className="w-full  bg-[#004D43] rounded-t-[1.5vw] py-27"
    >
      <div className="text border-t-2 border-b-2 text-white border-zinc-300 flex overflow-hidden whitespace-nowrap gap-40">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className='text-[25vw] leading-none font-["FoundersGrotesk-semibold"] uppercase    -m-[4.5vw] -mb-[2vw] tracking-wider '
        >
          <span className='text-[25vw] leading-none font-["FoundersGrotesk-semibold"] uppercase -m-[4.5vw] -mb-[2vw] tracking-wider text-white'>
            we are ochi&nbsp;&nbsp;&nbsp;
          </span>
          <span className='text-[25vw] leading-none font-["FoundersGrotesk-semibold"] uppercase -m-[4.5vw] -mb-[2vw] tracking-wider text-white'>
            we are ochi&nbsp;&nbsp;&nbsp;
          </span>
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
