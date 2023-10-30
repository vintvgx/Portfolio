import React, { useEffect, useState } from "react";
// import { AiFillMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsArrowUpRight, BsChevronLeft, BsDot } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import ContactFormModal from "../ContactFormModal/ContactFormModal";
import "./Header.css";

type HeaderProps = {
  className?: string;
  backgroundColor?: string;
};

const Header: React.FC<HeaderProps> = ({ className, backgroundColor }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactFormModalOpen, setContactFormModalOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

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

  const openContactFormModal = () => {
    // setIsMobileMenuOpen(false); // Close mobile menu if open
    setContactFormModalOpen(true);
  };

  const closeContactFormModal = () => {
    setContactFormModalOpen(false);
    closeModal();
  };

  useEffect(() => {
    // Check if the screen width is below a certain threshold (e.g., 768px)
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`header ${className}`} style={{ backgroundColor }}>
      <div className="profile-icon" onClick={openContactFormModal} />
      <div className="nav-links">
        <NavLink
          to="/"
          style={isActive("/") ? activeNavStyle : defaultNavStyle}
          className="nav-link">
          {isActive("/") ? <BsDot className="dot" /> : "Home"}
        </NavLink>
        <NavLink
          to="/Projects"
          style={isActive("/Projects") ? activeNavStyle : defaultNavStyle}
          className="nav-link">
          {isActive("/Projects") ? <BsDot /> : "Work"}
        </NavLink>
        <NavLink
          to="/About"
          style={isActive("/About") ? activeNavStyle : defaultNavStyle}
          className="nav-link">
          {isActive("/About") ? <BsDot /> : "About"}
        </NavLink>
        {isMobileView && (
          <span
            style={isActive("/Contact") ? activeNavStyle : defaultNavStyle}
            className="nav-link"
            onClick={openModal}>
            {isActive("/Contact") ? <BsDot /> : "Contact"}
          </span>
        )}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="close-button" onClick={closeModal}>
              <BsChevronLeft className="back-icon" />
              <span className="back-text">Back</span>
            </div>

            <div
              className="social-icons"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                marginTop: "20px",
              }}>
              <a
                href="https://github.com/vintvgx?tab=overview&from=2023-10-01&to=2023-10-25"
                target="_blank"
                rel="noreferrer noopener">
                <FaGithub className="icon" />
                <span className="icon">Github</span>
                <BsArrowUpRight className="arrow-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/kareem-saygbe-63b82a1b4/"
                target="_blank"
                rel="noreferrer noopener">
                <FaLinkedin className="icon" />
                <span className="icon">LinkedIN</span>
                <BsArrowUpRight className="arrow-icon" />
              </a>
              <a
                href="https://x.com/devplusdesign?s=20"
                target="_blank"
                rel="noreferrer noopener">
                <FaTwitter className="icon" />
                <span className="icon">Twitter</span>
                <BsArrowUpRight className="arrow-icon" />
              </a>
              <a href="/RESUME.pdf" target="_blank" rel="noreferrer noopener">
                <span className="icon">Resume</span>
              </a>
            </div>
            <button className="lets-talk-button" onClick={openContactFormModal}>
              Let's Talk
            </button>
          </div>
        </div>
      )}

      {isContactFormModalOpen && (
        <ContactFormModal
          isOpen={isContactFormModalOpen}
          onClose={closeContactFormModal}
        />
      )}
    </div>
  );
};

export default Header;
