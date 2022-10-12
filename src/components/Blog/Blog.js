import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div className='blogs'>
            <div className='blog'>
                <h3>What is the Purpose of React Router?</h3>
                <p>
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL
                </p>
            </div>
            <div className='blog'>
                <h3>How context API Works?</h3>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux
                </p>
            </div>
            <div className='blog'>
                <h3>What is useRef Hook in React?</h3>
                <p>
                    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                </p>
            </div>
        </div>
    );
};

export default Blog;