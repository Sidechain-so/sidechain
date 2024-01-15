import React from "react";
import { Link } from "react-router-dom";

import styles from "./ThanksPage.module.scss";

const ThanksPage = () => {
  return (
    <div className={styles.thankyouContainer + " " + styles.pageWidth}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.thankYouTitle}>Thank You</h1>
        <p className={styles.thankYouDesc}>FOR YOUR INTEREST</p>
        <p className={styles.thankYouSubDesc}>Our team would love to discover more about your project and job opportunity.</p>
        <div className={styles.bookCallBtnWrapper}>
          <a href="https://calendly.com/sidechainhq" target="_blank" className={styles.bookCallBtn}>Book a call</a>
        </div>
        <div className={styles.returnHomeBtnWrapper}>
          <Link className={styles.returnHomeBtn} to="/">
            <h2>Return to home</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThanksPage;
