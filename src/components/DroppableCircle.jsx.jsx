import React from "react";
import { useDroppable } from "@dnd-kit/core";

function DroppableCircle({ id, assignedImage }) {
  const { isOver, setNodeRef } = useDroppable({ id });

  const style = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "2px solid black",
    background: isOver ? "lightgray" : "white",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {assignedImage ? (
        <img src={assignedImage} alt="Dropped" style={{ width: "80px", height: "80px" }} />
      ) : (
        "Kelner foto"
      )}
    </div>
  );
}

export default DroppableCircle;
