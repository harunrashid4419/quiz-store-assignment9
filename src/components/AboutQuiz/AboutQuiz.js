import React from 'react';
import './AboutQuiz.css';
import image from '../images/quiz.jpg';
import { Link } from 'react-router-dom';

const AboutQuiz = () => {
    return (
        <div className='about-quiz'>
            <div className='content'>
                <div>
                    <h1>Answeer quiz and improve you skill</h1>
                    <p>Students who are quizzed over class material at least once a week tend to perform better on midterm and final exams compared to students who did not take quizzes, according to a new meta-analysis.</p>
                    <Link to='/blog'>Learn More</Link>
                </div>
            </div>
            <div className='img'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default AboutQuiz;