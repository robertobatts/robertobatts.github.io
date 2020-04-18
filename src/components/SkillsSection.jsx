import React from 'react'
import Typography from '@material-ui/core/Typography'
import './SkillsSection.css'

class SkillsSection extends React.Component {
  render() {
    return (
      <>
      <object className="wave-bar" data={process.env.PUBLIC_URL + '/wave-bar-1.svg'} type=""/>
      <div id="skills" className="skills-section-container">
        <div className="p-grid skills-section-grid p-justify-center">
          <div className="p-col-12 p-md-4 p-lg-4 p-xl-4 horizontal-center">
            <Typography style={{'height': '64px'}} variant="h5" gutterBottom>BACK END</Typography>
            {this.getBackendLogos()} 
          </div>
          <div className="p-col-12 p-md-4 p-lg-4 p-xl-4 horizontal-center">
            <Typography style={{'height': '64px'}} variant="h5" gutterBottom>CI/CD AND CLOUD</Typography>
            {this.getCiCdCloudLogos()}
          </div>
          <div className="p-col-12 p-md-4 p-lg-4 p-xl-4 horizontal-center">
            <Typography style={{'height': '64px'}} variant="h5" gutterBottom>OTHER TOOLS</Typography>
            {this.getOtherLogos()}
          </div>
        </div>
      </div>
      </>
    );
  }

  getBackendLogos() {
    return this.getLogos(["java", "mongodb", "spring-framework", "golang", "apache-kafka", "maven", "sql-generic", "ibm-mq"])
  }

  getCiCdCloudLogos() {
    return this.getLogos(["jenkins", "jfrog-artifactory", "aws"])
  }

  getOtherLogos() {
    return this.getLogos(["git", "react"])
  }

  getLogos(logoNames) {
    let logos = []
    logoNames.forEach(logoName => {
      logos.push(
        <div className="p-col-6 p-sm-3 p-md-6 p-lg-6 p-xl-4 horizontal-center">
          <img className="skill-logo-sm" alt={logoName} src={process.env.PUBLIC_URL + '/logos/' + logoName + '.svg'} />
        </div>
      )
    })
    return <div className="p-grid p-justify-center">{logos}</div>
  }
}

export default SkillsSection