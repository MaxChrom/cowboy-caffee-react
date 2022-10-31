import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../style/Navbar.scss"
import HeaderLogo from "../components/Header/HeaderLogo";
import Counter from '../components/ImagesFetch/Counter';
function Navbar() {
  return (
  <nav className="header">
            <nav className="header_logo">
                <Counter img = "logo"/>
            </nav>
            <nav className="header_menu">
                <p className="header_menu-text header_menu-text_selected">
                    <Link to="/Home">Home</Link>
                </p>
                <p className="header_menu-text"><Link to="/Menu">Menu</Link></p>
                <p className="header_menu-text"><Link to="/Coffee">Coffee</Link></p>
                <p className="header_menu-text">
                    <Link to="/Story">Our Story</Link>
                </p>
                <p className="header_menu-text"><Link to="/Cart">Cart</Link></p>
            </nav>
        </nav>
  );
}

export default Navbar;