import React, { Component } from 'react';
import './style.css';

export default class index extends Component {
  render() {
    const { isRotate, title, icon, description } = this.props;

    return (
      <div className="banner-container">
        <h1 className="banner-title">{title}</h1>
        {icon != null  && <div className="banner-image-container">
          <img
            src={icon}
            className={`banner-logo ${isRotate ? 'rotate' : ''}`}
          />
          <img src="/assets/board.png" className="banner-board-image" />
        </div>
        }
        <span>{description}</span>
      </div>
    );
  }
}
