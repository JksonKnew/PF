import React from "react";
import "./hero.scss"
import HeroSvg from "../../assets/svg/heroSvg";
import ChevronDown from "../../assets/svg/chevronDown";


function Hero() {
    return(
        <section className="heroMainSection">
            <div className="heroContentContainer">
                <div className="heroContent">
                    <h1>Hi, I'm Bastien</h1>
                    <h2>Front end developper</h2>
                </div>
                <div className="heroIllustration">
                    <HeroSvg/>
                </div>
            </div>
                <div className="heroScroll">
                    <span>Scroll</span>
                    <ChevronDown/>
                </div>
        </section>
    )
}

export default Hero;

