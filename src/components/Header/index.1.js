import React from "react";
import styles from "./Header.module.css";
import CSSModules from "react-css-modules";
import { Navbar } from "react-materialize";

const Header = () => (
  <div styleName="centeredHeader">
    <header>
      <div className="title">Joseph Huynh</div>
      <ul>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </header>
  </div>
);

export default CSSModules(Header, styles);