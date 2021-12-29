import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Add, Remove } from '@material-ui/icons';

import './Rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import { AuthContext } from '../../context/AuthContext';




const Rightbar = ({ user }) => {

    // Assets folder
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [friends, setFriends] = useState([]);
    
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [followed, setFollowed] = useState(currentUser.following.includes(user?.id));



    // Use Effect to check whether friend is followed
    useEffect(() => {

        // See if the User Id of friend is in the current user's following array
        setFollowed(currentUser.following.includes(user?.id));
    }, [currentUser, user]);



    // Use Effect to Get the Friend list when component first renders or userId is changed
    useEffect(() => {

        const getFriends = async () => {
            try {
                // Make API call to get Friend list
                const friendList = await axios.get("/users/friends/" + user._id);
                // Store the Friend list in state
                setFriends(friendList.data);

            // Deal with any errors
            } catch (err) {
                console.log(err);
            }
        };

        getFriends();
    }, [user]);

    

    // Method for handling Follow Button functionality
    const handleClick = async () => {
        try {

            if (followed) {
                // Remove User Id from Followed List
                await axios.put("/users/" + user._id + "/unfollow", { userId: currentUser._id });
                dispatch({ type: "UNFOLLOW", payload: user._id });

            } else {
                // Add User Id to Followed List
                await axios.put("/users/" + user._id + "/follow", { userId: currentUser._id });
                dispatch({ type: "FOLLOW", payload: user._id });
            }

        // Deal with any Errors
        } catch (err) {
            console.log(err);
        }

        // Toggle Followd in State
        setFollowed(!followed);
    };



    // Right bar for Homepage
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    {/* Birthday Section */}
                    <img className="birthdayImg" src="/assets/gift.png" alt="" />
                    <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.</span>
                </div>

                {/* Advertisment */}
                <img src="/assets/ad.png" alt="" className="rightbarAd" />

                {/* Online Friends Title */}
                <h4 className="rightbarTitle">Online Friends</h4>

                {/* List of Online Friends */}
                <ul className="rightbarFriendList">
                    {Users.map(user => (
                        <Online key={user.id} user={user} />
                    ))}
                </ul>
            </>
        );
    };





    // Right bar for Profile Page
    const ProfileRightbar = () => {
        return (
            <>  
                {user.username !== currentUser.username && (
                    <button className="rightbarFollowButton" onClick={handleClick}>
                        {followed ? "Unfollow" : "Follow"}
                        {followed ? <Remove /> : <Add />}                        
                    </button>
                )}

                {/* User Info Title */}
                <h4 className="rightbarTitle">User Information</h4>

                <div className="rightbarInfo">
                    {/* Current Location */}
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>

                    {/* Hometown */}
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>

                    {/* Relationship status */}
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">
                            {user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}
                        </span>
                    </div> 
                </div>

                {/* User Friends Title */}
                <h4 className="rightbarTitle">User Friends</h4>

                {/* List of Friends - Map through FriendList */}
                <div className="rightbarFollowings">
                    {friends.map(friend => (
                        <Link to={"/profile/" + friend.username} style={{ textDecoration: "none"}}>
                            <div className="rightbarFollowing">
                                {/* Friend Profile Pic */}
                                <img 
                                    src={friend.profilePicture ? PF + friend.profilePicture : PF + "person/noAvatar.png"} 
                                    alt="" className="rightbarFollowingImg" 
                                />

                                {/* Friend Name */}
                                <span className="rightbarFollowingName">{friend.username}</span>
                            </div>
                        </Link>
                    ))}
                    
                </div>
            </>
        );
    };





    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {/* Check for a profile value in props and display differenct Rightbar for Profile and Home Pages */}
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
};





export default Rightbar;
