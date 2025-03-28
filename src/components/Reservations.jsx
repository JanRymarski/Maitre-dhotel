import React, { useState } from 'react';

function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [table, setTable] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && time && table) {
      const newReservation = {
        id: Date.now(), 
        name,
        time,
        table,
      };
      setReservations((prev) => [...prev, newReservation]);
      // Clear form fields
      setName('');
      setTime('');
      setTable('');
    }
  };

  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h2>Reservations</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Naam"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginRight: '10px' }}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          style={{ marginRight: '10px' }}
        />
        <select
          value={table}
          onChange={(e) => setTable(e.target.value)}
          required
          style={{ marginRight: '10px' }}
        >
          <option value="">Select Table</option>
          <option value="1">Table 1</option>
          <option value="2">Table 2</option>
          <option value="3">Table 3</option>
          <option value="4">Table 4</option>
        </select>
        <button type="submit">Add Reservation</button>
      </form>

      <div>
        <h3>Reservation List ({reservations.length})</h3>
        {reservations.length === 0 && <p>No reservations yet.</p>}
        {reservations.map((r) => (
          <div
            key={r.id}
            style={{
              border: '1px solid #ddd',
              padding: '8px',
              marginBottom: '8px',
            }}
          >
            <p>
              <strong>Name:</strong> {r.name}
            </p>
            <p>
              <strong>Time:</strong> {r.time}
            </p>
            <p>
              <strong>Table:</strong> {r.table}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reservations;
