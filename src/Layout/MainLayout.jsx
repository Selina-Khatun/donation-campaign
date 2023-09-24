import React from 'react';
import { Outlet } from 'react-router-dom';
// import Navbar from '../components/Header/Navbar/Navbar';
import Banner from '../components/Header/Banner/Banner';

const MainLayout = () => {
    return (
        <div className=' max-w-[1300px] mx-auto'>
            <Banner ></Banner>
            
           <div>
           <Outlet></Outlet>
           </div>
            
        </div>
    );
};

export default MainLayout;