import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Card from './Card.jsx';
import DraggableImage from './DraggableImage.jsx';

const images = [
  { id: 'img1', src: '/one.jpeg' },
  { id: 'img2', src: '/two.jpeg' },
  { id: 'img3', src: '/three.jpeg' },
  { id: 'img4', src: '/four.jpeg'},
  { id: 'img5', src: '/five.jpeg' },
];

function DragDrop() {
    const [assignments, setAssignments] = useState({}); 
  
    function handleDragEnd(event) {
      const { active, over } = event;
  
      if (over) {
        setAssignments((prev) => ({
          ...prev,
          [over.id]: images.find((img) => img.id === active.id)?.src,
        }));
      }
    }
  
    return (
      <DndContext onDragEnd={handleDragEnd}>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          {images
            .filter((img) => !Object.values(assignments).includes(img.src))
            .map((img) => (
              <DraggableImage key={img.id} id={img.id} src={img.src} />
            ))}
        </div>
  

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {[1, 2, 3].map((tableNumber) => (
            <Card
              key={tableNumber}
              number={tableNumber}
              isBezet={true}
              assignedImage={assignments[`table-${tableNumber}`]} 
            />
          ))}
        </div>
        
      </DndContext>
      
    );
  }
  
  export default DragDrop;