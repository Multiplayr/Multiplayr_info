import React, { useState } from "react";

import "./Working.css";
import ImageContainer from "./ImageContainer";

const Working = () => {
  const [selectedBtn, setSelectedBtn] = useState(0);

  const a = [
    {
      title: " Metaverse Marketplace",
      src: "assets/images/works/workImage1.jpg",

      des: `A Gamified Marketplace Dedicated To The Metaverse And Gaming
    Assets. The Metaverse Marketplace Allows Users To Trade,
    Auction, And Rent Virtual Ownership Assets From Various
    Metaverse And Gaming Projects. The Metaverse Is The Next
    Generation Of The Internet.`,
    },

    {
      title: " Launchpad",
      src: "assets/images/works/workImage2.jpg",

      des: `A Gamified Marketplace Dedicated To The Metaverse And Gaming
    Assets. The Metaverse Marketplace Allows Users To Trade,
    Auction, And Rent Virtual Ownership Assets From Various
    Metaverse And Gaming Projects. The Metaverse Is The Next
    Generation Of The Internet.`,
    },

    {
      title: " MetaFi DeFi Vault",
      src: "assets/images/works/workImage3.jpg",

      des: `A Gamified Marketplace Dedicated To The Metaverse And Gaming
    Assets. The Metaverse Marketplace Allows Users To Trade,
    Auction, And Rent Virtual Ownership Assets From Various
    Metaverse And Gaming Projects. The Metaverse Is The Next
    Generation Of The Internet.`,
    },
  ];

  return (
    <div className="working-layout">
      <div className="container" id="pico">
        <img
          className="overlay-rot-img-b"
          src="/assets/images/banner/banner-shape-4.png"
          alt=""
        />

        <img
          className="overlay-rot-img-c"
          src="/assets/images/banner/banner-shape-4.png"
          alt=""
        />

        <div className="head">
          <h3 className="head_about">how it works</h3>
          <h1 className="head_title">The Ignition Of Metaverse</h1>
        </div>

        <ul className="listItems">
          <li
            className={`listItem ${selectedBtn == 0 ? "select-focus" : ""}`}
            onClick={() => setSelectedBtn(0)}
          >
            Metaverse Marketplace
          </li>
          <li
            className={`listItem ${selectedBtn == 1 ? "select-focus" : ""}`}
            onClick={() => setSelectedBtn(1)}
          >
            Launchpad
          </li>
          <li
            className={`listItem ${selectedBtn == 2 ? "select-focus" : ""}`}
            onClick={() => setSelectedBtn(2)}
          >
            MetaFi DeFi Valut
          </li>
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
