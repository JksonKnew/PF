import React from "react";
import "./project.scss"

{/* <i className="fa-brands fa-sass"></i>
<i className="fa-brands fa-react"></i>
<i className="fa-brands fa-square-js"></i> */}


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
                <div className="techContainer">
                <i className="fa-brands fa-react fa-2xl"></i>
                <i className="fa-brands fa-square-js fa-2xl"></i>
                <i className="fa-brands fa-sass fa-2xl"></i>
                </div>
                <div className="buttonContainer">
                    <button>VIEW CODE</button>
                    <button className="buttonSecondary">LIVE DEMO</button>
                </div>
            </div>
        </article>
    )
}

export default Project;