import React, { useState, useEffect } from "react";
import "./SplashScreen.css"; // Consider creating this if you want separate styles

const SplashScreen: React.FC = () => {
  const [hideName, setHideName] = useState(false);
  const [hidePortfolio, setHidePortfolio] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setHideName(true);
    }, 750);

    const timer2 = setTimeout(() => {
      setHidePortfolio(true);
    }, 1100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="splash-screen">
      <span
        className={hideName ? "fade-out" : ""}
        style={{
          fontSize: "1.8rem",
          fontWeight: "400", // Regular weight for Raleway
          fontFamily: "Raleway, sans-serif", // Ensure the font is applied
          color: "white",
        }}>
        Kareem Saygbe
      </span>
      <span
        style={{
          fontSize: "1.8rem",
          marginLeft: "15px",
          fontWeight: "100", // Light weight for Raleway
          fontFamily: "Raleway, sans-serif", // Ensure the font is applied
          color: "white",
        }}
        className={hidePortfolio ? "fade-out" : ""}>
        Portfolio
      </span>
    </div>
  );
};

export default SplashScreen;
