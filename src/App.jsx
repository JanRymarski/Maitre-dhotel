import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Card from './components/Card.jsx';
import DraggableImage from './components/DraggableImage.jsx';
import Reservations from './components/Reservations.jsx';

const images = [
  { id: 'img1', src: '/one.jpeg' },
  { id: 'img2', src: '/two.jpeg' },
  { id: 'img3', src: '/three.jpeg' },
  { id: 'img4', src: '/four.jpeg' },
  { id: 'img5', src: '/five.jpeg' },
];

function App() {
  const [assignments, setAssignments] = useState({}); 

  function handleDragEnd(event) {
    const { active, over } = event;

    if (over && over.id.startsWith('table-')) {
      setAssignments((prev) => ({
        ...prev,
        [over.id]: images.find((img) => img.id === active.id)?.src,
      }));
    }
  }

  function clearAssignment(tableId) {
    setAssignments((prev) => {
      const updated = { ...prev };
      delete updated[tableId];
      return updated;
    });
  }


  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {images.map((img) => (
          <DraggableImage key={img.id} id={img.id} src={img.src} />
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {[1, 2, 3, 4].map((tableNumber) => (
          <Card
            key={tableNumber}
            number={tableNumber}
            assignedImage={assignments[`table-${tableNumber}`] || null}
            clearAssignment={clearAssignment}
          />
        ))}
      </div>
      <Reservations />
    </DndContext>
  );
}

export default App;
