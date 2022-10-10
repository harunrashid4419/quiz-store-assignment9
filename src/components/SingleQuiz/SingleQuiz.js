import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './SingleQuiz.css';

const SingleQuiz = () => {
    const previousQuiz = useLoaderData();
    const quiz = previousQuiz.data.questions;
    console.log(quiz)
    return (
        <div>
            
        </div>
    );
};

export default SingleQuiz;