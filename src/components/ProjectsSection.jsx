import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import './ProjectsSection.css'

class ProjectsSection extends Component {
  render() {
    return (
      <>
        <div id="projects" className="projects-section-container horizontal-center">
          <Typography variant="h5">PROJECTS</Typography>
        </div>
      </>
    );
  }
}

export default ProjectsSection