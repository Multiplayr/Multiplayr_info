import React from 'react'

import "./Working.css"

export const Working = () => {
    return (
        <div className='container' id="pico">
            <div className='head'>
                <h3 className='head_about'>how it works</h3>
                <h1 className='head_title'>The Ignition Of Metaverse</h1>
            </div>
            <ul className='listItems'>
                <li className='listItem'>Metaverse Marketplace</li>
                <li className='listItem'>Launchpad</li>
                <li className='listItem'>MetaFi DeFi Valut</li>


            </ul>
            <div className='imageContainer'>
                <img src='assets/images/works/workImage.jpg' alt='Working-img' className='image' />

                <div className='image_description'>
                <div className='image_title'>
                    <h2>Metaverse Marketplace</h2>

                </div>


                <div className='image_about'>
                    <p>A Gamified Marketplace Dedicated To The Metaverse And Gaming Assets.
                        The Metaverse Marketplace Allows Users To Trade, Auction, And Rent Virtual Ownership Assets From Various Metaverse And Gaming Projects.
                        The Metaverse Is The Next Generation Of The Internet.</p>

                </div>
                </div>
            </div>
        </div>





    )
}
