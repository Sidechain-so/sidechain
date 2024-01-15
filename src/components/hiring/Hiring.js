import React from "react";
import styles from "./Hiring.module.scss";

const Hiring = ({ title, first, second, third }) => {
  return (
    <div className={`${styles.hiring} ${styles.pageWidth} ${styles.sectionMargin}`}>
      <h2 className={`${styles.hiringTitle} ${styles.sectionTitle}`}>
        <span className={`${styles.titleUnderline}`}>
          {title.first}<span className={`${styles.titleNeue}`}>{title.second}</span>{title.third}
        </span>{" "}
        {title.fifth}
      </h2>

      <div className={`${styles.hiringCardWrapper} ${styles.gridColumn3}`}>
        <div className={styles.hiringCard}>
          <div className={styles.hiringCardNumber}>1</div>
          <p className={styles.hiringCardDesc}>{first}</p>
        </div>
        <div className={styles.hiringCard}>
          <div className={styles.hiringCardNumber}>2</div>
          <p className={styles.hiringCardDesc}>{second}</p>
        </div>
        <div className={styles.hiringCard}>
          <div className={styles.hiringCardNumber}>3</div>
          <p className={styles.hiringCardDesc}>{third}</p>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
