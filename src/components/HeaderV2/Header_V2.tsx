import React, { useState } from "react";
import { AiFillMail } from "react-icons/ai";
import { FaBars, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import "./Header_V2.css";

type HeaderProps = {
  className?: string;
  backgroundColor?: string;
};

const Header_V2: React.FC<HeaderProps> = ({ className, backgroundColor }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [isSocialDropdownOpen, setSocialDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeNavStyle = {
    color: "black",
    borderRadius: "40px",
    display: "flex",
    alignItems: "center",
    placeContent: "center",
  };

  const defaultNavStyle = {
    backgroundColor: "transparent",
    color: "rgba(145, 145, 145, 0.856)",
  };

  // Function to toggle the social links dropdown
  const toggleSocialDropdown = () => {
    setSocialDropdownOpen(!isSocialDropdownOpen);
  };

  // Define the icon color for social links
  const iconColor = "black"; // You can customize the color

  return (
    <div className="header">
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

        <div
          className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <FaBars
            style={{
              color: "rgba(145, 145, 145, 0.856)",
              marginLeft: "10px",
              marginTop: "2px",
            }}
            color={"black"}
          />
        </div>
        <div className={`social-icons ${isMobileMenuOpen ? "open" : ""}`}>
          <AiFillMail className="icon" color={"black"} />
          <FaGithub className="icon" color={"black"} />
          <FaLinkedin className="icon" color={"black"} />
          <FaTwitter className="icon" color={"black"} />
        </div>
      </div>
    </div>
  );
};

export default Header_V2;
