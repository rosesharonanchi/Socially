import React from "react";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Messages" Icon={ChatIcon} />
      <SidebarRow title="Profile" Icon={PersonIcon} />
      <SidebarRow title="Settings" Icon={SettingsIcon} />
    </div>
  );
}

export default Sidebar;
