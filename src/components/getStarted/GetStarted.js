import React from "react";
import { Link } from "react-router-dom";

import styles from "./GetStarted.module.scss";

const GetStarted = ({ title, buttonText, redirectTo }) => {
  return (
    <div className={`${styles.getStarted} ${styles.pageWidth} ${styles.sectionMargin}`}>
      <h2 className={`${styles.getStartedTitle} ${styles.titleNeue}`}>{title}</h2>
      <Link className={styles.getStartedBtn} to={redirectTo}>{buttonText}</Link>
    </div>
  );
};

export default GetStarted;
