import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Twitter from "../../assets/twitter.svg";
import Mirror from "../../assets/mirror.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer page-width">
        <div>
            <img loading="lazy" src={Logo} alt="logo" />
        </div>

        <div>
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__links">
            <li>
                <a href="/privacy">Terms and Conditions</a>
            </li>
            </ul>
        </div>

        <div className="footer__input">
            <div className="footer__socails">
            <Link to="http://twitter.com/sidechain_so" target="_blank">
                <img loading="lazy" src={Twitter} alt="twitter" />
            </Link>
            <Link to="https://mirror.xyz/0xcB8676BcEC8557C1946A23cC0cBdEda7Ceb86D67" target="_blank">
                <img loading="lazy" src={Mirror} alt="mirror" />
            </Link>
            </div>
        </div>
      </footer>  

      <div className="page-width sub__footer">© 2023 Sidechain</div>
    </>
  );
};

export default Footer;