import React from 'react'

function Banner() {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Movie Name</h1>
                <div className='banner-buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>A film is a series of still photographs on film projected onto a screen using light in rapid succession. </h1>
            </div>
            <div className="fade-bottom">

            </div>
        </div>
    )
}

export default Banner
