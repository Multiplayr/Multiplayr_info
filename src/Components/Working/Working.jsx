import React, { useState } from "react";

import "./Working.css";
import ImageContainer from "./ImageContainer";
import { HeadingSection } from "../Common";

const Working = () => {
  const [selectedBtn, setSelectedBtn] = useState(0);

  const a = [
    {
      title: "targeted discovery",
      src: "assets/images/screen/discovery.png",

      des: `Discover feature for teams, players, tournaments, jobs, and coaches based on user specifications. For eg: You can search players who speak the same language, timing, region, MMR (game ranking system) and more.`,
    },

    {
      title: "ranking system",
      src: "assets/images/screen/ranking.png",

      des: `A global and local ranking system for all teams, including those not currently on the platform.`,
    },

    {
      title: "Tournament Automation",
      src: "assets/images/screen/tournament.png",

      des: `Enabling organizers to automate the bracket system for streamlined tournament management.`,
    },
  ];

  return (
    <div className="working-layout">
      <div className="container" id="pico">
        <img
          className="overlay-rot-img-b"
          src="/assets/images/banner/banner-shape-4-2.png"
          alt=""
        />

        <img
          className="overlay-rot-img-c"
          src="/assets/images/banner/banner-shape-4-2.png"
          alt=""
        />

        <img
          className="working-overlay-img"
          src="/assets/images/banner/banner-shape-2-2.png"
          alt=""
        />
        {/* <img
          className="working-overlay-img"
          src="/assets/images/banner/banner-shape-2.png"
          alt=""
        /> */}
        <HeadingSection
          type={"how it works"}
          title={"Addressing Market Needs"}
        />
        {/* <div className="head"> 
          <h3 className="head_about">how it works</h3>
          <h1 className="head_title">The Ignition Of Metaverse</h1>
        </div> */}

        <ul className="listItems">
          <div className="working-eff">
            <li
              className={`listItem ${selectedBtn === 0 ? "select-focus" : ""}`}
              onClick={() => setSelectedBtn(0)}
            >
              Targeted Discovery
            </li>
            <span className="eff-a"></span>
          </div>

          <div className="working-eff">
            <li
              className={`listItem ${selectedBtn === 1 ? "select-focus" : ""}`}
              onClick={() => setSelectedBtn(1)}
            >
              Ranking System
            </li>
            <span className="eff-a"></span>
          </div>
          <div className="working-eff">
            <li
              className={`listItem ${selectedBtn === 2 ? "select-focus" : ""}`}
              onClick={() => setSelectedBtn(2)}
            >
              Tournament Automation
            </li>
            <span className="eff-a"></span>
          </div>
        </ul>
        <ImageContainer
          src={a[selectedBtn].src}
          title={a[selectedBtn].title}
          description={a[selectedBtn].des}
        />
      </div>
    </div>
  );
};

export default Working;
