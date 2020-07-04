import React from 'react'
import Typography from '@material-ui/core/Typography'
import './SkillsSection.css'

class SkillsSection extends React.Component {
  render() {
    return (
      <>
        <div id="skills" className="wave-bar-wrapper">
          <div className="wave-bar-inner">
            <img className="wave-bar" src={process.env.PUBLIC_URL + '/wavebar-1.svg'} alt="wave-bar-1" />
          </div>
        </div>
        <div className="skills-section-container">
          <div className="p-grid skills-section-grid p-justify-center">
            <div className="p-col-12 p-md-4 p-lg-4 p-xl-4 horizontal-center">
              <Typography style={{ 'height': '64px' }} variant="h5" gutterBottom>BACK END</Typography>
              {this.getBackendLogos()}
            </div>
            <div className="p-col-12 p-md-4 p-lg-4 p-xl-4 horizontal-center">
              <Typography style={{ 'height': '64px' }} variant="h5" gutterBottom>CI/CD AND CLOUD</Typography>
              {this.getCiCdCloudLogos()}
            </div>
            <div className="p-col-12 p-md-4 p-lg-4 p-xl-4 horizontal-center">
              <Typography style={{ 'height': '64px' }} variant="h5" gutterBottom>OTHER TOOLS</Typography>
              {this.getOtherLogos()}
            </div>
          </div>
        </div>
        <div className="wave-bar-wrapper">
          <div className="wave-bar-inner">
            <img className="wave-bar" src={process.env.PUBLIC_URL + '/wavebar-2.svg'} alt="wave-bar-2" />
          </div>
        </div>
      </>
    );
  }

  getBackendLogos() {
    return this.getLogos(["java", "mongodb", "spring-framework", "golang", "apache-kafka", "maven", "sql-generic", "ibm-mq"])
  }

  getCiCdCloudLogos() {
    return this.getLogos(["jenkins", "jfrog-artifactory", "aws", "aws-ec2", "aws-lambda"])
  }

  getOtherLogos() {
    return this.getLogos(["git", "react", "bash", "intellij", "vs-code"])
  }

  getLogos(logoNames) {
    let logos = []
    logoNames.forEach(logoName => {
      logos.push(
        <div key={logoName} className="p-col-6 p-sm-3 p-md-6 p-lg-6 p-xl-4 horizontal-center">
          <img className="skill-logo-sm" alt={logoName} src={process.env.PUBLIC_URL + '/logos/' + logoName + '.svg'} />
        </div>
      )
    })
    return <div className="p-grid p-justify-center">{logos}</div>
  }
}

export default SkillsSection