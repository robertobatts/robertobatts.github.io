import React from 'react'
import Button from './commons/Button'
import Typography from '@material-ui/core/Typography'
import './IntroSection.css'
import "primeflex/primeflex.css"

class IntroSection extends React.Component {
  render () {
    return (
      <div className="intro-section-container vertical-center">
        <div className="p-grid p-justify-center p-align-center">
          <div className="p-col-12 p-md-8 p-lg-6 p-xl-5 horizontal-center">
          <Typography variant="h2">Roberto Battaglia</Typography>
          <Typography variant="h5" gutterBottom>BACKEND DEVELOPER</Typography>
          </div>
          <div className="p-col-12 p-md-8 p-lg-3 p-xl-2 horizontal-center">
            <Button content={<Typography variant="button">Open Resume</Typography>} color={'#1da1f2'}/>
          </div>
        </div>
      </div>
    )
  }
}

export default IntroSection