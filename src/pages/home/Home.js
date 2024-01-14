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
      <Hiring />
      <Reviews />
      <BackedCompanies />
      <Screening />
      <Talent />
      <GetStarted />
    </>
  );
};

export default withLayout(Home);
