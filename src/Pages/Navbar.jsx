import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../style/Navbar.scss"
function Navbar() {
  return (
  <nav class="header">
            <nav class="header_logo">
                <img src="/img/logo.svg" alt="logo" />
            </nav>
            <nav class="header_menu">
                <p class="header_menu-text header_menu-text_selected">
                    <Link to="/Home">Home</Link>
                </p>
                <p class="header_menu-text"><Link to="/Menu">Menu</Link></p>
                <p class="header_menu-text"><Link to="/Coffee">Coffee</Link></p>
                <p class="header_menu-text">
                    <Link to="/Story">Our Story</Link>
                </p>
            </nav>
        </nav>
  );
}

export default Navbar;