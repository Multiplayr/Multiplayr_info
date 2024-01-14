import React from 'react';
import './Feature.css';
import Item from '../Feature/Item';
import { useState } from 'react';


const Feature = () => {

    const [items, setitems] = useState([{
        heading: "Fueling The Metaverse",
        Image: "images/icon/icon-1.svg",
        
        des: "The Metaverse Is The Next Generation Of The Internet. As One Of Its Earliest Explorers, You Will Help Fuel Its Expansion.",

    },
    {
        heading: "Interconnected Economies",
        Image: "images/icon/icon-2.svg",
       
        des: "The Metaverse Is The Next Generation Of The Internet. As One Of Its Earliest Explorers, You Will Help Fuel Its Expansion.",

    },
    {
        heading: "Non-fungible assets",
        Image: "images/icon/icon-3.svg",
        
        des: "The Metaverse Is The Next Generation Of The Internet. As One Of Its Earliest Explorers, You Will Help Fuel Its Expansion.",

    },
       
   
    ]);
    const [items2, setitems2] = useState([
    
 {
            heading: "Incubation",
            Image: "images/icon/icon-4.svg",
            
            des: "The Metaverse Is The Next Generation Of The Internet. As One Of Its Earliest Explorers, You Will Help Fuel Its Expansion.",
    
        },
        {
    
            heading: "Initial Metaverse Offering",
            Image: "images/icon/icon-5.svg",
            
            des: "The Metaverse Is The Next Generation Of The Internet. As One Of Its Earliest Explorers, You Will Help Fuel Its Expansion.",
    
        },
        {
    
            heading: "Next Tier Metaverse Projects",
            Image: "images/icon/icon-6.svg",
            
            des: "The Metaverse Is The Next Generation Of The Internet. As One Of Its Earliest Explorers, You Will Help Fuel Its Expansion.",
    
        }
    ])


    return (
        <div className='feature'>
            <div className="container-feature">
                <div className="section-title">
                    <span className='feature-key'>KEY FEATURES</span>
                    <h2><b>Access The Future</b></h2>
                </div>

                <div class="row">
                    {/* <Item /> */}
                    <div className='row-item'>
                    {items.map(item => (
                        <Item heading={item.heading} Image={item.Image}  des={item.des} />
                    ))}
                    </div>
                    <div className='row-item'>
                    {items2.map(items2 => (
                        <Item heading={items2.heading} Image={items2.Image}  des={items2.des} />
                    ))}
                    </div>
                    
                   

                </div>

            </div>


        </div>
    );
};

export default Feature;