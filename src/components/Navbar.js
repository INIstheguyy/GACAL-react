

import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/images/menu.svg";
import close from "../assets/images/close.svg";
import icon from "../assets/images/GACAL logo4.png .png";
import "../index.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenuToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const handleLinkClick = () => {
    setToggle(false);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-2">
      <div className="container flex justify-between items-center">
        <img src={icon} alt="" className="w-[17%] md:w-[10%] " />
        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            onClick={handleMenuToggle}
            src={toggle ? close : menu}
            alt="menu"
            className="outline-none cursor-pointer object-contain w-[30px] h-[30px]"
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-10 right-0 mx-2 my-4 rounded-xl min-w-[140px]`}
          >
            <div className="relative h-full w-full p-5">
              <div className="absolute w-[125%] inset-0 bg-[white] backdrop-filter backdrop-blur-lg"></div>
              <div className="relative h-full">
                <div className="flex flex-col justify-end items-start h-full text-black text-left z-50">
                  <p className="my-5 font-normal text-base leading-tight tracking-wider">
                    <Link to="/" onClick={handleLinkClick}>
                      HOME
                    </Link>
                  </p>
                  <p className="my-5 font-normal text-base leading-tight tracking-wider">
                    <Link to="/about" onClick={handleLinkClick}>
                      ABOUT
                    </Link>
                  </p>
                  <p className="my-5 font-normal text-base leading-tight tracking-wider">
                    <Link to="/project" onClick={handleLinkClick}>
                      PROJECTS
                    </Link>
                  </p>
                  <p className="my-5 font-normal text-base leading-tight tracking-wider">
                    <Link to="/contact" onClick={handleLinkClick}>
                      CONTACT
                    </Link>
                  </p>
                  <p className="my-5 font-normal text-base leading-tight tracking-wider">
                    <Link  to="/donate" onClick={handleLinkClick}>
                      <button
                      className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-mdtransition-shadow transform hover:translate-y-1 hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300 active:translate-y-2"
                      style={{ borderColor: '#4a90e2' }}
                    >
                      Donate
                    </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex hidden items-center">
          <div className="list-container pr-[8vw] pl-[7vw] pt-[29px] pb-[28px] md:pl-[1vw] md:pr-[1vw]">
            <div className="list-none sm:list-none sm:flex justify-end items-center flex-1 flex-wrap">
              <p className="hover-underline-animation text-black mr-10 h-[19px] text-base font-normal tracking-widest leading-tight font-heading2">
                <Link to="/" onClick={handleLinkClick}>
                  HOME
                </Link>
              </p>
              <p className="hover-underline-animation text-black mr-10 h-[19px] text-base font-normal tracking-widest leading-tight font-heading2">
                <Link to="/about" onClick={handleLinkClick}>
                  ABOUT
                </Link>
              </p>
              <p className="hover-underline-animation text-black mr-10 h-[19px] text-base font-normal tracking-widest leading-tight font-heading2">
                <Link to="/project" onClick={handleLinkClick}>
                  PROJECTS
                </Link>
              </p>
              <p className="hover-underline-animation text-black mr-16 h-[19px] text-base font-extralight tracking-widest leading-tight font-heading2">
                <Link to="/contact" onClick={handleLinkClick}>
                  CONTACT
                </Link>
              </p>
              <p className="bg-blue-700 text-white py-2 px-5 shadow-xl rounded-lg mr-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 outline-none">
                <Link to="/donate" onClick={handleLinkClick}>
                  DONATE
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
