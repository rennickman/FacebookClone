import React from 'react';

import './CloseFriend.css';




const CloseFriend = ({ user }) => {


    // Assets folder
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;




    return (
        <li className="sidebarFriend">
            {/* Close Friend Profile Pic */}
            <img className="sidebarFriendImg" src={PF + user.profilePicture} alt="" />

            {/* Close Friend Name */}
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    );
};




export default CloseFriend;
