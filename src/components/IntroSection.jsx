import React from 'react'
import Button from './commons/Button'
import Typography from '@material-ui/core/Typography'
import './IntroSection.css'

class IntroSection extends React.Component {
  render() {
    return (
      <div className="intro-section-container horizontal-center">
        <div className="intro-section-inner">
          <Typography variant="h2">Roberto Battaglia</Typography>
          <Typography variant="h5" gutterBottom>BACKEND DEVELOPER</Typography>
          <Button 
            content={<Typography variant="button">Open Resume</Typography>} color={'#1da1f2'}
            link={process.env.PUBLIC_URL + "/resume.pdf"} 
          />
        </div>
      </div>
    )
  }
}

export default IntroSection