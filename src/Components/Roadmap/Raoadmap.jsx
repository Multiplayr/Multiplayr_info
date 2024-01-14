import React from 'react';
import './Roadmap.css';
import RoadMapItem from './RoadMapItem';

const Raoadmap = () => {
    const data = ([
        {
            year: "2024",
            tag: "Q1",

        }
    ])
    return (
        <div className='roadmap-area'>
            <div className="roadmap-container">
                <div className="section-title">
                    <span className='top-title'>ROADMAP</span>
                    <h2><b>See Whats Waiting For You</b></h2>

                </div>
                <div className="roadmap-slides">


                    <RoadMapItem />
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