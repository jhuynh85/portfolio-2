import React from "react";
import CSSModules from "react-css-modules";
import Parallax from "../../components/Parallax";
import RotatingText from "../../components/Rotating-Text";
import { Element } from "react-scroll";

import styles from "./Main.module.css";
import coffeeImage from "../../assets/images/cup-of-coffee-laptop-office-macbook-89786.jpeg";
import lightBulbImage from "../../assets/images/pexels-photo-355904.jpeg";
import codeImage from "../../assets/images/black-and-white-code-programming-tech-79290.jpeg"

const PARALLAX_STRENGTH = 300;   // Strength of parallax effect (larger number == less background scrolling)
const PARALLAX_HEIGHT = "400px"; // Height of parallax element

class Main extends React.Component {

  render() {
    return <div>
        <Parallax bgImage={coffeeImage} strength={PARALLAX_STRENGTH} height={PARALLAX_HEIGHT}>
          <RotatingText rotatingTextArray={["Web Developer.", "Photographer.", "Gamer."]} />
        </Parallax>
        <h2 className="center-align blue-text darken-1-text" styleName="header-title">
          About me
        </h2>
        <p>
          Hi, I'm Joseph! I'm a <strong>full-stack developer</strong> proficient in HTML5, CSS3, JavaScript, and
          specializing in the MERN stack. I have a degree in Computer Science as well as a
          certification in full-stack web development. I'm experienced in building out all parts
          of a modern web application including front-end, back-end, and database components.
        </p>
        <Element name="portfolio">
          <Parallax bgImage={lightBulbImage} strength={PARALLAX_STRENGTH} height={PARALLAX_HEIGHT} />
        </Element>
        <h2 className="center-align" styleName="header-title">
          Lorem Ipsum
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequuntur, nesciunt
          dicta, esse rem ducimus itaque quis. Adipisci ullam nam qui illum debitis sit ad in
          delectus, repudiandae non dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Suscipit veritatis, facere aliquid itaque tempore consequatur nihil sint enim
          aliquam id saepe magnam totam repellat placeat a fugit nulla molestias voluptas.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequuntur, nesciunt
          dicta, esse rem ducimus itaque quis. Adipisci ullam nam qui illum debitis sit ad in
          delectus, repudiandae non dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Suscipit veritatis, facere aliquid itaque tempore consequatur nihil sint enim
          aliquam id saepe magnam totam repellat placeat a fugit nulla molestias voluptas.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequuntur, nesciunt
          dicta, esse rem ducimus itaque quis. Adipisci ullam nam qui illum debitis sit ad in
          delectus, repudiandae non dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Suscipit veritatis, facere aliquid itaque tempore consequatur nihil sint enim
          aliquam id saepe magnam totam repellat placeat a fugit nulla molestias voluptas.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequuntur, nesciunt
          dicta, esse rem ducimus itaque quis. Adipisci ullam nam qui illum debitis sit ad in
          delectus, repudiandae non dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Suscipit veritatis, facere aliquid itaque tempore consequatur nihil sint enim
          aliquam id saepe magnam totam repellat placeat a fugit nulla molestias voluptas.
        </p>
        <Element name="contact">
          <Parallax bgImage={codeImage} strength={PARALLAX_STRENGTH} height={PARALLAX_HEIGHT} />
        </Element>
        <h2 className="center-align" styleName="header-title">
          Lorem Ipsum
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequuntur, nesciunt
          dicta, esse rem ducimus itaque quis. Adipisci ullam nam qui illum debitis sit ad in
          delectus, repudiandae non dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Suscipit veritatis, facere aliquid itaque tempore consequatur nihil sint enim
          aliquam id saepe magnam totam repellat placeat a fugit nulla molestias voluptas.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequuntur, nesciunt
          dicta, esse rem ducimus itaque quis. Adipisci ullam nam qui illum debitis sit ad in
          delectus, repudiandae non dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Suscipit veritatis, facere aliquid itaque tempore consequatur nihil sint enim
          aliquam id saepe magnam totam repellat placeat a fugit nulla molestias voluptas.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequuntur, nesciunt
          dicta, esse rem ducimus itaque quis. Adipisci ullam nam qui illum debitis sit ad in
          delectus, repudiandae non dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Suscipit veritatis, facere aliquid itaque tempore consequatur nihil sint enim
          aliquam id saepe magnam totam repellat placeat a fugit nulla molestias voluptas.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil consequuntur, nesciunt
          dicta, esse rem ducimus itaque quis. Adipisci ullam nam qui illum debitis sit ad in
          delectus, repudiandae non dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Suscipit veritatis, facere aliquid itaque tempore consequatur nihil sint enim
          aliquam id saepe magnam totam repellat placeat a fugit nulla molestias voluptas.
        </p>
      </div>;
  }
}

export default CSSModules(Main, styles);
