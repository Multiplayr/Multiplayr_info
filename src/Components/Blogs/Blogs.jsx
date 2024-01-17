import React from 'react'



function Blogs() {
  return (
    <div className="blog-layout">
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

        </div>

      </div>
    </div>
    
  </div>
  )
}

export default Blogs