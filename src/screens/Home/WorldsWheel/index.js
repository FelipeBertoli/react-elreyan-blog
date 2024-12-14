import React from "react";
import "./style.css";

export default function RotatingCircle() {
  const items = [
    { href: "elreyan", image: "/assets/elreyan-logo.png" },
    { href: "#", image: "/assets/world.png" },
    { href: "#", image: "/assets/world.png" },
    { href: "#", image: "/assets/world.png" },
  ];

  return (
    <div className="circle">
      <div className="circle">
        {items.map((item, index) => (
          <a
            href={item.href}
            className="circle-anchor"
            key={index}
            style={{
              transform: `rotate(${
                index * (360 / items.length)
              }deg) translate(100px) rotate(-${
                index * (360 / items.length)
              }deg)`,
            }}
          >
            <img src={item.image} className="circle-image" />
          </a>
        ))}
      </div>
    </div>
  );
}
