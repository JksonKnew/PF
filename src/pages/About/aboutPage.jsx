import React from "react";
import img from '../../assets/data/images/bastien_davin.jpg';
import './aboutPage.scss';
import SkillList from "../../components/skillList/skillList";

function AboutPage() {
    return(
        <section className="aboutMainContainer">
            <h1 className="aboutTitle">About Me</h1>
            <div className="quoteContainer">
                <div className="quoteImg">
                    <img src={img} alt="Bastien DAVIN" />
                </div>
                <div className="quoteText">
                    <h2>Quote...</h2>
                    <span>Hello there! I'm Bastien, a dedicated frontend developer driven by a deep passion for blending innovation with creativity. With a background in design and development, I strive to craft immersive web experiences that not only captivate but also leave a lasting impression. My journey in the realm of frontend development has been fueled by a relentless pursuit of excellence, where every project is an opportunity to push boundaries and set new standards. My expertise lies in transforming ideas into tangible digital assets, with a focus on meticulous attention to detail and a keen understanding of user experience principles.</span>
                    <span>One of my core principles is the importance of branding and product aesthetics. I believe that a well-crafted image and branding strategy are essential elements for success in today's digital landscape. Whether it's through elegant UI designs, fluid animations, or seamless interactions, I strive to elevate every project to its fullest potential.</span>
                    <span>Collaboration is at the heart of my process, and I thrive in environments where creativity flourishes and ideas are shared freely. I value open communication and believe that the best solutions emerge from a collective effort.</span>
                </div>
            </div>
            <div className="skillsContainer">
                <h2>Skills</h2>
                <span>My important skills can accompany you in your various projects and they will continue to evolve. The evolution of your projects is a priority for me, so my skills must also evolve.</span>
                <SkillList/>
            </div>
            <div className="interestContainer">
                <h2>Interest</h2>
                <span>Derived from a background in photography and videography, my journey is shaped by a fervent passion for imagery and creation in all its forms. I bring this artistic sensibility to my work as a frontend developer, always seeking to infuse each project with the refined aesthetics and meticulous attention to detail honed in my previous creative endeavors. As a musician, I understand the importance of harmonious composition and fluidity in interface design, constantly striving to craft online experiences that are both engaging and intuitive. My commitment to clean and well-crafted interfaces is rooted in my belief that usability and aesthetics go hand in hand to deliver an optimal user experience.</span>
            </div>
        </section>
    )
}

export default AboutPage;