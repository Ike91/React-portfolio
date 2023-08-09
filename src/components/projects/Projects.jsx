import React from 'react'
import Project from '../../components/partials/Project'
import projectData from '../../data/projectdata'

function Projects() {
  return (
    <div className="project p-4 sm:ml-64 sm:mr-35">
      <div className="row projects ">
        {projectData.map((project, index) => (
          <Project
            key={index}
            projectName={project.projectName}
            projectDescription={project.projectDescription}
            languageIcons={project.languageIcons}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            imageLink={project.imageLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
