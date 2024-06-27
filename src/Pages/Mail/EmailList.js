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
const EmailList = () => {
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

      {/* then add the primary social and promotions section for that create a new component  */}
      <div className="emailList__sections">
        {/* add section component here and pass color icon and text as attributes  */}
        {/* for 3 elements primary social and promotions  */}
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="blue" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="emailList__mails">
        {/* here render a mail component which should have title time and if possible add email  */}
        <Mail
          title="Dummy mail"
          time="10pm"
          message="This is the message that you got in this dummy email"
        />
      </div>
      {/* this is a component where i want to render the list of emails  */}
      {/* i will create a seaparte component for dislaying emails  */}
    </div>
  );
};

export default EmailList;
