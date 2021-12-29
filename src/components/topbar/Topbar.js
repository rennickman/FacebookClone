import React, { useContext } from 'react';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import './Topbar.css';
import { AuthContext } from '../../context/AuthContext';





const Topbar = () => {



    const { user } = useContext(AuthContext);

    // Assets folder
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;




    return (
        
        <div className="topbarContainer">

            {/* Logo - Links to Homepage */}
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Rennbook</span>
                </Link>
            </div>

            {/* Searchbar */}
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for a friend, post or video" className="searchInput" />
                </div>
            </div>

            <div className="topbarRight">

                {/* Links */}
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>

                <div className="topbarIcons">
                    {/* Friend Icon */}
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>

                    {/* Message Icon */}
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>

                    {/* Notification Icon */}
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>

                {/* Profile Pic - Links to Profile Page */}
                <Link to={`/profile/${user.username}`}>
                    <img 
                        src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} 
                        alt="" className="topbarImg"
                    />
                </Link>
            </div>
        </div>
      
    );
};



export default Topbar;
