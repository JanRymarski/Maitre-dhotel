import React, { useState, useEffect } from 'react';

function KitchenDish({ dish }) {
  const [singleDishTime] = useState(() => Math.floor(Math.random() * (30 - 12 + 1)) + 12);
  const [timeLeft, setTimeLeft] = useState(dish.count * singleDishTime);

  useEffect(() => {
    setTimeLeft(prevTime => prevTime + singleDishTime);
  }, [dish.count]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

   const backgroundColor = timeLeft > 20 ? 'red' : 'green';
   const textColor = 'white';

   return timeLeft > 0 ? (
    <li style={{ backgroundColor, color: textColor, padding: '5px', margin: '5px', borderRadius: '5px' }}>
      {dish.name} x {dish.count} – {minutes}:{seconds.toString().padStart(2, '0')} remaining
    </li>
  ) : null;
}

export default KitchenDish;
