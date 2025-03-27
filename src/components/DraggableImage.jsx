import React from 'react';
import { useDraggable } from '@dnd-kit/core';

function DraggableImage({ id, src }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    width: '80px',
    height: '80px',
    cursor: 'grab',
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
  };

  return (
    <img ref={setNodeRef} src={src} alt={id} style={style} {...listeners} {...attributes} />
  );
}

export default DraggableImage;
