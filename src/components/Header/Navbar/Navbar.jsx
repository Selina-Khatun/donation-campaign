import React from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className=' flex relative z-10 justify-between items-center p-10'>
                <Logo></Logo>
                <ul className=' flex gap-5 font-semibold text-base'>
                    <li>
                        <NavLink to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-[#FF444A] underline" : ""
                            }>Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-[#FF444A] underline" : ""
                            }>Donation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-[#FF444A] underline" : ""
                            }>Statistics</NavLink>
                    </li>
                </ul>
            </nav>
       

        </div>
    );
};

export default Navbar;