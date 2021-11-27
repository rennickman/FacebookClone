import React from 'react';

import './Online.css';



const Online = ({ user }) => {



    return (
        <li className="rightbarFriend">
            {/* Online Friend Profile Pic */}
            <div className="rightbarProfileImgContainer">
                <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
            </div>

            {/* Online Friend Uusername */}
            <span className="rightbarUsername">{user.username}</span>
        </li>
    );
};



export default Online;
