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
      <Button
        onClick={() => history.push("/mail/compose")}
        className="sidebar__composebtn"
      >
        COMPOSE
      </Button>

      <div className="sidebar__list">
        <SidebarItems Icon={InboxIcon} title="Inbox" item="inbox" />
        <SidebarItems Icon={StarBorderIcon} title="Stared" />
        <SidebarItems Icon={AccessTime} title="Snoozed" />
        <SidebarItems Icon={LabelImportant} title="Important" />
        <SidebarItems Icon={NearMe} title="Sent" item="sent" />
        <SidebarItems Icon={Note} title="Drafts" />
        <SidebarItems Icon={ExpandMore} title="More" />
      </div>
    </div>
  );
};

export default Sidebar;
