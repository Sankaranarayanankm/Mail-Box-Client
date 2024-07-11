import React from "react";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ComposeMail from "../../Components/ComposeMail/ComposeMail";
import { Switch, Route, Redirect } from "react-router-dom";
import EmailList from "./EmailList";
import MailMessage from "./MailMessage";
import { Container, Row, Col } from "react-bootstrap";

const MailBody = () => {
  return (
    <Container fluid className="mailbody">
      <Header />
      <Row className="p-1">
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>
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
        </Col>
      </Row>
    </Container>
  );
};

export default MailBody;
