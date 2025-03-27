import { useState } from "react";
import List from "./List.jsx";
import DroppableCircle from "./DroppableCircle.jsx";

function Card({ number, assignedImage, clearAssignment, reservation, addReservation, removeReservation }) {
  const [isBezet, setIsBezet] = useState(false);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const toggleBezet = () => {
    if (isBezet) {
      clearAssignment(`table-${number}`);
      removeReservation(`table-${number}`);
    }
    setIsBezet(!isBezet);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && time) {
      addReservation(`table-${number}`, name, time);
      setName("");
      setTime("");
    }
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
          <DroppableCircle id={`table-${number}`} assignedImage={assignedImage} />

          {!reservation ? (
            <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
              <input
                type="text"
                placeholder="Naam"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ marginRight: "5px" }}
              />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                style={{ marginRight: "5px" }}
              />
              <button type="submit">Reserveer</button>
            </form>
          ) : (
            <div>
              <p><strong>Gereserveerd door:</strong> {reservation.name}</p>
              <p><strong>Tijd:</strong> {reservation.time}</p>
              <button onClick={() => removeReservation(`table-${number}`)}>Annuleer</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Card;
