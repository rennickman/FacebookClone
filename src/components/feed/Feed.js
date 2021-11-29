import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Feed.css';
import Share from '../share/Share';
import Post from '../post/Post';




const Feed = ({ username }) => {



    const [posts, setPosts] = useState([]);



    // Use Effect to fetch Posts when Feed is rendered
    useEffect(() => {
        const fetchPosts = async () => {

            // Get Timeline or all Posts from a User from database depending on whether Homepage or Profile page
            const timeline = username ? 
                await axios.get("/posts/profile/" + username) : 
                await axios.get("/posts/timeline/619bffe9e875e1bd07a72f48");

            // Store the timeline in state
            setPosts(timeline.data);
        };

        fetchPosts();
    }, [username]);






    return (
        <div className="feed">
            <div className="feedWrapper">
                {/* Share Section */}
                <Share />

                {/* Map through Array of Posts */}
                {posts.map(post => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
};


export default Feed;
