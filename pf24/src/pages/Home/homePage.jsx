import React from "react";
import Hero from "../../components/hero/hero";
import ProjectContainer from "../../components/projectContainer/projectContainer";
import AboutResume from "../../components/aboutResume/aboutResume";

function HomePage() {
    return(
    <React.Fragment>
            <Hero />
        <section className="projectSection">
            <h2>Projects</h2>
            <ProjectContainer />
        </section>
        <AboutResume />
    </React.Fragment>
    )
}

export default HomePage;