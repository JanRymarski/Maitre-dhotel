import React, { useState } from 'react';
import TableTimer from './TableTimer';

function List() {
    const initialGerechten = [
        { id: 1, name: "Gerecht1", prijs: 10, count: 0 },
        { id: 2, name: "Gerecht2", prijs: 15, count: 0 },
        { id: 3, name: "Gerecht3", prijs: 20, count: 0 },
        { id: 4, name: "Gerecht4", prijs: 25, count: 0 },
        { id: 5, name: "Gerecht5", prijs: 30, count: 0 }
    ];

    const [gerechten, setGerechten] = useState(initialGerechten);

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


    const listItems = gerechten.map(gerecht => (
        <li key={gerecht.id}>
            {gerecht.name} : {gerecht.prijs}€ 
            <button onClick={() => addCount(gerecht.id)}>+</button>
            <button onClick={() => subtractCount(gerecht.id)}>-</button>
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
