import React from 'react';

import './Online.css';



const Online = ({ user }) => {


    // Assets folder
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;




    return (
        <li className="rightbarFriend">
            {/* Online Friend Profile Pic */}
            <div className="rightbarProfileImgContainer">
                <img src={PF + user.profilePicture} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
            </div>

            {/* Online Friend Uusername */}
            <span className="rightbarUsername">{user.username}</span>
        </li>
    );
};



export default Online;
