import React from "react";
import { Link } from "react-router-dom";
import PlayerPage from "../../pages/PlayerPage/PlayerPage.jsx";
import "./Card.css";

const Card = (props) => {
  //   console.log(props);
  return (
    <Link
      to={{
        pathname: `/playlist/:${props.title}`,
        state: {
          trackList: props.tracklist,
        },
      }}
    >
      <div className="card">
        <img src={props.picture_medium} alt="genre-name" />
        <div className="container">
          <h4>
            <b>{props.title}</b>
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default Card;
