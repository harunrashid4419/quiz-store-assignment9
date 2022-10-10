import React from 'react';
import { Link } from 'react-router-dom';
import './QuizOption.css';

const QuizOption = ({ quiz }) => {
    const { question, options } = quiz;

    const addToClick = (option) =>{
        const currectAns = quiz;
        console.log('clicked', currectAns, option)
    }
    
    return (
        <div className='options'>
            <p className='question'>{question}</p>
            <div className='option'>
                {
                    options.map(option =>
                        <Link onClick={() => addToClick(option.value)} className='single-option'>{option}</Link>
                        // <a onClick={addToClick} className='single-option' href="">{option}</a>
                    )
                }
            </div>
        </div>
    );
};

export default QuizOption;