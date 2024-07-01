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
  const sendMails = useSelector((state) => state.mail.sendMails);
  console.log(sendMails[0]);
  return (
    <div className="emailList">
      {/* add email list settings section which has some icons on right and left  */}
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
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
        <div className="emailList__settingsRight">
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

      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="blue" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="emailList__mails">
        {sendMails.map((mail) => (
          <Mail
            key={mail.id}
            id={mail.id}
            title={mail.topic}
            message={mail.message}
            time={mail.time}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
