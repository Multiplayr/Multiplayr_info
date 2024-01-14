import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import your CSS file

function Home() {
  return (
    <div className="home-layout">
      <div className="relative h-full w-full max-h-fit max-w-fit overflow-hidden ">
        {/* Background Image */}
        <img
          className="background-img"
          src="/assets/images/banner/banner-bg-1.jpg"
          alt=""
        />

        <div className="overlay-div">
          <div className="inner-div-left">
            {/* Overlay Image */}
            <img
              className="overlay-img"
              src="/assets/images/banner/banner-shape-2.png"
              alt=""
            />
            <img
              className="overlay-img"
              src="/assets/images/banner/banner-shape-2.png"
              alt=""
            />

            <img
              className="overlay-rot-img"
              src="/assets/images/banner/banner-shape-4.png"
              alt=""
            />
            <div className="wrapper">
              <h1 className="">Building The Metaverse For Next Gaming World</h1>
              <p className="leading-tight text-wrap">
                The Metaverse Is The Next Generation Of The Internet. As One Of
                Its Earliest Explorers, You Will Help Fuel Its Expansion And
                Share In The Benefits Of This Growth.
              </p>
            </div>
            <div className=" ml-3 mt-12 ">
              <Link
                to="#"
                className="bg-gray-50 text-black font-semibold rounded-lg text-base px-8 lg:px-10 py-3 lg:py-3.5 mr-2  focus:outline-none "
              >
                Log in
              </Link>

              <Link
                to="#"
                className="sp-btn text-white focus:ring-4 font-semibold rounded-lg text-base px-8 lg:px-10 py-3 lg:py-3.5 mr-2 focus:outline-none"
              >
                Get started
              </Link>
            </div>
          </div>

          <div className="inner-div-right">
            <img
              className="img-ani-scale"
              src="/assets/images/banner/banner-img-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
