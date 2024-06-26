import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowDownward, Notifications } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
          alt="mail logo"
        />
        <h1>Mail-Box Client</h1>
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="Search Mails here..." />
        <ArrowDownward />
      </div>
      <div className="header__right">
        <IconButton>
          <ViewCompactIcon />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <Avatar />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
