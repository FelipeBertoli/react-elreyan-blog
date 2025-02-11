import React, { Component } from 'react';
import "./style.css"

export default function CarouselItem({ item }) {

    return (
      <div className="carousel-item-container">
        <div>{item.description}</div>
        <img src={item.image} alt="" />
      </div>
    )

}
