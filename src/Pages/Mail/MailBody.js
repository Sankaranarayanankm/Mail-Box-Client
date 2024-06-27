import React from "react";
import "./MailBody.css";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ComposeMail from "../../Components/ComposeMail/ComposeMail";
import { Switch, Route } from "react-router-dom";
import EmailList from "./EmailList";

const MailBody = () => {
  return (
    <div className="mailbody">
      {/* add header here  */}
      <Header />
      {/* add side bar and mail list component inside a body so to give flex  */}
      <div className="mailbody__body">
        <Sidebar />
        <Switch>
          <Route exact path="/mail">
            <EmailList />
          </Route>
          <Route path="/mail/compose">
            {/* <h1>this is compose Mail component</h1> */}
            <ComposeMail />
          </Route>
        </Switch>
      </div>
      {/* here we need to add route for mail list and mail item  everytime we must dispaly header and sidebar */}

      {/* then add side bar here  */}

      {/* then add maillist and mail here  */}
    </div>
  );
};

export default MailBody;
