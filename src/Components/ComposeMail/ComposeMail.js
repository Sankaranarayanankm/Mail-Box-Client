import { EditorState, convertToRaw } from "draft-js";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useSelector } from "react-redux";
import "./ComposeMail.css";
import { Button } from "react-bootstrap";

const ComposeMail = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const email = useSelector((state) => state.auth.email);

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
      message,
      time: new Date().getTime(),
    };
    console.log(obj);
    // here send two request one with receive and other with send so that we can receive it in send box and receive box
    // send should have email from auth and receive should have email from to in the state
    async function sendData() {
      const updatedEmail = email.replace(/[@.]/g, "");
      console.log(updatedEmail);
      // for senders part
      try {
        const response = await fetch(
          `https://mail-box-client-7fd46-default-rtdb.firebaseio.com/send${updatedEmail}.json`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
          }
        );
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    sendData();
    // for the receiver part
    const updatedReceiverEmail = state.to.replace(/[@.]/g, "");
    async function sendDataforR() {
      try {
        const response = await fetch(
          `https://mail-box-client-7fd46-default-rtdb.firebaseio.com/receive${updatedReceiverEmail}.json`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
          }
        );
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    sendDataforR();
    // send this object to backend note that we need to add email to the node
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
