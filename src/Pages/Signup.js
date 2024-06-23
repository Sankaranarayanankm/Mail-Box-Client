import React, { useState } from "react";
import "./Signup.css";
import { Button, Form } from "react-bootstrap";
import APIKEY from "../APIKEY";
const Signup = () => {
  console.log(APIKEY);
  const [state, setState] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    //UNCOMMENT THIS AFTER COMPLETING THE PROJECT
    // if (state.confirm != state.password)
    //   alert("Password and confirm Password should be same!");
    // if(state.password.trim().length==0) alert('Enter valid password');
    console.log(state);
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: state.email,
            password: state.password,
            returnsecureToken: true,
          }),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }
      console.log("User has successfully signed up");
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };
  return (
    <div className="form">
      <h1 className="form__heading">SignUp</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={state.email}
            onChange={changeHandler}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={state.password}
            onChange={changeHandler}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirm"
            value={state.confirm}
            onChange={changeHandler}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
