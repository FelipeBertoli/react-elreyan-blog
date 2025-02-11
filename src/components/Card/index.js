import React, { Component } from 'react';
import "./style.css"

export default class Card extends Component {
  render() {
    return (
      <a href={this.props.link} className='card-container'>
            <img src={this.props.source} alt="" className="card-image" />
            <span className='card-title'>{this.props.label}</span>
            <span className="card-description">{this.props.description}</span>
      </a>
    )
  }
}

