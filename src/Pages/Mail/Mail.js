import React from "react";
import "./Mail.css";
import { IconButton } from "@mui/material";
import {
  CheckBoxOutlineBlank,
  Delete,
  LabelImportant,
  StarBorderOutlined,
} from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteMail, readMessage } from "../../Store/actions/mail-actions";
import { Toaster } from "react-hot-toast";

const Mail = (props) => {
  const { title, message, seen, selectedOption, id } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const updatedEmail = email.replace(/[@.]/g, "");
  // console.log(selectedOption);
  const handleMailClick = () => {
    history.push(`/mail/${id}`);
    dispatch(readMessage(updatedEmail, { ...props, seen: true }, id));
  };
  const deleteHandler = (event, id) => {
    event.stopPropagation();
    dispatch(deleteMail(updatedEmail, id));
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div onClick={handleMailClick} className="mail">
        <div className="mail__left">
          <IconButton>
            {selectedOption == "inbox" ? (
              <input type="checkbox" checked={seen} />
            ) : (
              <CheckBoxOutlineBlank />
            )}
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
        <div className="mail__right">
          <IconButton
            className="mail__delete"
            onClick={(event) => deleteHandler(event, id)}
          >
            <Delete className="mail__deleteIcon" />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Mail;
