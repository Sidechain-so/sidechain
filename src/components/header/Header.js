import React from "react";
import { Link } from "react-router-dom";
import iconArrow from "../../assets/icon-arrow.svg";
import iconHeroBg from "../../assets/icon-hero-bg.png";
import iconStar from "../../assets/icon-star.svg";
import iconPerson1 from "../../assets/person-1.png";
import iconPerson2 from "../../assets/person-2.png";
import iconRef1 from "../../assets/ref-1.png";
import iconRef2 from "../../assets/ref-2.png";
import iconRef3 from "../../assets/ref-3.png";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header page-width">
      <div className="header__container">
        <h1 className="header__title">
          Fi<span className="title__neue">n</span>d & Hi
          <span className="title__neue">r</span>e web
          <span className="title__neue">3</span> En
          <span className="title__neue">g</span>ineer
          <span className="title__neue">s</span>
        </h1>
        <p className="header__desc">
          Matching vetted web-3 native engineers with top blockchain projects. Post a job and receive candidates!
        </p>
        <Link to="/hire" className="header__link btn">
          Hire Now
        </Link>
      </div>

      <div className="header__image">
        <div className="header__image-one">
          <img src={iconPerson1} alt="Person" />
          <span>
            <img className="icon-arrow" src={iconArrow} alt="icon" />
          </span>
        </div>

        <div className="header__image-two">
          <img loading="lazy" src={iconPerson2} alt="Person" />
          <div className="header__image-two__desc">
            <div>
              <a href="/">Solidity Developer</a>
              <p className="hourly">$75/hr</p>
            </div>
            <p className="rating">
              4.7 <img loading="lazy" src={iconStar} alt="star" />
            </p>
          </div>
        </div>

        <div className="header__image-three">
          <img loading="lazy" className="bg__img" src={iconHeroBg} alt="icon_bg" />

          <div className="header__image-three__img-wrapper">
            <img loading="lazy" src={iconRef1} alt="person" />
            <img loading="lazy" src={iconRef2} alt="person" />
            <img loading="lazy" src={iconRef3} alt="person" />
          </div>
          <p>
            <span>1500+</span> Professionals
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
