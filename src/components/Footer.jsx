import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import './Footer.css'

const socialLinks = {
  "linkedin": "https://www.linkedin.com/in/robertobatts",
  "gitHub": "https://github.com/robertobatts",
  "stackoverflow": "https://stackoverflow.com/users/10342150/robertobatts",
  "gmail": "mailto:battaroberto@gmail.com?Subject=I want to hire you"
}

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="wave-footer-wrapper">
          <div className="wave-footer-inner">
            <img className="wave-footer" src={process.env.PUBLIC_URL + '/wavefooter.svg'} alt="wave-footer" />
          </div>
        </div>
        <div className="footer-container">
          <div className="horizontal-center">
            <Typography variant="h5">Contact me</Typography>
            {this.getSocialLogos()}
          </div>
        </div>
      </div>
    );
  }

  getSocialLogos() {
    let logos = []
    Object.keys(socialLinks).forEach(logoName => {
      logos.push(
        <a key={logoName} href={socialLinks[logoName]} target="_blank" rel="noopener noreferrer">
          <img className="social-logo-sm" alt={logoName} src={process.env.PUBLIC_URL + '/logos/' + logoName + '.svg'} />
        </a>
      )
    })
    return logos
  }

}

export default Footer