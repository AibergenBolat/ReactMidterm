// src/components/HomePage.js
import React, { useState } from 'react';
import Post from '../post/Post';
import './home.css';
const Home = () => {
    const [posts, setPosts] = useState([
        { postId: 1, title: 'Post 1' },
        { postId: 2, title: 'Post 2' },
    ]);

    const handleDeletePost = (postId) => {
        setPosts(posts.filter(post => post.postId !== postId));
    };

    return (
        <div className="home-page">
            <h1>Welcome to the Home Page</h1>
            {posts.map(post => (
                <Post
                    key={post.postId}
                    postId={post.postId}
                    title={post.title}
                    onDelete={handleDeletePost}
                />
            ))}
        </div>
    );
};

export default Home;
