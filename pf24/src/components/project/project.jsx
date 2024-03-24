import React, { useState } from "react";
import Carousel from '../carousel/Carousel';
import "./project.scss";
import { Link } from "react-router-dom";


function Project(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }


    return (
    <React.Fragment>
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
                    {props.technologies.map((tech, index) => (
                        <i key={index} className={tech}></i>
                        ))}
                </div>
                <div className="buttonContainer">
                    {Object.entries(props.externalLinks).map(([title, link], index) => (
                        <Link to={link} target="_blank" key={index}><button>{title}</button></Link>
                        ))}
                    <button className="buttonSecondary" onClick={handleOpenModal}>READ MORE</button>
                </div>
            </div>
        </article>
        {!isOpen ? (""): (
        <div className="modaleContainer">
            <div className="modaleNav" onClick={handleCloseModal}><i className="fa-solid fa-xmark fa-xl"></i></div>
            <div className="carouselMain">
                <Carousel i={props.illustrationImages} />
            </div>
            <div className="modaleContent">
                <h2 className="modaleTitle">{props.name}</h2>
                <span className="modaleDescription">{props.description}</span>
                <div className="techContainer">
                    {props.technologies.map((tech, index) => (
                        <i key={index} className={tech}></i>
                    ))}
                </div>
                <div className="buttonContainer">
                    {Object.entries(props.externalLinks).map(([title, link], index) => (
                        <Link to={link} target="_blank" key={index}><button>{title}</button></Link>
                        ))}
                    <button className="buttonSecondary" onClick={handleCloseModal}>CLOSE</button>
                </div>
            </div>
        </div>
        )}
    </React.Fragment>
    );
}

export default Project;
