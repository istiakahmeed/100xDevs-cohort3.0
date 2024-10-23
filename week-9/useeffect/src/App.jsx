import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts.

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;

// Before we understand `useEffect` , let’s understand what are `Side effects`.

// ## Side effects

// Side effects are operations that interact with the outside world or have effects beyond the component's rendering. Examples include:

// - **Fetching data** from an API.
// - **Modifying the DOM** manually.
// - **Subscribing to events** (like WebSocket connections, timers, or browser events).
// - **Starting a clock**

// These are called side effects because they don't just compute output based on the input—they affect things outside the component itself.
