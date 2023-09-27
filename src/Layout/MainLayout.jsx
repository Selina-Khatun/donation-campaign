import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Header/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            
            <Navbar></Navbar>
           <div>
           <Outlet></Outlet>
           </div>
            
        </div>
    );
};

export default MainLayout;