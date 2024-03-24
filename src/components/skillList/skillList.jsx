import React from "react";
import './skillList.scss';

function SkillList() {

    const skills = {

        "Html 5": "fa-brands fa-html5 fa-4x",
        "JS": "fa-brands fa-js fa-4x",
        "React": "fa-brands fa-react fa-4x",
        "Sass": "fa-brands fa-sass fa-4x",
        "Figma": "fa-brands fa-figma fa-4x",

    };

    return (
        <div className="skillsLogoContainer">
            {Object.entries(skills).map(([skill, icon], index) => (
                <div className="skillLogo" key={index}>
                    <i className={icon}></i>
                    <span>{skill}</span>
                </div>
            ))}
        </div>
    )
}

export default SkillList;