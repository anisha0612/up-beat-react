import React from "react";
import Card from "../Card/Card.jsx";
import "./CardList.css";

const CardList = ({ genre }) => {
  //   console.log(genre);
  return (
    <div className="CardList">
      {genre.map(({ id, ...otherItems }) => (
        <Card key={id} {...otherItems} />
      ))}
    </div>
  );
};

export default CardList;
