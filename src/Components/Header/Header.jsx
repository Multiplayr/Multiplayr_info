
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const CustomNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
                 block py-2 pr-4 pl-3 duration-200 font-heading
                ${isActive ? "text-white" : "text-gray-700"}
                border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent
               lg:border-0 hover:text-primary lg:p-0
       `}
  >
    {children}
  </NavLink>
);

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-bg border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="assets/images/logo.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <CustomNavLink to="/">
                  Home
                </CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/about">About</CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/contact">Contact</CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/github">Github</CustomNavLink>
              </li>
            </ul>
          </div>

          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
