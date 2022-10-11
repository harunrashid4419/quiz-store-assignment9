import React from 'react';
import './Quiz.css';
import { NavLink } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { id, logo, name, total } = quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <div>
                <h2>Name: <span>{name}</span></h2>
                <h2>Total Quiz: <span>{total}</span></h2>
            </div>
            <div className='button'>
                <NavLink to={`../quiz/${id}`}>Start Quiz</NavLink>
            </div>
        </div>
    );
};

export default Quiz;