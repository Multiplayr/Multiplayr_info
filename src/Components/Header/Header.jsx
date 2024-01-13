import React from "react";

function Header() {
  return (
    <>
      <div>
        <nav>
          <a href="/mave/metavarse-launchpad">
            <img src="assets/images/logo.png" alt="logo" />
          </a>
          <button type="button" className="navbar-toggler">
            <span className="burger-menu">
              <span className="top-bar"></span>
              <span className="middle-bar"></span>
              <span className="bottom-bar"></span>
            </span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <span className="nav-link">Home</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Features</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">How It Works</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">What You get</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">About Us</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Projects</span>
              </li>
            </ul>
            <div className="others-option d-flex align-items-center">
              <div className="option-item">
                <a
                  routerlink="/contact-us"
                  className="default-btn"
                  href="/mave/contact-us"
                >
                  Apply For IDO
                </a>
              </div>
              <div className="option-item">
                <span className="burger-menu">
                  <i className="ri-menu-4-line"></i>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
