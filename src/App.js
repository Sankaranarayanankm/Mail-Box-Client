import React, { useEffect } from "react";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import "./App.css";
import { useDispatch } from "react-redux";
import { loadLocalStorage } from "./Store/actions/auth-actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLocalStorage());
  }, [dispatch]);
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
