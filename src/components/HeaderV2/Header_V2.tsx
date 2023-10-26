import React, { useState } from "react";
import { AiFillMail } from "react-icons/ai";
import { FaBars, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import "./Header_V2.css";

type HeaderProps = {
  className?: string;
  backgroundColor?: string;
};

const Header: React.FC<HeaderProps> = ({ className, backgroundColor }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const activeNavStyle = {
    color: "black",
  };

  const defaultNavStyle = {
    backgroundColor: "transparent",
    color: "rgba(145, 145, 145, 0.856)",
  };

  const openModal = () => {
    setIsMobileMenuOpen(false); // Close mobile menu if open
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`header ${className}`} style={{ backgroundColor }}>
      <div className="profile-icon" />
      <div className="nav-links">
        <NavLink
          to="/"
          style={isActive("/") ? activeNavStyle : defaultNavStyle}
          className="nav-link">
          Home
        </NavLink>
        <NavLink
          to="/Projects"
          style={isActive("/Projects") ? activeNavStyle : defaultNavStyle}
          className="nav-link">
          Work
        </NavLink>
        <NavLink
          to="/About"
          style={isActive("/About") ? activeNavStyle : defaultNavStyle}
          className="nav-link">
          About
        </NavLink>

        <div
          className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`}
          onClick={openModal}>
          <FaBars style={{ color: "rgba(145, 145, 145, 0.856)" }} />
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>
              &times;
            </span>
            <div
              className="social-icons"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "20px",
                marginTop: "20px",
              }}>
              <a
                href="https://github.com/vintvgx?tab=overview&from=2023-10-01&to=2023-10-25"
                target="_blank"
                rel="noreferrer noopener">
                <FaGithub className="icon" />
                <span className="icon">Github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/kareem-saygbe-63b82a1b4/"
                target="_blank"
                rel="noreferrer noopener">
                <FaLinkedin className="icon" />
                <span className="icon">LinkedIN</span>
              </a>
              <a
                href="https://x.com/devplusdesign?s=20"
                target="_blank"
                rel="noreferrer noopener">
                <FaTwitter className="icon" />
                <span className="icon">Twitter</span>
              </a>
              <a href="/RESUME.pdf" target="_blank" rel="noreferrer noopener">
                <span className="icon">Resume</span>
              </a>
            </div>
            <button className="lets-talk-button">Let's Talk</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
