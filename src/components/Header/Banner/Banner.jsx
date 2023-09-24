import React from 'react';
import Navbar from '../Navbar/Navbar';

const Banner = () => {
    return (
        <div className=' hero-overlay bg-opacity-90  min-h-[70vh]' style={{ backgroundImage: 'url(https://C:\projects8\donation-campaign\src\assets\Rectangle 4288.png)' }}>
           <div className=" "></div> 
            <Navbar></Navbar>
            <div className=" ">
            
                
                <div className="hero-content text-center text-neutral-content">
                   
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Banner;