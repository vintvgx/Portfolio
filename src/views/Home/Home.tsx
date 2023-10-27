/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import "./Home.css";
import SplashScreen from "../../components/SplashScreen/SplashScreen";
import { useLocation } from "react-router-dom";
// import ProjectsView from "../Projects/ProjectsView";
import AboutView from "../About/AboutView";
// import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import HomeContent from "../../components/HomeContent/HomeContent";
import Projects from "../ProjectsUpdate/Projects";
import Header from "../../components/Header/Header";

const Home: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeInHeader, setFadeInHeader] = useState(false);
  const [fadeInHomeContent, setFadeInHomeContent] = useState(false);
  const [fadeInCarousel, setFadeInCarousel] = useState(false);
  const [fadeInFooter, setFadeInFooter] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const timerSplash = setTimeout(() => {
      setShowSplash(false);
      setFadeInHeader(true);
    }, 2000);

    const timerHeader = setTimeout(() => {
      setFadeInHomeContent(true);
    }, 2500);

    const timerHomeContent = setTimeout(() => {
      setFadeInCarousel(true);
      setFadeInFooter(true);
    }, 2000);

    return () => {
      clearTimeout(timerSplash);
      clearTimeout(timerHeader);
      clearTimeout(timerHomeContent);
    };
  }, []);

  return (
    <div className="container">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          {/* <Header className={fadeInHeader ? "fade-in" : ""} /> */}
          <Header className={fadeInHeader ? "fade-in" : ""} />
          <div style={{ flex: 1 }}>
            {location.pathname === "/" && (
              <>
                <HomeContent
                  className={fadeInHomeContent ? "fade-in fade-in-delay-1" : ""}
                />
                <Carousel
                  className={fadeInCarousel ? "fade-in fade-in-delay-2" : ""}
                />
              </>
            )}
            {location.pathname === "/Projects" && <Projects />}
            {location.pathname === "/About" && <AboutView />}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "12vh",
              }}
              className={fadeInFooter ? "fade-in fade-in-delay-2" : ""}>
              <Footer
                className={fadeInFooter ? "fade-in fade-in-delay-2" : ""}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
