import React from 'react'
import './Button.css';

class Button extends React.Component {
  render() {
    return (
      <a
        href={this.props.link} target="_blank" rel="noopener noreferrer"
        className="button flat-shadow-in-out" 
        style={{'backgroundColor': this.props.color}}>
         {this.props.content}
      </a>
    );
  }
}

export default Button