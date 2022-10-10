import React from 'react';
import './Quizs.css';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizs = () => {
    const PreviousQuizs = useLoaderData();
    const quizs = PreviousQuizs.data;
    return (
        <div className='quizs'>
            {
                quizs.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
        </div>
    );
};

export default Quizs;