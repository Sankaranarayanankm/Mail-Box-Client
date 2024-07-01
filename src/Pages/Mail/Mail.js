import React from "react";
import "./Mail.css";
import { IconButton } from "@mui/material";
import {
  CheckBoxOutlineBlank,
  LabelImportant,
  StarBorderOutlined,
} from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { readMessage } from "../../Store/actions/mail-actions";
const Mail = (props) => {
  const { title, message, seen, id } = props;
  // console.log(props);
  const history = useHistory();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const updatedEmail = email.replace(/[@.]/g, "");
  // console.log(updatedEmail);
  const handleMailClick = () => {
    history.push(`/mail/${id}`);
    dispatch(readMessage(updatedEmail, { ...props, seen: true }, id));
  };

  return (
    <div onClick={handleMailClick} className="mail">
      <div className="mail__left">
        <IconButton>
          <input type="checkbox" checked={seen} />
        </IconButton>
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportant />
        </IconButton>
      </div>

      <div className="mail__middle">
        <h5>
          {title} -<span className="mail__middleSpan"> {message}</span>
        </h5>
      </div>
    </div>
  );
};

export default Mail;
