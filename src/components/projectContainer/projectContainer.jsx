import React from "react";
import { projectsList } from "../../assets/data/projectList.js"
import Project from "../project/project.jsx";
import "./projectContainer.scss"




function ProjectContainer() {
    return (
        <section className="projectSection">
            <h2>Projects</h2>
            <div className="projectContainer">
                {projectsList.map((project)=> (
                    <Project key={project.id} cover={project.coverImage} name={project.name} summary={project.summary} technologies={project.technologies} externalLinks={project.externalLinks} illustrationImages={project.illustrationImages} description={project.description}/>
                ))}
            </div>
        </section>
    )
}

export default ProjectContainer;