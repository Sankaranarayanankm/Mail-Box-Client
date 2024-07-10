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
    <div className=" w-100 bg-light">
      <div className="mailMessage__tools d-flex align-items-center justify-content-between ">
        <div className=" d-flex align-items-center">
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
        <div className=" d-flex align-items-center">
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
      <div className="mailMessage__body p-3 d-flex flex-column m-4 shadow-lg">
        <div className="mailMessage__bodyHeader d-flex align-items-center">
          <h2 className="fw-normal me-2 border-bottom p-4">
            {mailDetails.topic}
          </h2>
          <ArrowForward className="me-4" />
          <p>{mailDetails.to}</p>
          <p className="mailMessage__time">{mailDetails.time}</p>
        </div>

        <div className="mailMessage__messge p-2 me-2">
          <p className="ms-3">{mailDetails.message}</p>
        </div>
      </div>
    </div>
  );
};

export default MailMessage;
