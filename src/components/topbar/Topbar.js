import React from 'react';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';

import './Topbar.css';






const Topbar = () => {



    return (
        
        <div className="topbarContainer">

            {/* Logo */}
            <div className="topbarLeft">
                <span className="logo">Rennbook</span>
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

                {/* Profile Pic */}
                <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
      
    );
};



export default Topbar;
