import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home";
import Terminal from "./views/Terminal/Terminal";
import ReactGA from "react-ga";
import "bootstrap/dist/css/bootstrap.min.css";
// import TemplateScreen from "./views/4.0/Template";
// import TwoTemplateScreen from "./views/4.0/TwoTemplateScreen";

ReactGA.initialize("G-DH38G3QNMP");

const TrackPageView = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return null;
};

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <TrackPageView /> {/* Call TrackPageView to track page views */}
        <Routes>
          <Route path="/" element={<Terminal />} />
          <Route path="/two-template" element={<Home />} />
          {/* <Route path="/" element={<Terminal />} />
          <Route path="/*" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
