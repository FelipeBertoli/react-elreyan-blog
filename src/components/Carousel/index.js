import React, { useState } from "react";
import "./style.css";
import CarouselItem from "./CarouselItem";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  const items = [
    {
      description: "Olá mundo 1",
      img: "",
    },
    {
      description: "Olá mundo 2",
      img: "",
    },
    {
      description: "Olá mundo 3",
      img: "",
    },
  ];

  return (
    <div className="carousel-container">
      <div
        className="carousel-inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} />;
        })}
      </div>
        <button
          className="button-arrow left"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
         <i class="fi fi-ss-angle-circle-left"></i>
        </button>
        <button
          className="button-arrow right"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
         <i class="fi fi-ss-angle-circle-right"></i>
        </button>

    </div>
  );
}
