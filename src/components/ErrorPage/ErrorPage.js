import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='pt-12'>
            <p className='text-2xl text-rose-800 my-3'>Oops! we can't seem to find the page your're looking for.</p>
            <h1 className='text-6xl font-extrabold text-gray-900 mb-5'>404</h1>
            <Link className='text-2xl text-red-500 underline' to='/home'>GO to HomePage</Link>
        </div>
    );
};

export default ErrorPage;