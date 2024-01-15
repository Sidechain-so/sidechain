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

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={`${styles.header} ${styles.pageWidth}`}>
      <div className={styles.headerContainer}>
        <h1 className={`${styles.headerTitle} ${styles.titleNeue}`}>
          Fi<span className={styles.titleNeue}>n</span>d & Hi
          <span className={styles.titleNeue}>r</span>e web
          <span className={styles.titleNeue}>3</span> En
          <span className={styles.titleNeue}>g</span>ineer
          <span className={styles.titleNeue}>s</span>
        </h1>
        <p className={styles.headerDesc}>
          Matching vetted web-3 native engineers with top blockchain projects. Post a job and receive candidates!
        </p>
        <Link to="/hire" className={`${styles.headerLink} ${styles.btn}`}>
          Hire Now
        </Link>
      </div>

      <div className={styles.headerImage}>
        <div className={styles.headerImageOne}>
          <img src={iconPerson1} alt="Person" />
          <span>
            <img className={styles.iconArrow} src={iconArrow} alt="icon" />
          </span>
        </div>

        <div className={styles.headerImageTwo}>
          <img loading="lazy" src={iconPerson2} alt="Person" className={styles.secondPerson} />
          <div className={styles.headerImageTwoDesc}>
            <div>
              <a href="/">Solidity Developer</a>
              <p className={styles.hourly}>$75/hr</p>
            </div>
            <p className={`${styles.rating}`}>
              4.7 <img loading="lazy" src={iconStar} alt="star" className={styles.starIcon} />
            </p>
          </div>
        </div>

        <div className={styles.headerImageThree}>
          <img loading="lazy" className={styles.bgImg} src={iconHeroBg} alt="icon_bg" />

          <div className={styles.headerImageThreeImgWrapper}>
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
