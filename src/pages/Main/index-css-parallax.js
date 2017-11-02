import React from "react";
import CSSModules from "react-css-modules";
import styles from "./Main.module.css";
import { ParallaxProvider } from "react-scroll-parallax";

const SPEED = 0.4;

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    let parallax = document.querySelectorAll(".parallax");

    this.setState({ parallax });

    window.addEventListener("scroll", this.handleScroll);
    console.log("parallax select: ", this.state.parallax);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = event => {
    [].slice.call(this.state.parallax).forEach((el, i) => {
      let windowYOffset = window.pageYOffset;
      let elBackgrounPos = "50% " + windowYOffset * SPEED + "px";

      el.style.backgroundPosition = elBackgrounPos;
    });
  };

  render() {
    return (
      <ParallaxProvider>
        <div className="parallax" styleName="parallax-1">
          <h3>Parallax-1</h3>
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
      </ParallaxProvider>
    );
  }
}

export default CSSModules(Main, styles);
