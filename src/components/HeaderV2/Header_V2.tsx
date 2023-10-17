import React, { useState } from "react";
import { AiFillMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
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

        {/* Contact link with a click handler to toggle the social links dropdown */}
        <div
          className={`nav-link contact-link ${
            isSocialDropdownOpen ? "active" : ""
          }`}
          onClick={toggleSocialDropdown}>
          <p>Contact</p>
          {isSocialDropdownOpen && (
            <div className="social-icons">
              <a href="mailto:kareems0108@gmail.com" className="icon-link">
                <AiFillMail className="icon" color={iconColor} />
              </a>{" "}
              <a
                href="https://github.com/vintvgx"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link">
                <FaGithub className="icon" color={iconColor} />
              </a>
              <a
                href="https://www.linkedin.com/in/kareem-saygbe-63b82a1b4"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link">
                <FaLinkedin className="icon" color={iconColor} />
              </a>
              <FaTwitter className="icon" color={iconColor} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header_V2;
