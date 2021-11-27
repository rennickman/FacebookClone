import React from 'react';

import './Rightbar.css';





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

                {/* Online Friends List */}
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>

                        <span className="rightbarUsername">Jon Carter</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};




export default Rightbar;
