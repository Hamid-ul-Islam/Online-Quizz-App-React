import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>

            <div className="logo">
                <img src="https://quizzes.madza.dev/logo.svg" alt="" />
            </div>
            <div className="links">
            <Link className='link-text' to= "/">Home</Link>
            <Link className='link-text' to= "statistics">Statistics</Link>
            <Link className='link-text' to= "blog">Blog</Link>
            </div>
        </nav>
    );
};

export default Header;