import React, { useEffect, useState } from "react";
import BehindEye from "../assets/images/BehindEye.jpg";

const Eye = () => {
  const [rotate, setrotate] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() =>
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle - 180);

      setOffsetX(deltaX * 0.02); // adjust factor as needed
      setOffsetY(deltaY * 0.02);
    })
  );
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scrool-section
        data-scroll-speed="-0.5"
        className="relative w-full h-full bg-cover bg-center"
      >
        <img src={BehindEye} alt="Behind Eye banner" />
        <div
          data-scroll
          data-scroll-section
          data-scroll-speed=".14"
          className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  "
        >
          <div className="flex items-center justify-center w-[12.5vw] h-[12.5vw] rounded-full bg-zinc-100">
            <div
              style={{ transform: ` translate(${offsetX}px, ${offsetY}px)` }}
              className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full"
            >
              <div
                style={{ transform: ` rotate(${rotate}deg) ` }}
                className="line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-1/2 "
              >
                <div className="w-[3vw] h-[3vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[12.5vw] h-[12.5vw] rounded-full bg-zinc-100">
            <div
              style={{ transform: ` translate(${offsetX}px, ${offsetY}px)` }}
              className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full"
            >
              <div
                style={{ transform: ` rotate(${rotate}deg)` }}
                className="line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-1/2 "
              >
                <div className="w-[3vw] h-[3vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eye;
