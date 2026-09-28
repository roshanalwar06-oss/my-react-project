import { useState } from 'react'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      name: 'E-Commerce Website',
      description: 'A modern shopping website built with React.',
      tech: 'React, CSS, JavaScript'
    },
    {
      id: 2,
      name: 'Weather App',
      description: 'A weather application that displays weather information.',
      tech: 'React, API, CSS'
    },
    {
      id: 3,
      name: 'Task Manager',
      description: 'A simple application to manage daily tasks.',
      tech: 'React, JavaScript, CSS'
    }
  ]

  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <small>{project.tech}</small>

            <br />
            <br />

            <button onClick={() => setSelectedProject(project)}>
              View Project
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-details">
          <h2>{selectedProject.name}</h2>
          <p>{selectedProject.description}</p>
          <p>Technologies: {selectedProject.tech}</p>

          <button onClick={() => setSelectedProject(null)}>
            Close
          </button>
        </div>
      )}
    </section>
  )
}

export default Projects