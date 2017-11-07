import React from "react";
import styles from "./Footer.module.css";
import CSSModules from "react-css-modules";

// Get current year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer = () => (
  <footer className="page-footer blue darken-1" styleName="centeredText">
    Copyright © {currentYear} Joseph Huynh
  </footer>
);

export default CSSModules(Footer, styles);
