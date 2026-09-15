import React from 'react';
function Hero(){
    return( 
        <div className='hero-container'>
            <div className='hero-text'>
                <h1>Lessons and insights <br />
                    <span>from 8 years</span>
                </h1>
                <p>Where to grow business as a photographer: site or social media?</p>
                <button>Register</button>
            </div>
            <div className='hero-image'>
                <img src='./image-1.png' alt='image-1' />
            </div>
        </div>
    );
}

export default Hero;