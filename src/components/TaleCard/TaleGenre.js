import React, { Component } from 'react';
import "./style.css"

export default class TaleGenre extends Component {
  render() {
    return (
      <div className='genre-container'>
        <span>{this.props.label}</span>
      </div>
    )
  }
}
