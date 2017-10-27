import React from "react";
import styles from "./Footer.module.css";
import CSSModules from "react-css-modules";

// Get current year
const date = new Date();
const year = date.getFullYear();

const Footer = () => (
  <footer className="page-footer" styleName="centeredText">
    Copyright © {year} Joseph Huynh
  </footer>
);

export default CSSModules(Footer, styles);
