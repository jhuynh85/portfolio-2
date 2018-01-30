import React from "react";
import CSSModules from "react-css-modules";
import Parallax from "../../components/Parallax";
import RotatingText from "../../components/Rotating-Text";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
import Contact from "../../components/Contact";
import { Element } from "react-scroll";

import styles from "./Main.module.css";
import coffeeImage from "../../assets/images/cup-of-coffee-laptop-office-macbook-89786.jpeg";
import lightBulbImage from "../../assets/images/pexels-photo-355904.jpeg";
import codeImage from "../../assets/images/black-and-white-code-programming-tech-79290.jpeg";

const PARALLAX_STRENGTH = 300; // Strength of parallax effect (larger number == less background scrolling)
const PARALLAX_HEIGHT = "400px"; // Height of parallax element

class Main extends React.Component {
  render() {
    return (
      <div>
        <Parallax bgImage={coffeeImage} strength={PARALLAX_STRENGTH} height={PARALLAX_HEIGHT}>
          <RotatingText rotatingTextArray={["Web Developer.", "Photographer.", "Gamer."]} />
        </Parallax>
        <About />
        <Element name="portfolio">
          <Parallax
            bgImage={lightBulbImage}
            strength={PARALLAX_STRENGTH}
            height={PARALLAX_HEIGHT}
          />
        </Element>
        <Portfolio />
        <Element name="contact">
          <Parallax bgImage={codeImage} strength={PARALLAX_STRENGTH} height={PARALLAX_HEIGHT} />
        </Element>
        <Contact />
      </div>
    );
  }
}

export default CSSModules(Main, styles);
