import React from "react";
import "./Roadmap.css";
import RoadMapItem from "./RoadMapItem";
import Slider from "react-slick";
import { HeadingSection } from "../Common";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Roadmap = () => {
  let count = 0;

  const [selectedBtn, setSelectedBtn] = useState(0);
  const data = [
    {
      l1: "Indroduce the collaction of NFT for rare artworks and conduct auctions ",
      l2: "Launch the staking NFT system",
      l3: "Introduce the system supporting artworks ,stablish standard storage and preservation centers for artwork",
      l4: "build Mave NFT Marketpalce",
      year: "2024",
      tag: "Q1",
    },
    {
      l1: "Launch speed and Private Sale(Completed) ",
      l2: "Launch the staking NFT system",
      l3: "Introduce the system supporting artworks ,stablish standard storage and preservation centers for artwork",
      l4: "build Mave NFT Marketpalce",
      year: "2024",
      tag: "Q2",
    },
    {
      l1: "Indroduce the collaction of NFT for rare artworks and conduct auctions ",
      l2: "Launch the staking NFT system",
      l3: "Introduce the system supporting artworks ,stablish standard storage and preservation centers for artwork",
      l4: "build Mave NFT Marketpalce",
      year: "2024",
      tag: "Q3",
    },
    {
      l1: "Indroduce the collaction of NFT for rare artworks and conduct auctions ",
      l2: "Launch the staking NFT system",
      l3: "Introduce the system supporting artworks ,stablish standard storage and preservation centers for artwork",
      l4: "build Mave NFT Marketpalce",
      year: "2024",
      tag: "Q4",
    },
    {
      l1: "Indroduce the collaction of NFT for rare artworks and conduct auctions ",
      l2: "Launch the staking NFT system",
      l3: "Introduce the system supporting artworks ,stablish standard storage and preservation centers for artwork",
      l4: "build Mave NFT Marketpalce",
      year: "2024",
      tag: "Q5",
    },
    {
      l1: "Indroduce the collaction of NFT for rare artworks and conduct auctions ",
      l2: "Launch the staking NFT system",
      l3: "Introduce the system supporting artworks ,stablish standard storage and preservation centers for artwork",
      l4: "build Mave NFT Marketpalce",
      year: "2024",
      tag: "Q6",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    

  };
  


  const sliderRef = useRef(null);

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();

    if (selectedBtn <= 0) {
      
      console.log(selectedBtn);
      setSelectedBtn(5);
      // selectedBtn =5;

    } else {
      console.log(selectedBtn);
      setSelectedBtn(selectedBtn - 1);

    }

  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();

    if (selectedBtn >= 5) {
      setSelectedBtn(0);
      console.log(setSelectedBtn)

    } else {
      setSelectedBtn(selectedBtn + 1);

    }
  };
  return (
    <div className="roadmap-area">
      <div className="roadmap-container">
        <img className="light-img" src="assets/images/features-shape-1.png" />
        <img className="light-img-2" src="assets/images/features-shape-1.png" />
        {/* <div className="section-title">
                    <span className='top-title'>ROADMAP</span>
                    <h2><b>See Whats Waiting For You</b></h2>

                </div> */}

        <HeadingSection type={"ROADMAP"} title={"See Whats Waiting For You"} />

        <div className="roadmap-slides">
          <Slider ref={sliderRef} {...settings}>
            {data.map((item) => (
              <RoadMapItem
                year={item.year}
                tag={item.tag}
                l1={item.l1}
                l2={item.l2}
                l3={item.l3}
                l4={item.l4}
              />
            ))}

            {/* <RoadMapItem /> */}
          </Slider>
        </div>

        <div className="owl-nav">
          <button className="owl-prev" onClick={goToPrevSlide} >
            <FontAwesomeIcon className="new-icon" icon={faChevronLeft} />
            PAST

          </button>
          <div className="owl-dots">

            <div className="owl-dot">
             

              <span className={`dot-item ${selectedBtn == 0 ? "active" : ""}`}
                onClick={() => setSelectedBtn(0)}></span>
            </div>
            <div className="owl-dot">
              <span className={`dot-item ${selectedBtn == 1 ? "active" : ""}`}
                onClick={() => setSelectedBtn(selectedBtn)}></span>
            </div>
            <div className="owl-dot">
              <span className={`dot-item ${selectedBtn == 2 ? "active" : ""}`}
                onClick={() => setSelectedBtn(selectedBtn)}></span>
            </div>
            <div className="owl-dot">
              <span className={`dot-item ${selectedBtn == 3 ? "active" : ""}`}
                onClick={() => setSelectedBtn(selectedBtn)}></span>

            </div>
            <div className="owl-dot">
              <span className={`dot-item ${selectedBtn == 4 ? "active" : ""}`}
                onClick={() => setSelectedBtn(selectedBtn)}></span>

            </div>
            <div className="owl-dot">
              <span className={`dot-item ${selectedBtn === 5 ? "active" : ""}`}
                onClick={() => setSelectedBtn(selectedBtn)}></span>

            </div>

          </div>

          <button className="owl-next" onClick={goToNextSlide} >
            FUTURE
            <FontAwesomeIcon className="new-icon" icon={faChevronRight} />
          </button>


        </div>

      </div>
    </div>
  );
};

export default Roadmap;
