import { EditorState, convertToRaw } from "draft-js";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import "./ComposeMail.css";
import { Button } from "react-bootstrap";
import { mailActions } from "../../Store/mail-slice";
import {
  handleReceivedMail,
  handleSendMail,
} from "../../Store/actions/mail-actions";

const ComposeMail = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const email = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    to: "",
    topic: "",
  });
  const onEditorStateChange = (newState) => {
    setEditorState(newState);
  };
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const currentContent = editorState.getCurrentContent();
    const rawContent = convertToRaw(currentContent);
    const message = rawContent.blocks.map((item) => item.text).join(" ");
    const obj = {
      ...state,
      seen: false,
      message,
      time: JSON.stringify(new Date()),
    };

    const updatedEmail = email.replace(/[@.]/g, "");
    const updatedReceiverEmail = state.to.replace(/[@.]/g, "");
    dispatch(handleSendMail(updatedEmail, obj));
    dispatch(handleReceivedMail(updatedReceiverEmail, obj));

    console.log("message sent");
  };
  return (
    <form className="composeMail" onSubmit={submitHandler}>
      <div className="composeMail__input">
        <label>To: </label>
        <input
          type="email"
          name="to"
          value={state.to}
          onChange={changeHandler}
        />
      </div>
      <div className="composeMail__input">
        <label>Topic</label>
        <input
          type="text"
          name="topic"
          value={state.topic}
          onChange={changeHandler}
        />
      </div>
      <Editor
        placeholder="Enter your message..."
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
      <Button type="submit">Send</Button>
    </form>
  );
};

export default ComposeMail;
