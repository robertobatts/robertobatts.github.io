import React from 'react'
import Typography from '@material-ui/core/Typography'
import './SkillsSection.css'

class SkillsSection extends React.Component {
  render() {
    return (
      <div className="skills-section-container">
        <div className="p-grid p-justify-center">
          <div className="p-col-12 p-md-4 p-lg-4 p-xl-4 horizontal-center">
            <Typography variant="h5" gutterBottom>BACK END</Typography>
            {this.getBackendLogos()} 
          </div>
          <div className="p-col-12 p-md-4 p-lg-4 p-xl-4 horizontal-center">
            <Typography variant="h5" gutterBottom>FRONT END</Typography>
          </div>
          <div className="p-col-12 p-md-4 p-lg-4 p-xl-4 horizontal-center">
            <Typography variant="h5" gutterBottom>OTHER</Typography>
          </div>
        </div>
      </div>
    );
  }

  getBackendLogos() {
    return this.getLogos(["java", "mongodb", "spring-framework"])
  }

  getLogos(logoNames) {
    let logos = []
    logoNames.forEach(logoName => {
      logos.push(<img alt={logoName} className="skill-logo-sm" src={process.env.PUBLIC_URL + '/logos/' + logoName + ".svg"} /> )
    })
    return logos
  }
}

export default SkillsSection