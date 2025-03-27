import React from "react";
import { useDroppable } from "@dnd-kit/core";

function DroppableCircle({ id, assignedImage }) {
  const { isOver, setNodeRef } = useDroppable({ id });

  const style = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "2px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: isOver ? "lightgray" : "white",
    overflow: "hidden",
    marginTop: "10px",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {assignedImage ? (
        <img
          src={assignedImage}
          alt="Dropped"
          style={{ width: "70px", height: "70px" }}
        />
      ) : (
        "Drop here"
      )}
    </div>
  );
}

export default DroppableCircle;
