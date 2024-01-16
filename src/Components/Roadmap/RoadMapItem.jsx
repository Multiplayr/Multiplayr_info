import React from 'react';
import './Roadmap.css';
// import ListItem from './ListItem';

const RoadMapItem = ({ year, tag, l1, l2, l3, l4 }) => {


    return (
        <>
            <div className="container-roadmap">
                <div className='roadmap-item'>
                    <div className="date">
                        <span>{year}</span>
                        <h4><b>{tag}</b></h4>
                    </div>
                    <ul>
                        <li>{l1}</li>
                        <li>{l2}</li>
                        <li>{l3} </li>
                        <li>{l4}</li>
                    </ul>

                </div>
          
            </div>
        </>
    );
};

export default RoadMapItem;