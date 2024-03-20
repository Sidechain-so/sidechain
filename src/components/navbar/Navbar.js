import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Logo from "../../assets/logo.svg";
import styles from "./Navbar.module.scss";

const Navbar = ({ isForHome }) => {
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  const handleCompanyProfile = () => {
    navigate(`/companies/${user.userData._id}`);
  };
  
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
            {isForHome ? "Join as Talent" : "Join Network"}
          </Link>
        </li>
        <li className={styles.navbarLink}>
          <Link to="/hire">
            {isForHome ? "Join to Hire" : "Hire Developers"}
          </Link>
        </li>
      </ul>
      {user?.token ? (
        <div className={styles.userMenu} onClick={() => setShowMenu(!showMenu)}>
          <img src={user.userData.userData.companyImage} alt="company logo" className={styles.companyLogo} />
          {showMenu && (
            <div className={styles.menuItems}>
              <button onClick={handleCompanyProfile}>Company Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      ) : (
        <Link to="/signIn" className={styles.signInButton}>
          Sign In
          <span className={styles.arrowIcon}></span>  
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
