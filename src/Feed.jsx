import React from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import profileImge1 from "./assets/profile1.jpg";
import profileImge2 from "./assets/profile2.jpg";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        //  key={id}
        profilePic={profileImge1}
        message={"Wow this works"}
        timestamp="This is the timestamp"
        username="Mfor Nde"
        image={profileImge2}
      />
    </div>
  );
}

export default Feed;
