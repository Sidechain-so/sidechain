import React from "react";
import company1 from "../../assets/scroll-13.png";
import company2 from "../../assets/scroll-11.svg";
import company3 from "../../assets/scroll-12.png";
import person1 from "../../assets/top-1.png";
import person2 from "../../assets/top-2.png";
import person3 from "../../assets/top-3.png";

import styles from "./Startups.module.scss";

const Startups = () => {
  return (
    <div className={styles.work + " " + styles.pageWidth + " " + styles.sectionMargin}>
      <h2 className={styles.workTitle + " " + styles.sectionTitle}>
        <span className={styles.titleUnderline}>wor<span className={styles.titleNeue}>k</span></span> with the best web3 startups
      </h2>
      <p className={styles.workDesc}>Get connected with flexible, remote opportunities, tailored to what you're looking for.</p>

      <div className={styles.workCards + " " + styles.gridColumn3}>
        <div className={styles.workCard}>
          <div className={styles.workCardDots}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={styles.workCardImage}>
            <img src={person1} alt="profile" />
          </div>

          <p className={styles.workCardTitle}>David Anderlik</p>

          <div className={styles.workCardTags}>
            <span>Rust Developer</span>
          </div>

          <div className={styles.workCardCompany}>
            <div className={styles.workCardCompanyTitle}>HIRED BY A COMPANY BACKED BY →</div>
            <div className={styles.workCardCompanyImg}>
              <img src={company1} alt="sequoia" />
            </div>
          </div>
        </div>
        <div className={styles.workCard}>
          <div className={styles.workCardDots}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={styles.workCardImage}>
            <img src={person2} alt="profile" />
          </div>

          <p className={styles.workCardTitle}>Josh McFarlane</p>

          <div className={styles.workCardTags}>
            <span>Full Stack Engineer</span>
          </div>

          <div className={styles.workCardCompany}>
            <div className={styles.workCardCompanyTitle}>HIRED BY A COMPANY BACKED BY →</div>
            <div className={styles.workCardCompanyImg}>
              <img src={company2} alt="framework" />
            </div>
          </div>
        </div>
        <div className={styles.workCard}>
          <div className={styles.workCardDots}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={styles.workCardImage}>
            <img src={person3} alt="profile" />
          </div>

          <p className={styles.workCardTitle}>Keisha Chambers</p>

          <div className={styles.workCardTags}>
            <span>Frontend Developer</span>
          </div>

          <div className={styles.workCardCompany}>
            <div className={styles.workCardCompanyTitle}>HIRED BY A COMPANY BACKED BY →</div>
            <div className={styles.workCardCompanyImg}>
              <img src={company3} alt="pantera" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startups;
