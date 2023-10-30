import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const footerStyles: React.CSSProperties = {
  backgroundColor: "#ffffff00",
  padding: "20px 0",
  fontSize: "0.8rem",
  width: "100%",
  fontFamily: "Arial, sans-serif",
  color: "#666",
  lineHeight: "1.4",
  // position: "fixed",
  bottom: "0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // opacity: "0",
  backdropFilter: "blur(10px)",
  zIndex: "-1",
};

type FooterTypes = {
  className?: string;
};

const Footer: React.FC<FooterTypes> = ({ className }) => {
  return (
    <footer className={`${className}`} style={footerStyles}>
      <div className="leftSelection">
        Contact
        <br />
        kareems0108@gmail.com
      </div>
      <div className="centerSelection">
        <a
          href="https://github.com/vintvgx?tab=overview&from=2023-10-01&to=2023-10-25"
          target="_blank"
          rel="noreferrer noopener">
          <FaGithub className="icon" size={16} />
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
      </div>
      <div className="rightSelection">
        Copyright
        <br />© Kareem Saygbe 2023
      </div>
    </footer>
  );
};

export default Footer;
