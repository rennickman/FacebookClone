import React from 'react';
import { Bookmark, ChatOutlined, Event, Group, HelpOutline, PlayCircleFilled, RssFeed, School, WorkOutline } from '@material-ui/icons';

import './Sidebar.css';





const Sidebar = () => {



    return (
        <div className="sidebar">
            <div className="sidebarWrapper">

                {/* List of Sidebar Icons */}
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>

                    <li className="sidebarListItem">
                        <ChatOutlined className="sidebarIcon" />
                        <span className="sidebarListItemText">Chat</span>
                    </li>

                    <li className="sidebarListItem">
                        <PlayCircleFilled className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>

                    <li className="sidebarListItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>

                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>

                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>

                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>

                    <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>

                    <li className="sidebarListItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>

                {/* Show More Button */}
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />

                {/* List of Friends - Name and Profile Pic */}
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>

                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>

                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>

                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};



export default Sidebar;
