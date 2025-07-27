import React, { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import ochiLogoTop from "../assets/images/ochi-logo-top.svg";

const NAV_ITEMS = ["Services", "Our Work", "About Us", "Insights"];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); //  state setters
  const [showNav, setShowNav] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < lastScroll.current || currentScroll < 10) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-[999] w-full pr-12 pl-13 py-5 flex justify-between items-center transition-transform duration-500 ease-in-out h-20 backdrop-blur-md bg-white/5 border-b border-white/30 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="logo w-[120px] h-[50px] flex-shrink-0">
        <img src={ochiLogoTop} alt="Ochi Logo" className="h-full w-auto" />
      </div>
      <div className="links hidden lg:flex gap-7">
        {NAV_ITEMS.map((item, index) => (
          <a
            key={item}
            className="text-lg capitalize font-light font-['NeueMontreal-Regular'] transition-colors hover:text-[#004D43]" // 6. Add key, fix typo, add hover
            href="#"
          >
            {item}
          </a>
        ))}
        <p className="pl-10">Contact us</p>
      </div>
      {/* Mobile menu icon */}
      <button
        className="lg:hidden text-3xl cursor-pointer"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu" // 8. Accessibility
      >
        <IoMenu />
      </button>
      {/* Sidebar for small screens */}
      <aside
        className={`fixed h-screen w-[80vw] sm:w-[40vw] bg-white z-[1000] top-0 right-0 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        aria-hidden={!isOpen}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col p-6 gap-6">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item}
              className="text-lg capitalize font-light font-['NeueMontreal-Regular'] transition-colors hover:text-[#004D43]"
              href="#"
            >
              {item}
            </a>
          ))}
          <p className="text-lg font-medium">Contact us</p>
        </div>
      </aside>
    </nav>
  );
};

export default NavBar;
