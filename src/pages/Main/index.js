import React from "react";
import CSSModules from "react-css-modules";
import styles from "./Main.module.css";

const Main = () => (
  <div styleName="parallax">
    <h3>Testing</h3>
  </div>
);

export default CSSModules(Main, styles);
