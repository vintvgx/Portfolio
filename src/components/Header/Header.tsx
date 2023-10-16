import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai"; // For the Gmail icon

import "./Header.css";
import { useState } from "react";

type HeaderProps = {
  className?: string;
  backgroundColor?: string;
};

const Header: React.FC<HeaderProps> = ({ className, backgroundColor }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeNavStyle = {
    backgroundColor: "white",
    color: "black",
    // padding: "15px 20px",
    borderRadius: "40px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 8px 16px 0px",
    width: "90px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    placeContent: "center",
  };

  const defaultNavStyle = {
    backgroundColor: "transparent",
    color: "black",
  };

  const iconColor = backgroundColor === "white" ? "black" : "white";

  return (
    <div className={`header ${className}`}>
      {" "}
      <div className="profile-icon" />
      <div className="nav-links">
        <NavLink
          to="/"
          style={isActive("/") ? activeNavStyle : defaultNavStyle}
          className="nav-link">
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/Projects"
          style={isActive("/Projects") ? activeNavStyle : defaultNavStyle}
          className="nav-link">
          <p>Projects</p>
        </NavLink>
        <NavLink
          to="/About"
          style={isActive("/About") ? activeNavStyle : defaultNavStyle}
          className="nav-link">
          <p>About</p>
        </NavLink>
      </div>
      <div
        className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <FaBars color={iconColor} />
      </div>
      <div className={`social-icons ${isMobileMenuOpen ? "open" : ""}`}>
        <AiFillMail className="icon" color={iconColor} />
        <FaGithub className="icon" color={iconColor} />
        <FaLinkedin className="icon" color={iconColor} />
        <FaTwitter className="icon" color={iconColor} />
      </div>
    </div>
  );
};

export default Header;
