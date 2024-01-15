import React from "react";
import FeedHeader from "../../components/feedHeader/FeedHeader";
import Hiring from "../../components/hiring/Hiring";
import TalentReviews from "../../components/talentReviews/TalentReviews";
import BackedCompanies from "../../components/backedCompanies/BackedCompanies";
import Startups from "../../components/startups/Startups";
import GetStarted from "../../components/getStarted/GetStarted";
import withLayout from "../../components/layout/withLayout";

const TalentPage = () => {
  return (
    <>
      <FeedHeader />
      <Hiring 
        title={{
          first: "get ",
          second: "hir",
          third: "ed",
          fifth: " effortlessly"
        }}
        first="Join our talent network"
        second="Access matched jobs"
        third="Get hired"
      />
      <TalentReviews />
      <BackedCompanies />
      <Startups />
      <GetStarted 
        title="CONNECT DIRECTLY WITH COMPANIES TODAY"
        buttonText="Apply for jobs"
        redirectTo="/apply"
      />
    </>
  );
};

export default withLayout(TalentPage, { isForHome: false });
