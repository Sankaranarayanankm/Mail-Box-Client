import React from "react";
import "./SidebarItems.css";
import { useHistory } from "react-router-dom";
const SidebarItems = ({ Icon, title, item }) => {
  // console.log(item);
  const history = useHistory();
  const navigate = () => {
    if (item == "inbox") {
      history.push("/mail");
    } else return;
  };

  return (
    <div onClick={navigate} className="sidebaritems">
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarItems;
