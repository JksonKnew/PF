import React from "react";
import "./footer.scss"
import { Link } from "react-router-dom";

function Footer() {
    return(
        <section className="footerSection">
            <div className="footerContainer">
                <div className="footerText">
                    <h3>Let's connect!</h3>
                    <span>Shoot me email to chat about my work or just like to say hey 👋</span>
                </div>
                <div className="footerLogoContainer">
                    <Link to="https://www.linkedin.com/in/bastien-davin-021184189/" target="_blank" >
                    <div className="linkedinLogo"><i className="fa-brands fa-linkedin-in fa-xl"></i></div>
                    </Link>
                    <Link to="#"  onClick={() => window.location = 'mailto:bastien.davin@icloud.com'}>
                        <div className="mailLogo"><i className="fa-regular fa-envelope fa-xl"></i></div>
                    </Link>
                    <Link to="https://github.com/JksonKnew" target="_blank">
                        <div className="gitHubLogo"><i className="fa-brands fa-github fa-xl"></i></div>
                    </Link>
                </div>
            </div>
            <span className="footerCredit">© Designed by N. Safarova</span>
        </section>
    )
}

export default Footer;