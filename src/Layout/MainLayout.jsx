import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Header/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className=' max-w-[1300px] mx-auto'>
            
            <Navbar></Navbar>
           <div className=' w-[95%] mx-auto mb-20'>
           <Outlet></Outlet>
           </div>
            
        </div>
    );
};

export default MainLayout;