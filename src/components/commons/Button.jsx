import React from 'react'
import './Button.css';

class Button extends React.Component {
  render() {
    return (
      <div className="button flat-shadow-in" style={{'background-color': this.props.color}}>
         {this.props.content}
      </div>
    );
  }
}

export default Button