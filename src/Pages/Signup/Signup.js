import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import APIKEY from "../../APIKEY";
import toast, { Toaster } from "react-hot-toast";
const Signup = () => {
  const history = useHistory();
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
      toast.success("Account Creation Successfull");
      history.push("/login");
    } catch (error) {
      toast.error(error.message || "Failed to Create Account");
      console.log(error);
    }
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <Container className="form w-auto border border-dark border-1 rounded-2 px-4 py-3 text-dark fs-5 fw-bold shadow">
        <h1 className=" text-center mb-4">SignUp</h1>
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
            <Form.Text className="text-muted fw-light">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className=""
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

          <Button className="w-auto" variant="primary" type="submit">
            Submit
          </Button>
          <p>
            Have an Account?
            <Link className="text-light text-decoration-none" to="/login">
              Login
            </Link>
          </p>
        </Form>
      </Container>
    </>
  );
};

export default Signup;
