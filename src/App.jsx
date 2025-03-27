import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Card from './components/Card.jsx';
import DraggableImage from './components/DraggableImage.jsx';

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
    if (over) {
      setAssignments((prev) => ({
        ...prev,
        [over.id]: images.find((img) => img.id === active.id)?.src,
      }));
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {images
          .filter((img) => !Object.values(assignments).includes(img.src))
          .map((img) => (
            <DraggableImage key={img.id} id={img.id} src={img.src} />
          ))}
      </div>

     
      <div className='CardList'>
        <Card
          number={1}
          assignedImage={assignments['table-1']}
        />
        <Card
          number={2}
          assignedImage={assignments['table-2']}
        />
        <Card
          number={3}
          assignedImage={assignments['table-3']}
        />
        <Card
          number={4}
          assignedImage={assignments['table-4']}
        />
      </div>
    </DndContext>
  );
}

export default App;
