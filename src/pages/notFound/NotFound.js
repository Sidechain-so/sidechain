import React from "react";
import { Link } from "react-router-dom";
import withLayout from "../../components/layout/withLayout";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={`${styles.notFound} ${styles.pageWidth} ${styles.sectionMargin}`}>
      <h2 className={styles.notFoundTitle}>404</h2>
      <p className={styles.notFoundDesc}>The requested URL was not found.</p>
      <Link className={`${styles.notFoundBtn} ${styles.getStartedBtn}`} to="/">Return to Home Page</Link>
    </div>
  );
};

export default withLayout(NotFound, { isForHome: true });
