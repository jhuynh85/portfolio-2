import React from "react";
import { Parallax as ReactParallax } from "react-parallax";
import CSSModules from "react-css-modules";

import styles from "./Parallax.module.css";

const Parallax = props => (
  <ReactParallax bgImage={props.bgImage} strength={props.strength}>
    <div style={{ height: props.height }} styleName="filler">{props.children}</div>
  </ReactParallax>
);

export default CSSModules(Parallax, styles);
