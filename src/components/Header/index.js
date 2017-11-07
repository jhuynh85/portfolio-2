import React from "react";
import CSSModules from "react-css-modules";
import styles from "./Header.module.css";
import { Link, animateScroll as Scroller } from "react-scroll";

class Header extends React.Component {
  scrollToTop = () => {
    Scroller.scrollToTop();
  }

  render () {
    return(
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper blue darken-1" styleName="nav-wrapper">
              <a href="#!" styleName="logo">Joseph Huynh</a>
              <a href="#" data-activates="burger-menu" className="button-collapse"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><a onClick={this.scrollToTop}>About</a></li>
                <li><Link to="portfolio" smooth={true}>Portfolio</Link></li>
                <li><Link to="contact" smooth={true}>Contact</Link></li>
              </ul>
            </div>
          </nav>
        </div>
        <ul className="side-nav" id="burger-menu">
          <li><a onClick={this.scrollToTop}>About</a></li>
          <li><Link to="portfolio" smooth={true}>Portfolio</Link></li>
          <li><Link to="contact" smooth={true}>Contact</Link></li>
        </ul>
      </div>
    );
  }
}

export default CSSModules(Header, styles);