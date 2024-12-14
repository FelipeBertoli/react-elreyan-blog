import React, { Component } from 'react';
import './style.css';

export default class SectionTitle extends Component {
  render() {
    return (
        <div className='section-title'>
            <h2>{this.props.label}</h2>
            <div className="line"></div>
        </div>
    )
  }
}
