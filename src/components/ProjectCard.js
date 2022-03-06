import React from 'react'
import style from '../css-modules/CardStyle.module.css'
import CardImage from './CardImage';

export default function ProjectCard({ project }) {
    const openLink = (url) => {
        if (url == "") {
            return;
        }
        window.open(url, '_blank').focus();
    }

    return (
        <div className={style.cardContainer} onClick={() => { openLink(project.link) }}>
            <div className={style.card}>
                <div className={style.cardTech}>
                    {project.technology}
                </div>
                <div className={style.cardTitle}>{project.title}</div>
                <CardImage hasImage={project.hasImage} imageLocations={project.imageSource}/>
                <p className={style.cardDescription}>
                    {project.description}
                </p>
                <p className={style.cardLink}>
                    click to visit!
                </p>
            </div>
        </div>
    )
}
