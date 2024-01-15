import React from "react";
import screening1 from "../../assets/eng.svg"; 
import screening2 from "../../assets/world.svg"; 
import screening3 from "../../assets/live.svg"; 
import styles from "./Screening.module.scss";

const Screening = () => {
  return (
    <div className={`${styles.screening} ${styles.pageWidth} ${styles.sectionMargin}`}>
      <h2 className={`${styles.screeningTitle} ${styles.sectionTitle}`}>
        <span className={`${styles.titleUnderline} ${styles.titleNeueR}`}>sc<span className={styles.titleNeueN}>r</span>ee<span className={styles.titleNeueN}>n</span>ing</span> process
      </h2>

      <div className={`${styles.screeningCards} ${styles.gridColumn3}`}>
        <div className={styles.screeningCard}>
          <div className={styles.screeningCardContent}>
            <div>
              <p className={styles.screeningCardContentTag}>Step 1</p>
              <p className={styles.screeningCardContentTagTitle}>
                Language and <br />
                Personality
              </p>
            </div>

            <div className={styles.screeningCardContentImage}>
              <img loading="lazy" src={screening1} alt="English" />
            </div>
          </div>
          <p className={styles.screeningCardDesc}>The first step of the screening process is a comprehensive English language and communication interview evaluation.</p>
        </div>

        <div className={styles.screeningCard}>
          <div className={styles.screeningCardContent}>
            <div>
              <p className={styles.screeningCardContentTag}>Step 2</p>
              <p className={styles.screeningCardContentTagTitle}>
                In-Depth <br />
                Skill Review
              </p>
            </div>

            <div className={styles.screeningCardContentImage}>
              <img loading="lazy" src={screening2} alt="World" />
            </div>
          </div>
          <p className={styles.screeningCardDesc}>We also test each applicant's technical knowledge and problem-solving ability through various assessments.</p>
        </div>

        <div className={styles.screeningCard}>
          <div className={styles.screeningCardContent}>
            <div>
              <p className={styles.screeningCardContentTag}>Step 3</p>
              <p className={styles.screeningCardContentTagTitle}>
                Live <br />
                Screening
              </p>
            </div>

            <div className={styles.screeningCardContentImage}>
              <img loading="lazy" src={screening3} alt="Live" />
            </div>
          </div>
          <p className={styles.screeningCardDesc}>Each candidate is interviewed by Sidechain screeners who are experts in blockchain</p>
        </div>
      </div>
    </div>
  );
};

export default Screening;
