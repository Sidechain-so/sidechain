import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import TalentPage from "./pages/talent/TalentPage";
import HirePage from "./pages/hire/HirePage";
import PrivacyPage from "./pages/privacy/PrivacyPage";
import NotFound from "./pages/notFound/NotFound";
import ThanksPage from "./pages/thanks/ThanksPage";

import styles from "./App.module.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sidechain/" element={<Home />} />
        <Route path="/sidechain/talent" element={<TalentPage />} />
        <Route path="/sidechain/hire" element={<HirePage />} />
        <Route path="/sidechain/privacy" element={<PrivacyPage />} />
        <Route path="/sidechain/thank-you" element={<ThanksPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
