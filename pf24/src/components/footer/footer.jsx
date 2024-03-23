import React from "react";
import "./footer.scss"

function Footer() {
    return(
        <section className="footerSection">
            <div className="footerContainer">
                <div className="footerText">
                    <h3>Let's connect!</h3>
                    <span>Shoot me email to chat about my work or just like to say hey 👋</span>
                </div>
                <div className="footerLogoContainer">
                    <div className="linkedinLogo"><i className="fa-brands fa-linkedin-in fa-xl"></i></div>
                    <div className="mailLogo"><i className="fa-regular fa-envelope fa-xl"></i></div>
                    <div className="gitHubLogo"><i className="fa-brands fa-github fa-xl"></i></div>
                </div>
            </div>
            <span className="footerCredit">© Designed by N. Safarova</span>
        </section>
    )
}

export default Footer;