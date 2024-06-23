import React, { useState } from "react";
import "./App.css";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./Pages/Welcome";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <div className="body__background">
            <Login />
          </div>
        </Route>
        <Route path="/signup">
          <div className="body__background">
            <Signup />
          </div>
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="*">
          <Redirect to="/signup" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
