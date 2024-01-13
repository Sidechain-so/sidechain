import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg"
import "./Navbar.scss";

const Navbar = () => {
    return (
      <nav className="navbar page-width">
        <div className="navbar__logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <ul className="navbar__links">
          <li className="navbar__link">
            <Link to="/talent">Join as Talent</Link>
          </li>

          <li className="navbar__link">
            <Link to="/hire">Join to Hire</Link>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;
