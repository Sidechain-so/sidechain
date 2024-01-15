import React from "react";
import iconRef1 from "../../assets/ref-1.png";
import iconRef2 from "../../assets/ref-2.png";
import iconRef3 from "../../assets/ref-3.png";
import styles from "./TalentReviews.module.scss";

const TalentReviews = () => {
  return (
    <div className={`${styles.clientReviews} ${styles.reviews} ${styles.pageWidth} ${styles.sectionMargin}`}>
      <h2 className={`${styles.reviewsTitle} ${styles.sectionTitle}`}>why top engineers from around the world trust sidechain</h2>
      <div className={`${styles.reviewsCards} ${styles.gridColumn3}`}>
        <div className={styles.reviewsCard}>
          <p className={styles.reviewsDesc}>The onboarding process on sidechain was smooth. This platform has truly optimized my working experience and allowed me to focus on what I do best – delivering high-quality work. Sidechain has made me feel like I'm part of something bigger.</p>
          <div className={styles.reviewsProfile}>
            <div className={styles.reviewsProfileImage}>
              <img src={iconRef1} alt="person" />
            </div>
            <div className={styles.reviewsProfileDesc}>
              <p>Patrick Loher</p>
              <span>Rust Developer</span>
            </div>
          </div>
        </div>
        <div className={styles.reviewsCard}>
          <p className={styles.reviewsDesc}>
            Finding reliable work can be tough. Thankfully, I stumbled upon sidechain. I receive personalized job recommendations that align with my skills. Sidechain has not only helped me find consistent work but has also connected me with clients who value my expertise.
          </p>
          <div className={styles.reviewsProfile}>
            <div className={styles.reviewsProfileImage}>
              <img src={iconRef2} alt="person" />
            </div>
            <div className={styles.reviewsProfileDesc}>
              <p>Paul Anderson</p>
              <span>Full Stack Developer</span>
            </div>
          </div>
        </div>
        <div className={styles.reviewsCard}>
          <p className={styles.reviewsDesc}>
            I have to say that sidechain has been a game-changer for me. The user interface is intuitive, making it easy for me to navigate through projects and communicate with clients. I've landed some great jobs, and I couldn't be happier with the consistent stream of
            opportunities it provides.
          </p>
          <div className={styles.reviewsProfile}>
            <div className={styles.reviewsProfileImage}>
              <img src={iconRef3} alt="person" />
            </div>
            <div className={styles.reviewsProfileDesc}>
              <p>Lindsay Murray</p>
              <span>Solidity Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentReviews;
