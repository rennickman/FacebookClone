import React from 'react';
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';

import './Share.css';





const Share = () => {



    return (
        <div className="share">
           <div className="shareWrapper">
                
                <div className="shareTop">
                    {/* Profile Pic */}
                    <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />

                    {/* Input  */}
                    <input placeholder="What's on your mind dude?" className="shareInput" />
                </div>
                <hr className="shareHr"/>

                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            {/* Share Icon */}
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                        </div>

                        <div className="shareOption">
                            {/* Tag Icon */}
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>

                        <div className="shareOption">
                            {/* Location Icon */}
                            <Room htmlColor="geen" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>

                        <div className="shareOption">
                            {/* Mood Icon */}
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Mood</span>
                        </div>
                    </div>

                    {/* Share Button */}
                    <button className="shareButton">Share</button>
                </div>
           </div>
        </div>
    );
};




export default Share;
