import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import styles from "./Navbar.module.scss";

const Navbar = ({ isForHome }) => {
    return (
      <nav className={`${styles.navbar} ${styles.pageWidth}`}>
        <div className={styles.navbarLogo}>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <ul className={styles.navbarLinks}>
          <li className={styles.navbarLink}>
            <Link to="/talent">
              {
                isForHome 
                  ? "Join as Talent"
                  : "Join Network"
              }
            </Link>
          </li>

          <li className={styles.navbarLink}>
            <Link to="/hire">
              {
                isForHome 
                  ? "Join to Hire"
                  : "Hire Developers"
              }
            </Link>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;
