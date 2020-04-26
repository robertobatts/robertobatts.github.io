import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from './Button'
import './ProjectCard.css'

class ProjectCard extends Component {
  render() {
    return (
      <div className="project-card-container">
        <div className="project-card-background" style={{ "backgroundImage": this.props.imageSrc }}/>
        <div className="project-card-wrapper">
          <div className="project-card-content horizontal-center">
            <Typography variant="h5">{this.props.title}</Typography>
            <div>{this.props.description}</div>
            <div className="project-card-link-section">
              {this.props.website && <Button link={this.props.website} content="Website" color={'#1da1f2'} />}
              {this.props.demo && <Button link={this.props.demo} content="Demo" color={'#1da1f2'} />}
              {this.props.github && <Button link={this.props.github} content="GitHub" color={'#1da1f2'} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard