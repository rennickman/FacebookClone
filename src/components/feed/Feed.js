import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import './Feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import { AuthContext } from '../../context/AuthContext';



const Feed = ({ username }) => {



    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);


    // Use Effect to fetch Posts when Feed is rendered
    useEffect(() => {
        const fetchPosts = async () => {

            // Get Timeline or all Posts from a User from database depending on whether Homepage or Profile page
            const timeline = username ? 
                await axios.get("/posts/profile/" + username) : 
                await axios.get("/posts/timeline/" + user._id);

            // Store the timeline in state - sorted according to Date they were created
            setPosts(timeline.data.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            }));
        };

        fetchPosts();
    }, [username, user._id]);






    return (
        <div className="feed">
            <div className="feedWrapper">
                {/* Share Section */}
                {(!username || username === user.username) && <Share />}

                {/* Map through Array of Posts */}
                {posts.map(post => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
};


export default Feed;
