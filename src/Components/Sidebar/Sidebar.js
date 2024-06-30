import React from "react";
import "./Sidebar.css";
import { Button } from "react-bootstrap";
import InboxIcon from "@mui/icons-material/Inbox";
import SidebarItems from "./SidebarItems";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import {
  AccessTime,
  ExpandMore,
  LabelImportant,
  NearMe,
  Note,
} from "@mui/icons-material";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const history = useHistory();
  return (
    <div className="sidebar">
      {/* add button for compose mail here and link to componse mail by using usehitory  */}

      <Button
        onClick={() => history.push("/mail/compose")}
        className="sidebar__composebtn"
      >
        COMPOSE
      </Button>
      {/* add another component called sidebar items then add and link it using usehistory  */}
      <div className="sidebar__list">
        <SidebarItems
          Icon={InboxIcon}
          title="Inbox"
         item='inbox'
        />
        <SidebarItems Icon={StarBorderIcon} title="Stared" />
        <SidebarItems Icon={AccessTime} title="Snoozed" />
        <SidebarItems Icon={LabelImportant} title="Important" />
        <SidebarItems Icon={NearMe} title="Sent" />
        <SidebarItems Icon={Note} title="Drafts" />
        <SidebarItems Icon={ExpandMore} title="More" />
      </div>
      {/* by default it should display mail list  */}
      {/* when the user clicked one of the mail component then it should take to /mail route  */}
    </div>
  );
};

export default Sidebar;
