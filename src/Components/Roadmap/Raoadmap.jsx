import React from 'react';
import './Roadmap.css';
import RoadMapItem from './RoadMapItem';
import Slider from "react-slick";


const Raoadmap = () => {
    const data = ([
        {
            l1: "Indroduce the collaction of NFT for rare artworks and conduct auctions ",
            l2: "Launch the staking NFT system",
            l3: "Introduce the system supporting artworks ,stablish standard storage and preservation centers for artwork",
            l4: "build Mave NFT Marketpalce",
            year: "2024",
            tag: "Q1"

        },
        {
            l1: "Launch speed and Private Sale(Completed) ",
            l2: "Launch the staking NFT system",
            l3: "Introduce the system supporting artworks ,stablish standard storage and preservation centers for artwork",
            l4: "build Mave NFT Marketpalce",
            year: "2024",
            tag: "Q1"

        },
        {
            l1: "Indroduce the collaction of NFT for rare artworks and conduct auctions ",
            l2: "Launch the staking NFT system",
            l3: "Introduce the system supporting artworks ,stablish standard storage and preservation centers for artwork",
            l4: "build Mave NFT Marketpalce",
            year: "2024",
            tag: "Q1"

        },
        {
            l1: "Indroduce the collaction of NFT for rare artworks and conduct auctions ",
            l2: "Launch the staking NFT system",
            l3: "Introduce the system supporting artworks ,stablish standard storage and preservation centers for artwork",
            l4: "build Mave NFT Marketpalce",
            year: "2024",
            tag: "Q1"

        },
        {
            l1: "Indroduce the collaction of NFT for rare artworks and conduct auctions ",
            l2: "Launch the staking NFT system",
            l3: "Introduce the system supporting artworks ,stablish standard storage and preservation centers for artwork",
            l4: "build Mave NFT Marketpalce",
            year: "2024",
            tag: "Q1"

        }, {
            l1: "Indroduce the collaction of NFT for rare artworks and conduct auctions ",
            l2: "Launch the staking NFT system",
            l3: "Introduce the system supporting artworks ,stablish standard storage and preservation centers for artwork",
            l4: "build Mave NFT Marketpalce",
            year: "2024",
            tag: "Q1"

        }

    ])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // row : 1

        //     dots: true,
        //   infinite: true,
        //   speed: 500,
        //   slidesToShow: 1,
        //   slidesToScroll: 1
    };
    return (
        <div className='roadmap-area'>
            <div className="roadmap-container">
            <img className="light-img" src="assets/images/features-shape-1.png"/>
            <img className='light-img-2' src = "assets/images/features-shape-1.png"/>
                <div className="section-title">
                    <span className='top-title'>ROADMAP</span>
                    <h2><b>See Whats Waiting For You</b></h2>

                </div>
                <div className="roadmap-slides">
                    <Slider {...settings}>
                        {data.map(item => (
                            <RoadMapItem year={item.year} tag={item.tag} l1={item.l1} l2={item.l2} l3={item.l3} l4={item.l4} />
                        ))}


                        {/* <RoadMapItem /> */}

                    </Slider>
                </div>

                {/* <div className="owl-nav">
                <div className="owl-prev">
                    Past
                    <i></i>
                </div>
                <div className="owl-next">
                    Future
                    <i></i>
                </div>
                


            </div>
            <div className="owl-dots">

            </div> */}
            </div>


        </div>
    );
};

export default Raoadmap;