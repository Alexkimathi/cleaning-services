import React from "react";
import "./team.css"

function Team(props) {
  return (
    <div className="card-contents">
      <div key={props.id} className="cardsss">
        <img src={props.image} alt="hello" />
        <h3>{props.name}</h3>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default Team;
