import React, { Component } from 'react'
import { Link } from "react-scroll"
import './ScrollDownArrow.css'

class ScrollDownArrow extends Component {
  render() {
    return (
      <div class="arrow-container">
        <Link
          activeClass="active"
          to={this.props.scrollto}
          smooth={true}
          duration={500}
          class="arrow-inner vertical-center">
          <div class="bounce">
            <div class="arrow down" />
          </div>
        </Link>
      </div>
    )
  }
}

export default ScrollDownArrow