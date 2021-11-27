import React from 'react';

import './Rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';




const Rightbar = ({ profile }) => {



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
        )
    }




    // Right bar for Profile Page
    const ProfileRightbar = () => {
        return (
            <>  
                {/* User Info Title */}
                <h4 className="rightbarTitle">User Information</h4>

                <div className="rightbarInfo">
                    {/* Current Location */}
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Newbridge</span>
                    </div>

                    {/* Hometown */}
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Newbridge</span>
                    </div>

                    {/* Relationship status */}
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">It's complicated</span>
                    </div> 
                </div>

                {/* User Friends Title */}
                <h4 className="rightbarTitle">User Friends</h4>

                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>

                    <div className="rightbarFollowing">
                        <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>

                    <div className="rightbarFollowing">
                        <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>

                    <div className="rightbarFollowing">
                        <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>

                    <div className="rightbarFollowing">
                        <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>

                    <div className="rightbarFollowing">
                        <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                </div>
            </>
        )
    }





    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {/* Check for a profile value in props and display differenct Rightbar for Profile and Home Pages */}
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
};





export default Rightbar;
