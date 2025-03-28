import React, { useState, useEffect, useRef } from 'react';
import TableTimer from './TableTimer';

function List({ onOrderChange }) {
  const initialGerechten = [
    { id: 1, name: "Burger", prijs: 10, count: 0 },
    { id: 2, name: "Pizza", prijs: 15, count: 0 },
    { id: 3, name: "Pita", prijs: 20, count: 0 },
    { id: 4, name: "Spaghetti", prijs: 25, count: 0 },
    { id: 5, name: "Steak", prijs: 30, count: 0 }
  ];

  const [gerechten, setGerechten] = useState(initialGerechten);
  const prevOrdersRef = useRef([]);

  const addCount = (id) => {
    setGerechten(gerechten.map(gerecht => 
      gerecht.id === id ? { ...gerecht, count: gerecht.count + 1 } : gerecht
    ));
  };

  const subtractCount = (id) => {
    setGerechten(gerechten.map(gerecht => 
      gerecht.id === id && gerecht.count > 0 ? { ...gerecht, count: gerecht.count - 1 } : gerecht
    ));
  };

  const totaalPrijs = gerechten.reduce((sum, gerecht) => sum + (gerecht.prijs * gerecht.count), 0);

  useEffect(() => {
    const newOrders = gerechten
      .filter(g => g.count > 0)
      .map(g => ({ name: g.name, count: g.count }));
    

    if (JSON.stringify(prevOrdersRef.current) !== JSON.stringify(newOrders)) {
      prevOrdersRef.current = newOrders;
      if (onOrderChange) {
        onOrderChange(newOrders);
      }
    }
  }, [gerechten, onOrderChange]);

  const listItems = gerechten.map(gerecht => (
    <li key={gerecht.id}>
      {gerecht.name} : {gerecht.prijs}€ 
        <button className="counter-button" onClick={() => addCount(gerecht.id)}>+</button>
        <button className="counter-button minus" onClick={() => subtractCount(gerecht.id)}>-</button>

      <span> Aantal: {gerecht.count} </span>
    </li>
  ));

  return (
    <> 
      <ul>{listItems}</ul>
      <h3>Totaalprijs: {totaalPrijs}€</h3>
      <TableTimer />
    </>
  );
}

List.defaultProps = {
  count: 0,
};

export default List;
