import React from "react";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eye from "./components/Eye";
import Featured from "./components/Featured";
import Threecards from "./components/Threecards";
import Yellow from "./components/Yellow";
import Footer from "./components/Footer";

import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full h-screen  text-[#212121]  ">
      <NavBar></NavBar>
      <LandingPage></LandingPage>
      <Marquee></Marquee>
      <About></About>
      <Eye></Eye>
      <Featured></Featured>

      <Yellow></Yellow>
      <Footer></Footer>
    </div>
  );
};

export default App;
