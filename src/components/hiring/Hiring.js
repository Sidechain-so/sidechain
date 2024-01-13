import React from "react";
import "./Hiring.scss";

const Hiring = () => {
  return (
    <div className="hiring page-width section-margin">
      <h2 className="hiring__title section-title">
        <span className="title__underline">
          hiri<span className="title__neue">n</span>g
        </span>{" "}
        made easy
      </h2>

      <div className="hiring__card-wrapper grid__column-3">
        <div className="hiring__card">
          <div className="hiring__card-number">1</div>
          <p className="hiring__card-desc">Submit your jobs</p>
        </div>
        <div className="hiring__card">
          <div className="hiring__card-number">2</div>
          <p className="hiring__card-desc">Interview Hand Picked Talent</p>
        </div>
        <div className="hiring__card">
          <div className="hiring__card-number">3</div>
          <p className="hiring__card-desc">Hire</p>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
