import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import "./Menu.css";

const Menu: React.FC = () => {
  return (
    <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/work">Work</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Menu;
