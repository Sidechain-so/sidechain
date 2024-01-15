import React from "react";
import { Link } from "react-router-dom";
import TeamMember1 from "../../assets/team-member-1.png";
import TeamMember2 from "../../assets/team-member-2.png";
import TeamMember3 from "../../assets/team-member-3.png";
import TeamMember4 from "../../assets/team-member-4.jpeg";
import TeamMember5 from "../../assets/team-member-5.jpeg";
import TeamMember6 from "../../assets/team-member-6.png";
import TeamMember7 from "../../assets/team-member-7.png";
import TeamMember8 from "../../assets/team-member-8.png";
import TeamMember9 from "../../assets/team-member-9.png";
import TeamMember10 from "../../assets/team-member-10.png";
import IconPlus from "../../assets/icon-plus.svg";
import IconArrowRotate from "../../assets/icon-arrow-rotate.svg";
import IconArrow from "../../assets/icon-arrow.svg";

import styles from "./FeedHeader.module.scss";

const FeedHeader = () => {
  return (
    <header className={`${styles.feedHeader} ${styles.pageWidth}`}>
      <div className={styles.feedHeaderContent}>
        <h1 className={styles.feedHeaderTitle}>FIN<span className={styles.titleNeue}>D A</span> &nbsp;BLOC<span className={styles.titleNeue}>KCHA</span>IN JO<span className={styles.titleNeue}>B&nbsp;YOU</span>&nbsp;L<span className={styles.titleNeue}>O</span>VE</h1>
        <p className={styles.feedHeaderDesc}></p>
        <Link className={styles.feedHeaderLink} to="/apply">Find jobs</Link>
      </div>
      <div className={styles.feedHeaderImages}>
        <div className={styles.feedHeaderImage}>
          <img src={TeamMember1} alt="team-member-1" />
        </div>
        <div className={styles.feedHeaderImage}>
          <img src={TeamMember2} alt="team-member-2" />
        </div>
        <div className={styles.feedHeaderImage}>
          <img src={TeamMember3} alt="team-member-2" />
        </div>
        <div className={styles.feedHeaderImage}>
          <img src={TeamMember4} alt="team-member-4" />
        </div>
        <div className={styles.feedHeaderImage}>
          <img src={TeamMember5} alt="team-member-5" />
        </div>
        <div className={styles.feedHeaderImage}>
          <img className={styles.iconPlus} src={IconPlus} alt="icon-plus" />
          <span>
            <img loading="lazy" className={styles.iconArrow} src={IconArrow} alt="icon" />
          </span>
        </div>
        <div className={styles.feedHeaderImage}>
          <img src={TeamMember6} alt="team-member-5" />
        </div>
        <div className={styles.feedHeaderImage}>
          <img src={TeamMember7} alt="team-member-1" />
        </div>
        <div className={styles.feedHeaderImage}>
          <img src={TeamMember8} alt="team-member-6" />
        </div>
        <div className={styles.feedHeaderImage}>
          <img src={TeamMember9} alt="team-member-2" />
        </div>
        <div className={styles.feedHeaderImage}>
          <img src={TeamMember10} alt="team-member-3" />
        </div>
        <Link to="/apply">
          <div className={`${styles.feedHeaderImage} ${styles.feedHeaderLastImage}`}>
            <img src={IconArrowRotate} alt="rotate" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default FeedHeader;
