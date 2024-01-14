
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const CustomNavLink = ({ to,title, children }) => (
  <NavLink 
    to={to}
    className={({ isActive }) => `
                 flex py-2 pr-4 pl-3 duration-200 font-heading 
                ${isActive ? "text-white font-semibold  text-[50]" : "text-gray-400 text-[43]"}
               lg:border-0 lg:p-0 hover:text-gray-00
       `}>

       <div className="flex flex-col">
       <span className="eff-hover">{title}</span>
       <span className="eff"></span>

       </div>

    {children}
  </NavLink>
);

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-bg sticky border-gray-200 px-4 lg:px-6 py-6 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="assets/images/logo.png"
              className="mr-3 h-14"
              alt="Logo"
            />
          </Link>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <CustomNavLink to="/home" title="Home"></CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/features" title="Features"></CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/working" title="How It Works"></CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/whatyouget" title="What You Get"></CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/about" title="About Us"></CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/projects" title="Projects"></CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/teams" title="Teams"></CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/news" title="News"></CustomNavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center lg:order-2">
            <Link
              to="/features#pico" smooth={true} duration={500}
              className="bg-gray-50 text-black font-medium rounded-lg text-sm px-6 lg:px-8 py-2 lg:py-3 mr-2 focus:outline-none"
            >
              Log in
            </Link>

            <Link
              to="#"
              className="sp-btn text-white focus:ring-4 font-semibold rounded-lg text-sm px-6  lg:px-8 py-2 lg:py-3 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
