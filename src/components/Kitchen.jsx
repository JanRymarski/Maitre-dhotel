import React from 'react';
import KitchenDish from './KitchenDish.jsx';

function Kitchen({ orders, onDishComplete }) {
  const tableEntries = Object.entries(orders);

  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '2px solid #333' }}>
      <h2>Kitchen Orders</h2>
      {tableEntries.length === 0 && <p>No orders yet.</p>}
      {tableEntries.map(([tableId, orderData]) => (
        <div key={tableId} style={{ marginBottom: '15px' }}>
          <h3>{tableId}</h3>
          {orderData.length === 0 ? (
            <p>No dishes ordered.</p>
          ) : (
            <ul>
              {orderData.map((dish, index) => (
                <KitchenDish 
                  key={index} 
                  dish={dish} 
                  tableId={tableId} 
                  dishIndex={index}
                  onComplete={onDishComplete} 
                />
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Kitchen;
