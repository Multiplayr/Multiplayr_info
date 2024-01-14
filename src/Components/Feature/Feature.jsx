import React from 'react';
import './Feature.css';
import Item from '../Feature/Item' ;

const Feature = () => {


    return (
        <div className='feature'>
            <div className="container">
                <div className="section-title">
                    <span className='feature-key'>KEY FEATURES</span>
                    <h2><b>Access The Future</b></h2>
                </div>

                <div class="row">
                <Item/>
                    
                </div>

            </div>


        </div>
    );
};

export default Feature;