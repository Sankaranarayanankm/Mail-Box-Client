import React from "react";
import "./SidebarItems.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
const SidebarItems = ({ Icon, title, item }) => {
  const receivedMails = useSelector((state) => state.mail.receivedMails);
  console.log(receivedMails);
  const totalUnread = receivedMails.reduce((acc, item) => {
    // let count=0;
    if (!item.seen) {
      acc += 1;
    }
    return acc;
  }, 0);
  // console.log(totalUnread);
  const history = useHistory();

  const navigate = () => {
    if (item == "inbox") {
      history.push("/mail");
    } else return;
  };

  return (
    <div onClick={navigate} className="sidebaritems">
      <div className="sidebaritems__title">
        <Icon />
        <h4>{title}</h4>
      </div>
      {item == "inbox" && <p className="sidebaritems__unread">{totalUnread}</p>}
    </div>
  );
};

export default SidebarItems;
