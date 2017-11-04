import React from "react";
import { Parallax as ReactParallax } from "react-parallax";

const Parallax = props => (
  <ReactParallax bgImage={props.bgImage} strength={props.strength}>
    <div style={{ height: props.height }} />
  </ReactParallax>
);

export default Parallax;
