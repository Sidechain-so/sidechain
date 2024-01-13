import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import TalentPage from "./pages/talent/TalentPage";
import HirePage from "./pages/hire/HirePage";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talent" element={<TalentPage />} />
        <Route path="/hire" element={<HirePage />} />
      </Routes>
    </Router>
  );
};

export default App;
