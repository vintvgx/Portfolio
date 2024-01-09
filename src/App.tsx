import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home";
import Terminal from "./views/Terminal/Terminal";
import ReactGA from "react-ga";

ReactGA.initialize("G-DH38G3QNMP");
ReactGA.pageview(window.location.pathname + window.location.search);

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Terminal />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
