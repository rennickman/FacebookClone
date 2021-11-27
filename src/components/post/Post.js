import React from 'react';
import { MoreVert } from '@material-ui/icons';

import './Post.css';




const Post = () => {



    return (
        <div className="post">
            <div className="postWrapper">

                <div className="postTop">
                    <div className="postTopLeft">
                        {/* Sender Profile Pic */}
                        <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />

                        {/* Sender Info */}
                        <span className="postUsername">Ian Rennick</span>
                        <span className="postDate">5 mins ago</span>
                    </div>

                    {/* More Icon */}
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>

                <div className="postCenter">
                    {/* Post Image Section */}
                    <span className="postText">Hey! WHats cracic!?!!</span>
                    <img className="postImage" src="/assets/post/1.jpeg" alt="" />
                </div>

                <div className="postBottom">
                    {/* Like Section */}
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/like.png" alt="" />
                        <img className="likeIcon" src="/assets/heart.png" alt="" />
                        <span className="postLikeCounter">32 people like it</span>
                    </div>

                    {/* Number of Comments */}
                    <div className="postBottomRight">
                        <span className="postCommentText">9 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Post;
