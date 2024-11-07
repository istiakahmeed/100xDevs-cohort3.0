import { useRef, useState } from "react";

// Ugly code
// const StopWatch = () => {
//   const [time, setTime] = useState(0);
//   const [intervalId, setIntervalId] = useState(null); // Use state to store the interval ID

//   const startTimer = () => {
//     if (intervalId !== null) return; // Already running, do nothing

//     const newIntervalId = setInterval(() => {
//       setTime((prevTime) => prevTime + 1);
//     }, 1000);

//     // Store the interval ID in state (triggers re-render)
//     setIntervalId(newIntervalId);
//   };

//   const stopTimer = () => {
//     clearInterval(intervalId);

//     // Clear the interval ID in state (triggers re-render)
//     setIntervalId(null);
//   };

//   return (
//     <div>
//       <h1>Timer: {time}</h1>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//     </div>
//   );
// };
function StopWatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return; // Already running, do nothing

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <h1>Timer: {time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
export default StopWatch;
