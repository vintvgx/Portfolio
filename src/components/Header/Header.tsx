import React, { useState } from "react";
import { AiFillMail } from "react-icons/ai";
import { FaBars, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

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
    borderRadius: "40px",
    display: "flex",
    alignItems: "center",
    placeContent: "center",
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
    <div className={`header ${className}`}>
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
          <p>Work</p>
        </NavLink>
        <NavLink
          to="/About"
          style={isActive("/About") ? activeNavStyle : defaultNavStyle}
          className="nav-link">
          <p>About</p>
        </NavLink>

        <div
          className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`}
          onClick={openModal}>
          <FaBars
            style={{
              color: "rgba(145, 145, 145, 0.856)",
              marginLeft: "10px",
              marginTop: "2px",
            }}
            color={"black"}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <a className="close-modal" onClick={closeModal}>
              &times;
            </a>
            {/* <div className="social-icons">
              <AiFillMail className="icon" color={"black"} />
              <a
                href="https://github.com/vintvgx?tab=overview&from=2023-10-01&to=2023-10-25"
                target="_blank"
                rel="noreferrer noopener">
                <FaGithub className="icon" size={16} />
                <h1>Github</h1>
              </a>
              <a
                href="https://www.linkedin.com/in/kareem-saygbe-63b82a1b4/"
                target="_blank"
                rel="noreferrer noopener">
                <FaLinkedin className="icon" size={16} />
              </a>
              <a
                href="https://x.com/devplusdesign?s=20"
                target="_blank"
                rel="noreferrer noopener">
                <FaTwitter className="icon" size={16} />
              </a>
            </div> */}
            <div
              className="social-icons"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "20px",
              }}>
              <a
                href="https://github.com/vintvgx?tab=overview&from=2023-10-01&to=2023-10-25"
                target="_blank"
                rel="noreferrer noopener">
                {/* <FaGithub className="icon" size={16} /> */}
                <span className="icon">Github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/kareem-saygbe-63b82a1b4/"
                target="_blank"
                rel="noreferrer noopener">
                {/* <FaGithub className="icon" size={16} /> */}
                <span className="icon">LinkedIN</span>
              </a>
              <a
                href="https://x.com/devplusdesign?s=20"
                target="_blank"
                rel="noreferrer noopener">
                {/* <FaGithub className="icon" size={16} /> */}
                <span className="icon">Twitter</span>
              </a>
              <a href="/RESUME.pdf" target="_blank" rel="noreferrer noopener">
                {/* <FaGithub className="icon" size={16} /> */}
                <span className="icon">Resume</span>
              </a>
            </div>
            <div className="lets-talk-button">Let's Talk</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
