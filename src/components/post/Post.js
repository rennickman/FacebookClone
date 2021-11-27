import React, { useState } from 'react';
import { MoreVert } from '@material-ui/icons';

import './Post.css';
import { Users } from '../../dummyData';




const Post = ({ post }) => {


    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);


    // Handler for liking and unliking Posts
    const likeHandler = () => {
        // Add or subtract 1 from number of likes depending on whether the post is already liked or not
        setLike(isLiked ? like - 1 : like + 1);
        // Toggle isLiked in state
        setIsLiked(!isLiked);
    }




    return (
        <div className="post">
            <div className="postWrapper">

                <div className="postTop">
                    <div className="postTopLeft">
                        {/* Sender Profile Pic - filter through Users using the User Id from Post for profile pic */}
                        <img 
                            className="postProfileImg"  alt="" 
                            src={Users.filter(user => user.id === post.userId)[0].profilePicture} 
                        />

                        {/* Sender Info - filter through Users using the User Id from Post for username */}
                        <span className="postUsername">{Users.filter(user => user.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>

                    {/* More Icon */}
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>

                <div className="postCenter">
                    {/* Post Image Section */}
                    <span className="postText">{post?.desc}</span>
                    <img className="postImage" src={post.photo} alt="" />
                </div>

                <div className="postBottom">
                    {/* Like Section */}
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/like.png" onClick={likeHandler} alt="" />
                        <img className="likeIcon" src="/assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>

                    {/* Number of Comments */}
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Post;
