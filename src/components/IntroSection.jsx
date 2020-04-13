import React from 'react'
import Button from './commons/Button'
import Typography from '@material-ui/core/Typography'
import './IntroSection.css'
import "primeflex/primeflex.css"

class IntroSection extends React.Component {
  render() {
    return (
      <div className="intro-section-container">
        <div className="vertical-center">
          <div className="p-grid p-justify-center p-align-center intro-content">
            <div className="p-col-12 p-md-10 p-lg-8 p-xl-7 horizontal-center">
              <Typography variant="h2">Roberto Battaglia</Typography>
              <Typography variant="h5" gutterBottom>BACKEND DEVELOPER</Typography>
            </div>
            <div className="p-col-12 p-md-8 p-lg-3 p-xl-3 horizontal-center">
              <Button content={<Typography variant="button">Open Resume</Typography>} color={'#1da1f2'} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IntroSection