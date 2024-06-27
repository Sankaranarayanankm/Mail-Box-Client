import React, { useEffect } from "react";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { loadLocalStorage } from "./Store/actions/auth-actions";
import MailBody from "./Pages/Mail/MailBody";
import ComposeMail from "./Components/ComposeMail/ComposeMail";

const App = () => {
  const login = useSelector((state) => state.auth.isLogin);
  console.log(login);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLocalStorage());
  }, [dispatch]);
  return (
    <div>
      <Switch>
        {!login && (
          <Route path="/login">
            <div className="body__background">
              <Login />
            </div>
          </Route>
        )}
        {!login && (
          <Route path="/signup">
            <div className="body__background">
              <Signup />
            </div>
          </Route>
        )}
        {login && (
          <Route path="/mail">
            <MailBody />
          </Route>
        )}
        {/* <Route path="/compose">{login ? <ComposeMail /> : <Signup />}</Route> */}
        {/* <Route path="*">
          {!login && <Redirect to="/signup" />}
          {login && <Redirect to="/mail" />}
        </Route> */}
      </Switch>
    </div>
  );
};

export default App;
