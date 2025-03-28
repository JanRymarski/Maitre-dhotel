import { useState } from "react";
import List from "./List.jsx";
import DroppableCircle from "./DroppableCircle.jsx";

function Card({ number, isBezet: defaultBezet = false, assignedImage, clearAssignment, updateOrder }) {
  const [isBezet, setIsBezet] = useState(defaultBezet);

  const toggleBezet = () => {
    if (isBezet) {
      clearAssignment(`table-${number}`);
      updateOrder([]);
    }
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
          <List onOrderChange={updateOrder} />
          <DroppableCircle id={`table-${number}`} assignedImage={assignedImage} />
        </>
      )}
    </div>
  );
}

export default Card;
