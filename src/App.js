import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Navigate, useNavigate, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
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
import Cookies from "js-cookie";

const App = () => {
  // const navigate = useNavigate();

  // const logout = () => {
  //   Cookies.remove("token");
  //   navigate("/signIn");
  // };

  // useEffect(() => {
  //   const token = Cookies.get("token");

  //   if (!token) {
  //     navigate("/signIn");
  //   }
  
  //   const tokenExpiration = Cookies.get("tokenExpiration");
  //   const currentTime = new Date().getTime();
  
  //   if (tokenExpiration && currentTime > tokenExpiration) {
  //     return logout();
  //   }
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talent" element={<TalentPage />} />
        <Route path="/hire" element={<HirePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/thank-you" element={<ThanksPage />} />
        <Route
          path="/companies"
          element={
            <PrivateRoute>
              <CompaniesPage />
            </PrivateRoute>
          }
        />
        {/* <Route exact path='/companies' element={<PrivateRoute/>}> */}
          <Route exact path='/companies' element={<CompaniesPage/>}/>
        {/* </Route> */}
        <Route path="/companies/:companyId" element={<CompanyDetailsPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        {/* <Route path="/logout" element={logout} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
