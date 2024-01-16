import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import your CSS file
import { HeadingSection } from "../Common";

function Home() {
  return (
    <div className="home-layout">
      <div className="relative h-full w-full max-h-fit max-w-fit overflow-hidden ">
        {/* Background Image */}
        <img
          className="background-img"
          src="/assets/images/banner/banner-bg-1-2.jpg"
          alt=""
        />

        <div className="overlay-div">
          <div className="inner-div-left">
            {/* Overlay Image */}
            <img
              className="overlay-img"
              src="/assets/images/banner/banner-shape-1.png"
              alt=""
            />
<<<<<<< HEAD
            <img
              className="overlay-img"
              src="/assets/images/banner/banner-shape-2.png"
              alt=""
            />

            

=======
           
>>>>>>> 4ca6daae83b388120d10ef4c516d8e1889d7634c
            <img
              className="overlay-rot-img"
              src="/assets/images/banner/banner-shape-4.png"
              alt=""
            />
            <div className="wrapper">
              <h1 className="">FORGE YOUR LEGACY</h1>
              <p className="leading-tight text-wrap">
                Multiplayr is an esports infrastructure platform for team discovery and management,
                tournament creation with real-time stats, and global and local rankings.
              </p>
            </div>
            <div className=" ml-3 mt-12 ">
              <Link
                to="#"
                className="bg-gray-50 text-black font-heading  font-semibold rounded-lg text-base px-7 lg:px-10 py-2 lg:py-2.5 mr-2  focus:outline-none "
              >
                Log in
              </Link>

              <Link
                to="#"
<<<<<<< HEAD
                className="sp-btn2 text-[#e4442a] font-heading focus:ring-4 font-semibold rounded-lg text-base px-8 lg:px-10 py-3 lg:py-3.5 mr-2 focus:outline-none"
=======
                className="sp-btn2 text-black font-heading focus:ring-4 font-semibold rounded-lg text-base px-7 lg:px-10 py-2 lg:py-2.5 mr-2 focus:outline-none"
>>>>>>> 4ca6daae83b388120d10ef4c516d8e1889d7634c
              >
                Get started
              </Link>
            </div>
          </div>

          <div className="inner-div-right">
            <div className="banner-img-div">
              <img
                className="img-ani-scale"
                src="/assets/images/banner/banner-img-1.png"
                alt=""
              />

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
