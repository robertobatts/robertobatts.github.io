import React from 'react'
import Button from './commons/Button'
import Typography from '@material-ui/core/Typography'
import './IntroSection.css'
import "primeflex/primeflex.css"

class IntroSection extends React.Component {
  render () {
    return (
      <div className="intro-section-container">
        <div className="p-grid">
          <div className="p-col">
          <Typography variant="h2">
            Roberto Battaglia
          </Typography>
          <Typography variant="h5" gutterBottom>
            BACKEND DEVELOPER
          </Typography>
          </div>
        </div>
        <div className="p-grid">
          <Button content={<Typography variant="button">Open Resume</Typography>} color={'#1da1f2'}></Button>
        </div>
      </div>
    )
  }
}

export default IntroSection