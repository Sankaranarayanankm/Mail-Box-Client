import React from "react";
import "./Mail.css";
import { IconButton } from "@mui/material";
import {
  CheckBoxOutlineBlank,
  LabelImportant,
  StarBorderOutlined,
} from "@mui/icons-material";
import { useHistory } from "react-router-dom";
const Mail = ({ title, message, time }) => {
  const history = useHistory();
  const handleMailClick = () => {
    history.push("/mail/mailmessage");
  };
  return (
    <div onClick={handleMailClick} className="mail">
      {/* for this there are three part  */}
      {/* the left section consist of icons  */}
      <div className="mail__left">
        <IconButton>
          <CheckBoxOutlineBlank />
        </IconButton>
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportant />
        </IconButton>
      </div>
      {/* the middle section consist of test */}
      <div className="mail__middle">
        <h5>
          {title} -<span className="mail__middleSpan">{message}</span>
        </h5>
      </div>
      {/*and the last section cosist of icons  */}
      {/* <div className="mail__time">10pm</div> */}
    </div>
  );
};

export default Mail;
