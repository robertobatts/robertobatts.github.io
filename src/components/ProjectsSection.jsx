import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import './ProjectsSection.css'
import ProjectCard from './commons/ProjectCard'

class ProjectsSection extends Component {
  render() {
    return (
      <>
        <div id="projects" className="projects-section-container horizontal-center">
          <Typography variant="h5" style={{paddingBottom: "30px"}}>PROJECTS</Typography>
          <ProjectCard 
            title="golexa"
            description="An SDK to develop skills for Alexa"
            github="https://github.com/robertobatts/golexa"
            imageSrc={'url("' + process.env.PUBLIC_URL + '/projects/golexa.png")'}
          />
          <ProjectCard 
            title="ker-e-bians"
            description="ker-e-bians calculates the optimized path that guides you through the roads with the most parking spots possible in London"
            demo="https://www.youtube.com/watch?v=gGzA_BMI9EQ"
            github="https://github.com/robertobatts/ker-e-bians"
            imageSrc={'url("' + process.env.PUBLIC_URL + '/projects/ker-e-bians.png")'}
          />
          <ProjectCard 
            title="magic sorter"
            description="A tool to visualize sorting algorithms"
            website="https://magic-sorter.netlify.com/"
            github="https://github.com/robertobatts/magic-sorter"
            imageSrc={'url("' + process.env.PUBLIC_URL + '/projects/magic-sorter.png")'}
          />
        </div>
      </>
    );
  }
}

export default ProjectsSection