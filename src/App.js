import React, { useEffect } from "react";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import MailBody from "./Pages/Mail/MailBody";
import useLocalStorage from "./hooks/useLocalStorage";
import useGetMails from "./hooks/useGetMails";

const App = () => {
  const login = useSelector((state) => state.auth.isLogin);
  const email = useSelector((state) => state.auth.email);
  const updatedEmail = email.replace(/[@.]/g, "");

  // using custom hooks
  useLocalStorage();
  useGetMails(updatedEmail);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          {login ? (
            <MailBody />
          ) : (
            <div className="body__background">
              <Signup />
            </div>
          )}
        </Route>
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
        <Route path="*">
          {!login && <Redirect to="/signup" />}
          {login && <Redirect to="/mail" />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
