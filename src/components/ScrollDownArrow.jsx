import React, { Component } from 'react'
import './ScrollDownArrow.css'

class ScrollDownArrow extends Component {
  render() {
    return (
      <div class="arrow-container">
        <a class="arrow-inner vertical-center" href={this.props.goto}>
          <div class="bounce">
            <div class="arrow down"/>
          </div>
        </a>
      </div>
    )
  }
}

export default ScrollDownArrow