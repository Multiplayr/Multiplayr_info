import React,{useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { CustomNavLink } from "../Common";

export default function Header() { 


  return (
    <header className="shadow sticky z-50 top-0 nav-border">
      <nav className="bg-bg sticky border-gray-200 px-4 lg:px-6 py-4 bg-opacity-80 backdrop-filter backdrop-blur-sm ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="logo-div">
            <Link to="/" className="flex items-center">
              <img src="assets/images/logo.png" className="logo" alt="Logo" />
            </Link>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-5 lg:mt-0">
              <li>
                <CustomNavLink to="/" title="Home"></CustomNavLink>
              </li>
              {/* <li>
                <CustomNavLink to="/features" title="Features"></CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/working" title="How It Works"></CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/whatyouget" title="What You Get"></CustomNavLink>
              </li> */}
              <li>
                <CustomNavLink to="/Contact" title="Contact Us"></CustomNavLink>
              </li>
              {/* <li>
                <CustomNavLink to="/projects" title="Projects"></CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/teams" title="Teams"></CustomNavLink>
              </li> */}
              <li>
                <CustomNavLink to="/news" title="News"></CustomNavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center lg:order-2">
            <Link
              to="/features"
              smooth={true}
              duration={500}
              className="bg-gray-50 text-black font-semibold rounded-lg text-sm px-6 lg:px-8 py-1.5 lg:py-2 mr-2 focus:outline-none"
            >
              Log in
            </Link>

            <Link
              to="https://litepaper.multiplayr.gg/quick-introduction/legal-disclaimer"
<<<<<<< HEAD
              className="sp-btn2 text-[#e4442a] font-heading focus:ring-4 font-semibold rounded-lg text-sm px-6  lg:px-8 py-1.5 lg:py-2 mr-2 focus:outline-none"
=======
              className="sp-btn2 text-black font-heading focus:ring-4 font-semibold rounded-lg text-sm px-6  lg:px-8 py-1.5 lg:py-2 mr-2 focus:outline-none"
>>>>>>> 4ca6daae83b388120d10ef4c516d8e1889d7634c
            >
              Whitepaper
            </Link>
          </div>
        </div>
      </nav>
      <div id="progress-bar"></div>
    </header>
  );
}
