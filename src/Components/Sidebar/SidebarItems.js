import React from "react";
import "./SidebarItems.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sidebarActions } from "../../Store/actions/sidebar-slice";
import { Container } from "react-bootstrap";
const SidebarItems = ({ Icon, title, item }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const receivedMails = useSelector((state) => state.mail.userReceivedMails);
  // console.log(receivedMails);

  const totalUnread = receivedMails.reduce((acc, item) => {
    if (!item.seen) {
      acc += 1;
    }
    return acc;
  }, 0);

  const navigate = () => {
    if (item == "inbox") {
      dispatch(sidebarActions.displayInbox());
      history.push("/mail");
    } else if (item == "sent") {
      dispatch(sidebarActions.displaySendMails());
      history.push("/mail");
    } else return;
  };

  return (
    <Container
      onClick={navigate}
      className="sidebaritems  d-flex m-1 align-items-center p-2 justify-content-between rounded-end cursor-pointer text-dark"
    >
      <div className="sidebaritems__title d-flex">
        <Icon />
        <h4 className="fw-bold fs-6 ms-1">{title}</h4>
      </div>
      {item == "inbox" && (
        <p className="sidebaritems__unread ">{totalUnread}</p>
      )}
    </Container>
  );
};

export default SidebarItems;
