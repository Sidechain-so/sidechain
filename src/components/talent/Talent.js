import React from "react";
import ukIcon from "../../assets/uk.svg";
import germanyIcon from "../../assets/germany.svg";
import usaIcon from "../../assets/Usa.svg";
import mexicoIcon from "../../assets/Mexico.svg";
import profile1 from "../../assets/profile-1.png";
import profile2 from "../../assets/profile-2.png";
import profile3 from "../../assets/profile-3.png";
import profile4 from "../../assets/profile-4.png";
import styles from "./Talent.module.scss";

const Talent = () => {
  return (
    <div className={`${styles.talent} ${styles.pageWidth} ${styles.sectionMargin}`}>
      <h2 className={`${styles.talentTitle} ${styles.sectionTitle}`}>
        <span className={`${styles.titleUnderline} ${styles.titleNeueE}`}>discov<span className={styles.titleNeueN}>e</span>r</span> top engineers
      </h2>
      <p className={styles.talentDesc}>Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</p>

      <div className={styles.talentCards}>
        <a href="hire" target="_blank">
          <div className={styles.talentCard}>
            <div className={styles.talentCardBanner}>
              <img loading="lazy" src={mexicoIcon} alt="Mexico" />
              <span className={styles.talentCardHourly}></span>
            </div>
            <div className={styles.talentCardImage}>
              <img loading="lazy" src={profile1} alt="person" />
            </div>
            <div className={styles.talentCardName}>Luis Gutiérrez</div>
            <div className={styles.talentCardTags}>
              <span>Rust Engineer</span>
            </div>
          </div>
        </a>
        <a href="hire" target="_blank">
          <div className={styles.talentCard}>
            <div className={styles.talentCardBanner}>
              <img loading="lazy" src={usaIcon} alt="usa" />
              <span className={styles.talentCardHourly}></span>
            </div>
            <div className={styles.talentCardImage}>
              <img loading="lazy" src={profile2} alt="person" />
            </div>
            <div className={styles.talentCardName}>Torrie Wilson</div>
            <div className={styles.talentCardTags}>
              <span>React Engineer</span>
            </div>
          </div>
        </a>

        <a href="hire" target="_blank">
          <div className={styles.talentCard}>
            <div className={styles.talentCardBanner}>
              <img loading="lazy" src={germanyIcon} alt="germany" />
              <span className={styles.talentCardHourly}></span>
            </div>
            <div className={styles.talentCardImage}>
              <img loading="lazy" src={profile3} alt="person" />
            </div>
            <div className={styles.talentCardName}>Bastian Schröder</div>
            <div className={styles.talentCardTags}>
              <span>Solidity Engineer</span>
            </div>
          </div>
        </a>

        <a href="hire" target="_blank">
          <div className={styles.talentCard}>
            <div className={styles.talentCardBanner}>
              <img loading="lazy" src={ukIcon} alt="United Kingdom" />
              <span className={styles.talentCardHourly}></span>
            </div>
            <div className={styles.talentCardImage}>
              <img loading="lazy" src={profile4} alt="person" />
            </div>
            <div className={styles.talentCardName}>Mason Barrett</div>
            <div className={styles.talentCardTags}>
              <span>Go Engineer</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Talent;
