import React from "react";
import "./AboutView.css";

const colorPalettes = [
  {
    name: "Classic Blue & Grays",
    colors: ["#FFFFFF", "#0D0D0D", "#1A73E8", "#D3D3D3", "#4C4C4C"],
  },
  {
    name: "Earthy & Warm",
    colors: ["#FFFFFF", "#0D0D0D", "#8B4513", "#FFD700", "#A0522D"],
  },
  {
    name: "Teal & Aqua",
    colors: ["#FFFFFF", "#0D0D0D", "#20B2AA", "#48D1CC", "#00CED1"],
  },
  {
    name: "Greens & Naturals",
    colors: ["#FFFFFF", "#0D0D0D", "#228B22", "#8FBC8F", "#BDB76B"],
  },
  {
    name: "Purples & Violets",
    colors: ["#FFFFFF", "#0D0D0D", "#8A2BE2", "#9932CC", "#9400D3"],
  },
];

const AboutView: React.FC = () => {
  return (
    <div className="about-view">
      {colorPalettes.map((palette, idx) => (
        <div key={idx} className="palette">
          {palette.colors.map((color, index) => (
            <div
              key={index}
              className="color-square"
              style={{ backgroundColor: color }}>
              <p className="color-name">{color}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AboutView;
