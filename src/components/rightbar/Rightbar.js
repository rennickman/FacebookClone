import React from 'react';

import './Rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';




const Rightbar = () => {



    return (
        <div className="rightbar">
            <div className="rightbarWrapper">

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
            </div>
        </div>
    );
};





export default Rightbar;
