import React from "react";
import ukIcon from "../../assets/uk.svg";
import germanyIcon from "../../assets/germany.svg";
import usaIcon from "../../assets/Usa.svg";
import mexicoIcon from "../../assets/Mexico.svg";
import profile1 from "../../assets/profile-1.png";
import profile2 from "../../assets/profile-2.png";
import profile3 from "../../assets/profile-3.png";
import profile4 from "../../assets/profile-4.png";

import "./Talent.scss";

const Talent = () => {
  return (
    <div classNameName="talent page-width section-margin">
      <h2 className="talent__title section-title">
        <span className="title__underline">discov<span className="title__neue">e</span>r</span> top engineers
      </h2>
      <p className="talent__desc">Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>

      <div className="talent__cards">
        <a href="hire" target="_blank">
          <div className="talent__card">
            <div className="talent__card-banner">
              <img loading="lazy" src={mexicoIcon} alt="Mexico" />
              <span className="talent__card-hourly"></span>
            </div>
            <div className="talent__card-image">
              <img loading="lazy" src={profile1} alt="person" />
            </div>
            <div className="talent__card-name">Luis Gutiérrez</div>
            <div className="talent__card-tags">
              <span>Rust Engineer</span>
            </div>
          </div>
        </a>
        <a href="hire" target="_blank">
          <div className="talent__card">
            <div className="talent__card-banner">
              <img loading="lazy" src={usaIcon} alt="usa" />
              <span className="talent__card-hourly"></span>
            </div>
            <div className="talent__card-image">
              <img loading="lazy" src={profile2} alt="person" />
            </div>
            <div className="talent__card-name">Torrie Wilson</div>
            <div className="talent__card-tags">
              <span>React Engineer</span>
              
            </div>
          </div>
        </a>

        <a href="hire" target="_blank">
          <div className="talent__card">
            <div className="talent__card-banner">
              <img loading="lazy" src={germanyIcon} alt="germany" />
              <span className="talent__card-hourly"></span>
            </div>
            <div className="talent__card-image">
              <img loading="lazy" src={profile3} alt="person" />
            </div>
            <div className="talent__card-name">Bastian Schröder</div>
            <div className="talent__card-tags">
              <span>Solidity Engineer</span>
              
            </div>
          </div>
        </a>

        <a href="hire" target="_blank">
          <div className="talent__card">
            <div className="talent__card-banner">
              <img loading="lazy" src={ukIcon} alt="United Kingdom" />
              <span className="talent__card-hourly"></span>
            </div>
            <div className="talent__card-image">
              <img loading="lazy" src={profile4} alt="person" />
            </div>
            <div className="talent__card-name">Mason Barrett</div>
            <div className="talent__card-tags">
              <span>Go Engineer</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Talent;
