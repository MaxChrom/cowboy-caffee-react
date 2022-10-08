
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../style/Footer.scss"
function Footer () {
    return(
        <footer>
        <div class="footer">
            <nav class="footer_menu">
                <p class="footer_menu-text footer_menu-text_selected">
                    <Link to="/Home">Home</Link>
                </p>
                <p class="footer_menu-text"><Link to="/Menu">Menu</Link></p>
                <p class="footer_menu-text"><Link to="/Coffee">Coffee</Link></p>
                <p class="footer_menu-text">
                    <Link to="/Story">Our Story</Link>
                </p>
            </nav>
            </div>
            <div class="footer__social">
                <h3 class="footer__social__hashtag">#COWBOYCOFFEE</h3>
                <div class="footer__social__follow-us">
                    Follow us on <a href="https://www.twitter.com">Twitter</a> and
                    <a href="https://www.instagram.com">Instagram</a>
                </div>
            </div>
    </footer>
    )
}

export default Footer