import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='header'>
            <div className="left">
                <NavLink to='/home'>QuizStore</NavLink>
            </div>
            <div className='menu'>
                <div className='md:hidden' onClick={() => setOpen(!open)}>
                    {open ? <XMarkIcon className='h-6 w-6'></XMarkIcon> : <Bars3Icon className='h-6 w-6'></Bars3Icon>}
                </div>
                <nav>
                    <ul className={`md:static duration-500 bg-[#9ECAF0] w-full ease-in absolute ${open ? 'top-12 left-0' : 'top-[-100px] left-0'}`}>

                        <li><NavLink className={({ isActive }) => isActive ? 'activeColor' : undefined} to='/home'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'activeColor' : undefined} to='/blog'>Blog</NavLink></li>
                        <li><NavLink to='/chart' className={({ isActive }) => isActive ? 'activeColor' : undefined}>Chart</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;