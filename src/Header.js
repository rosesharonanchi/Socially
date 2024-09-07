import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import { Avatar } from "@mui/material";
import  logo from './assets/logo.png';
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="logo">
        <img src={logo}></img>
        <h1>Socially</h1>
       
        </div>
       
      </div>
      <div className="header__middle">
        <div className="header__option">
         <p className="link">Home</p>
        </div>
        <div className="header__option">
        <p className="link">Community post</p>
        </div>
        <div className="header__option">
        <p className="link">Videos</p>
        </div>
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info" >
          <Avatar />
          <h4>Rose Sharon</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
