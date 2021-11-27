import React from 'react';

import './Feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import { Posts } from '../../dummyData';




const Feed = () => {


    return (
        <div className="feed">
            <div className="feedWrapper">
                {/* Share Section */}
                <Share />

                {/* Map through Array of Posts */}
                {Posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};


export default Feed;
