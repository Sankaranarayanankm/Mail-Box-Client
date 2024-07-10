import React from "react";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ComposeMail from "../../Components/ComposeMail/ComposeMail";
import { Switch, Route, Redirect } from "react-router-dom";
import EmailList from "./EmailList";
import MailMessage from "./MailMessage";

const MailBody = () => {
  return (
    <div className="mailbody">
      <Header />
      <div className="d-flex p-1">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/mail" />
          </Route>
          <Route exact path="/mail">
            <EmailList />
          </Route>
          <Route path="/mail/compose">
            <ComposeMail />
          </Route>
          <Route path="/mail/:mailId">
            <MailMessage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default MailBody;
