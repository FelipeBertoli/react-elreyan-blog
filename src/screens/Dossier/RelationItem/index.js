import React, { Component } from 'react';
import './style.css'

export default class index extends Component {
  render() {
    return (
        <a className="dossier-relation">
        <img src="/assets/image-background.jpg" alt="" />
        <span>{this.props.label}</span>
      </a>
    )
  }
}
