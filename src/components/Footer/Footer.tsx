import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const footerStyles: React.CSSProperties = {
  backgroundColor: "#ffffff",
  padding: "20px 0",
  fontSize: "0.8rem",
  width: "100%",
  fontFamily: "Arial, sans-serif",
  color: "#666",
  lineHeight: "1.4",
  position: "fixed",
  bottom: "0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const Footer: React.FC = () => {
  return (
    <footer style={footerStyles}>
      <div className="leftSelection">
        Contact
        <br />
        kareems0108@gmail.com
      </div>
      <div className="centerSelection">
        <FaGithub className="icon" size={16} />
        <FaLinkedin className="icon" size={16} />
        <FaTwitter className="icon" size={16} />
      </div>
      <div className="rightSelection">
        Copyright
        <br />© Kareem Saygbe 2023
      </div>
    </footer>
  );
};

export default Footer;
