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
      setName('');
      setTime('');
      setTable('');
    }
  };

  const handleCancel = (id) => {
    setReservations((prev) => prev.filter((reservation) => reservation.id !== id));
  };

  return (
    <div className="reservaties-lijst">
      <h2>Reserveringen</h2>
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
          <option value="">Kies een Tafel</option>
          <option value="1">Tafel 1</option>
          <option value="2">Tafel 2</option>
          <option value="3">Tafel 3</option>
          <option value="4">Tafel 4</option>
          <option value="5">Tafel 5</option>
          <option value="6">Tafel 6</option>
        </select>
        <button type="submit" className="reservation-button">Add Reservation</button>
      </form>

      <div>
        <h3>Reservaties Lijst ({reservations.length})</h3>
        {reservations.length === 0 && <p>No reservations yet.</p>}
        {reservations.map((r) => (
          <div className="reservation--list-item" key={r.id}>
            <p>
              <strong>Naam:</strong> {r.name}
            </p>
            <p>
              <strong>Tijd:</strong> {r.time}
            </p>
            <p>
              <strong>Tafel:</strong> {r.table}
            </p>
            <button onClick={() => handleCancel(r.id)} style={{ marginTop: '5px', backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reservations;
