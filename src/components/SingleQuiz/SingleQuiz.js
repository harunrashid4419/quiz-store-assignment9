import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOption from '../QuizOption/QuizOption';
import './SingleQuiz.css';

const SingleQuiz = () => {
    const previousQuiz = useLoaderData();
    console.log(previousQuiz)
    const quizs = previousQuiz.data.questions;
    return (
        <div className='single-quizs'>
            <p className='name'><span>{previousQuiz.data.name}</span> Quiz</p>
            {
                quizs.map(quiz => <QuizOption key={quiz.id} quiz={quiz}></QuizOption>)
            }
        </div>
    );
};

export default SingleQuiz;