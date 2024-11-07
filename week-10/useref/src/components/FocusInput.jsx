import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
      />
      {/* <button onClick={() => document.querySelector("input").focus()}>
        Focus Me
      </button>  thats one way to focus input without useref*/}
      <button onClick={handleFocus}>Focus me </button>
    </div>
  );
};

export default FocusInput;
