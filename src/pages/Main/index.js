import React from "react";
import CSSModules from "react-css-modules";
import styles from "./Main.module.css";
import { Parallax, Background } from "react-parallax";
import coffeeImage from "../../assets/images/cup-of-coffee-laptop-office-macbook-89786.jpeg";

const SPEED = 0.4;

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="box">
        <div className="parallax">
          <Parallax bgImage={coffeeImage} bgHeight="500px" strength={400}>
            <h3>Parallax-1</h3>
          </Parallax>
        </div>
        <h2>Lorem Ipsum</h2>
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
        <div className="parallax" styleName="parallax-2">
          <h3>Parallax-2</h3>
        </div>
        <h2>Lorem Ipsum</h2>
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
      </div>
    );
  }
}

export default CSSModules(Main, styles);
