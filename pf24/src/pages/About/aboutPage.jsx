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
                    <span>Lorem ipsum dolor sit amet consectetur. Nisl et tincidunt nisi turpis odio viverra tempor aliquet. Egestas tempor a massa risus volutpat tellus. Varius fames aliquet consectetur lobortis massa pretium enim et consectetur.</span>
                    <span>Lorem ipsum dolor sit amet consectetur. Nisl et tincidunt nisi turpis odio viverra tempor aliquet. Egestas tempor a massa risus volutpat tellus. Varius fames aliquet consectetur lobortis massa pretium enim et consectetur.</span>
                    <span>Lorem ipsum dolor sit amet consectetur. Nisl et tincidunt nisi turpis odio viverra tempor aliquet. Egestas tempor a massa risus volutpat tellus. Varius fames aliquet consectetur lobortis massa pretium enim et consectetur.</span>
                </div>
            </div>
            <div className="skillsContainer">
                <h2>Skills</h2>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima nihil assumenda laudantium mollitia? Cum maiores at, doloremque animi rerum soluta, aut, asperiores aspernatur sed accusamus neque? Quis, blanditiis ab!</span>
                <SkillList/>
            </div>
        </section>
    )
}

export default AboutPage;