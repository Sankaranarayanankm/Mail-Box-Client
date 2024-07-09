import React, { useState } from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import APIKEY from "../../APIKEY";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../Store/auth-slice";
import { login } from "../../Store/actions/auth-actions";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
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
    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: state.email,
            password: state.password,
            returnSecureToken: true,
          }),
        }
      );
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error.message);
      }
      const resData = await response.json();
      console.log(resData);
      const obj = {
        token: resData.idToken,
        email: resData.email,
      };
      toast.success("Successfully Logged in");
      dispatch(login(obj));
      console.log(obj);
      history.push("/mail");
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Failed to login");
    }
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="login">
        <h1 className="login__heading">Login</h1>
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

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p>
            Don't have an account?
            <Link to="/signup">Signup</Link>
          </p>
        </Form>
      </div>
    </>
  );
};

export default Login;
