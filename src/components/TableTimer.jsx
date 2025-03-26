import { useState, useEffect } from "react";

function TableTimer() {
  const [timer, setTimer] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 60); 
      }, 60000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);

  return (
    <div className="App">
      <h3>Timer: {hours}h {minutes}m</h3>
      {!isRunning && <button onClick={() => setIsRunning(true)}>Start</button>}
    </div>
  );
}

export default TableTimer;
