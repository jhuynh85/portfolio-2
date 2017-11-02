import React from "react";
import CSSModules from "react-css-modules";
import styles from "./Header.module.css";

const Header = () => (
  <nav>
    <div className="nav-wrapper" styleName="nav-wrapper">
      <a href="#!" styleName="logo">Joseph Huynh</a>
      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="#!">About</a></li>
        <li><a href="#!">Portfolio</a></li>
        <li><a href="#!">Contact</a></li>
      </ul>
      <ul className="side-nav" id="mobile-demo">
        <li><a href="#!">About</a></li>
        <li><a href="#!">Portfolio</a></li>
        <li><a href="#!">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default CSSModules(Header, styles);