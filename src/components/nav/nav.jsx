import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss"

function Nav() {
    return (
        <section className="navigationSection">
            <div className="logoContainer">
                <span className="logo">{"</"}<span className="logoDot">.</span></span>
            </div>
            <div className="linkContainer">
                <span><Link to="/">Home</Link></span>
                <span><Link to="/about">About</Link></span>
            </div>
        </section>
    )
}

export default Nav;