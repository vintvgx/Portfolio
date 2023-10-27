import React from "react";
import "./HomeContent.css";

type HomeContentProps = {
  className?: string;
};

const HomeContent: React.FC<HomeContentProps> = ({ className }) => {
  return (
    <div className={`home-content-wrapper ${className}`}>
      <div className="content-container">
        <div className="header-section">
          <h1>
            Hello
            <br />
            I'm Kareem.
          </h1>
        </div>
        <div className="description-section">
          <p>
            Based in Boston, MA, I'm a dedicated{" "}
            <span style={{ fontWeight: "bold" }}>Full Stack</span> Software
            Engineer specializing in{" "}
            <span style={{ fontWeight: "bold" }}>React</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
