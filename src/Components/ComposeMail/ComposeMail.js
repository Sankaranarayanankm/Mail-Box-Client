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
    // console.log(obj);
    async function sendData() {
      const updatedEmail = email.replace(/[@.]/g, "");
      console.log(updatedEmail);
      try {
        const response = fetch(
          `https://mail-box-client-7fd46-default-rtdb.firebaseio.com/${updatedEmail}.json`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
          }
        );
        if (!response.ok) {
          const errData = (await response).json();
          throw new Error(errData.error.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    sendData();
    // send this object to backend note that we need to add email to the node
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
      <Button>Send</Button>
    </form>
  );
};

export default ComposeMail;