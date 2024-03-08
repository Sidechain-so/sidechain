import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import TalentPage from "./pages/talent/TalentPage";
import HirePage from "./pages/hire/HirePage";
import PrivacyPage from "./pages/privacy/PrivacyPage";
import NotFound from "./pages/notFound/NotFound";
import ThanksPage from "./pages/thanks/ThanksPage";
import CompaniesPage from "./pages/companies/CompaniesPage";
import CompanyDetailsPage from "./pages/companies/companyDetails/CompanyDetailsPage";

import styles from "./App.module.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talent" element={<TalentPage />} />
        <Route path="/hire" element={<HirePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/thank-you" element={<ThanksPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/companies/:companyId" element={<CompanyDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
