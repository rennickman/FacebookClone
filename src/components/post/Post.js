import React, { useState, useEffect } from 'react';
import { MoreVert } from '@material-ui/icons';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

import './Post.css';




const Post = ({ post }) => {


    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});


    // Assets folder
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;



    // Use Effect to fetch the User when Post is rendered
    useEffect(() => {
        const fetchUser = async () => {
            // Get User from database using userId contained in Post
            const fetchedUser = await axios.get(`/users?userId=${post.userId}`);
            // Store the User in state
            setUser(fetchedUser.data);
        };

        fetchUser();
    }, [post.userId]);




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

                        <Link to={`profile/${user.username}`}>
                            {/* Sender Profile Pic - Set as default if user doesnt contain profile pic */}
                            <img className="postProfileImg"  alt="" src={user.profilePicture || PF + "person/noAvatar.png"} />
                        </Link>

                        {/* Sender Info - filter through Users using the User Id from Post for username */}
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>

                    {/* More Icon */}
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>

                <div className="postCenter">
                    {/* Post Image Section */}
                    <span className="postText">{post?.desc}</span>
                    <img className="postImage" src={PF + post.img} alt="" />
                </div>

                <div className="postBottom">
                    {/* Like Section */}
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
                        <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
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
