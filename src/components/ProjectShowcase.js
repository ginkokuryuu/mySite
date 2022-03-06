import React, { useState, useEffect } from 'react'
import style from '../css-modules/ProjectScStyle.module.css'
import ProjectCard from './ProjectCard'

export default function ProjectShowcase() {
    const [projects, setProjects] = useState([
        {
            "id": 1,
            "title": "Auto Route Controller Express JS",
            "description": "This is a library for ExpressJS to add dynamic routing based on your controller. Can adapt to any types of architecture, as long as it is modular. Can be used in non-modular architecture with slight changes",
            "link": "https://github.com/ginkokuryuu/auto-route-controller",
            "technology": "Javascript",
            "hasImage": false
        },
        {
            "id": 2,
            "title": "Auto Route Controller Express JS",
            "description": "This is a library for ExpressJS to add dynamic routing based on your controller. Can adapt to any types of architecture, as long as it is modular. Can be used in non-modular architecture with slight changes",
            "link": "https://github.com/ginkokuryuu/auto-route-controller",
            "technology": "Javascript",
            "hasImage": false
        }
    ])

    useEffect(() => {
        fetch('/data/ProjectsData.json').
            then(response => response.json()).
            then(data => setProjects(data))
    }, [])

    return (
        <div className={style.projectBody}>
            <h1 className={style.title}>Projects Showcase</h1>
            {projects.map(project => {
                return <ProjectCard key={project.id} project={project}/>
            })}
        </div>
    )
}
