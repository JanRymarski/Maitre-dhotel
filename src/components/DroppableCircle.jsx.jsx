import React from 'react';
import { useDroppable } from '@dnd-kit/core';

function DroppableCircle({ id, assignedImage, images }) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const imageSrc = images.find((img) => img.id === assignedImage)?.src;
  const style = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '2px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: isOver ? 'lightgray' : 'white',
    overflow: 'hidden',
  };

  return (
    <div ref={setNodeRef} style={style}>
      {imageSrc ? <img src={imageSrc} alt={assignedImage} style={{ width: '80px', height: '80px' }} /> : 'Drop here'}
    </div>
  );
}

export default DroppableCircle;
