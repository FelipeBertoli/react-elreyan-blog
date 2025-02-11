import React, { Component } from "react";
import TaleGenre from "./TaleGenre";
import "./style.css";

export default class index extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="tale-card-container">
        <div className="tale-card-hover"><span>{data.description}</span></div>
        <img src={data.image} alt="" className="tale-card-image" />
        <div className="tale-card-content">
          <h3>{data.title}</h3>
          <div className="genre-group">
            {data.genres.map((genre) => {
              return <TaleGenre label={genre.name} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
