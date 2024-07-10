import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ArrowDownward, Notifications } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import { useDispatch } from "react-redux";
import { logout } from "../../Store/actions/auth-actions";

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="header w-100  mb-1 mt-0 d-flex align-items-center justify-content-between bg-light border border-bottom-1">
      <div className="header__left d-flex align-items-center">
        <img
          className="w-auto pe-2 d-flex align-items-center"
          style={{ height: "40px" }}
          src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
          alt="mail logo"
        />
        <h3>EchoMail</h3>
      </div>
      <div className=" d-flex align-items-center p-1 bg-light rounded-1 cursor-ponter">
        <SearchIcon />
        <input
          className="w-100 border border-0 p-3 bg-transparent"
          type="text"
          placeholder="Search Mails here..."
        />
        <ArrowDownward />
      </div>
      <div className=" d-flex align-items-center pe-3">
        <IconButton>
          <ViewCompactIcon />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton onClick={logoutHandler}>
          <Avatar />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
