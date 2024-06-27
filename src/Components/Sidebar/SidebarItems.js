import React from "react";
import "./SidebarItems.css";
import { useHistory } from "react-router-dom";
const SidebarItems = ({ Icon, title }) => {
  const history = useHistory();
  return (
    <div  className="sidebaritems">
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarItems;
