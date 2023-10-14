import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai"; // For the Gmail icon

import "./Header.css";
import { useEffect, useState } from "react";

type HeaderProps = {
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ className }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  return (
    <div className={`header ${className}`}>
      {" "}
      <div className="profile-icon" />
      <div className="nav-links">
        <NavLink
          to="/Home"
          style={isActive("/Home") ? activeNavStyle : defaultNavStyle}
          className="nav-link">
          Home
        </NavLink>
        <NavLink
          to="/Projects"
          style={isActive("/Projects") ? activeNavStyle : defaultNavStyle}
          className="nav-link">
          Projects
        </NavLink>
        <NavLink
          to="/About"
          style={isActive("/About") ? activeNavStyle : defaultNavStyle}
          className="nav-link">
          About
        </NavLink>
      </div>
      <div
        className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <FaBars color={"black"} />
      </div>
      <div className={`social-icons ${isMobileMenuOpen ? "open" : ""}`}>
        <AiFillMail className="icon" />
        <FaGithub className="icon" />
        <FaLinkedin className="icon" />
        <FaTwitter className="icon" />
      </div>
    </div>
  );
};

export default Header;
