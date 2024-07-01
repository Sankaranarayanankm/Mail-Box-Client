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
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const MailMessage = () => {
  const history = useHistory();
  const sendMailList = useSelector((state) => state.mail.receivedMails);
  const params = useParams();
  const mailDetails = sendMailList.find((item) => item.id == params.mailId);
  // console.log(mailDetails);
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
          <h2>{mailDetails.topic}</h2>
          <ArrowForward />
          <p>{mailDetails.to}</p>
          <p className="mailMessage__time">{mailDetails.time}</p>
        </div>

        <div className="mailMessage__messge">
          <p>{mailDetails.message}</p>
        </div>
      </div>
    </div>
  );
};

export default MailMessage;
