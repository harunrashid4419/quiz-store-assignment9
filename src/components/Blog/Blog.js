import React from 'react';

const Blog = () => {
    return (
        <div className='text-left px-20 mt-12'>
            <div className='border p-5 rounded-lg mb-10'>
                <h1 className='text-2xl font-bold mb-3'>What is the purpose of React Router?</h1>
                <p className='text-md'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. At its heart, React Router is a state container for the current location , or URL. It keeps track of the location and renders different Route s as it changes, and it also gives you tools to update the location using Link s and the history API.</p>
            </div>
            <div className='border p-5 rounded-lg mb-10'>
                <h1 className='text-2xl font-bold mb-3'>How does content api work?</h1>
                <p className='text-md'>The Content API for Shopping allows apps to interact directly with the Merchant Center platform, vastly increasing the efficiency of managing large or complex Merchant Center accounts.  In the Content API, you get a response to every request instantly, rather than via an email summary after the data feeds are processed.</p>
            </div>
            <div className='border p-5 rounded-lg mb-10'>
                <h1 className='text-2xl font-bold mb-3'>What is useRef in React?</h1>
                <p className='text-md'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
            </div>
        </div>
    );
};

export default Blog;