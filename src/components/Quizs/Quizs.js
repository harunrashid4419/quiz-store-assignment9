import React from 'react';
import './Quizs.css';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizs = () => {
    const PreviousQuizs = useLoaderData();
    const quizs = PreviousQuizs.data;
    return (
        <div>
            <h1 className='text-black font-bold text-4xl'>Quiz</h1>
            <div className="quizs">
                {
                    quizs.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>

        </div>
    );
};

export default Quizs;