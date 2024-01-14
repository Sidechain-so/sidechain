import React from "react";
import screening1 from "../../assets/eng.svg"; 
import screening2 from "../../assets/world.svg"; 
import screening3 from "../../assets/live.svg"; 

import "./Screening.scss";

const Screening = () => {
  return (
    <div className="screening page-width section-margin">
      <h2 className="screening__title section-title">
        <span className="title__underline">sc<span className="title__neue">r</span>ee<span className="title__neue">n</span>ing</span> process
      </h2>

      <div className="screening__cards grid__column-3">
        <div className="screening__card">
          <div className="screening__card-content">
            <div>
              <p className="screening__card-content__tag">Step 1</p>
              <p className="screening__card-content__tag-title">
                Language and <br />
                Personality
              </p>
            </div>

            <div className="screening__card-content__image">
              <img loading="lazy" src={screening1} alt="English" />
            </div>
          </div>
          <p className="screening__card-desc">The first step of the screening process is a comprehensive English language and communication interview evaluation.</p>
        </div>

        <div className="screening__card">
          <div className="screening__card-content">
            <div>
              <p className="screening__card-content__tag">Step 2</p>
              <p className="screening__card-content__tag-title">
                In-Depth <br />
                Skill Review
              </p>
            </div>

            <div className="screening__card-content__image">
              <img loading="lazy" src={screening2} alt="World" />
            </div>
          </div>
          <p className="screening__card-desc">We also test each applicant's technical knowledge and problem-solving ability through various assessments.</p>
        </div>

        <div className="screening__card">
          <div className="screening__card-content">
            <div>
              <p className="screening__card-content__tag">Step 3</p>
              <p className="screening__card-content__tag-title">
                Live <br />
                Screening
              </p>
            </div>

            <div className="screening__card-content__image">
              <img loading="lazy" src={screening3} alt="Live" />
            </div>
          </div>
          <p className="screening__card-desc">Each candidate is interviewed by Sidechain screeners who are experts in blockchain</p>
        </div>
      </div>
    </div>
  );
};

export default Screening;
