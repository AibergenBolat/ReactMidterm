// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './page/Profile';
import Post from './post/Post';
import Home from './page/Home';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/post" element={<Post/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
