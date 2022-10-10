import React from 'react';
import './AboutQuiz.css';
import image from '../images/quiz.jpg';

const AboutQuiz = () => {
    return (
        <div className='about-quiz'>
            <div>
                <h1>Answeer quiz and improve you skill</h1>
                <p>Students who are quizzed over class material at least once a week tend to perform better on midterm and final exams compared to students who did not take quizzes, according to a new meta-analysis.</p>
            </div>
            <img src={image} alt="" />
        </div>
    );
};

export default AboutQuiz;