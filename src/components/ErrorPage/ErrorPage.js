import React from 'react';

const ErrorPage = () => {
    return (
        <div className='pt-12'>
            <svg className='h-10 w-10 m-auto' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>

            <p className='text-2xl text-rose-800 my-3'>Oops! we can't seem to find the page your're looking for.</p>
            <h1 className='text-6xl font-extrabold text-gray-900'>404</h1>
        </div>
    );
};

export default ErrorPage;