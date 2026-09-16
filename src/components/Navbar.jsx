import React from 'react';
function Navbar(){
    return(
        <div className="nav">
            <img src="./logo.svg" alt=""></img>
            <ul>
                <li>
                    <a href= "#">Home</a>
                </li>
                <li>
                    <a href= "#">Features</a>
                </li>
                <li>
                    <a href="#">Community</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
                <li>
                    <a href="#">Pricing</a>
                </li>
            </ul>
            <button>Register Now</button>
        </div>
    );
}

export default Navbar;