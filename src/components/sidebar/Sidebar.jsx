import "./sidebar.css";
import "../../App.css"
import {
  LineStyle,
  Timeline,
  PermIdentity,
  Storefront,
  MailOutline,
  Settings
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <li className="sidebarListItem no-cursor">
              <Settings className="sidebarIcon"/>
              Settings
            </li>
            <li className="sidebarListItem no-cursor">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem no-cursor">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
