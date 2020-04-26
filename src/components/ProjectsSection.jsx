import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import './ProjectsSection.css'
import ProjectCard from './commons/ProjectCard'

class ProjectsSection extends Component {
  render() {
    return (
      <>
        <div id="projects" className="projects-section-container horizontal-center">
          <Typography variant="h5">PROJECTS</Typography>
          <ProjectCard 
            title="golexa"
            description="An SDK to develop skills for Alexa"
            github="https://github.com/robertobatts/golexa"
            imageSrc={'url("' + process.env.PUBLIC_URL + '/projects/golexa.png")'}
          />
        </div>
      </>
    );
  }
}

export default ProjectsSection