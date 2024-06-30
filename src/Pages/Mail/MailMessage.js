import React from "react";
import "./MailMessage.css";
import { IconButton } from "@mui/material";
import {
  ArrowBack,
  ArrowForward,
  Delete,
  Email,
  Error,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from "@mui/icons-material";
import { useHistory } from "react-router-dom";

const MailMessage = () => {
  const history = useHistory();
  return (
    <div className="mailMessage">
      <div className="mailMessage__tools">
        <div className="mailMessage__toolsLeft">
          <IconButton onClick={() => history.push("/mail")}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>

          <IconButton>
            <Error />
          </IconButton>

          <IconButton>
            <Delete />
          </IconButton>

          <IconButton>
            <Email />
          </IconButton>

          <IconButton>
            <WatchLater />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="mailMessage__toolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>

          <IconButton>
            <Print />
          </IconButton>

          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="mailMessage__body">
        <div className="mailMessage__bodyHeader">
          <h2>Subject</h2>
          <ArrowForward />
          <p>title</p>
          <p className="mailMessage__time">time</p>
        </div>

        <div className="mailMessage__messge">
          <p>This is the message part</p>
        </div>
      </div>
    </div>
  );
};

export default MailMessage;
