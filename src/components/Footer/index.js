import React from "react";

// Get current year
const date = new Date();
const year = date.getFullYear();

const Footer = () => (
  <footer>
    Copyright © {year} Joseph Huynh
  </footer>
);

export default Footer;
