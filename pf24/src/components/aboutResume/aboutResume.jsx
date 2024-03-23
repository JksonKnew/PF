import React from "react";
import "./aboutResume.scss";
import picture from '../../assets/data/images/cover-images/project1cover.jpeg';
import { Link } from "react-router-dom";

function AboutResume() {
    return (
        <React.Fragment>
            <section className="aboutResumeSection">
                <div className="aboutResumeContent">
                    <h2>Hi there!</h2>
                    <span>Hello there! I'm Bastien, a passionate frontend developer with a keen eye for creativity and design. I specialize in crafting visually stunning and user-friendly web experiences that leave a lasting impression. With a strong focus on branding and product aesthetics, I bring concepts to life with precision and flair.</span>
                    <span>My dedication to excellence ensures that every line of code I write contributes to building engaging digital solutions. Let's collaborate and turn your vision into an unforgettable online presence!</span>
                    <Link to="/about">
                        <button>READ MORE</button>
                    </Link>
                </div>
                <div className="aboutResumePicture">
                    <img src={picture} alt="picture of bastien davin" />
                </div>
            </section>
        </React.Fragment>
    );
}

export default AboutResume;