import React from "react";
import "./topbar.css";
import {
  NotificationsNone,
  Language,
  Settings,
  FilterVintageOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import avatar from "../../img/astronaut.png";
import icon from "../../img/icon.png";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="link">
            <span className="logo">
              Admin Pro
              <img src={icon} alt="" className="topIcon"/>
            </span>
          </Link>
        </div>
        <div className="topRight no-cursor">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={avatar} alt="" className="topAvatar  no-cursor" />
        </div>
      </div>
    </div>
  );
}
