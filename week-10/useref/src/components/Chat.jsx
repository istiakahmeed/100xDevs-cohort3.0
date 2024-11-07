import { useEffect, useRef, useState } from "react";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const chatBoxRef = useRef(null);

  function handleChange(e) {
    e.preventDefault();
    setNewMessage(e.target.value);
  }

  // Function to add new message to messages list
  const addMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setNewMessage(""); // Clear the input after adding
    }
  };

  // Scroll to the bottom whenever a new message is added
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div>
      <div
        ref={chatBoxRef}
        style={{
          height: "200px",
          overflowY: "scroll",
          border: "1px solid black",
        }}>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Write your message"
        value={newMessage}
        onChange={handleChange}
      />
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
}

export default Chat;
