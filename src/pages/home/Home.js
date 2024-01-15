import React from "react";
import withLayout from "../../components/layout/withLayout";
import Header from "../../components/header/Header";
import Hiring from "../../components/hiring/Hiring";
import Reviews from "../../components/reviews/Reviews";
import BackedCompanies from "../../components/backedCompanies/BackedCompanies";
import Screening from "../../components/screening/Screening";
import Talent from "../../components/talent/Talent";
import GetStarted from "../../components/getStarted/GetStarted";

const Home = () => {
  return (
    <>
      <Header />
      <Hiring 
        title={{
          first: "hiri",
          second: "n",
          third: "g",
          fifth: "made easy"
        }}
        first="Submit your jobs"
        second="Interview Hand Picked Talent"
        third="Hire"
      />
      <Reviews />
      <BackedCompanies />
      <Screening />
      <Talent />
      <GetStarted 
        title="START HIRING TOP ENGINEERS"
        buttonText="Get Started For Free"
        redirectTo="/hire"
      />
    </>
  );
};

export default withLayout(Home, { isForHome: true });
