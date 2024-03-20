import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import TalentPage from "./pages/talent/TalentPage";
import HirePage from "./pages/hire/HirePage";
import PrivacyPage from "./pages/privacy/PrivacyPage";
import NotFound from "./pages/notFound/NotFound";
import ThanksPage from "./pages/thanks/ThanksPage";
import CompaniesPage from "./pages/companies/CompaniesPage";
import CompanyDetailsPage from "./pages/companies/companyDetails/CompanyDetailsPage";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import { ProtectedRoute } from "./ProtectedRoute"; 
import { AuthProvider } from "./hooks/useAuth";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talent" element={<TalentPage />} />
        <Route path="/hire" element={<HirePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/thank-you" element={<ThanksPage />} />
        <Route
          path="/companies"
          element={
            <ProtectedRoute>
              <CompaniesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/companies/:companyId"
          element={
            <ProtectedRoute>
              <CompanyDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
