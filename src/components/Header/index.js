import React from "react";
import CSSModules from "react-css-modules";
import styles from "./Header.module.css";
import Scroll from "react-scroll";

const Link = Scroll.Link;
const scroll = Scroll.animateScroll;

class Header extends React.Component {

  render () {
    return(
      <nav>
        <div className="nav-wrapper" styleName="nav-wrapper">
          <a href="#!" styleName="logo">Joseph Huynh</a>
          <a href="#" data-activates="burger-menu" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a>About</a></li>
            <li><Link to="portfolio" smooth={true}>Portfolio</Link></li>
            <li><Link to="contact" smooth={true}>Contact</Link></li>
          </ul>
          <ul className="side-nav" id="burger-menu">
            <li><a>About</a></li>
            <li><Link to="portfolio" smooth={true}>Portfolio</Link></li>
            <li><Link to="contact" smooth={true}>Contact</Link></li>
          </ul>
        </div>
      </nav>);
  }
}

export default CSSModules(Header, styles);