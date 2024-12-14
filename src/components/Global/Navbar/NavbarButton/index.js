import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

export default function NavbarButton({ label, route }) {
  const location = useLocation();
  const isActive = location.pathname === route;

  return (
    <Link
      to={route}
      className={`navbar-button-container ${isActive ? "active" : ""}`}
    >
      {label}
    </Link>
  );
}
