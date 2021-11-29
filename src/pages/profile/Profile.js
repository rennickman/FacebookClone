import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

import './Profile.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';




const Profile = () => {


    const [user, setUser] = useState({});

    // Store the Username from the Url params
    const username = useParams().username;

    // Assets folder
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;



    // Use Effect to fetch the User when Profile Page is rendered
    useEffect(() => {
        const fetchUser = async () => {
            // Get User from database using userId contained in Profile
            const fetchedUser = await axios.get(`/users?username=${username}`);
            // Store the User in state
            setUser(fetchedUser.data);
        };

        fetchUser();
    }, [username]);





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
                            <img src={user.coverPicture || PF + "person/noCover.png"} alt="" className="profileCoverImg" />
                            {/* Porfile Pic - Fits inside Cover Image */}
                            <img src={user.profilePicture || PF + "person/noAvatar.png"} alt="" className="profileUserImg" />
                        </div>

                        <div className="profileInfo">
                            {/* User name */}
                                <h4 className="profileInfoName">{user.username}</h4>

                            {/* User Profile Message */}
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                        
                    </div>

                    {/* Feed and rightbar */}
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <Rightbar user={user} />
                    </div>                   
                </div>
            </div>
        </>
    );
};



export default Profile;
