import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Twitter from "../../assets/twitter.svg";
import Mirror from "../../assets/mirror.svg";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <img loading="lazy" src={Logo} alt="logo" />
        </div>

        <div>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li>
              <a href="/privacy">Terms and Conditions</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerInput}>
          <div className={styles.footerSocials}>
            <Link to="http://twitter.com/sidechain_so" target="_blank">
              <img loading="lazy" src={Twitter} alt="twitter" />
            </Link>
            <Link to="https://mirror.xyz/0xcB8676BcEC8557C1946A23cC0cBdEda7Ceb86D67" target="_blank">
              <img loading="lazy" src={Mirror} alt="mirror" />
            </Link>
          </div>
        </div>
      </footer>

      <div className={`${styles.pageWidth} ${styles.subFooter}`}>© 2023 Sidechain</div>
    </>
  );
};

export default Footer;
