import { Avatar } from "@mui/material";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Post({ image, profilePic, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
          <p>Timestamp...</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <p>Like</p>
          <ThumbUpIcon />
        </div>
        <div className="post__option">
          <p>Comment</p>
          <CommentIcon />
        </div>
        <div className="post__option">
          <p>Share</p>
          <ShareIcon />
        </div>
        <div className="post__option">
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
