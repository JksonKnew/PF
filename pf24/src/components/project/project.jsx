import React from "react";
import "./project.scss"


function Project(props) {
    return(
        <article className="projectArticle">
            <div className="projectCover">
                <img src={props.cover} alt={props.altCover} />
            </div>
            <div className="projectContent">
                <div className="projectText">
                    <h3>{props.name}</h3>
                    <span>{props.summary}</span>
                </div>
                <div className="techContainer"></div>
                <div className="buttonContainer">
                    <button>View code</button>
                    <button>Live demo</button>
                </div>
            </div>
        </article>
    )
}

export default Project;