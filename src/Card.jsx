import { useState } from "react";
import List from "./List"; 

function Card(props) {
    const [isBezet, setIsBezet] = useState(props.isBezet);
    const [showList, setShowList] = useState(false); 

    const toggleBezet = () => {
        setIsBezet(!isBezet); 
    };

    const toggleList = () => {
        setShowList(!showList); 
    };

    return (
        <div className="card">
            <h2 className="card-title"> Tafel {props.number}</h2>
            <p className="card-text">Hier moet een menu komen</p>
            <p 
                className={`card-text ${isBezet ? "bezet" : "vrij"}`} 
                onClick={toggleBezet} 
                style={{ cursor: "pointer" }}
            >
                {isBezet ? "Bezet" : "Vrij"}
            </p>
            
            <button onClick={toggleList}>
                {showList ? "Verberg Lijst" : "Toon Lijst"}
            </button>
            {showList && <List />}
            
        </div>
    );
}

Card.defaultProps = {
    isBezet: false,
};

export default Card;
