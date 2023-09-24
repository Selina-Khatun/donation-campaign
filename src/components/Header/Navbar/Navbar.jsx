import React from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className=' flex justify-between items-center'>
                <Logo></Logo>
                <ul className=' flex gap-5'>
                    <li>
                        <NavLink to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-white" : ""
                            }>Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-red-600" : ""
                            }>Donation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-red-600" : ""
                            }>Statistics</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;