import React from "react";
import Story from "./Story";
import profileImge1 from "./assets/profile1.jpg";
import profileImge2 from "./assets/profile2.jpg";
import profileImge3 from "./assets/profile3.jpg";
import profileImge4 from "./assets/profile4.jpg";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image={profileImge1} title="Rose Sharon" />
      <Story image={profileImge2} title={"Rose Sharon"} />
      <Story image={profileImge1} title={"Rose Sharon"} />
      <Story image={profileImge3} title={"Rose Sharon"} />
      <Story image={profileImge4} title={"Rose Sharon"} />
    </div>
  );
}

export default StoryReel;
