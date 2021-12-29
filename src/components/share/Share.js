import React, { useContext, useRef, useState } from 'react';
import { PermMedia, Label, Room, EmojiEmotions, Cancel } from '@material-ui/icons';
import axios from 'axios';

import './Share.css';
import { AuthContext } from '../../context/AuthContext';




const Share = () => {


    const [file, setFile] = useState(null);
    const { user } = useContext(AuthContext);

    const desc = useRef();


    // Assets folder
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;



    // Handle photo upload submission
    const submitHandler = async e => {
        // Prevent Reset
        e.preventDefault();

        // Create a post
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        };

        // Check if there is a file to be uploaded
        if (file) {
            // Create a new FormData to send the file in
            const data = new FormData();
            // Create a new file name by cancasting the current date with file name
            const fileName = Date.now() + file.name;

            console.log(data);
            console.log(fileName);

            // Add the file and new filename to the FromData
            data.append("name", fileName);
            data.append("file", file);

            // Add filename path to new post
            newPost.img = fileName;

            console.log(data.name);

            try {
                // Upload image to Public Folder
                await axios.post("/upload", data);
                // Reload page after adding Post
                window.location.reload();

            } catch (err) {
                // Deal with any errors
                console.log("fuck");
            }
        }

        try {
            // Post the New post to database
            await axios.post("/posts", newPost);

        } catch (err) {
            // Deal with any errors
        }
    };






    return (
        <div className="share">
           <div className="shareWrapper">
                
                <div className="shareTop">
                    {/* Profile Pic */}
                    <img 
                        className="shareProfileImg" alt="" 
                        src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"}
                    />

                    {/* Input  */}
                    <input placeholder={"What's on your mind " + user.username + "?"} className="shareInput" ref={desc} />
                </div>
                <hr className="shareHr"/>

                {/* Display Photo before Uploading */}
                {file && (
                    <div className="shareImgContainer">
                        <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                        <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
                    </div>
                )}
                
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            {/* Share Photo Icon */}
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>

                            {/* Share Photo Input - hidden and works in background */}
                            <input 
                                type="file" id="file" accept=".png, .jpeg, .jpg" style={{ display: "none" }}
                                onChange={e => setFile(e.target.files[0])} 
                            />
                        </label>

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
                    <button className="shareButton" type="submit">Share</button>
                </form>
           </div>
        </div>
    );
};




export default Share;
