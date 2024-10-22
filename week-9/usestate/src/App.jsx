import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <ToggleMessage />
    </div>
  );
}

// the component isn't re-rendering
// because we haven't used a state variable

const ToggleMessage = () => {
  let [notificationCount, setNotificationCount] = useState(0);
  console.log("re-render");
  function increment() {
    setNotificationCount(notificationCount + 1);
  }
  return (
    <div>
      <button onClick={increment}>Increase count</button>
      {notificationCount}
    </div>
  );
};

export default App;
