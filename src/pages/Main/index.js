import React from "react";
import CSSModules from "react-css-modules";
import styles from "./First.module.css";

const Main = () => (
  <div>
    <h1 styleName="header">Testing</h1>
  </div>
);

export default CSSModules(Main, styles);
