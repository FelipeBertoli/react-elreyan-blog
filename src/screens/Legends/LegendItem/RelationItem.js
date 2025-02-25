import React, { Component } from 'react';
import './style.css'

export default class Relationitem extends Component {
  render() {
    return (
        <a className="lendas-relation" href='/lendas/a'>
          <img src="/assets/image-background.jpg" alt="" />
        <span>{this.props.label}</span>
      </a>
    )
  }
}
