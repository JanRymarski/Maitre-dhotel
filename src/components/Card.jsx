import { useState } from "react";
import List from "./List.jsx";
import DroppableCircle from "./DroppableCircle.jsx";

function Card({ number, isBezet: defaultBezet, assignedImage }) {
  const [isBezet, setIsBezet] = useState(defaultBezet);

  const toggleBezet = () => {
    setIsBezet(!isBezet);
  };

  return (
    <div className="card">
      <h2 className="card-title">Tafel {number}</h2>
      <p className="card-text">Hier moet een menu komen</p>
      <p
        className={`card-text ${isBezet ? "bezet" : "vrij"}`}
        onClick={toggleBezet}
        style={{ cursor: "pointer" }}
      >
        {isBezet ? "Bezet" : "Vrij"}
      </p>

      {isBezet && (
        <>
          <List />
          <DroppableCircle
            id={`table-${number}`}
            assignedImage={assignedImage}
          />
        </>
      )}
    </div>
  );
}

Card.defaultProps = {
  isBezet: false,
};

export default Card;
