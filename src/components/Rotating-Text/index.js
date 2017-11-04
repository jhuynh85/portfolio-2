import React from "react";
import ReactRotatingText from "react-rotating-text";
import CSSModules from "react-css-modules";

import styles from "./Rotating-Text.module.css";
import "./react-rotating-text-cursor.css";

const RotatingText = props => (
  <ReactRotatingText items={props.rotatingTextArray} color="white" />
);

export default CSSModules(RotatingText, styles);
