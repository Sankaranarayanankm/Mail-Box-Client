import React from "react";
import "./EmailList.css";
import { IconButton } from "@mui/material";
import {
  ArrowDownward,
  ArrowLeft,
  ArrowRight,
  CheckBoxOutlineBlank,
  Inbox,
  Keyboard,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@mui/icons-material";
import Section from "./Section";
import Mail from "./Mail";
import { useSelector } from "react-redux";
const EmailList = () => {
  const receivedMails = useSelector((state) => state.mail.userReceivedMails);
  const sendMails = useSelector((state) => state.mail.sendMails);
  const selectedOption = useSelector((state) => state.sidebar.display);
  let renderMails;
  if (selectedOption == "inbox") {
    renderMails = receivedMails;
  } else if (selectedOption == "sent") {
    renderMails = sendMails;
  }
  // console.log(renderMails[0]);
  return (
    <div className="emailList mt-0 with-100">
      <div className=" d-flex align-items-center justify-content-between  border-bottom">
        <div className=" d-flex align-items-center">
          <IconButton>
            <CheckBoxOutlineBlank />
          </IconButton>
          <IconButton>
            <ArrowDownward />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className=" d-flex align-items-center">
          <IconButton>
            <ArrowLeft />
          </IconButton>
          <IconButton>
            <ArrowRight />
          </IconButton>
          <IconButton>
            <Keyboard />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className=" d-flex align-items-center ">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="blue" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="emailList__mails">
        {renderMails.map((mail) => (
          <Mail
            key={mail.id}
            selectedOption={selectedOption}
            {...mail}
            title={mail.topic}
            seen={mail.seen}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
