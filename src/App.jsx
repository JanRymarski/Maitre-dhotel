import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Card from './components/Card.jsx';
import DraggableImage from './components/DraggableImage.jsx';
import Reservations from './components/Reservations.jsx';
import Kitchen from './components/Kitchen.jsx';

const images = [
  { id: 'img1', src: 'one.jpeg' },
  { id: 'img2', src: 'two.jpeg' },
  { id: 'img3', src: 'three.jpeg' },
  { id: 'img4', src: 'four.jpeg' },
  { id: 'img5', src: 'five.jpeg' },
];

function App() {
  const [assignments, setAssignments] = useState({});
  const [kitchenOrders, setKitchenOrders] = useState({}); 

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

  function updateOrder(tableId, orderData) {
    setKitchenOrders((prev) => ({
      ...prev,
      [tableId]: orderData,
    }));
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
       <h2>Staff on duty</h2> 
      <div className="container">
        <div className="draggable-images">
          {images.map((img) => (
            <DraggableImage key={img.id} id={img.id} src={img.src} />
          ))}
        </div>

        <div className="cards">
          {[1, 2, 3, 4, 5, 6].map((tableNumber) => (
            <Card
              key={tableNumber}
              number={tableNumber}
              assignedImage={assignments[`table-${tableNumber}`] || null}
              clearAssignment={clearAssignment}
              updateOrder={(orderData) => updateOrder(`table-${tableNumber}`, orderData)}
            />
          ))}
        </div>

        <div className="bottom-section">
          <div className="reservations">
            <Reservations />
          </div>
          <div className="kitchen">
            <Kitchen orders={kitchenOrders} />
          </div>
        </div>
      </div>
    </DndContext>
  );
}

export default App;
