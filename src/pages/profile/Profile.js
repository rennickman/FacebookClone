import React from 'react';

import './Profile.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';




const Profile = () => {


    // Assets folder
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;





    return (
        <>
            {/* Navbar */}
            <Topbar />

            {/* Profile Page */}
            <div className="profile">
                {/* Sidebar */}
                <Sidebar />

                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            {/* Cover Image */}
                            <img src={`${PF}post/3.jpeg`} alt="" className="profileCoverImg" />
                            {/* Porfile Pic - Fits inside Cover Image */}
                            <img src={`${PF}person/7.jpeg`} alt="" className="profileUserImg" />
                        </div>

                        <div className="profileInfo">
                            {/* User name */}
                            <h4 className="profileInfoName">Ian Rennick</h4>

                            {/* User Profile Message */}
                            <span className="profileInfoDesc">Whasss craic boys</span>
                        </div>
                        
                    </div>

                    {/* Feed and rightbar */}
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>                   
                </div>
            </div>
        </>
    );
};



export default Profile;
