import React from 'react';

import './CloseFriend.css';




const CloseFriend = ({ user }) => {



    return (
        <li className="sidebarFriend">
            {/* Close Friend Profile Pic */}
            <img className="sidebarFriendImg" src={user.profilePicture} alt="" />

            {/* Close Friend Name */}
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    );
};




export default CloseFriend;
