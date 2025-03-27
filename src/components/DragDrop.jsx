import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';

import DroppableCircle from './DroppableCircle.jsx';
import DraggableImage from './DraggableImage.jsx';

const images = [
  { id: 'img1', src: '../public/one.jpeg' },
  { id: 'img2', src: '../public/two.jpeg' },
  { id: 'img3', src: '../public/three.jpeg' },
  { id: 'img4', src: '../public/four.jpeg'},
  { id: 'img5', src: '../public/five.jpeg' },
];

const circles = ['circle1', 'circle2', 'circle3', 'circle4', 'circle5'];

function DragDrop() {
  const [assignments, setAssignments] = useState({}); // Stores which image is in which circle

  function handleDragEnd(event) {
    const { active, over } = event;
    if (over) {
      setAssignments((prev) => ({
        ...prev,
        [over.id]: active.id,
      }));
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {images.map((img) => (
          <DraggableImage key={img.id} id={img.id} src={img.src} />
        ))}
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        {circles.map((id) => (
          <DroppableCircle key={id} id={id} assignedImage={assignments[id]} images={images} />
        ))}
      </div>
    </DndContext>
  );
}

export default DragDrop;
