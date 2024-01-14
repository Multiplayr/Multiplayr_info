import React from 'react'
import "./App.css";
import Home from "./Components/Home/Home";
import { Working } from "./Components/Working/Working";

function App() {
  return (
    <>
      
      <div className="relative flex flex-col">
        <Home />
        <Working />
        <img
          className="overlay-img-png"
          src="/assets/images/banner/banner-shape-5.png"
          alt=""
        />

      </div>
    </>
  );
}

export default App;
