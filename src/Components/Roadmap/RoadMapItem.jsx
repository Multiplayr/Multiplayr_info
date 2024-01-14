import React from 'react';
import './Roadmap.css';
import ListItem from './ListItem';

const RoadMapItem = () => {

    const  data = ([
        {
            l1 : "Indroduce the collaction of NFT for rare artworks and conduct auctions ",
            l2 : "Launch the staking NFT system",
            l3 : "Introduce the system supporting artworks ,stablish standard storage and preservation centers for artwork",
            l4 : "build Mave NFT Marketpalce",
        }
    ])
    return (
        <>
            <div className="container-roadmap">
                <div className='roadmap-item'>
                    <div className="date">
                        <span>2024</span>
                        <h4><b>Q1</b></h4>
                    </div>
                    
                        <ListItem />
                  
                    
                    
                </div>
                <div className='roadmap-item'>
                    <div className="date">
                        <span>2024</span>
                        <h4><b>Q1</b></h4>
                    </div>
                    
                        <ListItem />
                  
                    
                    
                </div>
                <div className='roadmap-item'>
                    <div className="date">
                        <span>2024</span>
                        <h4><b>Q1</b></h4>
                    </div>
                    
                        <ListItem />
                  
                    
                    
                </div>
                <div className='roadmap-item'>
                    <div className="date">
                        <span>2024</span>
                        <h4><b>Q1</b></h4>
                    </div>
                    
                        <ListItem />
                  
                    
                    
                </div>

                
            </div>
        </>
    );
};

export default RoadMapItem;