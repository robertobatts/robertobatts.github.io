import React from 'react'
import './TopBar.css'

class TopBar extends React.Component {
  render() {
    return (
      <div className="topbar-container vertical-center">
        <div className="p-grid topbar-grid">
          <div className="p-col-fixed">
            <a href="#home">Home</a>
          </div>
          <div className="p-col-fixed">
            <a href="#about">About me</a>
          </div>
          <div className="p-col-fixed">
            <a href="#projects">Projects</a>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar