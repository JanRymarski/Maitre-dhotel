import { useState } from "react";
import List from "./List"; 

function Card(props) {
    const [isBezet, setIsBezet] = useState(props.isBezet);

    const toggleBezet = () => {
        setIsBezet(!isBezet); 
    };

    return (
        <div className="card">
            <h2 className="card-title">Tafel {props.number}</h2>
            <p className="card-text">Hier moet een menu komen</p>
            <p 
                className={`card-text ${isBezet ? "bezet" : "vrij"}`} 
                onClick={toggleBezet} 
                style={{ cursor: "pointer" }}
            >
                {isBezet ? "Bezet" : "Vrij"}
            </p>
            
            {isBezet && <List />}
        </div>
    );
}

Card.defaultProps = {
    isBezet: false,
};

export default Card;
