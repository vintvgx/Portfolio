import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // Import necessary components
import "./Home.css";
import SplashScreen from "../../components/SplashScreen/SplashScreen";
import Menu from "../../components/Menu/Menu";
import ProjectsView from "../Projects/ProjectsView";
import AboutView from "../About/AboutView";
import WorkView from "../Work/WorkView";
import HomeContent from "../HomeContent/HomeContent";

const Home: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // 2 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="container">
      {showSplash && <SplashScreen />}
      <div
        className={
          showSplash ? "content-container" : "content-container active"
        }>
        {/* <div className="border-frame">
          <div className="video-container">
            <video
              className="border-frame__background-video"
              autoPlay
              loop
              muted
              playsInline>
              <source src="/videos/background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
          <div className="border-frame__top-left">
            <div
              style={{
                fontSize: "30px",
                fontWeight: "100",
                textAlign: "left",
              }}>
              Kareem Saygbe
            </div>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "300",
                textAlign: "left",
                marginTop: "2px",
              }}>
              Developer + Designer
            </div>{" "}
            <Menu />
          </div>
          {/* Define your content views as nested routes */}
          <Routes>
            <Route path="/" element={<HomeContent />} />
            {/* Default Home Content */}
            <Route path="/projects" element={<ProjectsView />} />
            <Route path="/work" element={<WorkView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/contact" element={<AboutView />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
