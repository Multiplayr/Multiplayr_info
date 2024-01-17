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
              src="/assets/images/banner/banner-shape-1-1.png"
              alt=""
            />
           
            <img
              className="overlay-rot-img"
              src="/assets/images/banner/banner-shape-4-1.png"
              alt=""
            />
            <div className="wrapper">
              <h1 className="">FORGE YOUR LEGACY</h1>
              <p className="leading-tight text-wrap">
                Multiplayr is an esports infrastructure platform for team discovery and management,
                tournament creation with real-time stats, and global and local rankings.
              </p>
            </div>
            <div className="mt-12 md:mt-3 sm:mt-3 ">
              <Link
                to="#"
                className="bg-gray-50 text-black font-heading  font-semibold rounded-lg text-base px-7 lg:px-10 py-2 lg:py-2.5 mr-2  focus:outline-none "
              >
                Log in
              </Link>

              <Link
                  to={"https://litepaper.multiplayr.gg/quick-introduction/legal-disclaimer"}
                className="sp-btn2 text-black font-heading focus:ring-4 font-semibold rounded-lg text-base px-7 lg:px-10 py-2 lg:py-2.5 mr-2 focus:outline-none z-50"
              >
                Whitepaper
              </Link>
            </div>
          </div>

          <div className="inner-div-right">
            <div className="banner-img-div">
              <img
                className="img-ani-scale md:h-14 sm:h-10"
                src="/assets/images/banner/multiplayr-character.png"
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
