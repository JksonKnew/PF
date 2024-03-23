import React from "react";
import "./hero.scss"
import MySVGComponent from "../../assets/Vector";


function Hero() {
    return(
        <section className="heroMainSection">
            <div className="heroContentContainer">
                <div className="heroContent">
                    <h1>Bastien DAVIN</h1>
                    <h2>Front end developper</h2>
                </div>
                <div className="heroIllustration">
                    <MySVGComponent/>
                </div>
                <div className="heroScroll">
                    <span>Scroll Down</span>
                </div>
            </div>
        </section>
    )
}

export default Hero;

