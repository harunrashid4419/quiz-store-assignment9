import React from 'react';
import { Link } from 'react-router-dom';
import './QuizOption.css';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'


const QuizOption = ({ quiz }) => {
    const { question, options } = quiz;

    const clickedByIcon = (quiz) => {
        const rightAnsweer = quiz.correctAnswer;
        console.log(rightAnsweer)
    }

    const addToClick = (option) => {
        const currectAns = quiz.correctAnswer;
        const clickedValue = option;
        if (currectAns === clickedValue) {
            alert('right ans')
        }
        else {
            alert('wrong ans')
        }
    }

    return (
        <div className='options'>
            <div className='eye-icon'>
                <p className='question'>{question}</p>
                <EyeIcon onClick={() => clickedByIcon(quiz)} className='h-6 w-6'></EyeIcon>
            </div>
            <div className='option'>
                {
                    options.map(option =>
                        <Link onClick={() => addToClick(option)} className='single-option'>{option}</Link>
                    )
                }
            </div>
        </div>
    );
};

export default QuizOption;