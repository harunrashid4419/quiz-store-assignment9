import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="left">
                <NavLink to='/home'>QuizStore</NavLink>
            </div>
            <div className='menu'>
                <nav>
                    <ul>
                        <li><NavLink to='/home'>Home</NavLink></li>
                        <li><NavLink to='/quiz'>Quiz</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        <li><NavLink to='/chart'>Chart</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;