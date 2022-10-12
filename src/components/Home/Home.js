import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Home.css'


const Home = () => {
    const topics = useLoaderData();
    return (
        <div className>
            <div className='header-text'>
                <h1>
                Test Your Knowledge by Taking Quizzes.
                </h1>
                <span>
                All questions sorted via categories and curated by users.
                </span>
            </div>
        <div className='sob-card'>
            {
                topics.data.map(topic =>

                    <div className='all-card'>
                    
                        <img src={topic.logo} alt="" />
                    
                    
                    <div className='title'>
                            <strong>{topic.name}</strong>
                            
                            <Link to={topic.name} >
                                <button type="button">
                                    Start Quiz ➜
                                </button>
                            </Link>

                    </div>
                        
                        </div>)
                    
            }
            </div>
        </div>
    );
};

export default Home;